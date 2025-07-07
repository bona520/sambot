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
        <meta
          name="description"
          content="សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ"
        />
        <meta name="robots" content="follow, index, archive, imageindex" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Welcome to test &amp; test Invitation Card" />
        <meta
          property="og:description"
          content="សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ"
        />
        <meta property="og:url" content="https://sambot.online/devith_boprek" />
        <meta property="og:site_name" content="The Wedding of test &amp; test Invitation by Sambot.online" />
        <meta property="article:tag" content="protokol indonesia" />
        <meta property="article:section" content="Desain 9 - Demo" />
        <meta property="og:updated_time" content="2024-06-14T18:34:05+07:00" />
        <meta property="og:image" content="https://sambot.online/devith_boprek/img/img1.jpg" />
        <meta property="og:image:secure_url" content="https://sambot.online/devith_boprek/img/img1.jpg" />
        <meta property="og:image:alt" content="The Wedding of Devith &amp; Boprek Invitation by Sambot.online" />
        <meta property="og:image:type" content="https://sambot.online/devith_boprek/img/img1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Wedding of test &amp; test Invitation by Sambot.online" />
        <meta
          name="twitter:description"
          content="សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញ​ចូល​រួម​ជា​ភ្ញៀវ​កិត្តិយស ដើម្បី​ប្រសិទ្ធ​ពរជ័យ សិរីសួស្តី​ជ័យ​មង្គល​ក្នុង​ពិធី​សិរីមង្គល​អាពាហ៍ពិពាហ៍​របស់យើង​ខ្ញុំ"
        />
        <meta name="twitter:image" content="https://sambot.online/devith_boprek/img/img1.jpg" />
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
