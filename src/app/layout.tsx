import type { Metadata, Viewport } from "next";
import { Moulpali, Moul } from "next/font/google";
import "../styles/globals.css";
import DevTool from "@/components/layout/DevTool";
import MasterLayout from "@/components/layout/MasterLayout";

const MoulpaliFont = Moulpali({
  variable: "--font-moulpali",
  display: "swap",
  subsets: ["khmer"],
  style: "normal",
  weight: "400"
});

const MoulFont = Moul({
  variable: "--font-moul",
  display: "swap",
  subsets: ["khmer"],
  style: "normal",
  weight: "400"
});


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: "An AI-powered chatbot for Telegram, built with Next.js and TypeScript.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </head>
      <body
        className={` ${MoulpaliFont.variable} ${MoulFont.variable} antialiased`}
      >
        <DevTool>
          <MasterLayout>
            {children}
          </MasterLayout>
        </DevTool>
      </body>
    </html>
  );
}
