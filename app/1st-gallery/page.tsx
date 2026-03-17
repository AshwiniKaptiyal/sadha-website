"use client";
import { useState, useRef } from "react";

export default function FirstGallery() {
  const images = [
    "/img/gallery1/964A0541.jpg",
    "/img/gallery1/CAM12408.jpg",
    "/img/gallery1/964A5169.jpg",
    
    "/img/gallery1/JSK_1767.jpg",
    "/img/gallery1/JSK_7658.jpg",
    
    "/img/gallery1/JSK_8634.jpg",
    "/img/gallery1/MND_0777.jpg",
    "/img/gallery1/MND_08055.jpg",
    "/img/gallery1/ZM3_0545.jpg",
    "/img/gallery1/ZR5_3955.jpg",
      "/img/gallery1/CAM34622.jpg",
      "/img/gallery1/1545.jpg",
    "/img/gallery1/1525.jpg",
     "/img/gallery1/1656.jpg",
    "/img/gallery1/JSK_8543.jpg",
    "/img/gallery1/ZR5_3393.jpg",
    "/img/gallery1/ZR5_3627.jpg",
    "/img/gallery1/MND_0700.jpg",
    "/img/gallery1/JSK_0245.jpg",
  
    

  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Swipe Start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  // Swipe End
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;

    const diff = touchStart.current - e.changedTouches[0].clientX;

    if (diff > 50) nextImage();
    if (diff < -50) prevImage();

    touchStart.current = null;
  };

  return (
    <section className="w-full py-12 bg-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Portfolio
        </h2>

        {/* Masonry */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}