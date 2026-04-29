import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles on software engineering, infrastructure, cloud solutions, tech training, and digital transformation from the IshConnect team in Rwanda.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "IshConnect Blog",
    description:
      "Articles on software development, infrastructure, and tech education from IshConnect.",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IshConnect Blog",
    description: "Software engineering, infrastructure, and tech training articles.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="container-tight">
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-border" />
              Blog
            </div>
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Notes from the studio.
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Short, opinionated writing about engineering, infrastructure, and the Academy.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface card-lift"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col p-6">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
