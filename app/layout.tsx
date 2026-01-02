import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
// import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import SkipLink from "@/components/a11y/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalTrialCTA from "@/components/GlobalTrialCTA";
import Breadcrumb from "@/components/ui/breadcrumb";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CopyProtection from "@/components/CopyProtection";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";


// Fonts disabled for Docker build - loaded via CDN in globals.css
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });
// 
// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
//   display: "swap",
// });
// 
// const ibmPlexMono = IBM_Plex_Mono({
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
//   variable: "--font-ibm-plex-mono",
//   display: "swap",
// });

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
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-5TQ6VQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQYT0D9MQ5');
            gtag('config', 'GT-5TQ6VQ4');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <Header />
          <Breadcrumb />
          <main id="main" aria-label="Ana içerik">{children}</main>
          <GlobalTrialCTA />
          <Footer />
          <CopyProtection />
          <CookieConsent />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
