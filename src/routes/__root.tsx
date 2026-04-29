import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/site/ThemeProvider";

import appCss from "../styles.css?url";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ishconnect.vercel.app/#organization",
  name: "IshConnect",
  url: "https://ishconnect.vercel.app",
  logo: "https://ishconnect.vercel.app/logo.png",
  image: "https://ishconnect.vercel.app/og-image.png",
  description:
    "IshConnect is a Rwandan engineering studio and academy building reliable digital products across Africa.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // ✅ SEO
      { title: "IshConnect — Engineering Studio & Academy" },
      {
        name: "description",
        content: "IshConnect builds reliable software products and trains engineers across Africa.",
      },
      { name: "robots", content: "index, follow" },

      // ✅ Open Graph
      { property: "og:title", content: "IshConnect" },
      {
        property: "og:description",
        content: "Engineering studio and academy building impactful digital products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ishconnect.vercel.app" },
      { property: "og:image", content: "/og-image.png" },

      // ✅ Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IshConnect" },
      {
        name: "twitter:description",
        content: "Software development and tech training from Rwanda.",
      },
      { name: "twitter:image", content: "/og-image.png" },

      // ✅ Mobile theme color
      { name: "theme-color", content: "#0f172a" },
    ],

    links: [
      { rel: "stylesheet", href: appCss },

      // ✅ Icons
      { rel: "icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },

      // ✅ SEO canonical
      { rel: "canonical", href: "https://ishconnect.vercel.app" },

      // ✅ Performance
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],

    scripts: [
      // ✅ Google Analytics
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-VH0F5KGJ6B",
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VH0F5KGJ6B');
        `,
      },

      // ✅ Structured Data
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
