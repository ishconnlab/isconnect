import { SectionHeader } from "./Section";

const phases = [
  {
    tag: "2020",
    title: "Founded in Kigali",
    period: "2020",
    points: [
      "IshConnect established to bridge the digital skills gap in Rwanda",
      "Company vision defined and community initiated",
      "Initial training concept designed",
    ],
  },
  {
    tag: "2021",
    title: "First Training Cohort",
    period: "2021",
    points: [
      "Launched first Python programming bootcamp",
      "25 students trained with hands-on projects",
      "Mentorship model established",
    ],
  },
  {
    tag: "2022",
    title: "Enterprise Solutions",
    period: "2022",
    points: [
      "Expanded into software development services",
      "Delivered first enterprise project",
      "Established development team and partnerships",
    ],
  },
  {
    tag: "2023",
    title: "Regional Growth",
    period: "2023",
    points: [
      "Expanded to Uganda, South Africa and Kenya",
      "Enabled remote service delivery",
      "Built cross-border collaborations",
    ],
  },
  {
    tag: "2024",
    title: "Cybersecurity Division",
    period: "2024",
    points: [
      "Launched cybersecurity services and training",
      "Introduced platform audits and protection",
      "Adopted security-first engineering practices",
    ],
  },
  {
    tag: "2025",
    title: "AI & Innovation Hub",
    period: "2025",
    points: [
      "Opened AI research hub in Kigali",
      "Started AI experimentation and development",
      "Built AI-powered solutions",
    ],
  },
  {
    tag: "2026+",
    title: "Pan-African Impact",
    period: "2026 \u2192",
    points: [
      "Pan-African expansion strategy",
      "Train 1,000+ developers",
      "Build enterprise-grade platforms",
      "Launch open-source ecosystem",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-border py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Roadmap"
          title="Where we're going."
          description="A transparent view of how IshConnect is building from foundation to continent-scale delivery."
        />

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {phases.map((p) => (
            <li
              key={p.tag}
              className="relative flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent">{p.tag}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.period}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
