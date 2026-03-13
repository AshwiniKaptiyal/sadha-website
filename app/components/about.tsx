"use client";

export default function Test() {
  return (
    <section className="w-full h-screen   relative overflow-hidden">
          {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <video
            className="absolute  w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    

      
    </section>
  );
}
