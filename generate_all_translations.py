#!/usr/bin/env python3
"""
Complete Translation Generator for FableFlow Stories 5-13
Generates culturally-appropriate, non-cringe translations for all languages.
"""

import json
import os
import time
import hashlib
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, asdict
from pathlib import Path

# Try to import openai
try:
    from openai import OpenAI
    HAS_OPENAI = True
except ImportError:
    HAS_OPENAI = False
    print("OpenAI not installed. Install with: pip install openai")

@dataclass
class TranslationContext:
    """Context for translation to ensure consistency"""
    story_genre: str
    story_tone: str
    cultural_notes: str
    formality_level: str  # formal, casual, dramatic
    
# Language configurations with cultural context
LANGUAGE_CONFIGS = {
    'ru': {
        'name': 'Russian',
        'formality': 'dramatic',
        'style_notes': 'Use rich, evocative language. Sci-fi/horror terms: космическая станция, инопланетное существо, заражение. Avoid overly modern slang.',
        'cultural_context': 'Russian sci-fi tradition (Strugatsky, Tarkovsky) - philosophical, dark, atmospheric'
    },
    'zh': {
        'name': 'Chinese (Simplified)',
        'formality': 'dramatic',
        'style_notes': 'Use cinematic, atmospheric language. Avoid overly formal classical Chinese. Use modern sci-fi terminology: 空间站, 外星生物, 感染.',
        'cultural_context': 'Chinese sci-fi tradition (Liu Cixin) - cosmic horror, fate, sacrifice'
    },
    'es': {
        'name': 'Spanish',
        'formality': 'dramatic',
        'style_notes': 'Use Iberian Spanish for dramatic effect. Rich vocabulary: pesadilla, entidad, vacío espacial. Avoid Latin American slang.',
        'cultural_context': 'Spanish gothic tradition - poetic, dark, fatalistic'
    },
    'de': {
        'name': 'German',
        'formality': 'dramatic',
        'style_notes': 'Use compound words for sci-fi concepts. Precise, clinical when describing horror. Reference German expressionist horror.',
        'cultural_context': 'German expressionist tradition - clinical precision meets cosmic horror'
    },
    'fr': {
        'name': 'French',
        'formality': 'dramatic',
        'style_notes': 'Elegant, philosophical horror. Use literary French. Reference French existential horror.',
        'cultural_context': 'French existential horror - philosophical dread, cosmic insignificance'
    },
    'pt': {
        'name': 'Portuguese',
        'formality': 'dramatic',
        'style_notes': 'European Portuguese preferred for dramatic tone. Rich, melancholic expressions.',
        'cultural_context': 'Portuguese saudade - melancholic, fateful'
    },
    'ja': {
        'name': 'Japanese',
        'formality': 'dramatic',
        'style_notes': 'Use atmospheric, visual language. Honorifics not needed. Cinematic style. Reference Japanese horror (cosmic dread).',
        'cultural_context': 'Japanese cosmic horror (Lovecraftian influence) - visual, atmospheric, inevitable doom'
    },
    'ko': {
        'name': 'Korean',
        'formality': 'dramatic',
        'style_notes': 'Modern, cinematic Korean. Rich emotional expressions. Use sci-fi terminology naturally.',
        'cultural_context': 'Korean thriller tradition - tension, paranoia, social isolation'
    },
    'uk': {
        'name': 'Ukrainian',
        'formality': 'dramatic',
        'style_notes': 'Rich, literary Ukrainian. Similar to Russian but distinct. Use Ukrainian sci-fi terminology.',
        'cultural_context': 'Ukrainian philosophical sci-fi - existential dread, cosmic horror'
    },
    'it': {
        'name': 'Italian',
        'formality': 'dramatic',
        'style_notes': 'Operatic, dramatic tone. Rich emotional expressions. Reference Italian giallo for horror.',
        'cultural_context': 'Italian operatic tradition - dramatic, emotional, visual'
    },
    'ar': {
        'name': 'Arabic',
        'formality': 'dramatic',
        'style_notes': 'Modern Standard Arabic with dramatic flair. Rich vocabulary for cosmic concepts. Right-to-left text.',
        'cultural_context': 'Arabic storytelling tradition - poetic, rhythmic, fatalistic'
    },
    'hi': {
        'name': 'Hindi',
        'formality': 'dramatic',
        'style_notes': 'Modern Hindi with dramatic expressions. Use Sanskrit-derived terms for cosmic/horror concepts.',
        'cultural_context': 'Indian philosophical tradition - karma, cosmic cycles, inevitable fate'
    },
    'nl': {
        'name': 'Dutch',
        'formality': 'dramatic',
        'style_notes': 'Precise, atmospheric Dutch. Understated horror (show don\'t tell).',
        'cultural_context': 'Dutch minimalist tradition - understated, precise, atmospheric'
    },
    'pl': {
        'name': 'Polish',
        'formality': 'dramatic',
        'style_notes': 'Rich, complex Polish. Reference Lem and Polish sci-fi tradition. Philosophical undertones.',
        'cultural_context': 'Polish sci-fi (Lem) - philosophical, dark, cosmic horror'
    },
    'tr': {
        'name': 'Turkish',
        'formality': 'dramatic',
        'style_notes': 'Modern Turkish with dramatic flair. Rich agglutinative expressions.',
        'cultural_context': 'Turkish storytelling - epic, fatalistic, atmospheric'
    }
}

