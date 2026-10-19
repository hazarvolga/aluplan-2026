import brochureEn from "@/assets/documents/ax3000/ax3000-brochure-en.pdf";
import brochureEnAlternative from "@/assets/documents/ax3000/ax3000-brochure-en-alternative.pdf";
import brochureDe from "@/assets/documents/ax3000/ax3000-brochure-de.pdf";
import functionsPdf from "@/assets/documents/ax3000/ax3000-functions-en.pdf";
import functionsWord from "@/assets/documents/ax3000/ax3000-functions-en.docx";
import functionsHexagon from "@/assets/documents/ax3000/ax3000-functions-hexagon-en.docx";
import coverEn from "@/assets/documents/ax3000/ax3000-brochure-en-cover.jpg";
import coverDe from "@/assets/documents/ax3000/ax3000-brochure-de-cover.jpg";
import coverTechnical from "@/assets/documents/ax3000/ax3000-functions-en-cover.jpg";

// Update document links and their displayed details here when replacing assets.
export const documentGroups = [
  {
    id: "brosurler", title: "Broşürler",
    description: "AX3000 modüllerini ve kullanım alanlarını keşfedin.",
    documents: [
      {
        title: "AX3000 Genel Broşür", language: "İngilizce", format: "PDF",
        detail: "28 sayfa", size: "5,75 MB", badge: "Öne çıkan",
        description: "Yapı fiziği, enerji simülasyonu, havalandırma, ısıtma, sıhhi tesisat ve elektrik modüllerine genel bakış.",
        href: brochureEn, filename: "ax3000-brochure-en.pdf", cover: coverEn,
      },
      {
        title: "AX3000 Genel Broşür", language: "Almanca", format: "PDF",
        detail: "15 sayfa · Çift sayfa düzeni", size: "4,45 MB", badge: "Almanca",
        description: "Bina tesisatı, yapı fiziği ve enerji hesaplamalarını modüller ve proje örnekleri üzerinden tanıtan Almanca broşür.",
        href: brochureDe, filename: "ax3000-brochure-de.pdf", cover: coverDe,
      },
      {
        title: "AX3000 Genel Broşür — Alternatif", language: "İngilizce", format: "PDF",
        detail: "28 sayfa", size: "5,73 MB", badge: "Alternatif sürüm",
        description: "Genel İngilizce broşürün küçük metin farklılıkları içeren alternatif kopyası. Aynı modülleri ve kullanım alanlarını kapsar.",
        href: brochureEnAlternative, filename: "ax3000-brochure-en-alternative.pdf", cover: coverEn,
      },
    ],
  },
  {
    id: "teknik-dokumanlar", title: "Teknik Dokümanlar",
    description: "Planlama yöntemlerini, hesaplama özelliklerini ve modül fonksiyonlarını inceleyin.",
    documents: [
      {
        title: "MEP Fonksiyon Açıklamaları", language: "İngilizce", format: "PDF",
        detail: "5 sayfa", size: "0,92 MB", badge: "Teknik özet",
        description: "Easyline yaklaşımı; havalandırma, ısıtma, sıhhi tesisat ve elektrik modüllerinin modelleme, hesaplama ve raporlama özellikleri.",
        href: functionsPdf, filename: "ax3000-functions-en.pdf", cover: coverTechnical,
      },
      {
        title: "MEP Fonksiyon Açıklamaları — Word", language: "İngilizce", format: "DOCX",
        detail: "Düzenlenebilir belge", size: "2,26 MB", badge: "Word belgesi",
        description: "Teknik fonksiyon açıklamalarının düzenlenebilir Word belgesi. Allplan, AutoCAD ve BricsCAD uyumluluğuna ilişkin bilgiler içerir.",
        href: functionsWord, filename: "ax3000-functions-en.docx", cover: null,
      },
      {
        title: "MEP Fonksiyon Açıklamaları — Hexagon", language: "İngilizce", format: "DOCX",
        detail: "Düzenlenebilir belge", size: "2,26 MB", badge: "Hexagon sürümü",
        description: "DWG ve Brics-BIM vurgulu teknik Word belgesi. AutoCAD ve BricsCAD bilgilerini içerir; Allplan uyumluluğu ifadeleri bu sürümde yer almaz.",
        href: functionsHexagon, filename: "ax3000-functions-hexagon-en.docx", cover: null,
      },
    ],
  },
] as const;
