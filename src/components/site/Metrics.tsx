import { Users, Rocket, GraduationCap, Sparkles } from "lucide-react";

const metrics = [
  { icon: GraduationCap, value: "500+", label: "Students Trained" },
  { icon: Rocket, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "10+", label: "Programs" },
  { icon: Sparkles, value: "98%", label: "Satisfaction" },
];

export function Metrics() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-tight grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {metrics.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-center gap-4 px-2 py-6 md:px-8 md:py-8 ${
              i < 2 ? "border-b border-border md:border-b-0" : ""
            } ${i % 2 === 1 ? "border-l border-border md:border-l-0" : ""}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {value}
              </div>
              <div className="text-xs text-muted-foreground md:text-sm">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
