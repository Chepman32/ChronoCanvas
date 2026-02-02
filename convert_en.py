import json
import os

def convert_story():
    with open('src/data/localizations/newStory_formatted.json', 'r') as f:
        data = json.load(f)

    output = {
        "title": data['metadata']['title'],
        "description": data['metadata']['description'],
        "author": data['metadata']['author'][0],
        "nodes": {}
    }

    for node in data['nodes']:
        node_id = node['id']
        node_data = {
            "title": node['title'],
            "narration": node['narration'],
            "choices": {}
        }
        
        for choice in node['choices']:
            choice_id = choice['id']
            node_data['choices'][choice_id] = {
                "text": choice['text']
            }
            
        output['nodes'][node_id] = node_data

    with open('src/data/translations/story-midnight-house/en.json', 'w') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    convert_story()
