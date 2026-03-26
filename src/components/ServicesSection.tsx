import React, { useState, useRef, useEffect } from "react";
import { X } from "react-feather";

function ImageModal({ isModalOpen, closeModal, selectedImage }) {
  const modalRef = useRef(null);
  const [zoomIn, setZoomIn] = useState(true);

  // Handle click outside to close modal
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Optional: Add ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!isModalOpen) return null;

  return (
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

      {/* Image container with actual size and scrolling if needed */}
      <div
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          boxSizing: "border-box",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            transition: "transform 0.3s",
            transform: zoomIn ? "scale(1)" : "scale(0.95)",
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{ display: "block" }} // Actual size
            onLoad={() => setZoomIn(true)} // Optional: animate zoom on load
          />
        </div>
      </div>

      {/* Hint text */}
      <p className="absolute bottom-4 w-full text-center text-white/50 text-sm">
        Press ESC or click outside to close
      </p>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
      {/* Example thumbnail */}
      <img
        src="https://via.placeholder.com/600x400"
        alt="Thumbnail"
        style={{ cursor: "pointer", width: "200px" }}
        onClick={() => openModal("https://via.placeholder.com/1200x800")}
      />

      {/* Modal */}
      <ImageModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}
