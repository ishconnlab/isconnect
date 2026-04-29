import { useState } from "react";
import { Clock, Users, Signal, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Section";
import { EnrollModal } from "./EnrollModal";

const paths = [
  { label: "Beginner", desc: "Foundations & literacy" },
  { label: "Intermediate", desc: "Build real applications" },
  { label: "Advanced", desc: "Ship production systems" },
];

const courses = [
  { title: "Python Programming", level: "Beginner", duration: "8 weeks", enrolled: "210+" },
  {
    title: "Full Stack Web Development",
    level: "Intermediate",
    duration: "16 weeks",
    enrolled: "180+",
  },
  {
    title: "Cybersecurity Fundamentals",
    level: "Intermediate",
    duration: "10 weeks",
    enrolled: "95+",
  },
  {
    title: "Mobile App Development",
    level: "Intermediate",
    duration: "12 weeks",
    enrolled: "120+",
  },
  { title: "Cloud & DevOps", level: "Advanced", duration: "12 weeks", enrolled: "80+" },
  { title: "UI/UX Design", level: "Beginner", duration: "8 weeks", enrolled: "140+" },
];

export function Academy() {
  const [active, setActive] = useState<(typeof courses)[number] | null>(null);

  return (
    <section id="academy" className="py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="IshConnect Academy · by DevQueens"
          title="An engineering academy, not a marketplace."
          description="Curated learning paths taught by practicing engineers. Small cohorts, real projects, measurable outcomes."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {paths.map((p, i) => (
            <div
              key={p.label}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-mono text-xs font-medium text-primary-foreground">
                0{i + 1}
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">{p.label}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 card-lift"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {c.level}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>

              <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4 text-xs">
                <MetaItem icon={Clock} label="Duration" value={c.duration} />
                <MetaItem icon={Signal} label="Level" value={c.level} />
                <MetaItem icon={Users} label="Enrolled" value={c.enrolled} />
              </dl>

              <button
                type="button"
                onClick={() => setActive(c)}
                className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <EnrollModal open={active !== null} onClose={() => setActive(null)} course={active} />
    </section>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3 w-3" />
        <span>{label}</span>
      </div>
      <div className="mt-1 font-medium text-foreground">{value}</div>
    </div>
  );
}
