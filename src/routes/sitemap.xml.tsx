import { createFileRoute } from "@tanstack/react-router";
import { caseStudies, blogPosts } from "@/lib/content";

const BASE_URL = "https://ishconnect.vercel.app";

export const Route = createFileRoute("/sitemap/xml")({
  loader: async () => {
    const staticPages = ["", "/#projects"];

    const caseStudyPages = caseStudies.map((c) => `/case-study/${c.slug}`);

    const blogPages = blogPosts.map((b) => `/blog/${b.slug}`);

    const allPages = [...staticPages, ...caseStudyPages, ...blogPages];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (url) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  },
});
