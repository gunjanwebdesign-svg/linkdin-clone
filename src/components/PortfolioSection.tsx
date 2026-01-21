import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Brand Campaign 2024",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    rotation: "rotate-2",
    color: "from-pink-hot to-purple-electric",
  },
  {
    title: "Digital Launch",
    category: "Ad Campaign",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
    rotation: "-rotate-1",
    color: "from-yellow-electric to-lime-neon",
  },
  {
    title: "Product Showcase",
    category: "Creative Direction",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    rotation: "rotate-1",
    color: "from-cyan-rich to-purple-electric",
  },
  {
    title: "Brand Identity",
    category: "Design System",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    rotation: "-rotate-2",
    color: "from-lime-neon to-cyan-rich",
  },
  {
    title: "Mobile App UI",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    rotation: "rotate-3",
    color: "from-purple-electric to-pink-hot",
  },
  {
    title: "Social Campaign",
    category: "Content Creation",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=80",
    rotation: "-rotate-1",
    color: "from-yellow-electric to-cyan-rich",
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="portfolio"
      ref={sectionRef}
      className="relative py-32 bg-lime-neon overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_#2D1B69_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-20 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-navy-deep uppercase mb-2">
            Gunjan's
            <br />
            <span className="text-purple-electric">Portfolio</span>
          </h2>
          <p className="text-navy-deep/70 text-lg font-body mt-4 max-w-2xl">
            Check out some of our shaziest campaigns and great stories, making
            waves. Here's our portfolio.
          </p>
          <div className="w-24 h-2 bg-purple-electric mt-6"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative ${item.rotation} hover:rotate-0 transition-all duration-300 cursor-pointer`}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-[0_20px_60px_rgba(26,26,62,0.3)] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/70 transition-all duration-300 flex items-center justify-center">
                      <div
                        className={`transform ${
                          hoveredIndex === index
                            ? "scale-100 opacity-100"
                            : "scale-50 opacity-0"
                        } transition-all duration-300`}
                      >
                        <a
                          href="https://www.behance.net/gunjanweb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-lime-neon text-navy-deep p-4 rounded-full hover:scale-110 transition-transform duration-200 inline-block"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="text-sm font-body font-semibold text-purple-electric uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <h3 className="font-display font-black text-2xl text-navy-deep uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Decorative Elements */}
                {hoveredIndex === index && (
                  <div className="absolute -inset-2 border-4 border-purple-electric rounded-3xl -z-10 animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-16 transform transition-all duration-700 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <a
            href="https://www.behance.net/gunjanweb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-navy-deep text-lime-neon font-display font-black text-lg uppercase tracking-wider hover:scale-105 transition-all duration-200 hover:shadow-[0_0_30px_rgba(26,26,62,0.3)] overflow-hidden inline-block"
          >
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 bg-purple-electric transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
