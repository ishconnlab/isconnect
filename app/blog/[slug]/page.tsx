import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost, blogPosts } from "@/lib/content";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

type Params = {
  slug: string;
};

export async function generateMetadata(props: unknown) {
  const { params } = props as { params: Params };
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found — IshConnect",
      description: "The article you're looking for is not available.",
    };
  }

  const canonicalUrl = `https://ishconnect.vercel.app/blog/${post.slug}`;

  return {
    title: `${post.title} | IshConnect Blog`,
    description: post.excerpt,
    keywords: [post.tag, "engineering", "tech training", "software development"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title}`,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: "https://ishconnect.vercel.app/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: new Date(post.date).toISOString(),
      authors: ["IshConnect"],
      tags: [post.tag],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}`,
      description: post.excerpt,
      images: ["https://ishconnect.vercel.app/og-image.png"],
    },
  };
}

export default function BlogPostPage(props: unknown) {
  const { params } = props as { params: Params };
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container-tight max-w-3xl">
          <Link
            href="/blog"
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
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm text-muted-foreground">
              Related:{" "}
              <Link href="/#services" className="text-accent hover:underline">
                Services
              </Link>
              {" · "}
              <Link href="/#projects" className="text-accent hover:underline">
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
