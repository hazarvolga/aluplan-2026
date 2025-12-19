export type OrganizationLD = {
  name: string;
  url: string;
  logo?: string;
};

export function organizationJsonLd({ name, url, logo }: OrganizationLD) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo ? { logo } : {}),
  };
}

export type BreadcrumbItem = { name: string; item: string };
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({ "@type": "ListItem", position: idx + 1, name: it.name, item: it.item })),
  };
}

export type ProductLD = {
  name: string;
  description?: string;
  url: string;
  image?: string[];
  brand?: string;
};
export function productJsonLd({ name, description, url, image = [], brand }: ProductLD) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    ...(description ? { description } : {}),
    url,
    ...(image.length ? { image } : {}),
    ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
  };
}

export type VideoLD = {
  name: string;
  description?: string;
  thumbnailUrl?: string[];
  uploadDate?: string;
  contentUrl?: string;
  embedUrl?: string;
};
export function videoJsonLd(video: VideoLD) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    ...video,
  };
}

