export default function About() {
  return (
   <section
  id="about"
  className="pt-16 pb-24 px-4 max-w-4xl mx-auto scroll-mt-24"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
    Sobre mí
  </h2>
 <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-8" />
  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
  Soy desarrollador web enfocado en crear aplicaciones funcionales que resuelven problemas reales. 
  Tengo experiencia construyendo soluciones fullstack con integración de pagos, lógica de negocio y conexión con bases de datos.

  Combino más de 20 años de experiencia en entornos profesionales con tecnologías modernas para desarrollar productos sólidos, claros y listos para usarse.
</p>

  <div className="grid gap-6 md:grid-cols-3">
    
    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Experiencia</h3>
      <p className="text-sm text-gray-600">
  Más de 20 años trabajando en entornos reales, entendiendo procesos, necesidades y cómo resolverlos con soluciones concretas.
</p>
    </div>

    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Enfoque</h3>
      <p className="text-sm text-gray-600">
  Desarrollo aplicaciones simples de usar pero robustas por dentro, enfocadas en resolver problemas y mejorar procesos.
</p>
    </div>

    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Tecnología</h3>
      <p className="text-sm text-gray-600">
  Trabajo con React, Node.js, PostgreSQL y MongoDB, construyendo aplicaciones modernas, rápidas y escalables.
</p>
    </div>

  </div>
  <p className="text-center text-sm text-gray-500 mt-12">
  Trabajo de forma independiente ayudando a negocios y proyectos a digitalizar procesos y construir soluciones web efectivas.
</p>
</section>
  );
}
