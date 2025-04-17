import Nav from "./components/Nav";
import "./globals.css";
import { Martian_Mono, Playwrite_AU_SA, Righteous } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
});

const playwrite = Playwrite_AU_SA({
  subsets: ["latin"],
  variable: "--font-playwrite",
});

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
});

export const metadata = {
  title: "Deepak | Full Stack Developer Portfolio",
  description:
    "Deepak's personal developer portfolio showcasing full-stack projects with smooth scroll and animated hero section using Framer Motion.",
  keywords:
    "Deepak, Full Stack Developer, React, Next.js, Portfolio, Animation, Framer Motion",
  authors: [{ name: "Deepak" }],
  openGraph: {
    title: "Deepak | Full Stack Developer",
    description:
      "A modern portfolio featuring scroll animations and a dynamic hero section built with Framer Motion.",
    url: "https://deepakdev-tau.vercel.app/",
    type: "website",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${martian.variable} ${playwrite.variable} ${righteous.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&family=Playwrite+AU+SA:wght@100..400&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f1faee]">
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
