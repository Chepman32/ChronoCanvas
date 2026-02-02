import json
import shutil
import os

# Source file (English)
source_file = 'src/data/translations/story-midnight-house/en.json'

# Languages to reset
languages = [
    'ar', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 
    'nl', 'pl', 'pt', 'ru', 'tr', 'uk', 'zh'
]

def reset_translations():
    # Read source to ensure it's valid
    with open(source_file, 'r') as f:
        data = json.load(f)
        if 'author' not in data:
            print("Warning: author field missing in source en.json")
            # Add it if missing, though it should be there based on Read logs
            data['author'] = "Marcus Vincent"
            with open(source_file, 'w') as f_out:
                json.dump(data, f_out, indent=2, ensure_ascii=False)

    # Copy to all other languages
    for lang in languages:
        dest = f'src/data/translations/story-midnight-house/{lang}.json'
        shutil.copy(source_file, dest)
        print(f"Reset {lang}.json")

if __name__ == '__main__':
    reset_translations()
