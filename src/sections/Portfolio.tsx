type Project = {
  title: string;
  description: string;
  highlight?: string;
  repo: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Plataforma de pedidos con pagos online",
    description:
      "Aplicación fullstack con integración de Mercado Pago para procesamiento de pagos en tiempo real. Implementé el backend con Node.js y MongoDB, gestionando autenticación, lógica de negocio y notificaciones automáticas según el estado de las transacciones.",
    highlight: "Integración completa de pasarela de pagos",
    repo: "https://github.com/EatOutPF/PF",
    demo: "https://youtu.be/H_BctoijfFc?si=QHkK5DzDynoK1qiE&t=13",
  },
  {
    title: "Plataforma de recetas fullstack",
    description:
      "Aplicación para búsqueda, filtrado y creación de recetas integrando API externa y base de datos propia. Desarrollé lógica de filtros, ordenamiento y paginado tanto en frontend como backend usando React, Redux, Node.js y PostgreSQL.",
    repo: "https://github.com/LordPock/PI-Food",
    demo: "https://pi-food-ten.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen gap-6 py-24 px-4 bg-gray-100 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Proyectos</h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-green-600 mt-2">{project.highlight}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Código
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
