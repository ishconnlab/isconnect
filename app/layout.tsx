import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/site/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

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

export const metadata: Metadata = {
  metadataBase: new URL("https://ishconnect.vercel.app"), // ✅ MOVED HERE

  title: "IshConnect — Software Development & Tech Training in Rwanda",
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
    title: "IshConnect | Software Development & Tech Training in Rwanda",
    description:
      "Custom software solutions and world-class tech training from Rwanda. Web, mobile, cybersecurity, cloud, and talent development.",
    type: "website",
    url: "/",
    siteName: "IshConnect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IshConnect - Software Development & Tech Training",
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VH0F5KGJ6B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VH0F5KGJ6B');`}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
      </body>
    </html>
  );
}
