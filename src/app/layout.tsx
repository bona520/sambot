import type { Metadata, Viewport } from "next";
import { Moulpali, Moul } from "next/font/google";
import "../styles/globals.css";
import DevTool from "@/components/layout/DevTool";

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
  description: process.env.NEXT_PUBLIC_TITLE,
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
  // Dynamic CSS variables from environment
  const cssVariables = {
    '--color-primary': process.env.NEXT_PUBLIC_PRIMARY_COLOR,
    '--color-secondary': process.env.NEXT_PUBLIC_SECONDARY_COLOR,
    '--color-tertiary': process.env.NEXT_PUBLIC_TERTIARY_COLOR,
  };

  return (
    <html lang="en">
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary: ${cssVariables['--color-primary']};
              --color-secondary: ${cssVariables['--color-secondary']};
              --color-tertiary: ${cssVariables['--color-tertiary']};
            }
          `
        }} />
      </head>
      <body
        className={`${MoulpaliFont.variable} ${MoulFont.variable} antialiased bg-secondary w-full h-[100dvh] flex items-center justify-center`}
      >
        <DevTool>
          {children}
        </DevTool>
      </body>
    </html>
  );
}
