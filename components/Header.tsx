"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { solutionsMenu } from "@/data/solutionsMenu";
import Image from "next/image";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };



  const productsMenu = [
    {
      title: "ALLPLAN",
      items: [
        { name: "ALLPLAN Basic", href: "/products/allplan-basic" },
        { name: "ALLPLAN Concept", href: "/products/allplan-concept" },
        { name: "ALLPLAN Professional", href: "/products/allplan-professional" },
        { name: "ALLPLAN Ultimate", href: "/products/allplan-ultimate" },
        { name: "CIVIL", href: "/products/civil" },
        { name: "PRECAST", href: "/products/precast" },
      ],
    },
    {
      title: "BİNA VE ALTYAPI",
      items: [
        { name: "Allplan - AEC Endüstrisi için BIM", href: "/products/allplan-aec" },
        { name: "Allplan Bridge - Köprü Tasarımı", href: "/solutions/bridge-design" },
        { name: "AX3000 - Enerji Simülasyonu", href: "/products/ax3000" },
      ],
    },
    {
      title: "İNŞAAT PLANLAMASI",
      items: [
        { name: "Allplan Precast - Prekast Detaylandırma", href: "/products/precast-detail" },
        { name: "Tim - Prekast İş Planlaması", href: "/products/tim" },
        { name: "SDS2 - Çelik Detaylandırma", href: "/products/sds2-detail" },
        { name: "SDS2 - Çelik Yük Planlaması", href: "/products/sds2-load" },
        { name: "SDS2 - Allplan Çelik Anasayfa", href: "/products/sds2-home" },
      ],
    },
    {
      title: "ORTAK ÇÖZÜMLER",
      items: [
        { name: "Allplan Ortak Çözümleri", href: "/products/partner-solutions" },
      ],
    },
    {
      title: "İŞBİRLİĞİ YAZILIMI",
      items: [
        { name: "ALLPLAN BIMPLUS", href: "/products/allplan-bimplus" },
        { name: "Bimplus Hesabı Oluştur", href: "/products/bimplus-signup" },
      ],
    },
  ];

  const navigation = [
    {
      name: language === "tr" ? "Çözümler" : "Solutions",
      megaMenu: "solutions",
    },
    {
      name: language === "tr" ? "Ürünler" : "Products",
      megaMenu: "products",
    },
    { name: language === "tr" ? "Kaynaklar" : "Resources", href: "#resources" },
    { name: language === "tr" ? "Referanslar" : "References", href: "#references" },
    { name: language === "tr" ? "Hakkımızda" : "About", href: "/about" },
    { name: language === "tr" ? "İletişim" : "Contact", href: "/contact" },
  ];

  const handleMouseEnter = (menuName: string) => {
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header
      className="sticky top-0 z-[100] w-full border-b border-white/10 bg-graphite-950 text-white relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-[0.015] bg-technical-grid" />

      {/* Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="#" className="h-7 w-7 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-7 w-7 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-7 w-7 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-7 w-7 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
              <Youtube className="h-3.5 w-3.5" />
            </a>
          </div>
          <a href="mailto:info@aluplan.com.tr" className="text-xs text-steel-300 hover:text-accent transition-colors">info@aluplan.com.tr</a>
        </div>
      </div>
      <div className="h-px bg-white/10" />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logoWhite} alt="Aluplan" height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.megaMenu)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="text-sm font-medium text-white/80 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    {item.name}
                    {item.megaMenu && (
                      <ChevronDown className={`h-4 w-4 opacity-70 group-hover:opacity-100 transition-all ${activeMegaMenu === item.megaMenu ? 'rotate-180' : ''
                        }`} />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              {language === "tr" ? "Ücretsiz Deneme" : "Free Trial"}
            </Button>

            <Button variant="accent" size="sm" className="hidden sm:inline-flex">
              {language === "tr" ? "Teklif Al" : "Get Quote"}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href || "#"}
                  className="text-sm font-medium text-white/80 hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  {language === "tr" ? "Ücretsiz Deneme" : "Free Trial"}
                </Button>
                <Button variant="accent" size="sm" className="w-full">
                  {language === "tr" ? "Teklif Al" : "Get Quote"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mega Menus */}
      {activeMegaMenu === "solutions" && (
        <MegaMenu sections={solutionsMenu} onClose={closeMegaMenu} />
      )}
      {activeMegaMenu === "products" && (
        <MegaMenu sections={productsMenu} onClose={closeMegaMenu} />
      )}
    </header>
  );
};

export default Header;
