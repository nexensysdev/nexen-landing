"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="pt-16 pb-24 px-4 max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {t.about.title}
      </h2>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        {t.about.description}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {t.about.cards.map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm"
          >
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-12">
        {t.about.note}
      </p>
    </section>
  );
}
