import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getAllBlogPostSlugs } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Params }) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for is not available.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.tag, "engineering", "tech training", "software development"],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["IshConnect"],
      tags: [post.tag],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tag = post.tag;
  const readTime = post.readTime;
  const title = post.title;
  const excerpt = post.excerpt;
  const body = post.body;
  const image = post.image;

  return (
    <main className="pt-28 pb-24">
      <div className="container-tight max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>All articles</span>
        </Link>

        <div className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">
          {tag} &middot; {readTime}
        </div>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{excerpt}</p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <article className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
          {body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className="text-sm text-muted-foreground">
            Related:{" "}
            <Link href="/#services" className="text-accent hover:underline">
              Services
            </Link>
            {" \u00b7 "}
            <Link href="/#projects" className="text-accent hover:underline">
              Case studies
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}
