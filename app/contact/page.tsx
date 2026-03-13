"use client";

import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {

    const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
   
  };
  return (
    <section className="min-h-screen bg-[#eaeaea] text-black py-12">
      {/* Heading */}
      <h1 className="uppercase text-center text-5xl md:text-6xl font-extralight tracking-widest mb-12">
        Contact
      </h1>

      <div className=" mx-auto ">
        <div className="flex flex-col md:flex-row items-center bg-[#f0f3f6]">
          
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src="/img/contact/1.jpg"
                alt="Great Genius Portfolio"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-10 font-extralight text-center md:text-left">
           
  <h2 className="text-4xl md:text-5xl font-light tracking-widest text-center mb-6">
          GET IN TOUCH
        </h2>

        <p className="text-center text-sm  mb-12">
          Send us an enquiry with your times, dates & locations. We will get back
          to you as soon as possible.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name *"
            required
            className="contact-input"
          />

          <input
            type="email"
            placeholder="Email *"
            required
            className="contact-input"
          />

          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
          />

          <input
            type="text"
            placeholder="Event Date *"
            required
            className="contact-input"
          />

          <input
            type="text"
            placeholder="Location *"
            required
            className="contact-input"
          />

          <input
            type="number"
            placeholder="Number Of Guests *"
            required
            className="contact-input"
          />

          <textarea
            placeholder="Message *"
            required
            rows={5}
            className="md:col-span-2 contact-input resize-none"
          />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-6 px-10 py-3 border border-black tracking-widest hover:bg-black text-black md:hover:text-white transition"
            >
              SEND
            </button>
          </div>
        </form>
             {/* Success Message */}
        {success && (
          <p className="text-center text-sm  mt-6">
            Success! Message received.
          </p>
        )}

        {/* Contact Info */}
        <div className="text-center text-sm  mt-10">
          Tel: 07403 229076 | Email:{" "}
          <a
            href="mailto:info@greatgenius.co.uk"
            className="underline hover:text-white"
          >
            info@greatgenius.co.uk
          </a>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style jsx global>{`
        .contact-input {
          width: 100%;
          padding: 12px 14px;
          background: transparent;
          border: 1px solid black;
          color: white;
          font-size: 14px;
          outline: none;
        }

        .contact-input::placeholder {
          color: black;
        }

        .contact-input:focus {
          border-color: black;
        }
      `}</style>
          </div>

        </div>
      
    </section>
  );
};

export default ContactUs;
