export default function Hero() {
  return (
    <section className="text-center py-24 px-4 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
        Desarrollo web para negocios que quieren vender más
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        Creo landing pages y aplicaciones modernas enfocadas en resultados reales
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Solicitar presupuesto
        </button>
        <button className="border px-6 py-3 rounded-lg">
          Ver servicios
        </button>
      </div>
    </section>
  );
}