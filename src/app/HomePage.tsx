import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Navbar from "@/components/Navbar";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n";

const structuredData = {
  es: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "neXen",
    url: "https://nexensys.ar",
    image: "https://nexensys.ar/og-image.jpg",
    email: "nexensys@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: [
      "Desarrollo web",
      "Landing pages",
      "Aplicaciones web a medida",
      "Automatizaciones",
      "Integraciones con APIs",
    ],
    description:
      "Desarrollo aplicaciones web, landing pages, automatizaciones e integraciones a medida para negocios y emprendedores en Argentina.",
    availableLanguage: ["es", "en"],
  },
  en: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "neXen",
    url: "https://nexensys.ar/en",
    image: "https://nexensys.ar/og-image.jpg",
    email: "nexensys@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: [
      "Web development",
      "Landing pages",
      "Custom web applications",
      "Automations",
      "API integrations",
    ],
    description:
      "Custom web applications, landing pages, automations, and integrations for businesses and entrepreneurs in Argentina.",
    availableLanguage: ["es", "en"],
  },
} as const;

export default function HomePage({ language }: { language: Language }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData[language]),
        }}
      />
      <LanguageProvider routeLanguage={language}>
        <main>
          <Navbar />
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
      </LanguageProvider>
    </>
  );
}
