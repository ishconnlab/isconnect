import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";
import { caseStudies } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Case Studies"
          title="Projects, engineered end to end."
          description="From operations platforms to AI systems — a selection of work we've delivered across sectors."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background card-lift"
             >
               <div className="flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Case Study
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center border-t border-border pt-4">
                  <a
                    href={`/case-study/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
