"use client";
import { useState, useRef } from "react";

export default function FirstGallery() {
  const images = [
    "/img/gallery1/1.jpeg",
    "/img/gallery1/2.jpeg",
    "/img/gallery1/3.jpg",
    "/img/gallery1/4.jpeg",
    "/img/gallery1/5.jpg",
    "/img/gallery1/6.jpg",
    "/img/gallery1/7.jpeg",
    "/img/gallery1/8.jpg",
    "/img/gallery1/9.jpeg",
    "/img/gallery1/10.jpg",
    "/img/gallery1/11.jpg",
    "/img/gallery1/12.jpg",
    "/img/gallery1/13.jpg",
    "/img/gallery1/14.jpg",
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