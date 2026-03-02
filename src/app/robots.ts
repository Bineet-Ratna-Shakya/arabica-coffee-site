import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/*?*", "/_next/"],
      },
      // AI Search Bots - Allow for AI citations
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Anthropic-AI",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Block known scrapers
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
