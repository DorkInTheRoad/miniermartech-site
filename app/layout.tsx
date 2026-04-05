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
  openGraph: {
    title: "Minier MarTech — Outbound Pipeline for Deal-Driven Operators",
    description:
      "Data-verified outbound pipeline infrastructure for M&A advisors, business brokers, and PE deal teams.",
    url: "https://miniermartech.com",
    siteName: "Minier MarTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
