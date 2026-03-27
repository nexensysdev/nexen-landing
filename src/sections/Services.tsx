type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
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
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-16 pb-24 px-4 bg-white max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Servicios
      </h2>
      <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />
      <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
        Soluciones pensadas para mejorar procesos, optimizar tiempo y generar
        resultados concretos.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const isFeatured = service.title === "Landing Pages";

          return (
            <div
              key={index}
              className={`p-6 rounded-xl transition duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "bg-[#fffdf5]/25 border border-[#D4AF37] shadow-md"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-xl"
              }`}
            >
              {isFeatured && (
                <span className="text-xs text-[#D4AF37] font-medium mb-2 block">
                  RECOMENDADO
                </span>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{service.icon}</span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
