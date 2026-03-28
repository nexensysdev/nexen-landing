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
    title: "Sistema de pedidos online con pagos integrados",
    description:
      "Aplicación web que permite a negocios gestionar pedidos y cobrar online en tiempo real. Incluye integración con Mercado Pago, automatización de notificaciones y reducción de errores manuales en el proceso de venta.",
    highlight: "Ideal para negocios que quieren vender online sin complicaciones",
    repo: "https://github.com/EatOutPF/PF",
    demo: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
    image: "/projects/eatout3.avif",
  },
  {
    title: "Aplicación web de recetas con búsqueda avanzada",
    description:
      "Plataforma para explorar y gestionar recetas combinando datos externos y propios. Incluye filtros, ordenamiento y una experiencia optimizada para encontrar contenido de forma rápida y sencilla.",
    highlight: "Ejemplo de gestión de datos y experiencia de usuario",
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
        Proyectos reales y soluciones implementadas
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
  Algunos ejemplos de aplicaciones que desarrollé para resolver problemas concretos de negocio.
</p>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const isFeatured =
            project.title === "Aplicación web de recetas con búsqueda avanzada";
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
                {isFeatured ? "CASO PRINCIPAL" : "CASO REAL"}
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
                  Ver código
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-sm border border-[#D4AF37] px-3 py-1 rounded-md hover:bg-[#D4AF37] hover:text-black transition text-center"
                  >
                    {isFeatured ? "Ver funcionamiento" : "Ver demo"}
                  </a>
                )}
              </div>
            </div>
          );
        })}
        
      </div>
      <p className="text-center text-gray-600 mt-12">
  ¿Tenés una idea o necesitás una solución similar?
</p>

<div className="flex justify-center mt-4">
  <a
    href="#contact"
    className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C9A227] transition"
  >
    Hablemos de tu proyecto
  </a>
</div>
    </section>
  );
}
