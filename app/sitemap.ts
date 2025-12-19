import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aluplan.com";
  const paths = [
    "/",
    "/about",
    "/contact",
    "/health",
    "/solutions/architecture",
    "/solutions/structural",
    "/solutions/mep",
    "/solutions/bridge-design",
    "/solutions/steel",
    "/solutions/precast",
    "/solutions/site-planning",
    "/solutions/cds-addon",
    "/solutions/pythonpart",
    "/solutions/pythonpart-generator",
    "/solutions/bimplus",
    "/products/allplan-basic",
    "/products/allplan-professional",
    "/products/allplan-ultimate",
    "/products/precast",
    "/products/allplan-aec",
    "/products/ax3000",
    "/products/bimplus-signup",
    "/products/allplan-bimplus",
    "/products/tim",
    "/products/sds2-detail",
    "/products/sds2-load",
    "/products/sds2-home",
    "/products/partner-solutions",
  ];
  return paths.map((p) => ({ url: `${baseUrl}${p}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 }));
}
