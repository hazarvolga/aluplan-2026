
const fs = require('fs');
const path = require('path');

// Manually defining menu based on previous read to avoid TS compilation issues in this quick script
const solutionsMenu = [
    { name: "Mimari", href: "/solutions/architecture" },
    { name: "Strüktürel Mühendislik", href: "/solutions/structural" },
    { name: "MEP", href: "/solutions/mep" },
    { name: "ALLPLAN ENDÜSTRİ ÇÖZÜMLERİ", href: "/solutions/allplan-industry" },
    { name: "Altyapı Mühendisliği", href: "/solutions/infrastructure" },
    { name: "Yol ve Demiryolu Tasarımı", href: "/solutions/road-railway" },
    { name: "Köprü Tasarımı", href: "/solutions/bridge-design" },
    { name: "Prekast Üretimi", href: "/solutions/precast" },
    { name: "Çelik Detaylandırma & İmalat", href: "/solutions/steel" },
    { name: "Şantiye Planlaması", href: "/solutions/site-planning" },
    { name: "CDS Add-On", href: "/solutions/cds-addon" },
    { name: "Allto PytonPart Generator", href: "https://allplantools.com/" }, // External
    { name: "Allto PytonPart", href: "/solutions/pythonpart" },
    { name: "AX3000 MEP", href: "/solutions/ax3000" },
    { name: "Scalypso", href: "/solutions/scalypso" },
    { name: "Donatı Mühendisliği", href: "/solutions/rebar-engineering" },
    { name: "İmar Yönetmeliği BIM Eklentisi", href: "/solutions/imar-yonetmeligi-bim-eklentisi" },
    { name: "BIMX5", href: "/solutions/bimx5" },
    { name: "Allplan Oska İşbirliği", href: "/solutions/oska" },
    { name: "Allplan Poz Kataloğu", href: "/solutions/poz-catalog" },
];

const appDir = '/Users/hazarekiz/Projects/aluplan-2026/app';

console.log('--- Verification Report ---');

solutionsMenu.forEach(item => {
    if (item.href.startsWith('http')) {
        console.log(`[EXTERNAL] ${item.name} -> ${item.href}`);
        return;
    }

    const pagePath = path.join(appDir, item.href, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        const stats = fs.statSync(pagePath);
        const content = fs.readFileSync(pagePath, 'utf-8');
        const isStub = content.includes('redirect(') || content.length < 500;
        console.log(`[OK] ${item.name} -> ${item.href} (Size: ${stats.size}b, Stub: ${isStub})`);
    } else {
        console.log(`[MISSING] ${item.name} -> ${item.href}`);
    }
});
