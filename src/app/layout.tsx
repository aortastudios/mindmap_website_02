import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Mindmap - A mental health app",
  description: "A mental health app that solves mental health issues in the society",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/icons/blue_logo.png" type="image/webp" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
