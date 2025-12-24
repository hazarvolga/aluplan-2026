import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aluplan.com.tr";

  // Ana sayfalar
  const mainPages = [
    "/",
    "/about",
    "/contact",
    "/health",
  ];

  // Ürün sayfaları
  const productPages = [
    "/products/allplan",
    "/products/allplan-2026-yenilikler",
    "/products/allplan-aec",
    "/products/allplan-basic",
    "/products/allplan-bimplus",
    "/products/allplan-concept",
    "/products/allplan-professional",
    "/products/allplan-ultimate",
    "/products/architecture",
    "/products/ax3000",
    "/products/bimplus-signup",
    "/products/civil",
    "/products/partner-solutions",
    "/products/precast",
    "/products/precast-detail",
    "/products/sds2-detail",
    "/products/sds2-home",
    "/products/sds2-load",
    "/products/tim",
  ];

  // Çözüm sayfaları
  const solutionPages = [
    "/solutions/architecture",
    "/solutions/structural",
    "/solutions/mep",
    "/solutions/infrastructure",
    "/solutions/road-railway",
    "/solutions/bridge-design",
    "/solutions/precast",
    "/solutions/steel",
    "/solutions/site-planning",
    "/solutions/cds-addon",
    "/solutions/pythonpart",

    "/solutions/bimplus",
    "/solutions/addon-channel",
    "/solutions/oska",
    "/solutions/poz-catalog",
    "/solutions/rebar-engineering",
    "/solutions/imar-yonetmeligi-bim-eklentisi",
    "/solutions/allplan-bulut-hizmetleri",
    "/solutions/features-allplan-bridge",
    "/solutions/modeling-of-precast-girder-bridges",
  ];

  // AX3000 alt sayfaları
  const ax3000Pages = [
    "/solutions/ax3000",
    "/solutions/ax3000-mekanik-tesisat",
    "/solutions/ax3000-virtual-reality",
    "/solutions/ax3000-yapi-fizigi",
    "/solutions/ax3000/elektrik",
    "/solutions/ax3000/havalandirma",
    "/solutions/ax3000/isitma",
    "/solutions/ax3000/konut-havalandirma",
    "/solutions/ax3000/sihhi-tesisat",
    "/solutions/ax3000/sprinkler",
  ];

  // Scalypso alt sayfaları
  const scalypsoPages = [
    "/solutions/scalypso",
    "/solutions/scalypso/converter",
    "/solutions/scalypso/mobile",
    "/solutions/scalypso/modeler",
    "/solutions/scalypso/videos",
    "/solutions/scalypso/viewer",
  ];

  // Addon sayfaları
  const addonPages = [
    "/solutions/addons",
    "/solutions/addons/2d-dwg-converter",
    "/solutions/addons/drive-curve",
    "/solutions/addons/geometry-tools",
    "/solutions/addons/graphical-text",
    "/solutions/addons/parametric-terrain",
    "/solutions/addons/ramp",
    "/solutions/addons/sketchup-converter",
    "/solutions/addons/steel-components",
    "/solutions/addons/three-dimensioning",
  ];

  // Tüm sayfaları birleştir
  const allPaths = [
    ...mainPages,
    ...productPages,
    ...solutionPages,
    ...ax3000Pages,
    ...scalypsoPages,
    ...addonPages,
  ];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1.0 : path.startsWith("/products/") ? 0.9 : 0.8,
  }));
}
