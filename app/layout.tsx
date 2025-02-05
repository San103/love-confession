import type { Metadata } from "next";
import { Geist, Geist_Mono, DynaPuff, Rancho } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

const rancho = Rancho({
  weight: '400',
  variable: "--font-rancho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confess Now",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable} ${rancho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
