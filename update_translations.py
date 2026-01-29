import os
import json
import glob

def main():
    files = glob.glob('src/data/translations/**/*.json', recursive=True)
    print(f"Scanning {len(files)} files...")
    issues_found = 0
    for file_path in files:
        if file_path.endswith('index.json'):
            continue
        if check_file(file_path):
            issues_found += 1
    
    print(f"Scan complete. Found {issues_found} files needing update.")

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            print(f"Error decoding {file_path}")
            return False

    needs_update = False
    
    if 'story' in data:
        story = data['story']
        
        # Check genre
        if 'genre' in story and isinstance(story['genre'], list):
            print(f"File {file_path} has array genre")
            needs_update = True
        
        # Check difficulty
        if 'difficulty' in story:
            print(f"File {file_path} has difficulty")
            needs_update = True
            
    return needs_update

if __name__ == '__main__':
    main()
