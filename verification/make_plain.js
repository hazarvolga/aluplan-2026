const fs = require('fs');
const src = fs.readFileSync(__dirname + '/architecture_original.html', 'utf8');
const noScripts = src.replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '');
const plain = noScripts
  .replace(/<[^>]*>/g, '\n')
  .replace(/&nbsp;/g, ' ')
  .replace(/\r/g, '')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0)
  .join('\n');
fs.writeFileSync(__dirname + '/architecture_original_plain_clean.txt', plain);

