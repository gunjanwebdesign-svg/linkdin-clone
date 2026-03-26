import React, { useState, useRef, useEffect } from "react";
import { Palette, Users, TrendingUp, X } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Grain Harvest",
    description:
      "GrainHarvest is a Premium Basmati rice brand offering high-quality, naturally aged rice for modern households.",
    image: "https://iili.io/qsU45GV.png",
    link: "https://example.com/large-image-1", // link to open when clicking the card
  },
  {
    icon: Palette,
    title: "Social Media Management",
    description:
      "From crafting texts powered by captivating visuals with words of content that connect people.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    color: "from-pink-hot to-purple-electric",
    link: "https://example.com/large-image-2",
  },
  {
    icon: Users,
    title: "Brand Strategy",
    description:
      "Developing powerful brand identities that resonate with your target audience and drive engagement.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    color: "from-cyan-rich to-purple-electric",
    link: "https://example.com/large-image-3",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Data-driven strategies to amplify your reach and maximize ROI across all digital channels.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    color: "from-lime-neon to-cyan-rich",
    link: "https://example.com/large-image-4",
  },
];

function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomIn, setZoomIn] = useState(true);
  const modalRef = useRef(null);

  // Handle clicking on the card image/link
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setZoomIn(true);
  };

  // Close modal with animation
  const closeModal = () => {
    setZoomIn(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedImage("");
    }, 300);
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
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

  // Close modal when clicking outside the image
  const handleOutsideClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <section style={{ padding: "4rem 0", position: "relative" }}>
      {/* Background Pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundColor: "#281894" }}></div>
      
      {/* Content Container */}
      <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "4rem", fontWeight: "900", color: "white", textTransform: "uppercase", marginBottom: "1rem" }}>
            Case<br /> <span style={{ color: "#00FFA3" }}>Study</span>
          </h2>
          <div style={{ width: "6rem", height: "0.25rem", margin: "0 auto", backgroundColor: "#00FFA3" }}></div>
        </div>

        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", maxWidth: "100%", margin: "0 auto" }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(204,255,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Link wrapping the image */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", height: "100%", textDecoration: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(service.image);
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom right, ${service.color || 'from-pink-hot to-purple-electric'})`, opacity: 0.8 }}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "16rem",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s",
                    }}
                  />

                  {/* Icon */}
                  <div style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    width: "4rem",
                    height: "4rem",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-110 hover:rotate-12"
                  >
                    <Icon style={{ width: "2rem", height: "2rem", color: "white" }} />
                  </div>
                </a>

                {/* Content */}
                <div style={{ padding: "2rem", paddingTop: "20rem", color: "white" }}>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: "900", textTransform: "uppercase" }}>{service.title}</h3>
                  <p style={{ marginTop: "1rem", opacity: 0.8 }}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            padding: "1rem",
            transition: "opacity 0.3s",
          }}
          onClick={handleOutsideClick}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              zIndex: 1000,
            }}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Image with zoom animation */}
          <div
            style={{
              transition: "transform 0.3s",
              transform: zoomIn ? "scale(1)" : "scale(0.95)",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
