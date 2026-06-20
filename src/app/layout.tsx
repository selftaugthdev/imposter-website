import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imposter Game - Find The Spy",
    template: "%s | Imposter Game",
  },
  description:
    "Someone in your group is lying. Imposter Game is the pass and play party game where everyone gets a word except one liar. Free on the App Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
