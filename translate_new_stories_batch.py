#!/usr/bin/env python3
"""
Batch translation script for newStories (stories 5-13)
Translates to all 15 languages using OpenAI API
"""

import json
import os
import time
from typing import List, Dict, Any

try:
    from openai import OpenAI
except ImportError:
    print("Please install OpenAI package: pip install openai")
    print("And set OPENAI_API_KEY environment variable")
    exit(1)

# All target languages
LANGUAGES = {
    'ru': 'Russian',  # Will complete partial translations
    'es': 'Spanish',
    'de': 'German',
    'fr': 'French',
    'pt': 'Portuguese',
    'ja': 'Japanese',
    'zh': 'Chinese (Simplified)',
    'ko': 'Korean',
    'uk': 'Ukrainian',
    'it': 'Italian',
    'ar': 'Arabic',
    'hi': 'Hindi',
    'nl': 'Dutch',
    'pl': 'Polish',
    'tr': 'Turkish',
}

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

def translate_batch(texts: List[str], target_lang: str) -> List[str]:
    """Translate multiple texts in a single API call"""
    if not texts:
        return []
    
    lang_name = LANGUAGES.get(target_lang, target_lang)
    
    # Format texts for batch translation
    numbered_texts = "\n".join([f"{i+1}. {text}" for i, text in enumerate(texts)])
    
    prompt = f"""Translate the following {len(texts)} texts to {lang_name}.

Rules:
1. Maintain the dramatic, immersive tone of an interactive story game
2. Keep translations concise (for mobile app display)
3. Translate naturally, not word-for-word
4. Return ONLY the translations, numbered 1-{len(texts)}
5. Preserve any formatting or special characters

Texts to translate:
{numbered_texts}

Translations (numbered {1}-{len(texts)}):"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a professional game localization translator. Provide only the numbered translations."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=4000
        )
        
        result = response.choices[0].message.content.strip()
        
        # Parse numbered translations
        translations = []
        for line in result.split('\n'):
            line = line.strip()
            # Match lines like "1. Translation text" or "1) Translation text"
            if line and (line[0].isdigit() or line.startswith('•')):
                # Remove number prefix
                for sep in ['. ', ') ', ' - ', ': ']:
                    if sep in line[:5]:
                        line = line.split(sep, 1)[1]
                        break
                translations.append(line)
        
        # If parsing failed, return original texts
        if len(translations) != len(texts):
            print(f"  Warning: Expected {len(texts)} translations, got {len(translations)}")
            return texts
            
        return translations
        
    except Exception as e:
        print(f"  Error in batch translation: {e}")
        return texts

def translate_story(story: Dict, target_lang: str) -> Dict:
    """Translate an entire story to target language"""
    print(f"  Translating to {LANGUAGES[target_lang]}...")
    
    # Collect all texts for batch translation
    all_texts = []
    text_mapping = []
    
    # Story metadata
    all_texts.append(story['title'])
    text_mapping.append(('title', None))
    all_texts.append(story['description'])
    text_mapping.append(('description', None))
    
    # Node content
    for i, node in enumerate(story['nodes']):
        all_texts.append(node['title'])
        text_mapping.append(('node_title', i))
        all_texts.append(node['narration'])
        text_mapping.append(('narration', i))
        
        for j, choice in enumerate(node['choices']):
            all_texts.append(choice['text'])
            text_mapping.append(('choice', i, j))
    
    # Translate in batches of 30
    BATCH_SIZE = 30
    all_translations = []
    for i in range(0, len(all_texts), BATCH_SIZE):
        batch = all_texts[i:i+BATCH_SIZE]
        print(f"    Batch {i//BATCH_SIZE + 1}/{(len(all_texts)-1)//BATCH_SIZE + 1} ({len(batch)} texts)...", end='\r')
        translations = translate_batch(batch, target_lang)
        all_translations.extend(translations)
        time.sleep(0.5)  # Rate limiting
    
    print()  # New line
    
    # Reconstruct translated story
    translated = {
        'title': all_translations[0],
        'description': all_translations[1],
        'author': story['author'],  # Keep author name
        'nodes': []
    }
    
    idx = 2
    for i, node in enumerate(story['nodes']):
        translated_node = {
            'title': all_translations[idx],
            'narration': all_translations[idx + 1],
            'choices': []
        }
        idx += 2
        
        for j, choice in enumerate(node['choices']):
            translated_node['choices'].append(all_translations[idx])
            idx += 1
        
        translated['nodes'].append(translated_node)
    
    return translated

def escape_ts_string(s: str) -> str:
    """Escape a string for TypeScript"""
    return s.replace("\\", "\\\\").replace("'", "\\'")

def generate_typescript(story_id: str, story_data: Dict, translations: Dict[str, Dict]) -> str:
    """Generate TypeScript code for a story's translations"""
    lines = []
    
    for lang_code, trans in translations.items():
        lines.append(f"    {lang_code}: {{")
        lines.append(f"      title: '{escape_ts_string(trans['title'])}', description: '{escape_ts_string(trans['description'])}', author: '{escape_ts_string(trans['author'])}',")
        lines.append("      nodes: {")
        
        for i, node in enumerate(trans['nodes']):
            node_id = f"{story_id}-{i+1}"
            
            # Build choices
            choices_parts = []
            for j, choice_text in enumerate(node['choices']):
                choice_id = f"{story_id}-c{(i*2)+j+1}"
                choices_parts.append(f"'{choice_id}': {{ text: '{escape_ts_string(choice_text)}' }}")
            choices_str = ", ".join(choices_parts) if choices_parts else ""
            
            lines.append(f"        '{node_id}': {{ title: '{escape_ts_string(node['title'])}', narration: '{escape_ts_string(node['narration'])}', choices: {{ {choices_str} }} }},")
        
        lines.append("      },")
        lines.append("    },")
    
    return "\n".join(lines)

def main():
    # Load extracted stories
    with open('extracted_stories_new.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        stories = data['stories']
    
    print(f"Loaded {len(stories)} stories for translation")
    print(f"Target languages: {', '.join(LANGUAGES.values())}")
    print()
    
    # Process each story
    for story in stories:
        story_id = story['storyId']
        print(f"\n{'='*60}")
        print(f"Processing {story_id}: {story['title']}")
        print(f"{'='*60}")
        
        all_translations = {}
        
        for lang_code in LANGUAGES.keys():
            translated = translate_story(story, lang_code)
            all_translations[lang_code] = translated
        
        # Generate TypeScript for this story
        ts_content = generate_typescript(story_id, story, all_translations)
        
        # Save to file
        output_file = f'translations_{story_id}.ts'
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"  Saved translations to {output_file}")
    
    print("\n\n" + "="*60)
    print("All translations complete!")
    print("="*60)
    print("\nTo integrate translations into newStories_i18n.ts:")
    print("Run: node scripts/merge-translations.js")

if __name__ == '__main__':
    main()
