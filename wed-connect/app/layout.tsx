import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wed Connect",
  description: `Wed Connect is a modern and elegant wedding vendor marketplace platform designed to connect couples planning their dream weddings with top-rated vendors across various categories such as venues, photographers, makeup artists, decorators, caterers, and more.

This project serves as the Final Year Project (FYP) for the BS Computer Science program at Government College University Faisalabad (GCUF).`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
