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

  const title = `${project.title.en} | neXen Project`;
  const description = project.shortDescription.en;
  const canonical = getProjectPath(project.slug, "en");
  const spanishPath = getProjectPath(project.slug, "es");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "es-AR": spanishPath,
        en: canonical,
        "x-default": spanishPath,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://nexensys.ar${canonical}`,
      siteName: "neXen",
      locale: "en_US",
      alternateLocale: ["es_AR"],
      type: "article",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 900,
          alt: project.title.en,
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

export default async function EnglishProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} language="en" />;
}
