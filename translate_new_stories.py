#!/usr/bin/env python3
"""
Translation script for newStories (stories 5-13)
Generates translations for all missing languages using OpenAI API
"""

import json
import os
import time
from typing import Dict, List, Any

try:
    from openai import OpenAI
except ImportError:
    print("Please install OpenAI package: pip install openai")
    print("And set OPENAI_API_KEY environment variable")
    exit(1)

# Configuration
LANGUAGES = {
    'es': 'Spanish',
    'de': 'German',
    'fr': 'French',
    'pt': 'Portuguese',
    'ja': 'Japanese',
    'zh': 'Chinese',
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

def translate_text(text: str, target_lang: str, context: str = "") -> str:
    """Translate a single text using OpenAI API"""
    if not text or text.strip() == '':
        return text
    
    lang_name = LANGUAGES.get(target_lang, target_lang)
    
    # Special handling for RTL languages
    rtl_marker = "\u202B" if target_lang in ['ar', 'he'] else ""
    
    prompt = f"""Translate the following text to {lang_name}.
Context: This is for an interactive story game. {context}

Rules:
1. Maintain the tone and style (dramatic, immersive)
2. Keep it concise as it's for a mobile app
3. Translate naturally, not word-for-word
4. For single words or short phrases, provide the most common translation
5. Preserve any formatting or special characters

Text to translate: "{text}"

Provide only the translation, nothing else:"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a professional translator specializing in game localization."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=500
        )
        result = response.choices[0].message.content.strip()
        # Remove quotes if the API added them
        if result.startswith('"') and result.endswith('"'):
            result = result[1:-1]
        return rtl_marker + result
    except Exception as e:
        print(f"  Error translating '{text[:50]}...': {e}")
        return text

def translate_story(story_data: Dict, target_lang: str) -> Dict:
    """Translate an entire story to target language"""
    print(f"  Translating to {LANGUAGES[target_lang]}...")
    
    story_context = f"Story: {story_data['title']}. Genre: Interactive fiction."
    
    translated = {
        'title': translate_text(story_data['title'], target_lang, story_context),
        'description': translate_text(story_data['description'], target_lang, story_context),
        'author': story_data['author'],  # Keep author name as is
        'nodes': []
    }
    
    for i, node in enumerate(story_data['nodes']):
        print(f"    Node {i+1}/{len(story_data['nodes'])}: {node['title'][:30]}...", end='\r')
        
        translated_node = {
            'title': translate_text(node['title'], target_lang, f"{story_context} Node title"),
            'narration': translate_text(node['narration'], target_lang, f"{story_context} Story narration"),
            'choices': []
        }
        
        for choice in node['choices']:
            translated_choice = translate_text(choice, target_lang, f"{story_context} Player choice")
            translated_node['choices'].append(translated_choice)
        
        translated['nodes'].append(translated_node)
        time.sleep(0.1)  # Rate limiting
    
    print()  # New line after progress
    return translated

def generate_typescript(stories_translations: Dict[str, Dict[str, Any]]) -> str:
    """Generate TypeScript code for the translations"""
    lines = []
    
    for story_id, translations in stories_translations.items():
        lines.append(f"    {target_lang}: {{")
        lines.append(f"      title: '{translations['title']}', description: '{translations['description']}', author: '{translations['author']}',")
        lines.append("      nodes: {")
        
        for i, node in enumerate(translations['nodes']):
            node_id = f"{story_id}-{i+1}"
            choices_dict = {}
            for j, choice in enumerate(node['choices']):
                choice_id = f"{story_id}-c{(i*2)+j+1}"
                choices_dict[choice_id] = choice
            
            choices_str = ", ".join([f"'{k}': {{ text: '{v}' }}" for k, v in choices_dict.items()])
            lines.append(f"        '{node_id}': {{ title: '{node['title']}', narration: '{node['narration']}', choices: {{ {choices_str} }} }},")
        
        lines.append("      },")
        lines.append("    },")
    
    return "\n".join(lines)

def main():
    # Load extracted stories
    with open('new_stories_for_translation.json', 'r', encoding='utf-8') as f:
        stories = json.load(f)
    
    print(f"Loaded {len(stories)} stories for translation")
    print(f"Target languages: {', '.join(LANGUAGES.values())}")
    print()
    
    all_translations = {}
    
    for story in stories:
        story_id = story['story_id']
        print(f"\nProcessing {story_id}: {story['title']}")
        
        all_translations[story_id] = {}
        
        for lang_code in story['missing_languages']:
            translated = translate_story(story, lang_code)
            all_translations[story_id][lang_code] = translated
            
            # Save progress after each language
            with open('translation_progress.json', 'w', encoding='utf-8') as f:
                json.dump(all_translations, f, indent=2, ensure_ascii=False)
    
    print("\n\nTranslation complete!")
    print("Generating TypeScript output...")
    
    # Generate TypeScript for each story
    ts_output = []
    for story in stories:
        story_id = story['story_id']
        ts_output.append(f"  // {story['title']}")
        for lang_code in story['missing_languages']:
            ts_part = generate_typescript({story_id: all_translations[story_id][lang_code]})
            ts_output.append(ts_part)
    
    with open('new_stories_translations.ts', 'w', encoding='utf-8') as f:
        f.write("\n".join(ts_output))
    
    print("TypeScript output saved to new_stories_translations.ts")

if __name__ == '__main__':
    main()
