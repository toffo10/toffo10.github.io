
import ContactForm from "@/pages/ContactForm";
import FAQ from "@/pages/FAQ";
import { useEffect, useState } from "react";
import About from "./About";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Timeline from "./Timeline";
import Footer from "@/pages/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dragonOpacity = Math.max(0, 1 - scrollY / 500);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <Hero />
      </section>

      {/* Stats Section */}
      {
        <section className="py-16 bg-backgroundEven relative z-10">
          <Stats />
        </section>
      }

      {/* About Section */}
      {
        <section id="about" className="py-20 bg-backgroundOdd relative z-10">
          <About />
        </section>
      }

      {/* Values Section */}
      { /*
      <section id="values" className="py-20 relative z-10">
        <Valori />
      </section>
      */ }

      {/* How I Work Timeline Section */}
      <section id="how-i-work" className="py-20 bg-backgroundEven relative z-10">
        <Timeline />
      </section>

      {/* Pricing Section */}
      {
        <section id="pricing" className="py-20 bg-backgroundOdd relative z-10">
          <Pricing />
        </section>
      }

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-backgroundEven relative z-10">
        <FAQ />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-backgroundOdd relative z-10">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-backgroundEven relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
