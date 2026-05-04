export const languages = ["es", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "es";

export function isLanguage(value: string | null): value is Language {
  return languages.includes(value as Language);
}

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      portfolio: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      languageLabel: "Idioma",
      switchTo: "Switch to English",
    },
    hero: {
      title: "Desarrollo aplicaciones web que impulsan resultados reales",
      description:
        "Soluciones a medida para negocios y emprendedores, con foco en rendimiento, automatización y escalabilidad",
      note:
        "Experiencia profesional aplicada a la creación de soluciones digitales funcionales",
      quoteCta: "Solicitar presupuesto",
      projectsCta: "Ver proyectos",
    },
    services: {
      title: "Servicios",
      description:
        "Soluciones pensadas para mejorar procesos, optimizar tiempo y generar resultados concretos.",
      recommended: "RECOMENDADO",
      items: [
        {
          title: "Landing Pages",
          description:
            "Páginas rápidas y optimizadas para convertir visitas en clientes.",
          icon: "🌐",
        },
        {
          title: "Aplicaciones Web",
          description:
            "Sistemas a medida para organizar y escalar procesos de negocio.",
          icon: "⚙️",
        },
        {
          title: "Automatizaciones",
          description:
            "Automatización de tareas para ahorrar tiempo y reducir errores.",
          icon: "🔄",
        },
        {
          title: "Integraciones",
          description: "Conexión con APIs y servicios como Mercado Pago.",
          icon: "🔌",
        },
      ],
    },
    portfolio: {
      title: "Proyectos reales y soluciones implementadas",
      description:
        "Algunos ejemplos de aplicaciones que desarrollé para resolver problemas concretos de negocio.",
      featuredCase: "CASO PRINCIPAL",
      realCase: "CASO REAL",
      codeCta: "Ver código",
      mainDemoCta: "Ver funcionamiento",
      demoCta: "Ver demo",
      question: "¿Tenés una idea o necesitás una solución similar?",
      contactCta: "Hablemos de tu proyecto",
      projects: [
        {
          title: "Sistema de pedidos online con pagos integrados",
          description:
            "Aplicación web que permite a negocios gestionar pedidos y cobrar online en tiempo real. Incluye integración con Mercado Pago, automatización de notificaciones y reducción de errores manuales en el proceso de venta.",
          highlight:
            "Ideal para negocios que quieren vender online sin complicaciones",
          repo: "https://github.com/EatOutPF/PF",
          demo: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
          image: "/projects/eatout3.avif",
          featured: false,
        },
        {
          title: "Aplicación web de recetas con búsqueda avanzada",
          description:
            "Plataforma para explorar y gestionar recetas combinando datos externos y propios. Incluye filtros, ordenamiento y una experiencia optimizada para encontrar contenido de forma rápida y sencilla.",
          highlight: "Ejemplo de gestión de datos y experiencia de usuario",
          repo: "https://github.com/LordPock/PI-Food",
          demo: "https://pi-food-ten.vercel.app/",
          image: "/projects/recipes1.avif",
          featured: true,
        },
      ],
    },
    about: {
      title: "Sobre mí",
      description:
        "Soy desarrollador web enfocado en crear aplicaciones funcionales que resuelven problemas reales. Tengo experiencia construyendo soluciones fullstack con integración de pagos, lógica de negocio y conexión con bases de datos. Combino más de 20 años de experiencia en entornos profesionales con tecnologías modernas para desarrollar productos sólidos, claros y listos para usarse.",
      cards: [
        {
          title: "Experiencia",
          description:
            "Más de 20 años trabajando en entornos reales, entendiendo procesos, necesidades y cómo resolverlos con soluciones concretas.",
        },
        {
          title: "Enfoque",
          description:
            "Desarrollo aplicaciones simples de usar pero robustas por dentro, enfocadas en resolver problemas y mejorar procesos.",
        },
        {
          title: "Tecnología",
          description:
            "Trabajo con React, Node.js, PostgreSQL y MongoDB, construyendo aplicaciones modernas, rápidas y escalables.",
        },
      ],
      note:
        "Trabajo de forma independiente ayudando a negocios y proyectos a digitalizar procesos y construir soluciones web efectivas.",
    },
    contact: {
      title: "Contacto",
      description:
        "Si tenés una idea o proyecto, podemos hablar y ver cómo llevarlo a la práctica.",
      whatsappCta: "Contactar por WhatsApp",
      emailCta: "Enviar email",
      response: "Respuesta dentro de las 24 horas hábiles",
    },
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Projects",
      about: "About",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
      switchTo: "Cambiar a español",
    },
    hero: {
      title: "I build web applications that drive real results",
      description:
        "Custom solutions for businesses and entrepreneurs, focused on performance, automation, and scalability",
      note:
        "Professional experience applied to building practical digital solutions",
      quoteCta: "Request a quote",
      projectsCta: "View projects",
    },
    services: {
      title: "Services",
      description:
        "Solutions designed to improve processes, save time, and create measurable results.",
      recommended: "RECOMMENDED",
      items: [
        {
          title: "Landing Pages",
          description:
            "Fast, optimized pages built to turn visitors into customers.",
          icon: "🌐",
        },
        {
          title: "Web Applications",
          description:
            "Custom systems to organize and scale business processes.",
          icon: "⚙️",
        },
        {
          title: "Automations",
          description:
            "Task automation to save time and reduce manual errors.",
          icon: "🔄",
        },
        {
          title: "Integrations",
          description: "Connection with APIs and services like Mercado Pago.",
          icon: "🔌",
        },
      ],
    },
    portfolio: {
      title: "Real projects and implemented solutions",
      description:
        "A few examples of applications I built to solve concrete business problems.",
      featuredCase: "MAIN CASE",
      realCase: "REAL CASE",
      codeCta: "View code",
      mainDemoCta: "See it in action",
      demoCta: "View demo",
      question: "Have an idea or need a similar solution?",
      contactCta: "Let's talk about your project",
      projects: [
        {
          title: "Online ordering system with integrated payments",
          description:
            "A web application that lets businesses manage orders and collect online payments in real time. It includes Mercado Pago integration, notification automation, and fewer manual errors in the sales process.",
          highlight:
            "Ideal for businesses that want to sell online without complications",
          repo: "https://github.com/EatOutPF/PF",
          demo: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
          image: "/projects/eatout3.avif",
          featured: false,
        },
        {
          title: "Recipe web app with advanced search",
          description:
            "A platform for exploring and managing recipes by combining external and custom data. It includes filters, sorting, and an optimized experience for finding content quickly and easily.",
          highlight: "Example of data management and user experience",
          repo: "https://github.com/LordPock/PI-Food",
          demo: "https://pi-food-ten.vercel.app/",
          image: "/projects/recipes1.avif",
          featured: true,
        },
      ],
    },
    about: {
      title: "About me",
      description:
        "I am a web developer focused on creating functional applications that solve real problems. I have experience building full-stack solutions with payment integrations, business logic, and database connections. I combine more than 20 years of experience in professional environments with modern technologies to build solid, clear, ready-to-use products.",
      cards: [
        {
          title: "Experience",
          description:
            "More than 20 years working in real professional environments, understanding processes, needs, and how to solve them with concrete solutions.",
        },
        {
          title: "Approach",
          description:
            "I build applications that are simple to use but robust inside, focused on solving problems and improving processes.",
        },
        {
          title: "Technology",
          description:
            "I work with React, Node.js, PostgreSQL, and MongoDB to build modern, fast, scalable applications.",
        },
      ],
      note:
        "I work independently, helping businesses and projects digitize processes and build effective web solutions.",
    },
    contact: {
      title: "Contact",
      description:
        "If you have an idea or project, we can talk and see how to bring it to life.",
      whatsappCta: "Contact via WhatsApp",
      emailCta: "Send email",
      response: "Response within 24 business hours",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
