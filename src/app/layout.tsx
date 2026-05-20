import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ScrollIndicator from "@/components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexensys.ar"),
  applicationName: "neXen",
  title: "Desarrollo Web en Argentina | neXen",
  description:
    "Desarrollo aplicaciones web, landing pages, automatizaciones e integraciones a medida para negocios y emprendedores en Argentina.",
  keywords: [
    "desarrollo web argentina",
    "aplicaciones web a medida",
    "landing pages",
    "automatizaciones",
    "integraciones Mercado Pago",
    "React",
    "Node.js",
  ],
  authors: [{ name: "neXen" }],
  creator: "neXen",
  publisher: "neXen",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Desarrollo Web en Argentina | neXen",
    description:
      "Desarrollo aplicaciones web, landing pages, automatizaciones e integraciones a medida para negocios y emprendedores en Argentina.",
    url: "https://nexensys.ar",
    siteName: "neXen",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "neXen - Desarrollo web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web en Argentina | neXen",
    description:
      "Desarrollo aplicaciones web, landing pages, automatizaciones e integraciones a medida para negocios y emprendedores en Argentina.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollIndicator />
        <Analytics />
      </body>
    </html>
  );
}
