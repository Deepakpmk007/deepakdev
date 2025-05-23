import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue, Comfortaa, Josefin_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Only one weight available
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepak | full-stack developer",
  description: "full stack developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} ${comfortaa.variable} ${bebasNeue.variable} antialiased bg-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
