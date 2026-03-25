import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Navbar from "@/components/Navbar";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}