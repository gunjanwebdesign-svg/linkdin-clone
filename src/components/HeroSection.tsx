import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* Abstract Pattern Texture */}
      <div className="absolute inset-0">
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Abstract geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4B0082]/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2d1b69]/20 rounded-full blur-[150px]"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Abstract wave curves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient1)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4B0082" />
              <stop offset="100%" stopColor="#1e3a5f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-purple-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-indigo-400/30 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`font-display font-black text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] transform transition-all duration-700 delay-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                Sr. UI/UX
                <br />
                <span className=" text-[#dbff5f]">Designer</span>
              </h1>
              <p
                className={`text-white/90 text-lg md:text-xl max-w-lg font-body leading-relaxed transform transition-all duration-700 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                Senior UI/UX Designer crafting intuitive, scalable digital
                experiences. Expert in Figma, Adobe tools, and front-end
                development.{" "}
                <span className="text-lime-neon font-semibold">
                  Focused on usability, aesthetics, and impact.
                </span>
              </p>
            </div>

            <div
              className={`transform transition-all duration-700 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="text-white/80 font-body text-base mb-6">
                Let's make magic together!
              </p>
              <a
                href="https://www.behance.net/gunjanweb"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-lime-neon text-purple-deep font-display font-black text-lg uppercase tracking-wider hover:scale-105 transition-all duration-200 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] overflow-hidden inline-block"
              >
                <span className="relative z-10">Discover More</span>
                <div className="absolute inset-0 bg-cyan-rich transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transform transition-all duration-700 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto lg:ml-auto">
              {/* Background Shape */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-electric rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-cyan-rich rounded-full opacity-20 blur-3xl"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-yellow-electric to-pink-hot p-1 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-[#1a0a2e] rounded-3xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/8cvDDm7P/Gunjan-Sharma.jpg"
                    alt="Creative Designer"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-lime-neon rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-hot rounded-lg transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime-neon rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-lime-neon rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
