import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";
import { SectionHeader } from "@/components/site/Section";
import { blogPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — IshConnect" },
      {
        name: "description",
        content: "Notes on engineering, infrastructure, and education from the IshConnect team.",
      },
      { property: "og:title", content: "IshConnect Blog" },
      {
        property: "og:description",
        content: "Engineering & Academy notes from IshConnect.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
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
                to="/blog/$slug"
                params={{ slug: p.slug }}
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
