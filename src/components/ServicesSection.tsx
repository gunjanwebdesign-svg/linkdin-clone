import { useState } from 'react'
import { X } from 'react-feather'

export default function ImageGallery() {
  const [images, setImages] = useState([
    { src: 'https://example.com/image1.jpg', title: 'Image 1' },
    { src: 'https://example.com/image2.jpg', title: 'Image 2' },
    // Add more images as needed
  ])
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (src, title) => {
    setSelectedImage(src)
    setSelectedTitle(title)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="p-4">
      {/* Image list or gallery */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => openModal(img.src, img.title)}
            className="border p-2 rounded"
          >
            <img src={img.src} alt={img.title} className="w-full h-auto" />
          </button>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
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
            {/* Image Container */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-lime-neon/30 flex justify-center items-center p-4">
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Title under image */}
            <p className="text-center text-white text-lg font-display font-bold mt-4 uppercase">
              {selectedTitle}
            </p>
            {/* Hint */}
            <p className="text-center text-white/50 text-sm mt-2">
              Press ESC to close
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
