import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { TrustedLogos } from "@/components/site/TrustedLogos";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Academy } from "@/components/site/Academy";
import { Roadmap } from "@/components/site/Roadmap";
import { Team } from "@/components/site/Team";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ishconnect.vercel.app/#organization",
  name: "IshConnect",
  url: "https://ishconnect.vercel.app",
  logo: "https://ishconnect.vercel.app/logo.png",
  image: "https://ishconnect.vercel.app/og-image.png",
  description:
    "IshConnect is Rwanda's premier software development and tech training company, specializing in web development, mobile applications, cybersecurity, and IT training.",
  foundingLocation: {
    "@type": "Place",
    name: "Rwanda",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
  },
  sameAs: [
    "https://www.facebook.com/ishconnect",
    "https://www.instagram.com/ishconnect_1",
    "https://github.com/ishconnect",
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      // Title
      {
        title: "IshConnect – Software Development & Tech Training in Rwanda",
      },

      // Primary SEO
      {
        name: "description",
        content:
          "IshConnect is Rwanda’s leading software development and tech training company. Web apps, mobile apps, cybersecurity, cloud solutions, and IT training.",
      },
      { name: "author", content: "IshConnect" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "en" },

      // Geo
      { name: "geo.region", content: "RW" },
      { name: "geo.placename", content: "Rwanda" },

      // Open Graph
      {
        property: "og:title",
        content: "IshConnect | Software Development & Tech Training in Rwanda",
      },
      {
        property: "og:description",
        content: "Custom software solutions and world-class tech training from Rwanda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ishconnect.vercel.app" },
      {
        property: "og:image",
        content: "https://ishconnect.vercel.app/og-image.png",
      },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IshConnect – Rwanda’s Premier Tech Partner",
      },
      {
        name: "twitter:description",
        content: "Software development, IT services, and tech education from Africa.",
      },
      {
        name: "twitter:image",
        content: "https://ishconnect.vercel.app/og-image.png",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://ishconnect.vercel.app",
      },
      {
        rel: "icon",
        href: "/favicon.png", // ⚠️ remove /public (React serves from root)
        type: "image/png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],

    scripts: [
      // Google Analytics
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

      // Structured Data
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <TrustedLogos />
        <Services />
        <Projects />
        <Academy />
        <Roadmap />
        <Team />
        <CTA />
      </main>
      <Footer />
      <ChatbotLazy />
    </div>
  );
}
