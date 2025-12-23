"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

const routeMapping: Record<string, string> = {
  "solutions": "Çözümler",
  "solutions-v2": "Çözümler",
  "products": "Ürünler",
  "about": "Hakkımızda",
  "contact": "İletişim",
  "building-design": "Bina Tasarımı",
  "infrastructure": "Altyapı Tasarımı",
  "construction": "İnşaat Planlaması",
  "addons": "Eklentiler",
  "other": "Diğer Ürünler",
  "architecture": "Mimari",
  "site-planning": "Şantiye Planlama",
  "allplan-2026-yenilikler": "Allplan 2026 Yenilikler",
  "allplan-basic": "Basic",
  "allplan-concept": "Concept",
  "allplan-professional": "Professional",
  "allplan-ultimate": "Ultimate",
  "civil": "Civil",
  "precast": "Precast",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't show on homepage
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((segment) => segment !== "");

  // SEO Schema (JSON-LD)
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        "position": index + 2, // 1 is Home
        "name": routeMapping[segment] || segment.replace(/-/g, " "),
        "item": `https://aluplan.com.tr${url}`
      };
    })
  };

  // Add Home to schema
  breadcrumbList.itemListElement.unshift({
    "@type": "ListItem",
    "position": 1,
    "name": "Ana Sayfa",
    "item": "https://aluplan.com.tr"
  });

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-[#050505] border-b border-white/5 py-3">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs text-gray-400">
          <li>
            <Link href="/" className="hover:text-[#3B82F6] transition-colors flex items-center">
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Ana Sayfa</span>
            </Link>
          </li>

          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const label = routeMapping[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()); // Fallback title case

            return (
              <Fragment key={href}>
                <li>
                  <ChevronRight className="h-3 w-3 text-gray-600" />
                </li>
                <li>
                  {isLast ? (
                    <span className="text-gray-200 font-medium" aria-current="page">
                      {label}
                    </span>
                  ) : (
                    <Link href={href} className="hover:text-[#3B82F6] transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              </Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
