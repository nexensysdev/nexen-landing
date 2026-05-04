"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-linear-to-b from-[#363636] via-[#0f0f0f] to-black text-white"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
          {t.hero.title}
        </h1>

        <p className="text-lg text-gray-300 mb-5">
          {t.hero.description}
        </p>

        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-6 opacity-70" />

        <p className="text-sm text-gray-400 mb-8">
          {t.hero.note}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C9A227] transition"
          >
            {t.hero.quoteCta}
          </a>

          <a
            href="#portfolio"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition"
          >
            {t.hero.projectsCta}
          </a>
        </div>
      </div>
    </section>
  );
}
