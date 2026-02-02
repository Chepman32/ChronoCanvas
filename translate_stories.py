#!/usr/bin/env python3
"""
Translation script for FableFlow stories
Translates all stories to 9 languages: ru, es, de, fr, pt, ja, zh, ko, uk
"""

import json
import os
import re

# Language configurations
LANGUAGES = {
    'ru': {'name': 'Russian', 'native': 'Русский'},
    'es': {'name': 'Spanish', 'native': 'Español'},
    'de': {'name': 'German', 'native': 'Deutsch'},
    'fr': {'name': 'French', 'native': 'Français'},
    'pt': {'name': 'Portuguese', 'native': 'Português'},
    'ja': {'name': 'Japanese', 'native': '日本語'},
    'zh': {'name': 'Chinese', 'native': '中文'},
    'ko': {'name': 'Korean', 'native': '한국어'},
    'uk': {'name': 'Ukrainian', 'native': 'Українська'},
}

# Translation cache to avoid re-translating
TRANSLATION_CACHE = {}

def load_extracted_stories():
    """Load extracted story content"""
    with open('extracted_stories.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def load_existing_translations(lang):
    """Load existing translations for a language"""
    filepath = f'TRANSLATIONS_{lang}.json'
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return None

def translate_text(text, target_lang, source_lang='en'):
    """
    Translate text using a translation service
    This is a placeholder - in production, use Google Translate, DeepL, or OpenAI API
    """
    if not text or text.strip() == '':
        return text
    
    # Check cache
    cache_key = f"{source_lang}:{target_lang}:{text}"
    if cache_key in TRANSLATION_CACHE:
        return TRANSLATION_CACHE[cache_key]
    
    # Placeholder: return text with language prefix
    # In production, replace with actual translation API call
    translated = f"[{LANGUAGES[target_lang]['native']}] {text}"
    
    TRANSLATION_CACHE[cache_key] = translated
    return translated

def translate_story(story, target_lang):
    """Translate a complete story"""
    translated = {
        'storyId': story['storyId'],
        'title': translate_text(story['title'], target_lang),
        'description': translate_text(story['description'], target_lang),
        'author': story['author'],  # Keep author name as is
        'genres': [translate_text(g, target_lang) for g in story.get('genres', [])],
        'nodes': []
    }
    
    for node in story['nodes']:
        translated_node = {
            'nodeId': node['nodeId'],
            'title': translate_text(node['title'], target_lang),
            'narration': translate_text(node['narration'], target_lang),
            'choices': []
        }
        
        for choice in node['choices']:
            translated_choice = {
                'choiceId': choice.get('choiceId', ''),
                'text': translate_text(choice['text'], target_lang),
            }
            if choice.get('description'):
                translated_choice['description'] = translate_text(choice['description'], target_lang)
            translated_node['choices'].append(translated_choice)
        
        translated['nodes'].append(translated_node)
    
    return translated

def create_translation_file(lang, stories):
    """Create a complete translation file for a language"""
    lang_info = LANGUAGES[lang]
    
    # Build instructions in target language
    instructions = {
        "purpose": f"This file contains all {lang_info['name']} translations for stories",
        "targetLanguages": list(LANGUAGES.keys()),
        "howToUse": [
            "1. This file is auto-generated",
            "2. Do not modify structure",
            "3. Only text values are translated",
        ],
        "doNotTranslate": ["storyId", "nodeId", "choiceId"],
        "translateThese": ["title", "description", "narration", "text"]
    }
    
    data = {
        "_instructions": instructions,
        "stories": stories
    }
    
    return data

def main():
    print("=" * 60)
    print("FableFlow Story Translation Tool")
    print("=" * 60)
    print()
    
    # Load extracted stories
    print("Loading extracted stories...")
    stories = load_extracted_stories()
    print(f"  Loaded {len(stories)} stories")
    print(f"  Total nodes: {sum(len(s['nodes']) for s in stories)}")
    print()
    
    # Process each language
    for lang in LANGUAGES.keys():
        print(f"Processing {LANGUAGES[lang]['name']} ({lang})...")
        
        # Load existing translations
        existing = load_existing_translations(lang)
        existing_ids = set()
        if existing:
            existing_ids = set(s['storyId'] for s in existing.get('stories', []))
            print(f"  Found {len(existing_ids)} existing translations")
        
        # Translate missing stories
        translated_stories = []
        for story in stories:
            if story['storyId'] in existing_ids:
                # Keep existing translation
                for existing_story in existing['stories']:
                    if existing_story['storyId'] == story['storyId']:
                        translated_stories.append(existing_story)
                        break
            else:
                # Translate new story
                print(f"    Translating: {story['storyId']}")
                translated = translate_story(story, lang)
                translated_stories.append(translated)
        
        # Create and save translation file
        translation_data = create_translation_file(lang, translated_stories)
        
        filepath = f'TRANSLATIONS_{lang}.json'
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(translation_data, f, indent=2, ensure_ascii=False)
            f.write('\n')
        
        print(f"  Saved {filepath} ({len(translated_stories)} stories)")
        print()
    
    print("=" * 60)
    print("Translation complete!")
    print("=" * 60)

if __name__ == '__main__':
    main()
