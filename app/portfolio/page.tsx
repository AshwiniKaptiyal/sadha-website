import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
 

  return (
    <section className="min-h-screen bg-[#eaeaea] text-black px-6 py-4">
   
        <div className="uppercase text-center text-6xl font-[system-ui] font-extralight">Portfolio</div>
        <div className="w-full mx-auto">

        <div className="flex flex-col md:flex-row items-center    py-4 md:p-10 gap-2">
          
          {/* LEFT CONTENT */}
           <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full  aspect-281/210    overflow-hidden ">
                <div className="z-10 absolute bottom-4 md:bottom-20 left-4  text-white text-center">
                    <h1 className="text-3xl font-sans py-2 font-extralight">PHOTO</h1>
                    <Link  href="/1st-gallery">
                <button className=" px-16 py-2 border border-gray-50 hover:bg-amber-100/30  transition cursor-pointer">
                
              VIEW
            </button>
            </Link>
            </div>
              <Image
                src="/img/portfolio/ZM2_5158.jpg"   // public folder me image
                alt="Portfolio Preview"
                fill
                className="object-cover"
              />
            </div>

           
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full    aspect-281/210  overflow-hidden ">
                <div className="z-10 absolute bottom-4 md:bottom-20 left-4  text-white text-center">
                    <h1 className="text-3xl font-sans py-2 font-extralight">FILM</h1>
                    <Link  href="/2nd-gallery">
                <button className=" px-16 py-2 border border-gray-50 hover:bg-amber-100/30  transition cursor-pointer">
              VIEW
            </button>
              </Link>

            </div>
              <Image
                src="/img/portfolio/CM7A1823.jpg"   // public folder me image
                alt="Portfolio Preview"
                fill
                className="object-cover"
              />
            </div>

           
          </div>

        </div>

      </div>
    
    </section>
  );
};

export default Portfolio;
