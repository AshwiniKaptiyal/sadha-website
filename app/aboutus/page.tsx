import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-[#eaeaea] text-black py-12">
      {/* Heading */}
      <h1 className="uppercase text-center text-5xl md:text-6xl font-extralight tracking-widest mb-12">
        About
      </h1>

      <div className=" mx-auto ">
        <div className="flex flex-col md:flex-row items-center bg-[#f0f3f6]">
          
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src="/img/aboutus/MND_0225.jpg"
                alt="Sadha Video Portfolio"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-10 font-extralight text-center md:text-left">
            <h2 className="text-4xl md:text-5xl mb-6 tracking-wide">
              Sadha Video
            </h2>

            <p className="mb-4 leading-relaxed text-lg">
              Sadha Video is an international creative storytelling studio with
              over 40 years of experience. We continuously push boundaries and
              set new standards in photography and filmmaking.
            </p>

            <p className="leading-relaxed text-lg">
              Driven by a passion to create magical content, we have traveled
              across the globe capturing captivating stories meant to inspire
              and connect generations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
