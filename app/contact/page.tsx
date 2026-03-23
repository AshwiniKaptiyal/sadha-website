"use client";

import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        form.reset(); // ✅ form clear
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#eaeaea] text-black py-12">
      <h1 className="uppercase text-center text-5xl md:text-6xl font-extralight tracking-widest mb-12">
        Contact
      </h1>

      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-[#f0f3f6]">
          
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src="/img/contact/1b.jpg"
                alt="Sadha Video Portfolio"
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

            <p className="text-center text-sm mb-12">
              Send us an enquiry with your times, dates & locations.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input name="name" type="text" placeholder="Name *" required className="contact-input" />
              <input name="email" type="email" placeholder="Email *" required className="contact-input" />
              <input name="subject" type="text" placeholder="Subject" className="contact-input" />
              <input name="date" type="text" placeholder="Event Date *" required className="contact-input" />
              <input name="location" type="text" placeholder="Location *" required className="contact-input" />
              <input name="guests" type="number" placeholder="Number Of Guests *" required className="contact-input" />

              <textarea
                name="message"
                placeholder="Message *"
                required
                rows={5}
                className="md:col-span-2 contact-input resize-none"
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 px-10 py-3 border border-black tracking-widest hover:bg-black hover:text-white transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
              </div>
            </form>

            {/* Loader */}
            {loading && (
              <p className="text-center text-sm mt-4 animate-pulse">
                Sending your message...
              </p>
            )}

            {/* Success */}
            {success && (
              <p className="text-center text-sm mt-6 text-green-600">
                ✅ Message sent successfully!
              </p>
            )}

            {/* Contact Info */}
            <div className="text-center text-sm mt-10">
              Tel: 01902 604950 | Email:{" "}
              <a
                href="mailto:moreinfo@sadhavideo.com"
                className="underline hover:text-gray-700"
              >
                moreinfo@sadhavideo.com
              </a>
            </div>
          </div>

          {/* Tailwind input style */}
          <style jsx global>{`
            .contact-input {
              width: 100%;
              padding: 12px 14px;
              background: transparent;
              border: 1px solid black;
              color: black;
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