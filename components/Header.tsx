"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { solutionsMenu } from "@/data/solutionsMenu";
import Image from "next/image";
import logoWhite from "@/assets/logo-white.png";
import { AnimatePresence } from "framer-motion";

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
      className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md text-white transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-[0.03] bg-technical-grid pointer-events-none" />

      {/* Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center space-x-2">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={["Facebook", "Twitter", "LinkedIn", "YouTube"][i]}
                className="h-7 w-7 rounded-sm bg-white/5 border border-white/10 hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-all flex items-center justify-center text-gray-400"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <a href="mailto:info@aluplan.com.tr" className="text-xs font-mono text-gray-500 hover:text-[#3B82F6] transition-colors">info@aluplan.com.tr</a>
        </div>
      </div>
      <div className="h-px bg-white/5 w-full" />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logoWhite} alt="Aluplan" height={56} className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative h-20 flex items-center"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.megaMenu)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    className={`text-sm font-medium transition-colors flex items-center gap-1 group ${activeMegaMenu === item.megaMenu ? "text-white" : "text-gray-300 hover:text-white"}`}
                  >
                    {item.name}
                    {item.megaMenu && (
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeMegaMenu === item.megaMenu ? 'rotate-180 text-[#3B82F6]' : 'text-gray-500 group-hover:text-white'}`} />
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
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/5"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:inline-flex border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20">
              {language === "tr" ? "Ücretsiz Deneme" : "Free Trial"}
            </Button>

            <Button className="hidden sm:inline-flex bg-[#3B82F6] hover:bg-[#2563eb] text-white border-0" size="sm">
              {language === "tr" ? "Teklif Al" : "Get Quote"}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-fade-in bg-[#050505]">
              <div className="flex flex-col space-y-3 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href || "#"}
                    className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10 flex flex-col space-y-3 px-2">
                  <Button variant="outline" size="sm" className="w-full border-white/10 bg-white/5 text-white">
                    {language === "tr" ? "Ücretsiz Deneme" : "Free Trial"}
                  </Button>
                  <Button className="w-full bg-[#3B82F6] hover:bg-[#2563eb] text-white">
                    {language === "tr" ? "Teklif Al" : "Get Quote"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mega Menus with AnimatePresence */}
      <AnimatePresence>
        {activeMegaMenu === "solutions" && (
          <MegaMenu key="solutions" sections={solutionsMenu} onClose={closeMegaMenu} />
        )}
        {activeMegaMenu === "products" && (
          <MegaMenu key="products" sections={productsMenu} onClose={closeMegaMenu} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
