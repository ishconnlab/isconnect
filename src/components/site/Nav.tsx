import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#academy", label: "Academy" },
  { href: "/blog", label: "Blog" },
  { href: "/#team", label: "Team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="h-2 w-2 rounded-sm bg-accent" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            IshConnect
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-foreground/30"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/#contact"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a Project
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-tight flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
