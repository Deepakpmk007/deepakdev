import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/page.tsx or app/about/page.tsx

export const metadata = {
  title: "Deepak | Full Stack Developer",
  description:
    "Portfolio of Deepak, a MERN Stack Developer building scalable and modern web applications.",
  keywords:
    "Deepak, MERN developer, full stack developer, React, Node.js, portfolio, web developer",
  authors: [{ name: "Deepak" }],
  creator: "Deepak",
  openGraph: {
    title: "Deepak | Full Stack Developer",
    description:
      "Explore Deepak's portfolio — building modern apps using the MERN stack.",
    url: "https://deepakdev.online",
    siteName: "Deepak Portfolio",
    images: [
      {
        url: "https://deepakdev.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deepak's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak | Full Stack Developer",
    description: "Building powerful digital experiences with the MERN stack.",
    images: ["https://deepakdev.online/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
