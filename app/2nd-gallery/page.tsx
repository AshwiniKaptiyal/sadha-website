"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroVideo from "../components/herovideo";

const videos = [
  { id: 1, title: "Jaski Preshoot", thumb: "/img/gallery2/thumb_1.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/1.mp4" },
  { id: 7, title: "Nav Meg Purposal", thumb: "/img/gallery2/thumb_7.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/7.mp4" }, 
  { id: 3, title: "Grupreet & Simran", thumb: "/img/gallery2/thumb_3.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/3.mp4" },
  { id: 4, title: "Akshay & Tasha", thumb: "/img/gallery2/thumb_4.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/4.mp4" },
  { id: 5, title: "Aman & Avinash", thumb: "/img/gallery2/thumb_5.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/5.mp4" },
  { id: 6, title: "Jaski Trailer", thumb: "/img/gallery2/thumb_6a.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/6.mp4" },
  
  { id: 2, title: "Rajdeep & Anita Poses", thumb: "/img/gallery2/thumb_2.png", src: "https://d25pwqcjlc4d3o.cloudfront.net/sadha_website/gallery2/2.mp4" },
];

const SecondGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // ESC Close + Scroll Lock
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeIndex]);

  // Thumbnail Scroll
  const scrollThumbnailsLeft = () => {
    thumbnailRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollThumbnailsRight = () => {
    thumbnailRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-[#eaeaea] text-[#303131] py-6">
      <h1 className="uppercase text-center text-6xl font-extralight mb-6">
        Film
      </h1>

      {/* Banner 
      <div className="relative w-full h-[450px] mb-10 hidden md:block">
        <Image
          src="/img/gallery2/hero.jpg"
          alt="Film Banner"
          fill
          className="object-cover"
          priority
        />
        
      </div>*/}
       
        <div className="relative w-full h-[460px] overflow-hidden hidden md:block ">
  <video
    className=" inset-0 w-full h-full  object-cover"
     
    muted
    loop
    playsInline
  >
    <source src="/img/gallery2/hero.mp4" type="video/mp4" />
  </video>
</div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 px-4 md:px-10 mt-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative w-full h-[280px] overflow-hidden rounded-lg">
              <Image
                src={video.thumb}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>

            <p className="mt-2 ml-2 text-lg font-bold">{video.title}</p>
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4">
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-4xl hover:scale-110 transition"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>
<div className="hidden md:block">
          {/* Main Left Arrow */}
          <button
            className="absolute left-5 text-white text-5xl hover:scale-110 transition"
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? videos.length - 1 : activeIndex - 1
              )
            }
          >
            ❮
          </button>

          {/* Main Right Arrow */}
          <button
            className="absolute right-5 text-white text-5xl hover:scale-110 transition"
            onClick={() =>
              setActiveIndex(
                activeIndex === videos.length - 1 ? 0 : activeIndex + 1
              )
            }
          >
            ❯
          </button>
          </div>

          <div className="w-full flex flex-col items-center">
            {/* Video */}
            <video
              key={videos[activeIndex].src}
              src={videos[activeIndex].src}
              controls
              autoPlay
              className="w-full md:max-w-5xl rounded-lg shadow-2xl mb-6 px-2 md:px-16"
            />
            <div className="hidden md:block">

            {/* Thumbnail Nav Buttons */}
            <div className=" w-full flex justify-between mb-3 px-4 absolute bottom-10 z-10">
              <button
                onClick={scrollThumbnailsLeft}
                className="text-white text-3xl hover:scale-110 transition"
              >
                ❮
              </button>

              <button
                onClick={scrollThumbnailsRight}
                className="text-white text-3xl hover:scale-110 transition"
              >
                ❯
              </button>
            </div>

            {/* Bottom Thumbnails */}
            <div
              ref={thumbnailRef}
              className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth px-16"
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`relative min-w-60 h-40 cursor-pointer rounded overflow-hidden transition ${
                    index === activeIndex
                      ? "ring-4 ring-white scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SecondGallery;
