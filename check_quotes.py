import re

with open(r'articles.js', encoding='utf-8') as f:
    content = f.read()
    for i, line in enumerate(content.split('\n'), 1):
        if '“' in line or '”' in line:
            print(f'L{i} smart double: {line.strip()[:120]}')
        if '‘' in line or '’' in line:
            print(f'L{i} smart single: {line.strip()[:120]}')

# Also check JS validity by trying to parse
import subprocess
r = subprocess.run(['node', '-e', content], capture_output=True, text=True)
if r.returncode != 0:
    print(f'\nJS error:\n{r.stderr[:500]}')
else:
    print('\nJS valid')
