import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";
import { blogPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — IshConnect` : "Article — IshConnect";
    const desc = p?.excerpt ?? "IshConnect article.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm text-accent hover:underline">
          Back to blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-10 text-center text-sm text-muted-foreground">{error.message}</div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container-tight max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <div className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">
            {post.tag} · {post.readTime}
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

          <article className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
            {post.body.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm text-muted-foreground">
              Related:{" "}
              <Link to="/" hash="services" className="text-accent hover:underline">
                Services
              </Link>{" "}
              ·{" "}
              <Link to="/" hash="projects" className="text-accent hover:underline">
                Case studies
              </Link>
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <ChatbotLazy />
    </div>
  );
}
