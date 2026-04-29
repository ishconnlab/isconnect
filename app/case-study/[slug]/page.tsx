import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getAllCaseStudySlugs } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Params }) {
  const { slug } = await props.params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The case study you are looking for is not available.",
    };
  }

  const canonicalUrl = `/case-study/${study.slug}`;

  return {
    title: study.title,
    description: study.excerpt ?? study.tagline,
    keywords: [study.category, "case study", "software development", "project"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: study.title,
      description: study.tagline,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: `/projects/${study.slug}.png`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.tagline,
      images: [`/projects/${study.slug}.png`],
    },
  };
}

export default async function CaseStudyPage(props: { params: Params }) {
  const { slug } = await props.params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  const imageSrc = `/projects/${study.slug}.png`;
  const liveUrl = study.liveUrl;

  return (
    <main className="pt-28 pb-24">
      <div className="container-tight">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to projects</span>
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent">
            {study.category}
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{study.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{study.tagline}</p>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <Image
            src={imageSrc}
            alt={study.title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <Block title="Challenge" body={study.challenge} />
            <Block title="Solution" body={study.solution} />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Impact
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {study.impact.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-surface p-5">
                    <div className="text-2xl font-semibold">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {study.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:bg-surface transition-colors"
            >
              View Live <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start a similar project
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-foreground/85">{body}</p>
    </div>
  );
}
