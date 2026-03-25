import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-[#121212] text-white sticky top-0 z-50">
      <a href="#home">
        <Image 
  src="/logo.png" 
  alt="neXen logo" 
  width={60} 
  height={60}
  className="h-12 w-auto"
/>
      </a>

      <div className="flex gap-6">
        <a href="#home" className="hover:text-[#D4AF37] transition">
          Inicio
        </a>
        <a href="#services" className="hover:text-[#D4AF37] transition">
          Servicios
        </a>
        <a href="#portfolio" className="hover:text-[#D4AF37] transition">
          Portfolio
        </a>
        <a href="#about" className="hover:text-[#D4AF37] transition">
          Sobre mí
        </a>
        <a href="#contact" className="hover:text-[#D4AF37] transition ">
          Contacto
        </a>
      </div>
    </nav>
  );
}
