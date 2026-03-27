import Image from "next/image";

type Project = {
  title: string;
  description: string;
  highlight?: string;
  repo: string;
  demo?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Plataforma de pedidos con pagos online",
    description:
      "Aplicación fullstack con integración de Mercado Pago para gestionar pedidos y pagos en tiempo real. Desarrollé el backend con Node.js y MongoDB, incluyendo autenticación, lógica de negocio y notificaciones automáticas. (demo disponible en video)",
    highlight: "Integración completa de pasarela de pagos",
    repo: "https://github.com/EatOutPF/PF",
    demo: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
    image: "/projects/eatout3.avif",
  },
  {
    title: "Plataforma de recetas fullstack",
    description:
      "Aplicación para búsqueda y gestión de recetas con integración de API externa y base de datos propia. Implementé filtros, ordenamiento y paginado tanto en frontend como backend.",
    repo: "https://github.com/LordPock/PI-Food",
    demo: "https://pi-food-ten.vercel.app/",
    image: "/projects/recipes1.avif",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-[80vh] gap-6 pt-16 pb-24 px-4 bg-[#f7f7f7] max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Proyectos
      </h2>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const isFeatured =
            project.title === "Plataforma de recetas fullstack";
          return (
            <div
              key={index}
              className={`p-7 rounded-xl flex flex-col h-full transition duration-300 hover:shadow-xl ${
                isFeatured
                  ? "bg-[#D4AF37]/4 border border-[#D4AF37] shadow-sm"
                  : "bg-white border border-gray-100 shadow-md"
              }`}
            >
              <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                {isFeatured ? "PROYECTO DESTACADO" : "PROYECTO COMPLEJO"}
              </span>

              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="h-5 mb-2">
                {project.highlight && (
                  <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                    {project.highlight}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3 min-h-14 leading-snug">
                {project.title}
              </h3>

              <p className="text-gray-600 text-[15px] grow">
                {project.description}
              </p>

              <div className="mt-5 flex gap-3 items-stretch">
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex-1 text-sm border border-[#D4AF37] px-3 py-1 rounded-md hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center"
                >
                  Código
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-sm border border-[#D4AF37] px-3 py-1 rounded-md hover:bg-[#D4AF37] hover:text-black transition text-center"
                  >
                    {isFeatured ? "Demo" : "Ver funcionamiento"}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
