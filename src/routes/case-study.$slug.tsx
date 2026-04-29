import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";
import { caseStudies } from "@/lib/content";

//  IMPORT IMAGES
import greenafricaImg from "@/assets/projects/greenafrica.png";
import logisticsImg from "@/assets/projects/logistics.png";
import foodieImg from "@/assets/projects/foodieapp.png";
import deepfakeImg from "@/assets/projects/ai-deepfake.png";
import healguardImg from "@/assets/projects/healguard.png";
import agrilinkImg from "@/assets/projects/agrilink.png";

// ✅IMAGE MAP
const imageMap: Record<string, string> = {
  "greenafrica-dashboard": greenafricaImg,
  "logistics-command-center": logisticsImg,
  foodieapp: foodieImg,
  "ai-deepfake-detector": deepfakeImg,
  "healguard-ai": healguardImg,
  "agrilink-rwanda": agrilinkImg,
};

// LIVE URL MAP (no schema change)
const liveUrlMap: Record<string, string> = {
  "greenafrica-dashboard": "https://green-africa-green.vercel.app",
  "logistics-command-center": "https://github.com/ishl250",
  foodieapp: "https://www.instagram.com/reel/DSx_XC7AVjD/",
  "ai-deepfake-detector": "https://www.instagram.com/p/DTVi4roD-hH/",
  "healguard-ai": "https://github.com/ishl250",
  "agrilink-rwanda":
    "https://www.linkedin.com/posts/ish-claude_fullstackdevelopment-agritech-mobileapp-activity-7426318476983685120-8a8p?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGenMtABfviUqpQbXcYfiVVnp_zOX9D4KkA",
};

export const Route = createFileRoute("/case-study/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();

  const imageSrc = imageMap[study.slug];
  const liveUrl = liveUrlMap[study.slug];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pt-28 pb-24">
        <div className="container-tight">
          {/* Back */}
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          {/* Header */}
          <header className="mt-8 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              {study.category}
            </div>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              {study.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">{study.tagline}</p>
          </header>

          {/* HERO IMAGE */}
          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <img
              src={imageSrc || "/fallback.png"}
              alt={study.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
            {/* LEFT */}
            <div className="space-y-10">
              <Block title="Challenge" body={study.challenge} />
              <Block title="Solution" body={study.solution} />

              {/* Impact */}
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

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">
              {/* Tech stack */}
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

              {/* ✅ LIVE LINK */}
              <a
                href={liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:bg-surface transition"
              >
                View Live <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* CTA */}
              <a
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start a similar project
              </a>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <ChatbotLazy />
    </div>
  );
}

/* REUSABLE BLOCK */
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
