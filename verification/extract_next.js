const fs = require('fs');
const s = fs.readFileSync(__dirname + '/../src/pages/solutions/Architecture.tsx', 'utf8');
const blockMatch = s.match(/const\s+workflowCategories\s*=\s*\[([\s\S]*?)\];/);
if (!blockMatch) throw new Error('workflowCategories not found');
const block = blockMatch[1];
let out = 'Mimari İş Akışları\nFikir aşamasından teslimata kadar kesintisiz ve verimli süreçler.\n\n';
const catExp = /label:\s*\"([^\"]+)\"[\s\S]*?items:\s*\[([\s\S]*?)\]/g;
let m, idx = 0;
while ((m = catExp.exec(block))) {
  idx++;
  out += idx + ' / ' + m[1] + '\n';
  const items = m[2];
  const itemExp = /title:\s*\"([^\"]+)\"[\s\S]*?description:\s*\"([\s\S]*?)\"/g;
  let im;
  while ((im = itemExp.exec(items))) {
    out += '- ' + im[1] + '\n  ' + im[2] + '\n';
  }
  out += '\n';
}
fs.writeFileSync(__dirname + '/architecture_workflows_next_extracted.txt', out);

