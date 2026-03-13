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
              className="overflow-hidden rounded-xl break-inside-avoid group"
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
    </section>
  );
}
