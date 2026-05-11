import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/app/ProjectDetailPage";
import { getProjectBySlug, getProjectPath, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title.es} | Proyecto neXen`;
  const description = project.shortDescription.es;
  const canonical = getProjectPath(project.slug, "es");
  const englishPath = getProjectPath(project.slug, "en");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "es-AR": canonical,
        en: englishPath,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://nexensys.ar${canonical}`,
      siteName: "neXen",
      locale: "es_AR",
      alternateLocale: ["en_US"],
      type: "article",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 900,
          alt: project.title.es,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.images[0]],
    },
  };
}

export default async function SpanishProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} language="es" />;
}
