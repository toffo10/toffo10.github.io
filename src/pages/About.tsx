
import { Award, Heart, Target, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // opzionale: per animare solo una volta
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Chi sono?
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left side - Image */}
        <div className="relative reveal-left" data-reveal>
          <img
            src="src/images/Omar.png"
            alt="Personal Trainer Profile"
            className="w-full h-96 lg:h-[700px] rounded-2xl shadow-2xl object-top object-cover"
          />
        </div>

        {/* Right side - Story */}
        <div className="space-y-6 reveal-right" data-reveal>
          <h3 className="text-3xl font-bold text-accentColor mb-6 text-center">La mia storia</h3>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
            <p>
              Sollevo molti pesi.
            </p>
            <p>
              Moltissimi pesi.
            </p>
            <p>
              Infiniti pesi.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-4 text-accentColor text-center">Certificazioni & Specializzazioni</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Corso personal trainer</li>
              <li>• Corso personal trainer 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
