const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const contentDir = path.join(process.cwd(), 'content');
const componentsDir = path.join(process.cwd(), 'components');
const outputFile = path.join(process.cwd(), 'data/auto-search-index.json');

// Helper to determine category based on path
function getCategory(filePath) {
    if (filePath.includes('/products/')) return 'Ürün';
    if (filePath.includes('/solutions/') || filePath.includes('/solutions-v2/')) return 'Çözüm';
    if (filePath.includes('/training/') || filePath.includes('/egitim/')) return 'Eğitim';
    return 'Genel';
}

// Category from content filename
function getCategoryFromContentFile(filename) {
    if (filename.includes('architecture') || filename.includes('structural') || filename.includes('mep')) return 'Çözüm';
    if (filename.includes('product') || filename.includes('allplan-') || filename.includes('ax3000')) return 'Ürün';
    if (filename.includes('precast') || filename.includes('bridge') || filename.includes('civil') || filename.includes('road') || filename.includes('steel') || filename.includes('site-planning')) return 'Çözüm';
    if (filename.includes('addon') || filename.includes('add-on')) return 'Çözüm';
    return 'Genel';
}

// Recursively walk directory
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
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

// ===============================================
// PHASE 1: Scan app/**/page.tsx (existing logic)
// ===============================================
console.log('--- Phase 1: Scanning pages ---');

walkDir(appDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;
    if (filePath.includes('[') || filePath.includes(']')) return;

    const content = fs.readFileSync(filePath, 'utf8');

    const metadataRegex = /export const metadata: Metadata = \{([\s\S]*?)\};/;
    const match = content.match(metadataRegex);

    let cleanContent = content.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
    if (match) {
        cleanContent = cleanContent.replace(metadataRegex, '');
    }
    cleanContent = cleanContent.replace(/<[^>]*>/g, ' ');
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

    if (!title) {
        const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
        if (h1Match) {
            title = h1Match[1].replace(/<[^>]*>/g, '').trim();
        } else {
            let relativePath = filePath.replace(appDir, '');
            let urlPart = relativePath.replace('/page.tsx', '');
            const parts = urlPart.split('/').filter(Boolean);
            const lastPart = parts[parts.length - 1] || 'Home';
            title = lastPart.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }

    if (!description && cleanContent.length > 0) {
        description = cleanContent.slice(0, 150) + '...';
    }

    let relativePath = filePath.replace(appDir, '');
    let url = relativePath.replace('/page.tsx', '');
    if (url === '') url = '/';

    const category = getCategory(url);

    if (title || cleanContent.length > 50) {
        searchItems.push({
            title: title || 'Untitled Page',
            description: description,
            url: url,
            category: category,
            tags: [],
            content: cleanContent.slice(0, 5000),
            source: 'page'
        });
        console.log(`  [page] ${url} → "${title}" (${cleanContent.length} chars)`);
    }
});

// ===============================================
// PHASE 2: Scan content/*.txt files
// ===============================================
console.log('\n--- Phase 2: Scanning content/*.txt ---');

