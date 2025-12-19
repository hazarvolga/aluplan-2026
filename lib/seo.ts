import type { Metadata } from "next";

export type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  images?: { url: string; alt?: string }[];
};

export function buildMetadata({ title, description, canonical, images = [] }: SeoProps): Metadata {
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      images: images.map((i) => ({ url: i.url, alt: i.alt })),
      type: "website",
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}

