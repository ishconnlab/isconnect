import {
  Code2,
  Smartphone,
  ShieldCheck,
  Cloud,
  Database,
  PenTool,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Robust web platforms engineered for performance, accessibility, and growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native-feeling iOS and Android apps built to ship, adapt, and scale.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Threat modeling, audits, and hardening that protect what your business depends on.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Resilient cloud architecture designed for uptime, cost control, and scale.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    desc: "APIs, data pipelines, and infrastructure that stay reliable under real load.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interfaces with clarity and intent — designed for users, measured by outcomes.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Services"
          title="What we build"
          description="Six disciplines, one engineering standard. Shipped with the same rigor whether it's a product launch or core infrastructure."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-5 rounded-xl border border-border bg-surface p-7 card-lift"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors group-hover:border-foreground/40 group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
