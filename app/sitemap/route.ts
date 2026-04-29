import { caseStudies, blogPosts } from "@/lib/content";

const SITE_URL = "https://ishconnect.vercel.app";

export async function GET() {
  const staticPages = ["", "/blog", "/#projects"];
  const caseStudyPages = caseStudies.map((c) => `/case-study/${c.slug}`);
  const blogPages = blogPosts.map((b) => `/blog/${b.slug}`);
  const allPages = [...staticPages, ...caseStudyPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (url) =>
      `  <url>\n    <loc>${SITE_URL}${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === "" ? "1.0" : "0.7"}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
