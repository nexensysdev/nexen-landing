import type { Metadata } from "next";
import HomePage from "../HomePage";

export const metadata: Metadata = {
  title: "Web Development in Argentina | neXen",
  description:
    "Custom web applications, landing pages, automations, and integrations for businesses and entrepreneurs in Argentina.",
  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Web Development in Argentina | neXen",
    description:
      "Custom web applications, landing pages, automations, and integrations for businesses and entrepreneurs in Argentina.",
    url: "https://nexensys.ar/en",
    siteName: "neXen",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "neXen - Web development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development in Argentina | neXen",
    description:
      "Custom web applications, landing pages, automations, and integrations for businesses and entrepreneurs in Argentina.",
    images: ["/og-image.jpg"],
  },
};

export default function EnglishHome() {
  return <HomePage language="en" />;
}