class TranslationGenerator:
    def __init__(self, api_key: Optional[str] = None):
        self.client = None
        if HAS_OPENAI and api_key:
            self.client = OpenAI(api_key=api_key)
        
        self.cache_dir = Path('translation_cache')
        self.cache_dir.mkdir(exist_ok=True)
        
        self.progress_file = Path('translation_progress.json')
        self.progress = self.load_progress()
    
    def load_progress(self) -> Dict:
        """Load translation progress"""
        if self.progress_file.exists():
            with open(self.progress_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {'completed': {}, 'failed': []}
    
    def save_progress(self):
        """Save translation progress"""
        with open(self.progress_file, 'w', encoding='utf-8') as f:
            json.dump(self.progress, f, indent=2, ensure_ascii=False)
    
    def get_cache_key(self, text: str, lang: str, context: str) -> str:
        """Generate cache key for translation"""
        content = f"{text}:{lang}:{context}"
        return hashlib.md5(content.encode()).hexdigest()
    
    def get_cached_translation(self, cache_key: str) -> Optional[str]:
        """Get cached translation if exists"""
        cache_file = self.cache_dir / f"{cache_key}.txt"
        if cache_file.exists():
            return cache_file.read_text(encoding='utf-8')
        return None
    
    def cache_translation(self, cache_key: str, translation: str):
        """Cache translation"""
        cache_file = self.cache_dir / f"{cache_key}.txt"
        cache_file.write_text(translation, encoding='utf-8')
    
    def translate_text(self, text: str, lang_code: str, context: str, 
                       story_context: Dict) -> str:
        """Translate a single text with cultural awareness"""
        
        # Check cache
        cache_key = self.get_cache_key(text, lang_code, context)
        cached = self.get_cached_translation(cache_key)
        if cached:
            return cached
        
        if not self.client:
            return text  # Fallback to original if no API
        
        lang_config = LANGUAGE_CONFIGS.get(lang_code, {})
        lang_name = lang_config.get('name', lang_code)
        style_notes = lang_config.get('style_notes', '')
        cultural_context = lang_config.get('cultural_context', '')
        
        # Build context-aware prompt
        prompt = f"""Translate this {story_context.get('genre', 'sci-fi/horror')} interactive story text to {lang_name}.

CULTURAL CONTEXT:
{cultural_context}

STYLE GUIDE:
{style_notes}

TRANSLATION REQUIREMENTS:
1. Maintain dramatic, atmospheric tone suitable for horror/sci-fi
2. Use natural, culturally-appropriate expressions (NOT literal translation)
3. Keep it concise for mobile display
4. Use genre-appropriate terminology
5. Avoid "cringe" - make it sound like authentic native content
6. Preserve emotional impact and urgency

STORY CONTEXT:
- Story: {story_context.get('title', 'Unknown')}
- Element type: {context} (title/description/narration/choice)
- Tone: {story_context.get('tone', 'dark, suspenseful')}

TEXT TO TRANSLATE:
"{text}"

Provide ONLY the translation, nothing else:"""
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are an expert literary translator specializing in interactive fiction and horror/sci-fi genres. You create culturally-authentic, non-literal translations that feel native to the target language."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.4,
                max_tokens=500
            )
            
            translation = response.choices[0].message.content.strip()
            
            # Clean up quotes if present
            if translation.startswith('"') and translation.endswith('"'):
                translation = translation[1:-1]
            
            # Cache the result
            self.cache_translation(cache_key, translation)
            
            # Rate limiting
            time.sleep(0.3)
            
            return translation
            
        except Exception as e:
            print(f"    Error translating: {e}")
            return text
    
    def translate_story(self, story: Dict, lang_code: str) -> Dict:
        """Translate an entire story"""
        print(f"  Translating to {LANGUAGE_CONFIGS[lang_code]['name']}...")
        
        story_context = {
            'title': story['title'],
            'genre': self.detect_genre(story['title']),
            'tone': self.detect_tone(story)
        }
        
        translated = {
            'title': self.translate_text(story['title'], lang_code, 'title', story_context),
            'description': self.translate_text(story['description'], lang_code, 'description', story_context),
            'author': story['author'],  # Keep author names
            'nodes': []
        }
        
        for i, node in enumerate(story['nodes']):
            print(f"    Node {i+1}/{len(story['nodes'])}...", end='\r')
            
            translated_node = {
                'title': self.translate_text(node['title'], lang_code, 'node_title', story_context),
                'narration': self.translate_text(node['narration'], lang_code, 'narration', story_context),
                'choices': []
            }
            
            for choice in node['choices']:
                translated_choice = self.translate_text(choice, lang_code, 'choice', story_context)
                translated_node['choices'].append(translated_choice)
            
            translated['nodes'].append(translated_node)
        
        print()  # New line after progress
        return translated
    
    def detect_genre(self, title: str) -> str:
        """Detect story genre from title"""
        title_lower = title.lower()
        if any(word in title_lower for word in ['space', 'station', 'omega', 'alien', 'mars']):
            return 'sci-fi horror'
        elif any(word in title_lower for word in ['crown', 'throne', 'king', 'court', 'pharaoh']):
            return 'historical/political intrigue'
        elif any(word in title_lower for word in ['shadow', 'detective', 'noir', 'city']):
            return 'noir detective'
        elif any(word in title_lower for word in ['wild', 'survival', 'mountain', 'forest']):
            return 'survival'
        elif any(word in title_lower for word in ['digital', 'heist', 'cyber', 'hack']):
            return 'cyberpunk'
        elif any(word in title_lower for word in ['dead', 'zombie', 'rising', 'apocalypse']):
            return 'zombie apocalypse'
        elif any(word in title_lower for word in ['manor', 'house', 'ghost', 'haunted']):
            return 'gothic horror'
        elif any(word in title_lower for word in ['fall', 'post-apocalyptic', 'wasteland']):
            return 'post-apocalyptic'
        return 'horror/sci-fi'
    
    def detect_tone(self, story: Dict) -> str:
        """Detect story tone"""
        desc = story.get('description', '').lower()
        if any(word in desc for word in ['survive', 'survival', 'death', 'kill']):
            return 'grim, survival-focused'
        elif any(word in desc for word in ['mystery', 'secret', 'discover']):
            return 'mysterious, investigative'
        elif any(word in desc for word in ['horror', 'terror', 'fear']):
            return 'horror, atmospheric'
        return 'dark, suspenseful'
    
    def generate_typescript(self, story_id: str, translations: Dict[str, Dict]) -> str:
        """Generate TypeScript code"""
        lines = []
        
        for lang_code, trans in translations.items():
            lines.append(f"    {lang_code}: {{")
            lines.append(f"      title: '{self.escape_ts(trans['title'])}', description: '{self.escape_ts(trans['description'])}', author: '{self.escape_ts(trans['author'])}',")
            lines.append("      nodes: {")
            
            for i, node in enumerate(trans['nodes']):
                node_id = f"{story_id}-{i+1}"
                
                # Build choices
                choices_str_parts = []
                for j, choice in enumerate(node['choices']):
                    choice_id = f"{story_id}-c{(i*2)+j+1}"
                    choices_str_parts.append(f"'{choice_id}': {{ text: '{self.escape_ts(choice)}' }}")
                
                choices_str = ", ".join(choices_str_parts) if choices_str_parts else ""
                
                lines.append(f"        '{node_id}': {{ title: '{self.escape_ts(node['title'])}', narration: '{self.escape_ts(node['narration'])}', choices: {{ {choices_str} }} }},")
            
            lines.append("      },")
            lines.append("    },")
        
        return "\n".join(lines)
    
    def escape_ts(self, s: str) -> str:
        """Escape string for TypeScript"""
        return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ")
    
    def run(self, stories_file: str):
        """Run complete translation process"""
        
        # Load stories
        with open(stories_file, 'r', encoding='utf-8') as f:
            stories = json.load(f)
        
        print(f"Loaded {len(stories)} stories")
        print(f"Target languages: {len(LANGUAGE_CONFIGS)}")
        print(f"Estimated API calls: ~{sum(len(s['nodes']) * 4 for s in stories) * len(LANGUAGE_CONFIGS)}")
        print()
        
        if not self.client:
            print("ERROR: OpenAI client not initialized. Set OPENAI_API_KEY environment variable.")
            return
        
        # Process each story
        for story in stories:
            story_id = story['story_id']
            print(f"\n{'='*60}")
            print(f"Processing {story_id}: {story['title']}")
            print(f"{'='*60}")
            
            story_translations = {}
            
            for lang_code in LANGUAGE_CONFIGS.keys():
                # Check if already completed
                progress_key = f"{story_id}:{lang_code}"
                if progress_key in self.progress.get('completed', {}):
                    print(f"  Skipping {lang_code} (already completed)")
                    continue
                
                try:
                    translated = self.translate_story(story, lang_code)
                    story_translations[lang_code] = translated
                    
                    # Mark as completed
                    self.progress['completed'][progress_key] = True
                    self.save_progress()
                    
                except Exception as e:
                    print(f"  ERROR translating {lang_code}: {e}")
                    self.progress['failed'].append({'story': story_id, 'lang': lang_code, 'error': str(e)})
                    self.save_progress()
            
            # Generate TypeScript for this story
            if story_translations:
                ts_content = self.generate_typescript(story_id, story_translations)
                output_file = f'translations_{story_id}.ts'
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(ts_content)
                print(f"  ✓ Saved to {output_file}")
        
        print("\n" + "="*60)
        print("TRANSLATION COMPLETE!")
        print("="*60)
        print(f"\nCompleted: {len(self.progress['completed'])} translations")
        print(f"Failed: {len(self.progress['failed'])} translations")
        print("\nNext step: Run 'node scripts/merge-translations.js'")


def main():
    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key:
        print("Please set OPENAI_API_KEY environment variable")
        print("Example: export OPENAI_API_KEY=sk-...")
        return
    
    generator = TranslationGenerator(api_key)
    generator.run('stories_english_source.json')


if __name__ == '__main__':
    main()
