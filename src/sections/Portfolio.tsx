"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjectPath, projects } from "@/lib/projects";

export default function Portfolio() {
  const { language, t } = useLanguage();
  const projectCta = language === "en" ? "View case" : "Ver caso";

  return (
    <section
      id="portfolio"
      className="min-h-[80vh] gap-6 pt-16 pb-24 px-4 bg-[#f7f7f7] max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {t.portfolio.title}
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        {t.portfolio.description}
      </p>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project) => {
          const isFeatured = project.featured;
          const visibleLinks = project.links.filter((link) => !link.private);
          const hasDetail = Boolean(project.hasDetail);

          return (
            <div
              key={project.slug}
              className={`p-7 rounded-xl flex flex-col h-full transition duration-300 hover:shadow-xl ${
                isFeatured
                  ? "bg-[#D4AF37]/4 border border-[#D4AF37] shadow-sm"
                  : "bg-white border border-gray-100 shadow-md"
              }`}
            >
              <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                {isFeatured ? t.portfolio.featuredCase : t.portfolio.realCase}
              </span>

              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.images[0]}
                  alt={project.title[language]}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="h-5 mb-2">
                {project.highlight[language] && (
                  <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                    {project.highlight[language]}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3 min-h-14 leading-snug">
                {project.title[language]}
              </h3>

              <p className="text-gray-600 text-[15px] grow">
                {project.shortDescription[language]}
              </p>

              {hasDetail && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={getProjectPath(project.slug, language)}
                    className="text-sm border border-[#D4AF37] bg-[#D4AF37] text-black px-3 py-2 rounded-md hover:bg-[#C9A227] transition flex items-center justify-center"
                  >
                    {projectCta}
                  </Link>

                  {visibleLinks.slice(0, 1).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-[#D4AF37] px-3 py-2 rounded-md hover:bg-[#D4AF37] hover:text-black transition text-center"
                    >
                      {link.label[language]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-center text-gray-600 mt-12">
        {t.portfolio.question}
      </p>

      <div className="flex justify-center mt-4">
        <a
          href="#contact"
          className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C9A227] transition"
        >
          {t.portfolio.contactCta}
        </a>
      </div>
    </section>
  );
}
