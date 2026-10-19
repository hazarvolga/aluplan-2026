"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, Download, FileText } from "lucide-react";
import AddonDetailTemplate from "@/components/templates/AddonDetailTemplate";
import { Button } from "@/components/ui/button";
import { documentGroups } from "./documents";

export default function DocumentsPage() {
  return (
    <AddonDetailTemplate
      title="AX3000 Dokümanları"
      subtitle="Broşürler ve teknik kaynaklar"
      description="AX3000 çözümlerini yakından tanıyın. Ürün broşürlerine ve teknik fonksiyon açıklamalarına tek bir yerden ulaşın."
      sections={[
        <section key="navigation" className="border-b border-border bg-muted/30 py-6">
          <div className="container flex flex-wrap items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
            <Link href="/products/ax3000" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> AX3000 ürününe dön
            </Link>
            <nav aria-label="Doküman kategorileri" className="flex flex-wrap gap-4">
              {documentGroups.map((group) => (
                <a key={group.id} href={`#${group.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  {group.title} <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </section>,
        ...documentGroups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28 py-14 md:py-20 even:bg-muted/20">
            <div className="container px-4 sm:px-6 lg:px-8">
              <div className="mb-8 max-w-2xl">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">AX3000 / {group.documents.length} doküman</p>
                <h2 id={`${group.id}-title`} className="mb-3 font-display text-3xl font-bold md:text-4xl">{group.title}</h2>
                <p className="text-muted-foreground">{group.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.documents.map((doc) => (
                  <article key={doc.filename} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative flex h-52 items-center justify-center border-b border-border bg-muted/30 p-5">
                      {doc.cover ? (
                        <Image src={doc.cover} alt={`${doc.title} — ${doc.language} kapak önizlemesi`} className="h-full w-full object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
                      ) : (
                        <div className="flex flex-col items-center gap-3 text-accent">
                          <FileText className="h-16 w-16" strokeWidth={1} aria-hidden="true" />
                          <span className="font-mono text-sm tracking-widest">WORD / DOCX</span>
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium">{doc.badge}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">{doc.language} · {doc.format}</p>
                      <h3 className="mb-3 font-display text-xl font-bold">{doc.title}</h3>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                      <p className="mb-4 text-xs text-muted-foreground">{doc.detail} · {doc.size}</p>
                      <Button asChild className="w-full">
                        <a href={doc.href} download={doc.filename} aria-label={`${doc.title} (${doc.language}, ${doc.format}) indir`}>
                          <Download aria-hidden="true" /> {doc.format === "PDF" ? "PDF İndir" : "Word İndir"}
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )),
      ]}
    />
  );
}
