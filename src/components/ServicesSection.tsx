import { useEffect, useRef, useState } from "react";
import { Palette, Users, TrendingUp, X } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Grain Harvest",
    description:
      "GrainHarvest is a Premium Basmati rice brand offering high-quality, naturally aged rice for modern households.",
    image: "https://iili.io/qsU45GV.png",
  },
  {
    icon: Palette,
    title: "Social Media Management",
    description:
      "From crafting texts powered by captivating visuals with words of content that connect people.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    color: "from-pink-hot to-purple-electric",
  },
  {
    icon: Users,
    title: "Brand Strategy",
    description:
      "Developing powerful brand identities that resonate with your target audience and drive engagement.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    color: "from-cyan-rich to-purple-electric",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Data-driven strategies to amplify your reach and maximize ROI across all digital channels.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    color: "from-lime-neon to-cyan-rich",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomIn, setZoomIn] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation
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

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setZoomIn(true);
  };

  const closeModal = () => {
    setZoomIn(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedImage("");
    }, 300);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-purple-deep noise-texture gradient-mesh overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[#281894]">
        <div className="absolute top-0 left-0 w-full h-full bg-[size:60px_60px] bg-[position:0_0,_30px_30px] bg-[#281894] opacity-[100px] flex"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white uppercase mb-4">
            Case
            <br />
            <span className="text-lime-neon">Study</span>
          </h2>
          <div className="w-24 h-2 bg-lime-neon mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(204,255,0,0.3)] transition-all duration-300 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {/* Image Background - CLICKABLE */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(service.image)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}
                  ></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="font-display font-black text-3xl text-white uppercase">
                    {service.title}
                  </h3>
                  <p className="text-white/80 font-body text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-lime-neon opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup for Full Image with full width and height, zoom animation */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute -top-12 right-0 text-white hover:text-lime-neon transition-colors duration-300 z-50"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>

          {/* Fullscreen image with zoom animation and scrollbars for actual size */}
          <div className="absolute inset-0 flex items-center justify-center overflow-auto p-4">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-none max-h-none"
              style={{
                display: "block",
              }}
            />
          </div>

          {/* Hint text */}
          <p className="absolute bottom-4 w-full text-center text-white/50 text-sm">
            Press ESC or click outside to close
          </p>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
