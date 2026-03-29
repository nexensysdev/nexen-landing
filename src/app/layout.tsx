import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Desarrollo Web en Argentina | neXen",
  description:
    "Creamos aplicaciones web modernas. Soluciones a medida para empresas y proyectos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Desarrollo Web en Argentina | neXen",
    description:
      "Creamos aplicaciones web modernas. Soluciones a medida para empresas y proyectos.",
    url: "https://nexensys.ar",
    siteName: "neXen",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // 👈 todavía no existe (lo creamos en el paso 2)
        width: 1200,
        height: 630,
        alt: "neXen - Desarrollo web",
      },
    ],
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
        <Analytics />
      </body>
    </html>
  );
}
