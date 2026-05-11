"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const homePath = language === "en" ? "/en" : "/";
  const sectionHref = (id: string) => `${homePath}#${id}`;

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
  const languageButton = (
    <button
      type="button"
      aria-label={t.nav.switchTo}
      title={t.nav.switchTo}
      onClick={toggleLanguage}
      className="h-10 rounded-md border border-white/20 px-3 text-sm font-medium text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
    >
      {language.toUpperCase()}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 h-16 bg-[#121212]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2 ">
        <div className="hidden md:flex gap-5 ">
          <a href={sectionHref("services")} className={linkClass("services")}>
            {t.nav.services}
          </a>
          <a href={sectionHref("portfolio")} className={linkClass("portfolio")}>
            {t.nav.portfolio}
          </a>
        </div>

        <a href={sectionHref("home")} className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="neXen logo"
            width={80}
            height={80}
            className="transition duration-300 hover:scale-105"
          />
        </a>
        <button
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className="hidden md:flex gap-5 items-center">
          <a href={sectionHref("about")} className={linkClass("about")}>
            {t.nav.about}
          </a>
          <a
            href={sectionHref("contact")}
            className="flex items-center h-10 bg-[#D4AF37] text-black px-4 rounded-md font-medium hover:bg-[#C9A227] transition whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
          {languageButton}
        </div>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#121212] border-t border-white/10">
          <a
            href={sectionHref("services")}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {t.nav.services}
          </a>
          <a
            href={sectionHref("portfolio")}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {t.nav.portfolio}
          </a>
          <a
            href={sectionHref("about")}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {t.nav.about}
          </a>

          <a
            href={sectionHref("contact")}
            className="bg-[#D4AF37] text-black px-4 py-2 rounded-md font-medium"
            onClick={() => setOpen(false)}
          >
            {t.nav.contact}
          </a>
          {languageButton}
        </div>
      )}
    </nav>
  );
}
