import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AI YouTube Title, Description, and Tag Generator | Boost your YouTube SEO",
  description:
    "Stuck on click-worthy titles, SEO descriptions, and relevant tags?  Let our AI sidekick take the wheel!  Generate titles 2x more likely to grab attention, descriptions that boost SEO, and tags that get you discovered  – all in one click.  Get more views and watch your channel grow!  Free and easy to use!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
