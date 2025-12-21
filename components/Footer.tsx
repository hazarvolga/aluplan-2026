import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-technical-grid pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src={logoWhite} alt="Aluplan" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" height={40} />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              1995&apos;ten beri Türkiye&apos;nin güvenilir Allplan distribütörü.
              Mimari ve mühendislik projeleriniz için profesyonel BIM çözümleri.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-md bg-white/5 border border-white/10 hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-all flex items-center justify-center text-gray-400">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-6">Ürünler</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/allplan-aec" className="text-gray-400 hover:text-white transition-colors">Allplan Architecture</Link></li>
              <li><Link href="/products/allplan-aec" className="text-gray-400 hover:text-white transition-colors">Allplan Engineering</Link></li>
              <li><Link href="/solutions/bridge-design" className="text-gray-400 hover:text-white transition-colors">Allplan Bridge</Link></li>
              <li><Link href="/products/precast" className="text-gray-400 hover:text-white transition-colors">Allplan Precast</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Paket Karşılaştırma</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-6">Kaynaklar</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İndirme Merkezi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinarlar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eğitim Videoları</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dokümantasyon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destek Merkezi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500" />
                <span className="text-gray-400 leading-relaxed">
                  Quick Tower - Workinton<br />
                  Ataşehir, Istanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <a href="tel:+902161234567" className="text-gray-400 hover:text-white transition-colors">
                  +90 (216) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <a href="mailto:info@aluplan.com.tr" className="text-gray-400 hover:text-white transition-colors">
                  info@aluplan.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p className="font-mono">© {currentYear} Aluplan Program Sistemleri.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-gray-400 transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
