export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-linear-to-b from-[#363636] via-[#0f0f0f] to-black text-white"
    >
      <div className="max-w-2xl mx-auto">
        
        {/* TITULO */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
          Desarrollo soluciones web que hacen crecer tu negocio
        </h1>

        {/* SUBTITULO */}
        <p className="text-lg text-gray-300 mb-5">
          Landing pages, aplicaciones y automatizaciones enfocadas en resultados reales
        </p>

        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-6 opacity-70" />

        {/* PRUEBA */}
        <p className="text-sm text-gray-500 mb-8">
          +20 años de experiencia profesional aplicados al desarrollo digital
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C9A227] transition"
          >
            Solicitar presupuesto
          </a>

          <a
            href="#portfolio"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}