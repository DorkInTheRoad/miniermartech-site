import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Minier MarTech — Outbound Pipeline for Deal-Driven Operators",
  description:
    "Data-verified outbound pipeline infrastructure for M&A advisors, business brokers, and PE deal teams. ICP design, sequence architecture, and campaign operations that compound over time.",
  metadataBase: new URL("https://miniermartech.com"),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "any" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Minier MarTech — Outbound Pipeline for Deal-Driven Operators",
    description:
      "Data-verified outbound pipeline infrastructure for M&A advisors, business brokers, and PE deal teams.",
    url: "https://miniermartech.com",
    siteName: "Minier MarTech",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Minier MarTech",
  "url": "https://miniermartech.com",
  "description": "Outbound pipeline infrastructure for M&A advisors, business brokers, and PE deal teams. ICP design, cohort architecture, sequence validation, and data intelligence that compounds over time.",
  "founder": {
    "@type": "Person",
    "name": "Kenneth Minier",
    "jobTitle": "Founder & Operator",
    "description": "Operator background in NFL/professional sports operations. Builds systematic outbound origination infrastructure for lower-middle market deal flow.",
    "sameAs": ["https://www.linkedin.com/in/kennethminier"]
  },
  "areaServed": "United States",
  "serviceType": [
    "Outbound Pipeline Infrastructure",
    "ICP Design and Cohort Architecture",
    "Sequence Design and Campaign Operations",
    "Data Intelligence and Predictive Scoring"
  ],
  "knowsAbout": [
    "M&A deal origination",
    "business broker outreach",
    "PE deal flow",
    "outbound sales infrastructure",
    "lower-middle market M&A"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/minier-martech"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
