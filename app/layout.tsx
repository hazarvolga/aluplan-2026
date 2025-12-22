import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import SkipLink from "@/components/a11y/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#0a0e27',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Aluplan - Premium Mühendislik Çözümleri",
    template: "%s | Aluplan"
  },
  description: "Mimarlık, mühendislik ve inşaat sektörü için premium yazılım çözümleri, BIM danışmanlığı ve eğitim hizmetleri.",
  keywords: ["BIM", "Allplan", "İnşaat Mühendisliği", "Mimari Tasarım", "Aluplan", "Yazılım", "AX3000", "Statik Analiz"],
  authors: [{ name: "Aluplan Ekibi" }],
  creator: "Aluplan",
  metadataBase: new URL("https://aluplan.com.tr"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://aluplan.com.tr",
    title: "Aluplan - Premium Mühendislik Çözümleri",
    description: "Mimarlık, mühendislik ve inşaat sektörü için premium yazılım çözümleri.",
    siteName: "Aluplan",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluplan - Premium Mühendislik Çözümleri',
    description: 'Mimarlık, mühendislik ve inşaat sektörü için premium yazılım çözümleri.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SkipLink />
        <Header />
        <Breadcrumb />
        <main id="main" aria-label="Ana içerik">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
