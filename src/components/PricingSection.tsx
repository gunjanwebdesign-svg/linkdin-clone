import { useEffect, useRef, useState } from "react";
import { DollarSign, Zap, Target } from "lucide-react";

const PricingSection = () => {
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
      id="pricing"
      ref={sectionRef}
      className="relative py-32 bg-purple-deep noise-texture gradient-mesh overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#CCFF00_2px,_transparent_2px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9]">
                Work
                <br />
                <span className="text-lime-neon">Pricing</span>
              </h2>
              <div className="w-24 h-2 bg-lime-neon"></div>
            </div>

            <p className="text-white/80 text-lg font-body leading-relaxed">
              Our services come with a slice of affordability. At Design Plan,
              we believe in straightforward pricing that fits your budget like a
              glove.
            </p>

            <div className="space-y-6">
              {/* Price Point 1 */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-lime-neon rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-purple-deep" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase mb-2">
                    Flexible Packages
                  </h3>
                  <p className="text-white/70 font-body text-sm">
                    Just straightforward pricing that fits your budget like a
                    glove.
                  </p>
                </div>
              </div>

              {/* Price Point 2 */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-rich rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-navy-deep" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase mb-2">
                    Quick Turnaround
                  </h3>
                  <p className="text-white/70 font-body text-sm">
                    Fast delivery without compromising on quality or creativity.
                  </p>
                </div>
              </div>

              {/* Price Point 3 */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-electric rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-navy-deep" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-white/70 font-body text-sm">
                    Tailored strategies that align with your unique business
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div
            className={`relative transform transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative h-[600px]">
              {/* Image 1 */}
              <div className="absolute top-0 left-0 w-64 h-80 transform -rotate-6 hover:rotate-0 transition-all duration-300">
                <div className="bg-gradient-to-br from-pink-hot to-purple-electric p-2 rounded-3xl h-full">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80"
                    alt="Process 1"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div className="absolute top-40 right-0 w-72 h-72 transform rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="bg-gradient-to-br from-yellow-electric to-lime-neon p-2 rounded-3xl h-full">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                    alt="Process 2"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-cyan-rich rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute top-20 right-20 w-40 h-40 bg-lime-neon rounded-full opacity-40 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
