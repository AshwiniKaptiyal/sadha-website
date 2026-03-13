type FurtherServicesSectionProps = {
  title?: string;
};

export default function FurtherServicesSection({
  title = 'Further Services',
}: FurtherServicesSectionProps) {
  return (
    <section
      
      className="w-full"
      aria-labelledby="further-services-heading"
    >
      {/* Heading */}
      <div className="w-full bg-gray-100 p-8">
        <h2
          id="further-services-heading"
          className="text-center text-4xl md:text-6xl tracking-widest uppercase p-8 font-[system-ui]"
        >
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row w-full">
        {/* Image */}
        <div className="sm:w-1/2 w-full">
          <img
            src="/img/services/rollsroycecar.jpg"
            alt="Rolls Royce Car Hire"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text + Button */}
        <div className="sm:w-1/2 w-full flex flex-col items-center justify-center text-center p-6 gap-4">
          <h1 className="text-3xl sm:text-5xl uppercase">
            Rolls Royce Car Hire
          </h1>

          <button className="px-6 py-2 border-2 border-black text-black text-lg font-extralight rounded-md hover:bg-black hover:text-white transition">
            Website
          </button>
        </div>
      </div>
    </section>
  );
}