if (fs.existsSync(contentDir)) {
    const txtFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.txt'));

    txtFiles.forEach(filename => {
        const filePath = path.join(contentDir, filename);
        const rawContent = fs.readFileSync(filePath, 'utf8');

        // Extract title from first meaningful line
        const lines = rawContent.split('\n').filter(l => l.trim().length > 0);
        let title = '';
        let description = '';

        // Look for SAYFA:, Başlık:, or first heading-like line
        for (const line of lines.slice(0, 10)) {
            const trimmed = line.trim();
            if (trimmed.startsWith('SAYFA:')) continue;
            if (trimmed.startsWith('HERO SECTION:')) continue;
            if (trimmed.startsWith('-') && trimmed.includes('Başlık:')) {
                title = trimmed.replace(/^-\s*Başlık:\s*/, '').trim();
                break;
            }
            if (trimmed.startsWith('-') && trimmed.includes('Alt Başlık:')) continue;
            if (!title && trimmed.length > 5 && trimmed.length < 200 && !trimmed.startsWith('-') && !trimmed.startsWith('http')) {
                title = trimmed;
                break;
            }
        }

        // Fallback title from filename
        if (!title) {
            title = filename.replace('.txt', '')
                .split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }

        // Clean content for indexing
        let cleanContent = rawContent
            .replace(/https?:\/\/[^\s]+/g, '') // Remove URLs
            .replace(/SAYFA:.*$/m, '')
            .replace(/Görsel URL:.*$/gm, '')
            .replace(/BUTON URL:.*$/gm, '')
            .replace(/YOUTUBE VİDEOLARI:.*$/gm, '')
            .replace(/[©•]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        // Description from content
        if (cleanContent.length > 50) {
            description = cleanContent.slice(0, 200).trim() + '...';
        }

        const category = getCategoryFromContentFile(filename);

        // Generate a reasonable URL — map to existing pages if possible
        let url = '/';
        if (filename.includes('architecture')) url = '/solutions/architecture';
        else if (filename.includes('structural')) url = '/solutions/structural';
        else if (filename.includes('bridge')) url = '/solutions/bridge-design';
        else if (filename.includes('civil') || filename.includes('infrastructure')) url = '/solutions/infrastructure';
        else if (filename.includes('precast-product') || filename.includes('precast-software')) url = '/products/precast';
        else if (filename.includes('precast-fabrication')) url = '/solutions/precast';
        else if (filename.includes('road') || filename.includes('rail')) url = '/solutions/road-railway';
        else if (filename.includes('site-planning')) url = '/solutions/site-planning';
        else if (filename.includes('steel')) url = '/solutions/steel';
        else if (filename.includes('mep')) url = '/solutions/mep';
        else if (filename.includes('bimplus')) url = '/products/allplan-bimplus';
        else if (filename.includes('allplan-aec')) url = '/products/allplan-aec';
        else if (filename.includes('allplan-basic')) url = '/products/allplan-basic';
        else if (filename.includes('allplan-concept')) url = '/products/allplan-concept';
        else if (filename.includes('allplan-professional')) url = '/products/allplan-professional';
        else if (filename.includes('allplan-ultimate')) url = '/products/allplan-ultimate';
        else if (filename.includes('allplan-2026')) url = '/products/allplan-2026';
        else if (filename.includes('ax3000')) url = '/products/ax3000';
        else if (filename.includes('addon') || filename.includes('add-on')) url = '/solutions/addons';
        else if (filename.includes('oska')) url = '/solutions/oska';
        else if (filename.includes('poz')) url = '/solutions/poz-catalog';
        else if (filename.includes('bulut') || filename.includes('cloud')) url = '/products/allplan-cloud-services';
        else if (filename.includes('onemli')) url = '/#professional-services';

        if (cleanContent.length > 30) {
            searchItems.push({
                title: title,
                description: description,
                url: url,
                category: category,
                tags: [],
                content: cleanContent.slice(0, 5000),
                source: 'content'
            });
            console.log(`  [content] ${filename} → "${title}" (${cleanContent.length} chars)`);
        }
    });
}

// ===============================================
// PHASE 3: Extract ServicesV2.tsx service cards
// ===============================================
console.log('\n--- Phase 3: Scanning ServicesV2 cards ---');

const servicesFile = path.join(componentsDir, 'homepage-v2/ServicesV2.tsx');
if (fs.existsSync(servicesFile)) {
    const servicesContent = fs.readFileSync(servicesFile, 'utf8');

    // Extract service card objects: { ... title: "...", description: "...", href: "..." ... }
    const cardRegex = /\{\s*icon:\s*\w+,\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*status:\s*"(\w+)",\s*href:\s*"([^"]+)",\s*cta:\s*"([^"]+)"\s*\}/g;

    let match;
    while ((match = cardRegex.exec(servicesContent)) !== null) {
        const [, title, description, status, href] = match;

        // Determine the URL for search results:
        // External links → point to the services section
        // Internal links → use directly
        let url = href.startsWith('http') ? '/#professional-services' : href;
        if (href.endsWith('.pdf')) url = '/#professional-services';

        searchItems.push({
            title: title,
            description: description,
            url: url,
            category: 'Genel',
            tags: [],
            content: `${title} ${description}`,
            source: 'component'
        });
        console.log(`  [component] ServicesV2 → "${title}"`);
    }
}

// ===============================================
// PHASE 4: Extract content/addons/*.tsx component data
// ===============================================
console.log('\n--- Phase 4: Scanning content/addons ---');

const addonsDir = path.join(contentDir, 'addons');
if (fs.existsSync(addonsDir)) {
    const addonFiles = fs.readdirSync(addonsDir).filter(f => f.endsWith('.tsx'));

    addonFiles.forEach(filename => {
        const filePath = path.join(addonsDir, filename);
        const rawContent = fs.readFileSync(filePath, 'utf8');

        // Clean JSX/TSX content
        let cleanContent = rawContent
            .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
            .replace(/<[^>]*>/g, ' ')
            .replace(/[{}()\[\]=;'"]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        // Try to extract title from content
        let title = '';
        const titleMatch = rawContent.match(/title:\s*['"](.*?)['"]/);
        if (titleMatch) {
            title = titleMatch[1];
        } else {
            title = filename.replace('.tsx', '')
                .split(/(?=[A-Z])/).join(' ')
                .split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }

        const kebabName = filename.replace('.tsx', '')
            .replace(/([A-Z])/g, '-$1').toLowerCase()
            .replace(/^-/, '');

        if (cleanContent.length > 30) {
            searchItems.push({
                title: `Add-On: ${title}`,
                description: cleanContent.slice(0, 200) + '...',
                url: `/solutions/addons/${kebabName}`,
                category: 'Çözüm',
                tags: ['addon', 'eklenti'],
                content: cleanContent.slice(0, 5000),
                source: 'addon'
            });
            console.log(`  [addon] ${filename} → "${title}" (${cleanContent.length} chars)`);
        }
    });
}

// ===============================================
// OUTPUT
// ===============================================
console.log('\n--- Summary ---');
const sourceCount = {};
searchItems.forEach(item => {
    sourceCount[item.source || 'page'] = (sourceCount[item.source || 'page'] || 0) + 1;
});
Object.entries(sourceCount).forEach(([source, count]) => {
    console.log(`  ${source}: ${count} items`);
});

fs.writeFileSync(outputFile, JSON.stringify(searchItems, null, 2));
console.log(`\nSuccessfully generated ${searchItems.length} search items in ${outputFile}`);
