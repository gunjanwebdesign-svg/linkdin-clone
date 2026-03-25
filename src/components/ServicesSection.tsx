// Inside your services array, ensure you have thumbnail links
const services = [
  {
    icon: Palette,
    title: "Grain Harvest",
    description:
      "GrainHarvest is a Premium Basmati rice brand offering high-quality, naturally aged rice for modern households.",
    image: "https://i.postimg.cc/qqV3vjLX/screencapture-behance-net-gallery-242320901-Basmati-Rice-Pouch-Packaging-Design-2026-02-07-13-28-56.png",
    thumbnail: "https://i.postimg.cc/qqV3vjLX/screencapture-behance-net-gallery-242320901-Basmati-Rice-Pouch-Packaging-Design-2026-02-07-13-28-56.png",
  },
  // ... other services
];

const ServicesSection = () => {
  // ... existing state and hooks

  // handleImageClick remains the same

  return (
    // ... existing section code
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
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}
            ></div>
            <img
              src={service.thumbnail} // Use thumbnail URL here
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

          {/* Full Image (no width/height restrictions) */}
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
  );
};

export default ServicesSection;
