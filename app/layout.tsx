import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PEC - Petrochemical Engineering & Construction | Leading Global EPC Services",
  description: "PEC is a leading petrochemical engineering and construction company with 25+ years of excellence. We deliver world-class EPC services, process engineering, and construction solutions to oil, gas, and petrochemical industries across 15+ countries.",
  keywords: "petrochemical engineering, EPC services, oil gas construction, process engineering, offshore platforms, pipeline construction, refinery projects, petrochemical plants, safety engineering, environmental consulting",
  authors: [{ name: "PEC Petrochemical Engineering & Construction" }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "PEC - Petrochemical Engineering & Construction",
    description: "Leading global provider of petrochemical engineering and construction services with 25+ years of excellence.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/pec-new.png',
        width: 1200,
        height: 630,
        alt: 'PEC Petrochemical Engineering & Construction',
      },
    ],
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
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 font-sans`}
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
