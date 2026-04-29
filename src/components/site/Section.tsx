import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "md:flex-col md:items-center" : ""
      }`}
    >
      <div className={`max-w-2xl ${alignCls}`}>
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-6 bg-border" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
