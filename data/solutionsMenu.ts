export type MegaMenuItem = { name: string; href: string };
export type MegaMenuSection = { title: string; items: MegaMenuItem[] };

export const solutionsMenu: MegaMenuSection[] = [
  {
    title: "BİNA TASARIMI",
    items: [
      { name: "Mimari", href: "/solutions/architecture" },
      { name: "Strüktürel Mühendislik", href: "/solutions/structural" },
      { name: "MEP", href: "/solutions/mep" },
      { name: "ALLPLAN ENDÜSTRİ ÇÖZÜMLERİ", href: "/solutions/allplan-industry" },
    ],
  },
  {
    title: "ALTYAPI TASARIMI",
    items: [
      { name: "Altyapı Mühendisliği", href: "/solutions/infrastructure" },
      { name: "Yol ve Demiryolu Tasarımı", href: "/solutions/road-railway" },
      { name: "Köprü Tasarımı", href: "/solutions/bridge-design" },
    ],
  },
  {
    title: "İNŞAAT PLANLAMASI",
    items: [
      { name: "Prekast Üretimi", href: "/solutions/precast" },
      { name: "Çelik Detaylandırma & İmalat", href: "/solutions/steel" },
      { name: "Şantiye Planlaması", href: "/solutions/site-planning" },
    ],
  },
  {
    title: "EKLENTİLER",
    items: [

      { name: "CDS Add-On", href: "/solutions/cds-addon" },
      { name: "Allto PytonPart Generator", href: "https://allplantools.com/" },
      { name: "Allto PytonPart", href: "/solutions/pythonpart" },
      { name: "AX3000 MEP", href: "/solutions/ax3000" },
      { name: "Scalypso", href: "/solutions/scalypso" },
    ],
  },
  {
    title: "DİĞER ÜRÜNLER",
    items: [
      { name: "Allplan BIMPLUS", href: "/solutions/bimplus" },
      { name: "Donatı Mühendisliği", href: "/solutions/rebar-engineering" },
      { name: "İmar Yönetmeliği BIM Eklentisi", href: "/solutions/imar-yonetmeligi-bim-eklentisi" },
      { name: "BIMX5", href: "/solutions/bimx5" },
      { name: "Allplan Oska İşbirliği", href: "/solutions/oska" },
      { name: "Allplan Poz Kataloğu", href: "/solutions/poz-catalog" },
    ],
  },
];

