"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import flexsoftLogo from "@/assets/solutions/bimflex/flexsoft-logo.png";
import kolonModel from "@/assets/solutions/bimflex/kolon-model.png";
import kirisModel from "@/assets/solutions/bimflex/kiris-model.png";
import dosemeBoslukModel from "@/assets/solutions/bimflex/doseme-bosluk-model.png";

const previewImages = [
  { src: kolonModel, alt: "BIMFlex kolon donatısı modeli", className: "translate-y-8 rotate-[-4deg]" },
  { src: kirisModel, alt: "BIMFlex kiriş donatısı modeli", className: "z-10 scale-110" },
  { src: dosemeBoslukModel, alt: "BIMFlex döşeme boşluk donatısı modeli", className: "translate-y-10 rotate-[4deg]" },
];

export default function BimflexAnnouncement() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden border border-white/10 bg-[#090D12] shadow-2xl shadow-black/30"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute -right-24 top-[-140px] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  FlexSoft x Aluplan satış ortaklığı
                </span>
                <span className="text-sm text-muted-foreground">
                  FlexSoft AR-GE x Aluplan
                </span>
              </div>

              <h2 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
                Allplan için BIM uyumlu yapı elemanları donatısı
              </h2>

              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-foreground md:text-2xl">
                Donatı modellemesini saatlerden saniyelere indirin
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                <strong className="font-semibold text-foreground">FlexSoft</strong> tarafından
                geliştirilen <strong className="font-semibold text-foreground">BIMFlex</strong>,
                satış ortaklığı kapsamında Aluplan tarafından da sunulabilecektir. Allplan
                içindeki kolon, kiriş, perde duvar ve döşemelerinizi BIM uyumlu gerçek donatı
                nesneleriyle otomatik donatılandırır.
              </p>
            </div>

            <div>
              <Link
                href="/solutions/bimflex"
                className="group inline-flex items-center justify-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                BIMFlex detaylarını incele
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-black/20 p-5">
            <div className="absolute left-5 top-5 z-20 flex items-center gap-3 border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
              <Image src={flexsoftLogo} alt="FlexSoft" width={36} height={36} className="h-9 w-9" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">BIMFlex</p>
                <p className="text-sm text-white">Allplan eklenti paketi</p>
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-0 top-24 grid grid-cols-3 items-end gap-3">
              {previewImages.map((image) => (
                <div
                  key={image.alt}
                  className={`relative h-[250px] overflow-hidden border border-white/10 bg-[#111820] shadow-xl shadow-black/40 ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 30vw, 18vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
