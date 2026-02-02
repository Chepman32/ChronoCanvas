#!/usr/bin/env python3
"""
Batch translation script using OpenAI API
Translates all stories to 9 languages
"""

import json
import os
import time
from typing import List, Dict, Any

# Try to import openai, provide instructions if not available
try:
    from openai import OpenAI
except ImportError:
    print("Please install OpenAI package: pip install openai")
    print("And set OPENAI_API_KEY environment variable")
    exit(1)

# Configuration
LANGUAGES = {
    'ru': 'Russian',
    'es': 'Spanish', 
    'de': 'German',
    'fr': 'French',
    'pt': 'Portuguese',
    'ja': 'Japanese',
    'zh': 'Chinese',
    'ko': 'Korean',
    'uk': 'Ukrainian',
}

BATCH_SIZE = 50  # Number of text segments to translate at once

def load_extracted_stories():
    """Load extracted story content"""
    with open('extracted_stories.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def collect_all_texts(stories: List[Dict]) -> List[Dict]:
    """Collect all texts that need translation with their context"""
    texts = []
    
    for story in stories:
        story_id = story['storyId']
        
        # Story metadata
        texts.append({
            'id': f"{story_id}:title",
            'text': story['title'],
            'type': 'title',
            'context': story_id
        })
        texts.append({
            'id': f"{story_id}:description",
            'text': story['description'],
            'type': 'description',
            'context': story_id
        })
        
        # Node content
        for node in story['nodes']:
            node_id = node['nodeId']
            
            texts.append({
                'id': f"{node_id}:title",
                'text': node['title'],
                'type': 'node_title',
                'context': story_id
            })
            texts.append({
                'id': f"{node_id}:narration",
                'text': node['narration'],
                'type': 'narration',
                'context': story_id
            })
            
            # Choices
            for i, choice in enumerate(node['choices']):
                choice_id = choice.get('choiceId', f"{node_id}-choice-{i}")
                texts.append({
                    'id': f"{choice_id}:text",
                    'text': choice['text'],
                    'type': 'choice_text',
                    'context': story_id
                })
                if choice.get('description'):
                    texts.append({
                        'id': f"{choice_id}:description",
                        'text': choice['description'],
                        'type': 'choice_desc',
                        'context': story_id
                    })
    
    return texts

def translate_batch(client: OpenAI, texts: List[str], target_lang: str) -> List[str]:
    """Translate a batch of texts using OpenAI API"""
    if not texts:
        return []
    
    # Create the prompt
    system_prompt = f"""You are a professional translator specializing in interactive fiction and storytelling.
Translate the following texts from English to {LANGUAGES[target_lang]}.

Important guidelines:
1. Maintain the tone and style of interactive fiction
2. Keep character names in their original form
3. Preserve any formatting (like **bold** markers)
4. Ensure the translation feels natural and engaging
5. For short texts (like choice options), be concise but clear

Return ONLY a JSON array of translated strings in the same order as the input."""

    user_prompt = json.dumps(texts, ensure_ascii=False)
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # Use appropriate model
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.3,
            response_format={"type": "json_object"}
        )
        
        result = json.loads(response.choices[0].message.content)
        if isinstance(result, dict) and 'translations' in result:
            return result['translations']
        elif isinstance(result, list):
            return result
        else:
            print(f"Unexpected response format: {result}")
            return texts  # Fallback
            
    except Exception as e:
        print(f"Translation error: {e}")
        return texts  # Fallback to original

def translate_all_texts(client: OpenAI, all_texts: List[Dict], target_lang: str) -> Dict[str, str]:
    """Translate all texts for a language"""
    translations = {}
    
    # Extract just the text values
    text_values = [item['text'] for item in all_texts]
    
    # Process in batches
    total_batches = (len(text_values) + BATCH_SIZE - 1) // BATCH_SIZE
    
    for batch_num in range(total_batches):
        start_idx = batch_num * BATCH_SIZE
        end_idx = min((batch_num + 1) * BATCH_SIZE, len(text_values))
        
        batch = text_values[start_idx:end_idx]
        batch_items = all_texts[start_idx:end_idx]
        
        print(f"  Translating batch {batch_num + 1}/{total_batches} ({len(batch)} texts)...")
        
        translated_batch = translate_batch(client, batch, target_lang)
        
        # Store translations
        for i, item in enumerate(batch_items):
            if i < len(translated_batch):
                translations[item['id']] = translated_batch[i]
            else:
                translations[item['id']] = item['text']  # Fallback
        
        # Rate limiting
        if batch_num < total_batches - 1:
            time.sleep(0.5)
    
    return translations

def build_translation_file(stories: List[Dict], translations: Dict[str, str], lang: str) -> Dict:
    """Build the final translation file structure"""
    result_stories = []
    
    for story in stories:
        story_id = story['storyId']
        
        translated_story = {
            'storyId': story_id,
            'title': translations.get(f"{story_id}:title", story['title']),
            'description': translations.get(f"{story_id}:description", story['description']),
            'author': story['author'],
            'genres': story.get('genres', []),
            'nodes': []
        }
        
        for node in story['nodes']:
            node_id = node['nodeId']
            
            translated_node = {
                'nodeId': node_id,
                'title': translations.get(f"{node_id}:title", node['title']),
                'narration': translations.get(f"{node_id}:narration", node['narration']),
                'choices': []
            }
            
            for i, choice in enumerate(node['choices']):
                choice_id = choice.get('choiceId', f"{node_id}-choice-{i}")
                
                translated_choice = {
                    'choiceId': choice_id,
                    'text': translations.get(f"{choice_id}:text", choice['text'])
                }
                
                if choice.get('description'):
                    desc = translations.get(f"{choice_id}:description", choice['description'])
                    if desc:
                        translated_choice['description'] = desc
                
                translated_node['choices'].append(translated_choice)
            
            translated_story['nodes'].append(translated_node)
        
        result_stories.append(translated_story)
    
    # Build file structure
    return {
        "_instructions": {
            "purpose": f"Translations for {LANGUAGES[lang]}",
            "language": lang,
            "generated": True
        },
        "stories": result_stories
    }

def main():
    print("=" * 70)
    print("FableFlow Batch Translation Tool (OpenAI)")
    print("=" * 70)
    print()
    
    # Check for API key
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("ERROR: OPENAI_API_KEY environment variable not set")
        print("Set it with: export OPENAI_API_KEY='your-key-here'")
        return
    
    client = OpenAI(api_key=api_key)
    
    # Load stories
    print("Loading stories...")
    stories = load_extracted_stories()
    print(f"  {len(stories)} stories loaded")
    
    # Collect all texts
    print("\nCollecting texts to translate...")
    all_texts = collect_all_texts(stories)
    print(f"  {len(all_texts)} text segments found")
    print()
    
    # Process each language
    for lang_code, lang_name in LANGUAGES.items():
        print(f"\n{'='*70}")
        print(f"Translating to {lang_name} ({lang_code})")
        print(f"{'='*70}")
        
        # Translate all texts
        translations = translate_all_texts(client, all_texts, lang_code)
        
        # Build translation file
        translation_data = build_translation_file(stories, translations, lang_code)
        
        # Save
        filepath = f'TRANSLATIONS_{lang_code}.json'
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(translation_data, f, indent=2, ensure_ascii=False)
            f.write('\n')
        
        print(f"\n  Saved: {filepath}")
        print(f"  Stories: {len(translation_data['stories'])}")
    
    print("\n" + "=" * 70)
    print("All translations complete!")
    print("=" * 70)

if __name__ == '__main__':
    main()
