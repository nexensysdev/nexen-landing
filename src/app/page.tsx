import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Navbar from "@/components/Navbar";
import Portfolio from "@/sections/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}