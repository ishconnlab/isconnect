import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const SITE_URL = "https://ishconnect.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IshConnect — Software Development & Tech Training in Rwanda",
    template: "%s | IshConnect",
  },
  description:
    "IshConnect is Rwanda's leading software development and tech training company. Custom web apps, mobile apps, cybersecurity, cloud solutions, and IT training.",
  keywords: [
    "software development",
    "tech training",
    "Rwanda",
    "web development",
    "mobile app development",
    "cybersecurity",
    "cloud solutions",
    "DevQueens",
    "Africa",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "IshConnect",
    title: "IshConnect — Software Development & Tech Training in Rwanda",
    description:
      "Custom software solutions and world-class tech training from Rwanda. Web, mobile, cybersecurity, cloud, and talent development.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IshConnect — Software Development & Tech Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IshConnect — Rwanda's Premier Tech Partner",
    description: "Software development, IT services, and tech education from Africa.",
    images: ["/og-image.png"],
    creator: "@ishconnect",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "IshConnect",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "IshConnect is a Rwandan engineering studio and academy building reliable digital products across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ishconnlab@gmail.com",
    telephone: "+250787377750",
  },
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VH0F5KGJ6B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VH0F5KGJ6B');`}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
