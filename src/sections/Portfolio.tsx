type Project = {
  title: string;
  description: string;
  repo: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Plataforma de pedidos con pagos online",
    description:
      "Desarrollo fullstack con integración de Mercado Pago, autenticación y notificaciones automáticas. Implementé el backend con Node.js, MongoDB y manejo de pagos en tiempo real.",
    repo: "https://github.com/EatOutPF/PF",
    demo: "https://youtu.be/H_BctoijfFc?si=XmIcG4w-p8jD-p9J",
  },
  {
    title: "Landing page profesional",
    description: "Diseño optimizado para conversión y velocidad de carga.",
    repo: "https://github.com/LordPock/PI-Food",
    demo: "https://pi-food-ten.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-16">Proyectos</h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
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
