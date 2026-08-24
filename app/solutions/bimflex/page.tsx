import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ExternalLink,
  Layers3,
  PanelTop,
  PlayCircle,
  Rows3,
  SquareDashedBottom,
  Workflow,
  Zap,
} from "lucide-react";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import flexsoftLogo from "@/assets/solutions/bimflex/flexsoft-logo.png";
import kolonModel from "@/assets/solutions/bimflex/kolon-model.png";
import kirisModel from "@/assets/solutions/bimflex/kiris-model.png";
import perdeVideo from "@/assets/solutions/bimflex/perde-duvar-video.jpg";
import duvarBoslukModel from "@/assets/solutions/bimflex/duvar-bosluk-model.png";
import dosemeVideo from "@/assets/solutions/bimflex/doseme-video.jpg";
import dosemeBoslukModel from "@/assets/solutions/bimflex/doseme-bosluk-model.png";
import karmasikSekilVideo from "@/assets/solutions/bimflex/karmasik-sekil-video.jpg";

export const metadata: Metadata = {
  title: {
    absolute: "BIMFlex Allplan Eklenti Paketi | Aluplan",
  },
  description:
    "FlexSoft tarafından geliştirilen BIMFlex Allplan eklenti paketi ile kolon, kiriş, perde, döşeme ve boşluk donatılarını otomatik modelleyin.",
  alternates: {
    canonical: "https://aluplan.com.tr/solutions/bimflex",
  },
  openGraph: {
    title: "BIMFlex Allplan Eklenti Paketi",
    description:
      "Allplan için BIM uyumlu yapı elemanları donatısı. BIMFlex, FlexSoft ve Aluplan satış ortaklığı kapsamında Aluplan tarafından da sunulabilecektir.",
    url: "https://aluplan.com.tr/solutions/bimflex",
    type: "website",
  },
};

type ModuleCard = {
  module: string;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  icon: typeof Building2;
};

type VideoCard = {
  title: string;
  description: string;
  youtubeId: string;
};

const modules: ModuleCard[] = [
  {
    module: "Modül 01",
    title: "Kolon Donatısı",
    description:
      "Kolon elemanlarının boyuna donatı yerleşimini ve etriye sıklaştırma bölgelerini otomatik modeller.",
    bullets: ["Şaşırtmalı donatı yerleşimi", "Katı modellerde çalışma", "Revizyon sonrası otomatik güncelleme"],
    image: kolonModel,
    icon: Building2,
  },
  {
    module: "Modül 02",
    title: "Kiriş Donatısı",
    description:
      "Kiriş elemanlarının açıklık, mesnet, etriye ve büküm detaylarını Allplan içinde hızlıca hazırlar.",
    bullets: ["Açıklık ve mesnet donatıları", "Etriye ve büküm detayları", "Kesit etiketleme akışı"],
    image: kirisModel,
    icon: Rows3,
  },
  {
    module: "Modül 03",
    title: "Perde Duvar Donatısı",
    description:
      "Perde duvarlarda düşey, yatay, çiroz ve başlık bölgesi donatılarını tek akışta düzenler.",
    bullets: ["Düşey ve yatay donatı", "Çiroz ve başlık bölgeleri", "Temel filizi hazırlığı"],
    image: perdeVideo,
    icon: PanelTop,
  },
  {
    module: "Modül 04",
    title: "Duvar Boşluk Kenarı Donatısı",
    description:
      "Kapı ve pencere boşluklarını algılayarak U, kapalı etriye, köşe çaprazı ve ilave donatıları modeller.",
    bullets: ["Boşluk bazlı seçim", "Dar ayaklarda otomatik etriye", "Boşluk taşınınca güncelleme"],
    image: duvarBoslukModel,
    icon: SquareDashedBottom,
  },
  {
    module: "Modül 05",
    title: "Döşeme Donatısı",
    description:
      "Döşeme plakalarında üst mesnet ve dağıtım donatılarını komşu döşemelerle hizalı çalışacak şekilde oluşturur.",
    bullets: ["Üst ve dağıtım donatısı", "Komşu döşemelerle hizalama", "Stok boyuna göre bölme"],
    image: dosemeVideo,
    icon: Layers3,
  },
  {
    module: "Modül 06",
    title: "Döşeme Boşluk Kenarı Donatısı",
    description:
      "Merdiven, asansör ve tesisat boşlukları çevresindeki kritik takviye donatılarını otomatik ekler.",
    bullets: ["Boşluk boyutuna göre ayar", "Köşe takviyeleri", "Revizyona dayanıklı yerleşim"],
    image: dosemeBoslukModel,
    icon: SquareDashedBottom,
  },
  {
    module: "Modül 07",
    title: "Karmaşık Şekil Donatısı",
    description:
      "Standart kalıba girmeyen betonarme yüzeyler için U, L veya düz profilli donatıları otomatik oluşturur.",
    bullets: ["Yüzeye göre otomatik profil", "Eğik ve çapraz yüzeyler", "Boşluk ve kesimleri dikkate alma"],
    image: karmasikSekilVideo,
    icon: Workflow,
  },
];

