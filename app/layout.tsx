import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.50bridges.com"),

  title: {
    default: "Truck Insurance Broker USA | Fifty Bridges",
    template: "%s | Fifty Bridges",
  },

  description:
    "Fifty Bridges is an independent truck insurance broker helping owner-operators and trucking companies across the USA get affordable, compliant commercial truck insurance.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.50bridges.com",
    siteName: "Fifty Bridges",
    title: "Truck Insurance Broker USA | Fifty Bridges",
    description:
      "Affordable commercial truck insurance for owner-operators and fleets across the United States.",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Fifty Bridges Truck Insurance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Truck Insurance Broker USA | Fifty Bridges",
    description:
      "Independent truck insurance broker helping truckers across the USA get compliant coverage.",
    images: ["/OG.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

