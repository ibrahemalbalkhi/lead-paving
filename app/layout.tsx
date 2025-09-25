import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lead Paving | 20 Guaranteed Leads in 30 Days for Paving Contractors",
  description: "Get 20 qualified paving leads in 30 days or pay nothing. $500 trial offer for paving contractors. No contracts, no setup fees, just results.",
  keywords: "paving leads, paving contractor marketing, local paving advertising, guaranteed leads, paving business growth",
  authors: [{ name: "Lead Paving" }],
  openGraph: {
    title: "20 Guaranteed Paving Leads in 30 Days - Lead Paving",
    description: "Pay $500 only if we deliver. If not, you pay nothing. Proven digital marketing for paving contractors.",
    type: "website",
    url: "https://leadpaving.com",
    siteName: "Lead Paving",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Paving - 20 Leads Guaranteed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Guaranteed Paving Leads in 30 Days",
    description: "Pay $500 only if we deliver. Risk-free trial for paving contractors.",
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
    description: "Digital marketing agency specializing in lead generation for paving contractors",
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
    offers: {
      "@type": "Offer",
      name: "20 Leads in 30 Days Trial",
      description: "Get 20 qualified paving leads in 30 days or pay nothing",
      price: "500",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
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
