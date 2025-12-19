import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 text-white relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.015] bg-technical-grid" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src={logoWhite} alt="Aluplan" className="h-10 w-auto" height={40} />
            </Link>
            <p className="text-sm text-steel-300 mb-4 leading-relaxed">
              1995&apos;ten beri Türkiye&apos;nin güvenilir Allplan distribütörü. 
              Mimari ve mühendislik projeleriniz için profesyonel BIM çözümleri.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-9 w-9 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-sm bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/30 transition-all flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Ürünler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/allplan-aec" className="text-steel-300 hover:text-accent transition-colors">Allplan Architecture</Link></li>
              <li><Link href="/products/allplan-aec" className="text-steel-300 hover:text-accent transition-colors">Allplan Engineering</Link></li>
              <li><Link href="/solutions/bridge-design" className="text-steel-300 hover:text-accent transition-colors">Allplan Bridge</Link></li>
              <li><Link href="/products/precast" className="text-steel-300 hover:text-accent transition-colors">Allplan Precast</Link></li>
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">Paket Karşılaştırma</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Kaynaklar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">İndirme Merkezi</a></li>
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">Webinarlar</a></li>
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">Eğitim Videoları</a></li>
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">Dokümantasyon</a></li>
              <li><a href="#" className="text-steel-300 hover:text-accent transition-colors">Destek Merkezi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-steel-300">
                  Quick Tower - Workinton<br />
                  Ataşehir, Istanbul
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+902161234567" className="text-steel-300 hover:text-accent transition-colors">
                  +90 (216) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@aluplan.com.tr" className="text-steel-300 hover:text-accent transition-colors">
                  info@aluplan.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 group">
          <div className="pointer-events-none h-px w-0 group-hover:w-full transition-all duration-700 bg-accent/50 mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel-400">
            <p className="font-mono">© {currentYear} Aluplan Program Sistemleri. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-accent transition-colors">Kullanım Şartları</a>
              <a href="#" className="hover:text-accent transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
