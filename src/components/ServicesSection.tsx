import React, { useState, useEffect } from "react";
import { X } from "react-feather";

// Dummy icon components if you haven't imported real ones
const Palette = () => <div style={{ width: 32, height: 32, backgroundColor: 'white' }} />;
const ChatCircle = () => <div style={{ width: 32, height: 32, backgroundColor: 'white' }} />;
const MonitorSpeaker = () => <div style={{ width: 32, height: 32, backgroundColor: 'white' }} />;
const UserPlus = () => <div style={{ width: 32, height: 32, backgroundColor: 'white' }} />;

const services = [
  {
    icon: Palette,
    title: "Grain Harvest",
    description:
      "GrainHarvest is a Premium Basmati rice brand offering high-quality, naturally aged rice for modern households.",
    image: "https://i.postimg.cc/qqV3vjLX/screencapture-behance-net-gallery-242320901-Basmati-Rice-Pouch-Packaging-Design-2026-02-07-13-28-56.png",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Thumbnail+1",
  },
  {
    icon: ChatCircle,
    title: "Social Media Management",
    description:
      "From crafting texts powered by captivating visuals with words of content that connect people.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Thumbnail+2",
  },
  {
    icon: MonitorSpeaker,
    title: "Audio & Video Editing",
    description:
      "Create captivating short videos with an eye-catching visual design, engaging sound, and background music.",
    image: "https://images.unsplash.com/photo-1621055233402-3e8bf9528a27?w=600&q=80",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Thumbnail+3",
  },
  {
    icon: UserPlus,
    title: "Web Design & Development",
    description:
      "Modern websites with a perfect mix of beauty and brains to maximize your business potential.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Thumbnail+4",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20"
    >
      <div
        className={`text-center mb-16 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          What I can do for you
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 font-body text-lg sm:text-xl md:text-2xl">
          I craft captivating digital experiences that elevate your brand and
          engage your audience. Explore my services below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(204,255,0,0.3)] transition-all duration-300 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Thumbnail Image */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(service.image)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-lime-400 to-green-400 opacity-80`}
                ></div>
                <img
                  src={service.thumbnail}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Modal for full image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-lime-neon transition-colors duration-300 z-50"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Full Image */}
            <div className="flex justify-center items-center w-full h-full overflow-hidden">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="object-contain"
              />
            </div>

            <p className="text-center text-white/50 text-sm mt-2">
              Press ESC or click outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
