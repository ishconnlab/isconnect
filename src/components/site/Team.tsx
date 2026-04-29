import { Github, Linkedin } from "lucide-react";
import { SectionHeader } from "./Section";

const team = [
  {
    name: "Ishimwe J. Claude",
    role: "Team Lead & Founder",
    bio: "Driving vision, strategy, and overall direction of IshconnLab while leading innovation and growth.",
    initials: "IC",
    image: "/team/claude.jpg",
  },
  {
    name: "Ishimwe Kevin",
    role: "Lead Full Stack Developer",
    bio: "Building and scaling robust web applications across frontend and backend systems.",
    initials: "IK",
    image: "/team/kevin.jpg",
  },
  {
    name: "Irasubiza Sandrine",
    role: "Operations Lead",
    bio: "Overseeing daily operations and ensuring smooth coordination across all teams.",
    initials: "IS",
    image: null,
  },
  {
    name: "Uwitonze P. Trinita",
    role: "Creative Design Lead",
    bio: "Designing impactful visual experiences and shaping the brand identity of IshconnLab.",
    initials: "UT",
    image: "/team/trinita.jpg",
  },
  {
    name: "Biranejeje Divine",
    role: "Partnerships & Growth Lead",
    bio: "Driving collaborations, partnerships, and strategic growth opportunities.",
    initials: "BD",
    image: null,
  },
  {
    name: "Sandra Niyigena",
    role: "Tech Community Advocate",
    bio: "Empowering young girls in technology while contributing to projects and community-driven innovation.",
    initials: "SN",
    image: null,
  },

  // ✅ Added
  {
    name: "Ndatabaye Tumaine",
    role: "Frontend Developer",
    bio: "Developing fast, responsive, and user-friendly web interfaces with modern technologies.",
    initials: "NT",
    image: null,
  },
  {
    name: "Iradukunda U. Cynthia",
    role: "Content & Brand Manager",
    bio: "Shaping brand voice, storytelling, and digital presence across platforms.",
    initials: "IC",
    image: null,
  },
];
export function Team() {
  return (
    <section id="team" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="The Team"
          title="Engineers, designers, educators."
          description="A small, senior team that ships. We believe in craft, accountability, and mentoring the next generation of African builders."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative flex flex-col rounded-xl border border-border bg-background p-6 card-lift"
            >
              <Avatar initials={m.initials} />
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {m.name}
              </h3>
              <div className="mt-0.5 text-sm text-accent">{m.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <SocialLink icon={Github} label="GitHub" />
                <SocialLink icon={Linkedin} label="LinkedIn" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-border bg-muted">
      {/* Abstract geometric avatar */}
      <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden>
        <defs>
          <pattern id={`dots-${initials}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" className="fill-foreground" opacity={0.12} />
          </pattern>
        </defs>
        <rect width="200" height="150" fill={`url(#dots-${initials})`} />
        <circle
          cx="100"
          cy="82"
          r="38"
          className="fill-background"
          stroke="currentColor"
          strokeOpacity="0.15"
        />
        <circle
          cx="100"
          cy="82"
          r="38"
          className="fill-none stroke-accent"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-xl font-semibold tracking-tight text-foreground">
          {initials}
        </span>
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}
