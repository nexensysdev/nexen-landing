import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n";
import { getProjectPath, type Project } from "@/lib/projects";

export default function ProjectDetailPage({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const homePath = language === "en" ? "/en" : "/";
  const backLabel = language === "en" ? "Back to projects" : "Volver a proyectos";
  const roleLabel = language === "en" ? "Role" : "Rol";
  const contextLabel = language === "en" ? "Context" : "Contexto";
  const solutionLabel = language === "en" ? "Solution" : "Solución";
  const outcomeLabel = language === "en" ? "Outcome" : "Resultado";
  const stackLabel = language === "en" ? "Stack" : "Tecnologías";
  const galleryLabel = language === "en" ? "Gallery" : "Galería";
  const linksLabel = language === "en" ? "Links" : "Enlaces";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title[language],
    url: `https://nexensys.ar${getProjectPath(project.slug, language)}`,
    image: project.images.map((image) => `https://nexensys.ar${image}`),
    creator: {
      "@type": "Organization",
      name: "neXen",
      url: "https://nexensys.ar",
    },
    description: project.description[language],
    inLanguage: language === "en" ? "en" : "es-AR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LanguageProvider routeLanguage={language}>
        <Navbar />
        <main className="bg-[#f7f7f7] text-gray-900">
          <section className="bg-linear-to-b from-[#363636] via-[#0f0f0f] to-black px-4 py-16 text-white">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-medium text-[#D4AF37]">
                  {project.type[language]}
                </p>
                <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
                  {project.title[language]}
                </h1>
                <p className="mb-6 text-lg leading-8 text-gray-300">
                  {project.description[language]}
                </p>
                <p className="mb-8 text-sm font-medium text-[#D4AF37]">
                  {project.highlight[language]}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${homePath}#portfolio`}
                    className="rounded-md bg-[#D4AF37] px-5 py-3 text-center font-medium text-black transition hover:bg-[#C9A227]"
                  >
                    {backLabel}
                  </Link>
                  {project.links
                    .filter((link) => !link.private)
                    .map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-[#D4AF37] px-5 py-3 text-center font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                      >
                        {link.label[language]}
                      </a>
                    ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image
                  src={project.images[0]}
                  alt={project.title[language]}
                  width={900}
                  height={620}
                  priority
                  unoptimized
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-5xl gap-6 px-4 py-14 md:grid-cols-3">
            {[
              [roleLabel, project.role[language]],
              [contextLabel, project.context[language]],
              [solutionLabel, project.solution[language]],
            ].map(([label, text]) => (
              <article
                key={label}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="mb-3 text-lg font-semibold">{label}</h2>
                <p className="text-sm leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </section>

          <section className="mx-auto grid max-w-5xl gap-8 px-4 pb-14 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-4 text-2xl font-bold">{outcomeLabel}</h2>
              <p className="leading-8 text-gray-700">
                {project.outcome[language]}
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{stackLabel}</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 pb-16">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-bold">{galleryLabel}</h2>
                <div className="mt-3 h-0.5 w-12 bg-[#D4AF37]" />
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-medium text-gray-500">
                  {linksLabel}
                </span>
                {project.links.map((link) =>
                  link.private ? (
                    <span
                      key={link.href}
                      className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-500"
                    >
                      {link.label[language]}
                    </span>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-[#D4AF37] px-3 py-1 text-sm transition hover:bg-[#D4AF37] hover:text-black"
                    >
                      {link.label[language]}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${project.title[language]} ${index + 2}`}
                    width={800}
                    height={560}
                    unoptimized
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </LanguageProvider>
    </>
  );
}
