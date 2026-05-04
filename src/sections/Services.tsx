"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="pt-16 pb-24 px-4 bg-white max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {t.services.title}
      </h2>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />
      <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
        {t.services.description}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {t.services.items.map((service, index) => {
          const isFeatured = index === 0;

          return (
            <div
              key={index}
              className={`p-6 rounded-xl transition duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "bg-[#fffdf5]/25 border border-[#D4AF37] shadow-md"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-xl"
              }`}
            >
              {isFeatured && (
                <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                  {t.services.recommended}
                </span>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{service.icon}</span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
