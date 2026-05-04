"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="pt-16 pb-24 px-4 max-w-3xl mx-auto text-center scroll-mt-24 bg-[#f7f7f7]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {t.contact.title}
      </h2>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />

      <p className="text-gray-600 mb-10">
        {t.contact.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href="https://wa.me/5493462417291"
          target="_blank"
          className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C9A227] transition"
        >
          {t.contact.whatsappCta}
        </a>

        <a
          href="mailto:nexensys@gmail.com"
          className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition"
        >
          {t.contact.emailCta}
        </a>
      </div>

      <p className="text-sm text-gray-500">{t.contact.response}</p>
    </section>
  );
}
