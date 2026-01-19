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
  metadataBase: new URL("https://fiftybridges.com"),

  title: {
    default: "Truck Insurance Broker USA | Fifty Bridges",
    template: "%s | Fifty Bridges",
  },

  description:
    "Fifty Bridges is an independent truck insurance broker helping owner-operators and trucking companies across the USA get affordable, compliant commercial truck insurance.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fiftybridges.com",
    siteName: "Fifty Bridges",
    title: "Truck Insurance Broker USA | Fifty Bridges",
    description:
      "Affordable commercial truck insurance for owner-operators and fleets across the United States.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Truck Insurance Broker USA | Fifty Bridges",
    description:
      "Independent truck insurance broker helping truckers across the USA get compliant coverage.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
