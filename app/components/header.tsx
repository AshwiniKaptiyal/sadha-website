"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white   top-0 left-0 z-50">
      <div className=" w-full mx-auto  flex items-center justify-between py-1">

        {/* Logo , text nav */}
        <div className="w-full flex  justify-around p-2 md:p-0  md:flex-col items-center font-[system-ui] font-extralight">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-18 w-auto object-contain"
          />
          <div className="flex gap-6 items-center justify-evenly">
          {/* <span className="text-lg md:text-2xl uppercase text-center text-black">
            SADHA VIDEO PHOTO & CINEMA
          </span> */}
        

        {/* Burger Button */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block font-[system-ui] font-extralight p-4">
          <ul className="flex gap-8 text-gray-700 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/aboutus">About</Link></li>
            <li><Link href="/books">Destination Weddings</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/additional-services">Further Services</Link></li>
          </ul>
        </nav>
      </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* LEFT Slide Menu */}
      <nav
        className={`fixed top-0 z-50 left-0 h-full w-72 bg-[#f0f3f6] shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <ul className="mt-20 flex flex-col gap-6 px-12 text-xl font-[system-ui] ">
          <li><Link onClick={() => setOpen(false)} href="/">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/portfolio">Portfolio</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/aboutus">About</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/books">Destination Weddings</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/contact">Contact</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/additional-services">Further Services</Link></li>
        </ul>
      </nav>
    </header>
  );
}
