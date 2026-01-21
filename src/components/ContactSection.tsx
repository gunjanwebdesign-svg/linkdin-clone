import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
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
      { threshold: 0.2 }
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
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-purple-deep noise-texture gradient-mesh overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,_#CCFF00_1px,_transparent_1px),_linear-gradient(90deg,_#CCFF00_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-neon rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-rich rounded-full opacity-10 blur-[120px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center space-y-12 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Heading */}
          <div className="space-y-6">
            <h2 className="font-display font-black text-6xl md:text-7xl lg:text-9xl text-lime-neon uppercase leading-[0.9]">
              START
              <br />
              CAMPAIGN
              <br />
              <span className="text-white">NOW</span>
            </h2>
            <div className="w-32 h-2 bg-lime-neon mx-auto"></div>
          </div>

          {/* Subtext */}
          <p className="text-white/80 text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
            Ready to boost your brand to new heights? Let's create something extraordinary together.
          </p>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-700 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            <a
              href="https://www.behance.net/gunjanweb"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-lime-neon text-purple-deep font-display font-black text-xl uppercase tracking-wider hover:scale-110 transition-all duration-200 hover:shadow-[0_0_50px_rgba(204,255,0,0.6)] overflow-hidden inline-flex items-center gap-3"
            >
              <span className="relative z-10">Contact Me</span>
              <Send className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-200" />
              <div className="absolute inset-0 bg-cyan-rich transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </div>

          {/* Social Proof / Additional Info */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-display font-black text-lime-neon mb-2">
                +200
              </div>
              <div className="text-white/70 font-body text-sm uppercase tracking-wider">
                Completed Projects
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-display font-black text-cyan-rich mb-2">
                +100
              </div>
              <div className="text-white/70 font-body text-sm uppercase tracking-wider">
                Happy Clients
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-display font-black text-yellow-electric mb-2">
                +BOOST
              </div>
              <div className="text-white/70 font-body text-sm uppercase tracking-wider">
                Creative Energy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
