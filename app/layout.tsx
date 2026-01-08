import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { ThemeProvider } from "@/app/modules/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LenisProvider from "./modules/helperFunction/smoothScroll/scroll";


const degular = localFont({
  src: './fonts/DegularVariable.woff2',
  display: 'swap',
  variable: '--font-degular',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://deepdevjose.vercel.app"),
  title: {
    default: "deepdevjose",
    template: "%s | deepdevjose",
  },
  description:
    "Portfolio of deepdevjose - a software developer building sleek, minimal, and modern web experiences with Next.js, React, and cutting-edge tools.",
  keywords: [
    "deepdevjose",
    "deepdevjose M V",
    "Creative Developer",
    "Developer Portfolio",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "deepdevjose", url: "https://deepdevjose.vercel.app" }],
  openGraph: {
    title: "deepdevjose | Developer Portfolio",
    description:
      "Discover the portfolio of DeepDevJose - software developer showcasing modern web projects, design-driven builds, and unique digital experiences.",
    url: "https://nakuldev.vercel.app",
    siteName: "DeepDevJose",
    images: [
      {
        url: "/og-image.png", // 1200x630
        width: 1200,
        height: 630,
        alt: "Preview of DeepDevJose Portfolio",
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "DeepDevJose",
  "alternateName": "DeepDevJose M V",
  "url": "https://nakuldev.vercel.app/",
  "email": "mailto:nakuldevmv@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/nakuldevmv/",
    "https://github.com/nakuldevmv",
    "https://instagram.com/nakuled"
  ]
}
` }}
        />

      </head>
      <body
        className={`${degular.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <LenisProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </LenisProvider>
        </ThemeProvider>

      </body>

    </html>
  );
}
