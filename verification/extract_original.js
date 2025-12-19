const fs = require('fs');

const plain = fs.readFileSync(__dirname + '/architecture_original_plain_clean.txt', 'utf8');

const sections = [
  {
    key: 'Ön ve Konsept Tasarım',
    titles: [
      'Hızlıca Başlayın',
      'Güvenilir Yapılandırılmış Veri',
      'Şantiyenizi Anlayın',
      'Şantiye Planlarını ve Potansiyeli Optimize Edin',
      'Tasarımınızı Hacim Modeline Dönüştürün'
    ]
  },
  {
    key: 'Tasarım Geliştirmek',
    titles: [
      'Hacimden Bileşen Modeline Geçiş',
      'Taslaktan Detaya Sorunsuz Bir Şekilde Geliştirin',
      'Farklı Değişkenleri Kolayca Değerlendirin',
      'Görünümler ve Kesitler için Güçlü Araçlar',
      'Fikirleri ve Tasarımları Sunun ve Görselleştirin'
    ]
  },
  {
    key: 'Detaylı Tasarım',
    titles: [
      'Başlangıç Maliyetlerini Değerlendirin',
      'Parametrik Boşluk Tasarımlarını Kolayca Detaylandırın',
      'Akıllı Oda Kaplamalarını Tasarlayın ve Yönetin',
      'Gerçekçi İç Mekanlar Yaratın',
      'Tasarım Değişikliklerini Yönet',
      'Odaları ve Birimleri Yönetin',
      'Yasal Gereksinimleri Doğrulayın',
      'Nihai Uygulama Çiziminin Derlenmesi'
    ]
  },
  {
    key: 'Yürütme Planlaması',
    titles: [
      'Prefabrik Beton Gibi Çeşitli Malzemelerle Tasarım',
      'Gerekli Detaylara Sahip Çizimlerin Güvenilir Bir Şekilde Çıkarılması',
      'Proje Verilerini Organize Edin, Zenginleştirin ve Analiz Edin',
      'Proje Ortaklarıyla İşbirliği ve Koordinasyon Yapın'
    ]
  }
];

function extractDescription(title, text, nextTitles) {
  const idx = text.indexOf(title);
  if (idx === -1) return '';
  const after = text.slice(idx + title.length);
  let nextIdx = -1;
  for (const t of nextTitles) {
    const pos = after.indexOf(t);
    if (pos !== -1 && (nextIdx === -1 || pos < nextIdx)) nextIdx = pos;
  }
  const block = nextIdx !== -1 ? after.slice(0, nextIdx) : after;
  // cleanup: collapse whitespace, decode common entities
  return block
    .replace(/\s+/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

let out = 'Mimari İş Akışları\nFikir aşamasından teslimata kadar kesintisiz ve verimli süreçler.\n\n';
let sectionIndex = 0;
for (const sec of sections) {
  sectionIndex++;
  out += sectionIndex + ' / ' + sec.key + '\n';
  for (let i = 0; i < sec.titles.length; i++) {
    const title = sec.titles[i];
    const nextTitles = sec.titles.slice(i + 1);
    const desc = extractDescription(title, plain, nextTitles);
    out += '- ' + title + '\n  ' + desc + '\n';
  }
  out += '\n';
}

fs.writeFileSync(__dirname + '/architecture_workflows_original_extracted.txt', out);
