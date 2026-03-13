import Image from "next/image";
import Link from "next/link";
const DesitnationWeddings = () => {
 

  return (
    <section className="min-h-screen bg-[#eaeaea] text-[#303131] px-6 py-4">
   
        <div className="uppercase text-center text-6xl font-[system-ui] font-extralight">Desitnation Weddings</div>
        <div className="w-full mx-auto">

        <div className="flex flex-col md:flex-row items-center p-10 gap-2">
          
          {/* LEFT CONTENT */}
              <div className="w-full md:w-1/2 px-6 md:px-16 py-10 font-extralight text-center md:text-left">
            <h2 className="text-4xl md:text-5xl mb-6 tracking-wide uppercase">
              International Storytellers
            </h2>

            <p className="mb-4 leading-relaxed text-lg">
              Portugal, Italy, Spain, Greece, Dominican Republic, Kenya are a few destinations to mention where we've been contracted to create magical stories. 

            </p>

            <p className="leading-relaxed text-lg">
              With our considerable experience in Destination weddings, we're able to create stunning content.
            </p>
             <p className="leading-relaxed text-lg mt-6">
              Contact us for further information.
            </p>
          </div>
          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full   md:aspect-4/2 overflow-hidden ">
        <video
    className="absolute inset-0 w-full h-full  object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/file.mp4" type="video/mp4" />
  </video>
            </div>

           
          </div>

        </div>

      </div>
    
    </section>
  );
};

export default DesitnationWeddings;
