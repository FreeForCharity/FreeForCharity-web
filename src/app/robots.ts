import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.freeforcharity.org";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}



