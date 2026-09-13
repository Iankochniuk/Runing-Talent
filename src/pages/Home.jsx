import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Opportunities from "../components/sections/Opportunities";
import WhyUs from "../components/WhyUs";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Stats from "../components/sections/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Opportunities />
        <WhyUs />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
