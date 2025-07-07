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
  title: "Devith & Boprek Invitation",
  description:
    "សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ",
  robots: "follow, index, archive, imageindex",
  icons: {
    icon: "/img/favicon.png",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Welcome to Devith & Boprek Invitation Card",
    description:
      "សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ",
    url: "https://sambot.online/devith_boprek",
    siteName: "The Wedding of Devith & Boprek Invitation by Sambot.online",
    images: [
      {
        url: "https://sambot.online/devith_boprek/img/img1.jpg",
        secureUrl: "https://sambot.online/devith_boprek/img/img1.jpg",
        alt: "The Wedding of Devith & Boprek Invitation by Sambot.online",
        type: "image/jpeg",
      },
    ],
    section: "Desain 9 - Demo",
    tags: ["protokol indonesia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Devith & Boprek Invitation by Sambot.online",
    description:
      "សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ",
    images: ["https://sambot.online/devith_boprek/img/img1.jpg"],
  },
  other: {
    "article:tag": "protokol indonesia",
    "article:section": "Desain 9 - Demo",
    "og:updated_time": "2024-06-14T18:34:05+07:00",
  },
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
