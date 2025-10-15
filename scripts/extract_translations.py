#!/usr/bin/env python3
"""
Extract all English text from story files for translation purposes.
Creates a comprehensive JSON file with all titles, descriptions, narrations, and choices.
"""

import json
import re
import os
from pathlib import Path

def extract_string_value(content, pattern):
    """Extract string value from TypeScript code."""
    match = re.search(pattern, content, re.DOTALL)
    if match:
        value = match.group(1)
        # Clean up the string
        value = value.replace('\\n', '\n')
        value = value.replace("\\'", "'")
        value = value.replace('\\"', '"')
        return value.strip()
    return None

def extract_story_metadata(content):
    """Extract story metadata (title, author, description)."""
    metadata = {}
    
    # Extract title
    title = extract_string_value(content, r"title:\s*['\"]([^'\"]+)['\"]")
    if title:
        metadata['title'] = title
    
    # Extract author
    author = extract_string_value(content, r"author:\s*['\"]([^'\"]+)['\"]")
    if author:
        metadata['author'] = author
    
    # Extract description
    desc = extract_string_value(content, r"description:\s*['\"]([^'\"]+)['\"]")
    if desc:
        metadata['description'] = desc
    
    return metadata

def extract_nodes(content):
    """Extract all nodes with their narrations and choices."""
    nodes = {}
    
    # Find all node definitions
    node_pattern = r"\{\s*id:\s*['\"]([^'\"]+)['\"],[^}]+title:\s*['\"]([^'\"]+)['\"],[^}]+narration:\s*['\"]([^'\"]+)['\"]"
    
    for match in re.finditer(node_pattern, content, re.DOTALL):
        node_id = match.group(1)
        title = match.group(2)
        narration = match.group(3)
        
        # Clean up narration
        narration = narration.replace('\\n', '\n').replace("\\'", "'").replace('\\"', '"')
        
        nodes[node_id] = {
            'title': title,
            'narration': narration,
            'choices': {}
        }
    
    # Extract choices for each node
    choice_pattern = r"\{\s*id:\s*['\"]([^'\"]+)['\"],[^}]+text:\s*['\"]([^'\"]+)['\"](?:,[^}]+description:\s*['\"]([^'\"]*)['\"])?"
    
    for match in re.finditer(choice_pattern, content, re.DOTALL):
        choice_id = match.group(1)
        text = match.group(2)
        description = match.group(3) if match.group(3) else None
        
        # Find which node this choice belongs to (approximate)
        # This is a simplified approach
        for node_id in nodes:
            if choice_id.startswith(node_id.split('-')[0]):
                nodes[node_id]['choices'][choice_id] = {
                    'text': text,
                    'description': description
                }
                break
    
    return nodes

def process_story_file(filepath):
    """Process a single story file and extract all translatable content."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    story_data = {}
    
    # Extract metadata
    metadata = extract_story_metadata(content)
    story_data.update(metadata)
    
    # Extract nodes
    nodes = extract_nodes(content)
    if nodes:
        story_data['nodes'] = nodes
    
    return story_data

def main():
    """Main extraction function."""
    data_dir = Path('src/data')
    output_file = 'STORY_TRANSLATIONS_EN_COMPLETE.json'
    
    all_stories = {}
    
    # Process all story files
    story_files = list(data_dir.glob('story*.ts')) + list(data_dir.glob('*Stories.ts'))
    
    for story_file in sorted(story_files):
        print(f"Processing {story_file.name}...")
        try:
            story_data = process_story_file(story_file)
            if story_data:
                # Use filename as key
                story_key = story_file.stem
                all_stories[story_key] = story_data
        except Exception as e:
            print(f"Error processing {story_file.name}: {e}")
    
    # Create final JSON structure
    output = {
        "meta": {
            "version": "1.0",
            "language": "en",
            "description": "Complete English translations for all story content",
            "lastUpdated": "2025-01-15",
            "totalStories": len(all_stories)
        },
        "stories": all_stories
    }
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"\nExtraction complete! Created {output_file}")
    print(f"Total stories processed: {len(all_stories)}")

if __name__ == '__main__':
    main()
