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
            className={`transform transition-all duration-700 flex justify-center items-center ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative max-w-md">
              {/* Decorative Background */}
              
              {/* Main Image */}
              <div className="relative">
                <div className="transform rotate-3">
                  <img
                    src="https://i.ibb.co/d0X3m6Ym/gunjan-beach.jpg"
                    alt="About"
                    className="w-full h-auto rounded-[40px] object-cover"
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
            <div className="space-y-6">
              <h2 className="font-display font-black text-6xl md:text-7xl text-navy-deep uppercase leading-[0.9]">
                About Me
              </h2>
              <div className="w-20 h-2 bg-purple-electric"></div>
            </div>

            <div className="space-y-2 text-navy-deep/80">
              <p className="text-lg font-body leading-relaxed">
              Senior UX/UI Designer with 11+ years of experience designing user-centric web and mobile applications across fintech, enterprise, dashboards, and SaaS products. Proven ability to translate complex business requirements into intuitive, scalable interfaces. Delivered measurable impact, including 40% increase in user retention and 45% improvement in sales. Strong collaborator with product managers, developers, and leadership teams.
              </p>
            
            </div>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-navy-deep text-lime-neon font-display font-black text-base uppercase tracking-wider hover:scale-105 transition-all duration-200 hover:shadow-[0_0_30px_rgba(26,26,62,0.3)] overflow-hidden">
                <span className="relative z-10"><a href="https://www.behance.net/gunjanweb" target="blank">Learn More</a></span>
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