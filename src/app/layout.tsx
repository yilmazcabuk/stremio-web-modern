import type { Metadata } from "next/types";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stremio Web Modern",
  description: "Stremio Web rewrite with a modern tech stack",
};

export default ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </body>
  </html>
);
