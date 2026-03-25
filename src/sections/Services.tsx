type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Landing Pages",
    description: "Páginas rápidas y optimizadas para convertir visitas en clientes.",
  },
  {
    title: "Aplicaciones Web",
    description: "Sistemas a medida para gestionar y hacer crecer tu negocio.",
  },
  {
    title: "Automatizaciones",
    description: "Procesos automáticos que ahorran tiempo y reducen errores.",
  },
  {
    title: "Integraciones",
    description: "Integración con Mercado Pago, APIs y sistemas externos para automatizar tu negocio.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">
        Servicios
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}