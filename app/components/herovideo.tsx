"use client";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-[580px] overflow-hidden hidden md:block">
  <video
    className="absolute inset-0 w-full h-full scale-108 object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/file.mp4" type="video/mp4" />
  </video>
</div>

  );
}
