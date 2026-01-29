const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const outputFile = path.join(process.cwd(), 'data/auto-search-index.json');

// Helper to determine category based on path
function getCategory(filePath) {
    if (filePath.includes('/products/')) return 'Ürün';
    if (filePath.includes('/solutions/') || filePath.includes('/solutions-v2/')) return 'Çözüm';
    if (filePath.includes('/training/') || filePath.includes('/egitim/')) return 'Eğitim';
    return 'Genel';
}

// Recursively walk directory
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

const searchItems = [];

console.log('Scanning pages for search index...');

walkDir(appDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;

    // Skip dynamic routes for now as we can't easily guess the slug without a data source
    if (filePath.includes('[') || filePath.includes(']')) return;

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract metadata using regex
    // Looks for: export const metadata: Metadata = { ... }
    const metadataRegex = /export const metadata: Metadata = \{([\s\S]*?)\};/;
    const match = content.match(metadataRegex);

    // Extract full text content (naive strip tags)
    // 1. Remove import statements
    let cleanContent = content.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
    // 2. Remove metadata block if exists
    if (match) {
        cleanContent = cleanContent.replace(metadataRegex, '');
    }
    // 3. Remove HTML/JSX tags <...>
    cleanContent = cleanContent.replace(/<[^>]*>/g, ' ');
    // 4. Remove special characters and extra whitespace
    cleanContent = cleanContent.replace(/[{}()\[\]=;'"]/g, ' ').replace(/\s+/g, ' ').trim();

    let title = '';
    let description = '';

    if (match && match[1]) {
        const metaContent = match[1];
        const titleMatch = metaContent.match(/title:\s*['"](.*?)['"]/);
        const descMatch = metaContent.match(/description:\s*['"](.*?)['"]/);
        if (titleMatch) title = titleMatch[1];
        if (descMatch) description = descMatch[1];
    }

    // Fallback if no metadata found (common for some pages that use layout metadata)
    if (!title) {
        // Try to find an H1 tag content
        const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
        if (h1Match) {
            title = h1Match[1].replace(/<[^>]*>/g, '').trim(); // Clean any inner tags
        } else {
            // Fallback to filename/path
            let relativePath = filePath.replace(appDir, '');
            // Convert /foo/bar/page.tsx -> foo/bar
            let urlPart = relativePath.replace('/page.tsx', '');
            const parts = urlPart.split('/').filter(Boolean);
            const lastPart = parts[parts.length - 1] || 'Home';

            // Convert kebab-case to Title Case (simple)
            title = lastPart.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }

    // Use cleaned content as description fallback if needed (first 150 chars)
    if (!description && cleanContent.length > 0) {
        description = cleanContent.slice(0, 150) + '...';
    }

    // Generate URL from file path
    let relativePath = filePath.replace(appDir, '');
    let url = relativePath.replace('/page.tsx', '');
    if (url === '') url = '/'; // Homepage

    // Clean up category
    const category = getCategory(url);

    // Only add if we have at least a title or some content
    if (title || cleanContent.length > 50) {
        searchItems.push({
            title: title || 'Untitled Page',
            description: description,
            url: url,
            category: category,
            tags: [],
            content: cleanContent.slice(0, 5000)
        });
        console.log(`Indexed: ${url} (Title: ${title}) (Content len: ${cleanContent.length})`);
    }
});

fs.writeFileSync(outputFile, JSON.stringify(searchItems, null, 2));
console.log(`\nSuccessfully generated ${searchItems.length} search items in ${outputFile}`);