const valueProps = [
  "Allplan içinde çalışan BIM uyumlu yapı elemanları donatısı",
  "Geometri değiştiğinde kendini güncelleyen modül yaklaşımı",
  "Donatı modelleme ve detay hazırlığını saatlerden saniyelere indiren otomasyon",
];

const videos: VideoCard[] = [
  {
    title: "BIMFlex Allplan Column Reinforcement",
    description:
      "Kolon elemanlarında boyuna donatı yerleşimi ve etriye sıklaştırma bölgelerinin Allplan içinde nasıl otomatik modellendiğini izleyin.",
    youtubeId: "1yQ_nxoQuWE",
  },
  {
    title: "BIMFlex Allplan Beam Reinforcement",
    description:
      "Kirişlerde açıklık ve mesnet donatıları, etriyeler ve büküm detaylarının geometri değişikliklerine uyumlu hazırlanışını görün.",
    youtubeId: "eBVa_yAQJFo",
  },
  {
    title: "BIMFlex Allplan Wall Reinforcement",
    description:
      "Perde duvarlarda düşey, yatay, çiroz ve başlık bölgesi donatılarının tek akışta modellenmesini adım adım inceleyin.",
    youtubeId: "Qyy_hRNkOtY",
  },
  {
    title: "BIMFlex Allplan Slab Reinforcement",
    description:
      "Döşeme plakalarında üst mesnet ve dağıtım donatılarının komşu döşemelerle hizalı ve revizyona dayanıklı oluşturulmasını izleyin.",
    youtubeId: "ZFjW2ArzdsE",
  },
  {
    title: "BIMFlex Allplan Slab Opening Edge Reinforcement",
    description:
      "Merdiven, asansör ve tesisat boşlukları çevresindeki köşe takviye donatılarının otomatik eklenme sürecini görün.",
    youtubeId: "4LlhiiWdHpg",
  },
  {
    title: "BIMFlex Allplan Complex Shape Reinforcement",
    description:
      "Standart kalıba girmeyen karmaşık betonarme yüzeylerde U, L veya düz profilli donatı üretim akışını keşfedin.",
    youtubeId: "gwgVeTrtcM8",
  },
];

export default function BimflexPage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#070A0E] px-6 py-24 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3">
              <Image src={flexsoftLogo} alt="FlexSoft" width={34} height={34} className="h-8 w-8" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                FlexSoft AR-GE x Aluplan
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
              BIMFlex Allplan eklenti paketi
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              Allplan için BIM uyumlu yapı elemanları donatısı. FlexSoft tarafından geliştirilen
              BIMFlex donatı otomasyonu ürün ailesi, satış ortaklığı kapsamında Aluplan
              tarafından da kullanıcılara sunulabilecektir.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://flexsoftarge.com/allplan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Demo ve lisans talebi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://flexsoftarge.com/allplan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
              >
                FlexSoft ürün sayfası
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] border border-white/10 bg-black/20 p-5 shadow-2xl shadow-black/40">
            <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Donatı Otomasyonu
              </span>
              <BadgeCheck className="h-5 w-5 text-accent" />
            </div>
            <Image
              src={kolonModel}
              alt="BIMFlex Allplan kolon donatısı modeli"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover pt-16"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A0E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Column Reinforcement</p>
              <p className="mt-2 max-w-md text-2xl font-bold text-white">
                Boyuna donatı ve etriyeler, dakikalar yerine saniyeler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Neden BIMFlex?</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Yapı elemanı bazlı, revizyona dayanıklı donatı akışı.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item} className="border border-border bg-card p-6">
                <Zap className="mb-5 h-5 w-5 text-accent" />
                <p className="leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Yapı Elemanları Paketi</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              7 modül, tek Allplan donatı otomasyonu ailesi.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group overflow-hidden border border-white/10 bg-background">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={`BIMFlex ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{item.module}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-muted-foreground">{item.description}</p>
                    <ul className="mt-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-gray-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Tanıtım Videoları</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                BIMFlex modüllerini Allplan içinde çalışırken izleyin.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              FlexSoft videoları, her donatı modülünün Allplan iş akışında nasıl davrandığını
              kısa ve doğrudan örneklerle gösterir. Demo öncesi hangi modülün projenize daha
              hızlı değer katacağını görmek için iyi bir başlangıç noktasıdır.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((video) => (
              <article key={video.youtubeId} className="overflow-hidden border border-border bg-card">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex items-center gap-2 border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    <PlayCircle className="h-4 w-4" />
                    Video
                  </div>
                  <h3 className="text-xl font-bold text-white">{video.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Canlı Demo ve Lisanslama</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              BIMFlex&apos;i projenizde canlı görün.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Modülleri gerçek bir Allplan iş akışında incelemek veya lisanslama hakkında bilgi almak için
              FlexSoft ürün sayfası üzerinden demo ve lisans talebi oluşturabilirsiniz.
            </p>
          </div>
          <a
            href="https://flexsoftarge.com/allplan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-foreground px-7 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
          >
            FlexSoft üzerinden talep oluştur
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
