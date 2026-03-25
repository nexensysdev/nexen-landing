export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-[80vh] flex flex-col items-center justify-center gap-6 text-center px-4 bg-[#121212] text-white"
>
  <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
    Desarrollo web para negocios que quieren vender más
  </h1>

  <p className="text-lg text-gray-300 mb-8 max-w-xl">
    Creo landing pages y aplicaciones modernas enfocadas en resultados reales
  </p>

  <div className="flex gap-4">
    <a
      href="#contact"
      className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg hover:bg-[#C9A227] transition"
    >
      Solicitar presupuesto
    </a>

    <a
      href="#services"
      className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
    >
      Ver servicios
    </a>
  </div>
</section>
  );
}
