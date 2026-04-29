const logos = [
  "Rwanda Development Board (RDB)",
  "Rwanda ICT Chamber",
  "Ingazi",
  "EdTech Solutions Rwanda",
  "Mastery Hub",
  "Kiyumba TVET",
];

export function TrustedLogos() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-background">
      <div className="container-tight py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Trusted by teams across Africa
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {logos.map((l) => (
              <li
                key={l}
                className="text-sm font-medium tracking-tight text-foreground/60 transition-colors hover:text-foreground"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
