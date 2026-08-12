import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { person } from "@/data/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: `${person.name} — Candidate for Vice-Chairperson, ${person.org}`,
  description:
    "Candidacy portfolio of Suvan Teja Pantina for Vice-Chairperson of TEDxJaiHindCollege, with responsibility for Logistics, Hospitality, Public Relations and Security.",
  robots: { index: true, follow: true },
  openGraph: {
    title: `${person.name} — Candidate for Vice-Chairperson, ${person.org}`,
    description:
      "Operations, Hospitality, Public Relations and Security — run as one system, not four silos.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
