import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Marketing for Paving Contractors | Google Ads, SEO & Websites",
  description: "Complete digital marketing services for paving contractors. Google Ads management, local SEO, and professional websites that generate more asphalt and concrete jobs.",
  keywords: "paving contractor marketing, asphalt contractor digital marketing, concrete contractor advertising, paving business SEO, Google Ads for contractors",
  authors: [{ name: "Lead Paving" }],
  openGraph: {
    title: "Digital Marketing for Paving Contractors | Google Ads, SEO & Websites",
    description: "Complete digital marketing services for paving contractors. Google Ads, SEO, and websites that generate more jobs for asphalt and concrete businesses.",
    type: "website",
    url: "https://leadpaving.com",
    siteName: "Lead Paving",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Paving - Marketing Services for Paving Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Paving Contractors",
    description: "Google Ads, SEO, and websites that get paving contractors more jobs. Serving asphalt and concrete businesses nationwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://leadpaving.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lead Paving",
    description: "Digital marketing agency specializing in Google Ads, SEO, and website development for paving contractors",
    url: "https://leadpaving.com",
    logo: "https://leadpaving.com/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "en",
    },
    serviceType: [
      "Google Ads Management",
      "SEO Services",
      "Website Development",
      "Digital Marketing for Contractors"
    ],
    industry: "Digital Marketing",
    audience: {
      "@type": "Audience",
      audienceType: "Paving Contractors"
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
