import type { Metadata } from "next";
import Link from "next/link";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { SectionHeader } from "@/components/site/Section";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — IshConnect | Software Development & Tech Training Insights",
  description:
    "Read articles on software engineering, infrastructure, cloud solutions, tech training, and digital transformation from the IshConnect team in Rwanda.",
  alternates: {
    canonical: "https://ishconnect.vercel.app/blog",
  },
  openGraph: {
    title: "IshConnect Blog | Engineering & Tech Training Insights",
    description:
      "Articles on software development, infrastructure, and tech education from IshConnect.",
    type: "website",
    url: "https://ishconnect.vercel.app/blog",
    images: [
      {
        url: "https://ishconnect.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IshConnect Blog",
    description: "Software engineering, infrastructure, and tech training articles.",
    images: ["https://ishconnect.vercel.app/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Blog"
            title="Notes from the studio."
            description="Short, opinionated writing about engineering, infrastructure, and the Academy."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-surface p-6 card-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.readTime}</span>
                </div>
                <h2 className="mt-5 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                  {new Date(p.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotLazy />
    </div>
  );
}
