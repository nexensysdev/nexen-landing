"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) => `nav-link ${active === id ? "active" : ""}`;

  return (
    <nav className="sticky top-0 z-50 h-16 bg-[#121212]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2 ">
        <div className="hidden md:flex gap-5 ">
          <a href="#services" className={linkClass("services")}>
            Servicios
          </a>
          <a href="#portfolio" className={linkClass("portfolio")}>
            Proyectos
          </a>
        </div>

        <a href="#home" className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="neXen logo"
            width={80}
            height={80}
            className="transition duration-300 hover:scale-105"
          />
        </a>
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className="hidden md:flex gap-5">
          <a href="#about" className={linkClass("about")}>
            Sobre mí
          </a>
          <a
            href="#contact"
            className="flex items-center h-10 bg-[#D4AF37] text-black px-4 rounded-md font-medium hover:bg-[#C9A227] transition whitespace-nowrap"
          >
            Contacto
          </a>
        </div>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#121212] border-t border-white/10">
          <a
            href="#services"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Proyectos
          </a>
          <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
            Sobre mí
          </a>

          <a
            href="#contact"
            className="bg-[#D4AF37] text-black px-4 py-2 rounded-md font-medium onClick={() => setOpen(false)}"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
