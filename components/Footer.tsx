import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoWhite from "@/assets/aluplan-logo-white.svg";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/Allplan.Turkey", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/Allplan_Turkey", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/allplan-turkey/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/allplan_turkey/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/c/AllplanTurkey", label: "YouTube" },
  ];

  return (
    <footer className="bg-background text-foreground relative overflow-hidden border-t border-border">
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
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="h-9 w-9 rounded-md bg-muted border border-border hover:bg-accent/20 hover:border-accent/50 hover:text-accent transition-all flex items-center justify-center text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-6">Ürünler</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/allplan-basic" className="text-muted-foreground hover:text-foreground transition-colors">ALLPLAN Basic</Link></li>
              <li><Link href="/products/allplan-concept" className="text-muted-foreground hover:text-foreground transition-colors">ALLPLAN Concept</Link></li>
              <li><Link href="/products/allplan-professional" className="text-muted-foreground hover:text-foreground transition-colors">ALLPLAN Professional</Link></li>
              <li><Link href="/products/allplan-ultimate" className="text-muted-foreground hover:text-foreground transition-colors">ALLPLAN Ultimate</Link></li>
              <li><Link href="/products/civil" className="text-muted-foreground hover:text-foreground transition-colors">CIVIL</Link></li>
              <li><Link href="/products/precast" className="text-muted-foreground hover:text-foreground transition-colors">PRECAST</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-6">ÇÖZÜMLER</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solutions-v2/building-design" className="text-muted-foreground hover:text-foreground transition-colors">BİNA TASARIMI</Link></li>
              <li><Link href="/solutions-v2/infrastructure" className="text-muted-foreground hover:text-foreground transition-colors">ALTYAPI TASARIMI</Link></li>
              <li><Link href="/solutions-v2/construction" className="text-muted-foreground hover:text-foreground transition-colors">İNŞAAT PLANLAMASI</Link></li>
              <li><Link href="/solutions-v2/addons" className="text-muted-foreground hover:text-foreground transition-colors">EKLENTİLER</Link></li>
              <li><Link href="/solutions-v2/other" className="text-muted-foreground hover:text-foreground transition-colors">DİĞER ÜRÜNLER</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500" />
                <span className="text-muted-foreground leading-relaxed">
                  Quick Tower – Workinton<br />
                  İçerenköy Mah. Topçu İbrahim Sok.<br />
                  8/10D No: 5, 34752 Ataşehir / İstanbul
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+902162258441" className="text-muted-foreground hover:text-foreground transition-colors">
                    (+90) 216 225 84 41
                  </a>
                  <a href="tel:+905432119442" className="text-muted-foreground hover:text-foreground transition-colors">
                    (+90) 543 211 94 42
                  </a>
                  <a href="tel:+905494997379" className="text-muted-foreground hover:text-foreground transition-colors">
                    (+90) 549 499 73 79
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <a href="mailto:info@aluplan.com.tr" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@aluplan.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="font-mono text-muted-foreground">© {currentYear} Aluplan Program Sistemleri.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik-politikasi" className="text-muted-foreground hover:text-foreground transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="text-muted-foreground hover:text-foreground transition-colors">Kullanım Şartları</Link>
            <Link href="/kvkk" className="text-muted-foreground hover:text-foreground transition-colors">KVKK</Link>
          </div>
        </div>

        {/* Developer Credits */}
        <div className="pt-4 text-center">
          <p className="text-xs text-muted-foreground/60">
            Design & Develop by{' '}
            <a
              href="https://hazarvolga.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-medium"
            >
              Hazar Volga Ekiz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
