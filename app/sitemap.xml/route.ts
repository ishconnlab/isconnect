import { caseStudies, blogPosts } from "@/lib/content";

const BASE_URL = "https://ishconnect.vercel.app";

export async function GET() {
  const staticPages = ["", "/#projects"];
  const caseStudyPages = caseStudies.map((c) => `/case-study/${c.slug}`);
  const blogPages = blogPosts.map((b) => `/blog/${b.slug}`);
  const allPages = [...staticPages, ...caseStudyPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
    .map(
      (url) =>
        `  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === "" ? "1.0" : "0.7"}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
