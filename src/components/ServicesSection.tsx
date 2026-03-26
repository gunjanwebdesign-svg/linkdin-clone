Here's a React component that creates a modal popup displaying the image at its natural size with scrollbars if it's larger than the viewport:

```jsx
import { useState, useRef, useEffect } from "react";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open modal with selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const services = [
    {
      image: "https://iili.io/qsU45GV.png",
      title: "Sample Service 1",
      description: "Description for service 1",
    },
    // Add more services as needed
  ];

  return (
    <section className="relative py-32 bg-purple-deep overflow-hidden">
      {/* Your existing section content */}
      
      {/* Example service image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleImageClick(service.image)}>
            <img src={service.image} alt={service.title} className="w-full h-auto rounded-lg" />
            <h3 className="mt-2 text-xl font-bold">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          
          {/* Image container */}
          <div className="relative max-w-full max-h-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="block"
              style={{
                maxWidth: "none", // Show natural size
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
```

### Key points:
- Clicking on a service image opens the modal.
- The image is shown at its natural size (`maxWidth: 'none'`) with scrollbars if larger than viewport.
- Clicking outside the image or the close button closes the modal.
- Pressing ESC also closes the modal.

You can customize the `services` array with your actual images and data. Let me know if you'd like to see a more complete version with your existing content!
