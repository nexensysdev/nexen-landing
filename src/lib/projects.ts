import type { Language } from "@/lib/i18n";

export type ProjectSlug = "eatout" | "recipes-app" | "melisa-encuaderna";

type ProjectLink = {
  label: Record<Language, string>;
  href: string;
  kind: "repo" | "demo" | "video";
  private?: boolean;
};

export type Project = {
  slug: ProjectSlug;
  type: Record<Language, string>;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  description: Record<Language, string>;
  highlight: Record<Language, string>;
  role: Record<Language, string>;
  context: Record<Language, string>;
  solution: Record<Language, string>;
  outcome: Record<Language, string>;
  stack: string[];
  images: string[];
  featured?: boolean;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "eatout",
    type: {
      es: "Aplicación mobile de cursada",
      en: "Course mobile app",
    },
    title: {
      es: "EatOut",
      en: "EatOut",
    },
    shortDescription: {
      es: "App mobile para consultar locales gastronómicos, ver información útil y recorrer el flujo desde una demo en video.",
      en: "Mobile app for discovering food venues, checking useful details, and reviewing the flow through a video demo.",
    },
    description: {
      es: "Proyecto grupal de cursada orientado a resolver una experiencia mobile: explorar lugares para comer y consultar datos clave desde una interfaz clara.",
      en: "Group course project focused on a mobile experience: exploring places to eat and checking key details through a clear interface.",
    },
    highlight: {
      es: "Demo disponible en video por tratarse de una app mobile",
      en: "Video demo available because it is a mobile app",
    },
    role: {
      es: "Desarrollo de funcionalidades, integración de vistas y colaboración en el flujo de producto.",
      en: "Feature development, view integration, and product flow collaboration.",
    },
    context: {
      es: "El objetivo fue construir una aplicación funcional como proyecto final, aplicando trabajo en equipo, organización del código y una experiencia pensada para usuarios mobile.",
      en: "The goal was to build a functional final project, applying teamwork, code organization, and an experience designed for mobile users.",
    },
    solution: {
      es: "Se implementaron pantallas conectadas para navegación, consulta de información y presentación de locales, priorizando una demo clara del recorrido principal.",
      en: "Connected screens were implemented for navigation, information lookup, and venue presentation, prioritizing a clear demo of the main journey.",
    },
    outcome: {
      es: "El resultado fue una app presentable en video, con repositorio público y una base útil para mostrar trabajo fullstack/mobile en contexto académico.",
      en: "The result was a video-ready app with a public repository and a useful base for showing fullstack/mobile work in an academic context.",
    },
    stack: ["React Native", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    images: [
      "/projects/eatout3.avif",
      "/projects/eatout1.avif",
      "/projects/eatout2.avif",
    ],
    links: [
      {
        kind: "repo",
        label: { es: "Ver código", en: "View code" },
        href: "https://github.com/EatOutPF/PF",
      },
      {
        kind: "video",
        label: { es: "Ver video", en: "Watch video" },
        href: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
      },
    ],
  },
  {
    slug: "recipes-app",
    type: {
      es: "Aplicación web de cursada",
      en: "Course web app",
    },
    title: {
      es: "Aplicación web de recetas",
      en: "Recipe web app",
    },
    shortDescription: {
      es: "Plataforma para explorar recetas con búsqueda, filtros, ordenamiento y gestión de datos externos y propios.",
      en: "Platform for exploring recipes with search, filters, sorting, and management of external and custom data.",
    },
    description: {
      es: "Proyecto individual de cursada creado para practicar una aplicación web completa, desde consumo de datos hasta interfaces de búsqueda y detalle.",
      en: "Individual course project built to practice a complete web application, from data consumption to search and detail interfaces.",
    },
    highlight: {
      es: "Ejemplo de gestión de datos y experiencia de usuario",
      en: "Example of data management and user experience",
    },
    role: {
      es: "Desarrollo fullstack, modelado de datos, integración con API externa y construcción de interfaz.",
      en: "Fullstack development, data modeling, external API integration, and interface building.",
    },
    context: {
      es: "La consigna requería combinar información de una API con datos propios, ordenar resultados y ofrecer una navegación fluida entre listado y detalle.",
      en: "The assignment required combining API information with custom data, sorting results, and offering smooth navigation between listing and detail views.",
    },
    solution: {
      es: "Se desarrolló una app con filtros, búsqueda, ordenamiento y creación de recetas, conectando frontend, backend y persistencia de datos.",
      en: "The app includes filters, search, sorting, and recipe creation, connecting frontend, backend, and data persistence.",
    },
    outcome: {
      es: "El proyecto quedó deployado y con repositorio público, mostrando una base completa para aplicaciones con datos, formularios y navegación.",
      en: "The project was deployed with a public repository, showing a complete base for data-driven apps with forms and navigation.",
    },
    stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    images: [
      "/projects/recipes1.avif",
      "/projects/recipes2.avif",
      "/projects/recipes3.avif",
    ],
    featured: true,
    links: [
      {
        kind: "repo",
        label: { es: "Ver código", en: "View code" },
        href: "https://github.com/LordPock/PI-Food",
      },
      {
        kind: "demo",
        label: { es: "Ver demo", en: "View demo" },
        href: "https://pi-food-ten.vercel.app/",
      },
    ],
  },
  {
    slug: "melisa-encuaderna",

    type: {
      es: "Ecommerce para emprendimiento",
      en: "Ecommerce for small business",
    },

    title: {
      es: "Melisa Encuaderna",
      en: "Melisa Encuaderna",
    },

    shortDescription: {
      es: "Ecommerce desarrollado para un emprendimiento artesanal, enfocado en catálogo de productos, experiencia mobile-first y presencia profesional online.",
      en: "Ecommerce developed for a handmade business, focused on product catalog, mobile-first experience, and professional online presence.",
    },

    description: {
      es: "Sitio ecommerce creado para profesionalizar la presencia digital de un emprendimiento de encuadernación artesanal, facilitando la exhibición de productos, la comunicación con clientes y la escalabilidad futura del negocio.",
      en: "Ecommerce website built to professionalize the digital presence of a handmade bookbinding business, improving product showcase, customer communication, and future business scalability.",
    },

    highlight: {
      es: "Proyecto real deployado y optimizado para SEO, responsive y experiencia mobile.",
      en: "Real deployed project optimized for SEO, responsiveness, and mobile experience.",
    },

    role: {
      es: "Diseño UX/UI, desarrollo full stack, integración con Supabase, optimización SEO técnica, arquitectura responsive y deployment en Vercel.",
      en: "UX/UI design, full stack development, Supabase integration, technical SEO optimization, responsive architecture, and Vercel deployment.",
    },

    context: {
      es: "El emprendimiento necesitaba independizarse parcialmente de redes sociales y contar con una plataforma propia donde mostrar productos, transmitir identidad de marca y facilitar el contacto con potenciales clientes.",
      en: "The business needed to become less dependent on social media and have its own platform to showcase products, reinforce brand identity, and improve customer contact.",
    },

    solution: {
      es: "Se desarrolló un ecommerce moderno con catálogo dinámico, navegación optimizada para dispositivos móviles, secciones enfocadas en conversión y estructura preparada para seguir escalando funcionalidades a futuro.",
      en: "A modern ecommerce experience was developed with a dynamic catalog, mobile-optimized navigation, conversion-focused sections, and a scalable structure for future features.",
    },

    outcome: {
      es: "El proyecto permitió transformar la presencia digital del emprendimiento en una experiencia más profesional, clara y preparada para crecimiento online.",
      en: "The project transformed the business digital presence into a more professional, clear, and growth-ready online experience.",
    },

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    images: [
      "/projects/melisaencuaderna1.avif",
      "/projects/melisaencuaderna2.avif",
      "/projects/melisaencuaderna3.avif",
      "/projects/melisaencuaderna4.avif",
      "/projects/melisaencuaderna5.avif",
    ],
    links: [
      {
        kind: "repo",
        label: { es: "Repositorio privado", en: "Private repository" },
        href: "#repo-privado",
        private: true,
      },
      {
        kind: "demo",
        label: { es: "Ver demo", en: "View demo" },
        href: "https://www.melisaencuaderna.com.ar/",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPath(slug: ProjectSlug, language: Language) {
  return language === "en" ? `/en/projects/${slug}` : `/proyectos/${slug}`;
}
