import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#dbff5f]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#2D1B69_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative max-w-md">
              {/* Decorative Background */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-electric rounded-[40px] transform -rotate-6"></div>

              {/* Main Image */}
              <div className="relative">
                <div className="bg-cyan-rich p-2 rounded-[40px] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://i.ibb.co/d0X3m6Ym/gunjan-beach.jpg"
                    alt="About"
                    className="w-full h-auto rounded-[36px] object-cover"
                  />
                </div>
              </div>

              {/* Label */}
              <div className="absolute -bottom-4 -right-4 bg-navy-deep text-lime-neon px-6 py-3 rounded-full font-display font-black text-sm uppercase transform rotate-6 shadow-xl">
                HELLO!
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="font-display font-black text-6xl md:text-7xl text-navy-deep uppercase leading-[0.9]">
                About
                <br />
                Me
              </h2>
              <div className="w-20 h-2 bg-purple-electric"></div>
            </div>

            <div className="space-y-6 text-navy-deep/80">
              <p className="text-lg font-body leading-relaxed">
                <span className="text-navy-deep font-bold">Gunjan</span>is a
                Senior UI/UX Designer with 11+ years of experience in
                user-centric design, visualization, & project management across
                80+ web & mobile applications.
              </p>
              <p className="text-lg font-body leading-relaxed">
                Proven ability to boost retention & sales through intuitive
                interfaces & Agile workflows. Skilled in modern design tools
                (Adobe XD, Figma) & technologies (Bootstrap, HTML, CS'S,
                familiar with React, Angular), with a strong record of aligning
                design strategy with business goals in collaboration with
                C-suite leaders. Expert at translating business goals into
                intuitive interfaces boosted customer retention by 40% & e
                commerce sales by 45%.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-navy-deep text-lime-neon font-display font-black text-base uppercase tracking-wider hover:scale-105 transition-all duration-200 hover:shadow-[0_0_30px_rgba(26,26,62,0.3)] overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-purple-electric transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
