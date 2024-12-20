import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplayThin.woff", weight: "100" },
    { path: "./fonts/ClashDisplayRegular.woff", weight: "500" },
    { path: "./fonts/ClashDisplayBold.woff", weight: "900" },
  ],
  variable: "--font-clash-display",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thomas Profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
