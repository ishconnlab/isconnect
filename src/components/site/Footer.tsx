import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface GroupLink {
  label: string;
  href: string;
  desc: string;
  internal?: boolean;
}

const groups: { title: string; links: GroupLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#team", desc: "Meet the team behind IshConnect" },
      { label: "Team", href: "/#team", desc: "Senior engineers, designers, educators" },
      { label: "Roadmap", href: "/#roadmap", desc: "Where we're heading next" },
      { label: "Contact", href: "/#contact", desc: "Start a project with us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web", href: "/#services", desc: "Platforms engineered for scale" },
      { label: "Mobile", href: "/#services", desc: "Native-feeling iOS & Android" },
      { label: "Cloud", href: "/#services", desc: "Resilient cloud architecture" },
      { label: "Security", href: "/#services", desc: "Audits, hardening, threat modeling" },
    ],
  },
  {
    title: "Training",
    links: [
      { label: "Academy", href: "/#academy", desc: "Cohort-based engineering programs" },
      { label: "Courses", href: "/#academy", desc: "From foundations to production" },
      { label: "Mentorship", href: "/#academy", desc: "Guided by practicing engineers" },
      {
        label: "DevQueens",
        href: "https://devqueenstech.vercel.app/",
        desc: "Our Initiatives to empower young Girls in Tech",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog", desc: "Notes on engineering & education", internal: true },
      {
        label: "Case Studies",
        href: "/#projects",
        desc: "Explore real-world engineering case studies",
      },
      { label: "Docs", href: "/#services", desc: "Technical overviews of our practice" },
      { label: "Contact", href: "/#contact", desc: "Get in touch with us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="h-2 w-2 rounded-sm bg-accent" />
              </span>

              {/* Brand + Registered */}
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-semibold tracking-tight text-foreground">
                  IshConnect
                </span>
                <span className="text-[10px] text-muted-foreground">Registered as IshConnLab</span>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A Rwandan engineering studio and academy building reliable software and developing
              talent across Africa. Academy by <span className="text-foreground">DevQueens</span>.
            </p>

            {/* CONTACT */}
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-foreground/80">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:ishconnlab@gmail.com" className="hover:text-foreground">
                  ishconnlab@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-foreground/80">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+250787377750" className="hover:text-foreground">
                  +250 787 377 750
                </a>
              </li>

              <li className="flex items-center gap-3 text-foreground/80">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Kicukiro, Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {g.title}
                </h4>

                <ul className="mt-4 space-y-3 text-sm">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      {l.internal ? (
                        <Link
                          to={l.href}
                          className="block text-muted-foreground transition-colors hover:text-foreground"
                          title={l.desc}
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="block text-muted-foreground transition-colors hover:text-foreground"
                          title={l.desc}
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} IshConnect (IshConnLab). All rights reserved.</div>

          <div className="flex gap-6">
            <a href="/#contact" className="hover:text-foreground">
              Privacy
            </a>
            <a href="/#contact" className="hover:text-foreground">
              Terms
            </a>
            <a href="/#contact" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
