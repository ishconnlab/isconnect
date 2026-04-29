import type { Metadata } from "next";
import { Academy } from "@/components/site/Academy";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { Nav } from "@/components/site/Nav";
import { Projects } from "@/components/site/Projects";
import { Roadmap } from "@/components/site/Roadmap";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { TrustedLogos } from "@/components/site/TrustedLogos";
import { ChatbotLazy } from "@/components/site/ChatbotLazy";

export const metadata: Metadata = {
  title: "IshConnect – Software Development & Tech Training in Rwanda",
  description:
    "IshConnect is Rwanda's leading software development and tech training company. Custom web apps, mobile apps, cybersecurity, cloud solutions, and world-class IT training.",
  alternates: {
    canonical: "https://ishconnect.vercel.app",
  },
  openGraph: {
    title: "IshConnect | Software Development & Tech Training in Rwanda",
    description: "Custom software solutions and world-class tech training from Rwanda.",
    type: "website",
    url: "https://ishconnect.vercel.app",
    siteName: "IshConnect",
    images: [
      {
        url: "https://ishconnect.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "IshConnect - Software Development & Tech Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IshConnect – Rwanda's Premier Tech Partner",
    description: "Software development, IT services, and tech education from Africa.",
    images: ["https://ishconnect.vercel.app/og-image.png"],
    creator: "@ishconnect",
  },
};

export default function HomePage() {
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
