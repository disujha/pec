import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEC - Petrochemical Engineering & Construction | Leading Global EPC Services",
  description: "PEC is a leading petrochemical engineering and construction company with 25+ years of excellence. We deliver world-class EPC services, process engineering, and construction solutions to oil, gas, and petrochemical industries across 15+ countries.",
  keywords: "petrochemical engineering, EPC services, oil gas construction, process engineering, offshore platforms, pipeline construction, refinery projects, petrochemical plants, safety engineering, environmental consulting",
  authors: [{ name: "PEC Petrochemical Engineering & Construction" }],
  openGraph: {
    title: "PEC - Petrochemical Engineering & Construction",
    description: "Leading global provider of petrochemical engineering and construction services with 25+ years of excellence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
