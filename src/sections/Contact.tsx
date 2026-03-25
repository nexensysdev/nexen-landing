export default function Contact() {
  return (
    <section id="contact" className="gap-6 py-24 px-4 bg-gray-100 max-w-5xl mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Contacto
        </h2>

        <p className="text-gray-600 mb-8">
          ¿Tenés un proyecto en mente o necesitás mejorar tu presencia online? 
          Hablemos.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:nexensys@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-lg w-full max-w-xs hover:opacity-90 transition"
          >
            Enviar email
          </a>

          <a
            href="https://wa.me/5493462666122"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-lg w-full max-w-xs bg-[#D4AF37] text-black hover:bg-[#C9A227] "
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
