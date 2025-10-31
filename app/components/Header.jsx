"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";


export default function Header() {


  const menuItems = [
  { label: "Home", href: "/" },
  { label: "Pizza Catering Form", href: "/pizza-form" },
  { label: "Gallery", href: "/gallery" },
  { label: "Catering Form", href: "/catering-form" },
  { label: "Roaming Cannoli", href: "/roaming-cannoli" },
  { label: "Pizzaiolo Setup", href: "/setuppizzaiolo" },
];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ✅ TOP BAR (Hide when scrolled) */}
      {!scrolled && (
        <div className="bg-[#000000] text-white px-4 py-3 text-sm">

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center text-center space-y-2">

            {/* ✅ Row 1: Phone + Email in ONE LINE with spacing */}
            <div className="flex flex-wrap justify-center gap-3 text-[14px]">
              <a href="tel:0406858124" className="flex items-center gap-1 hover:text-red-500 transition">
                <FiPhone className="text-[16px]" />
                0406 858 124
              </a>

              <a
                href="mailto:pizzaiolosydney@gmail.com"
                className="flex items-center gap-1 hover:text-red-500 transition"
              >
                <FiMail className="text-[16px]" />
                pizzaiolosydney@gmail.com
              </a>
            </div>

            {/* ✅ Row 2: Mobile Icons + Contact Button */}
            <div className="flex items-center justify-center gap-4 pt-1">
              <a href="https://www.facebook.com/pizzaiolosydney" className="hover:text-blue-500 transition">
                <FaFacebookF className="text-[18px]" />
              </a>

              <a href="https://www.instagram.com/pizzaiolosydney/" className="hover:text-red-500 transition">
                <FaInstagram className="text-[18px]" />
              </a>

              <a href="https://www.tiktok.com/@pizzaiolosydney?_t=ZS-9100mVwgCMS&_r=1" target="_blank"
                rel="noopener noreferrer" className="hover:text-black transition">
                <FaTiktok className="text-[18px]" />
              </a>

              <Link href="/contact"><button className="px-3 py-1 rounded bg-red-600 text-sm hover:bg-red-700 transition">
                Contact Us
              </button></Link>
            </div>

          </div>


          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:0406858124" className="flex items-center gap-1 hover:text-red-500 transition">
                <FiPhone className="text-[16px]" />
                0406 858 124
              </a>

              <a
                href="mailto:pizzaiolosydney@gmail.com"
                className="flex items-center gap-1 hover:text-red-500 transition"
              >
                <FiMail className="text-[16px]" />
                pizzaiolosydney@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/pizzaiolosydney" target="_blank"
                rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaFacebookF className="text-[18px]" />
              </a>

              <a href="https://www.instagram.com/pizzaiolosydney/" target="_blank"
                rel="noopener noreferrer" className="hover:text-red-500 transition">
                <FaInstagram className="text-[18px]" />
              </a>

              <a href="https://www.tiktok.com/@pizzaiolosydney?_t=ZS-9100mVwgCMS&_r=1" target="_blank"
                rel="noopener noreferrer" className="hover:text-purple-950 transition">
                <FaTiktok className="text-[18px]" />
              </a>
              <Link href="/contact"><button className="px-4 py-1 rounded-full bg-red-600 hover:bg-transparent hover:border duration-100 cursor-pointer">
                Contact Us
              </button></Link>
            </div>
          </div>

        </div>
      )}


      {/* ✅ NAVBAR */}
      <nav
        className={`flex items-center justify-between px-6 md:px-8 lg:px-10 transition-all duration-500 ${scrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
          }`}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className={`transition-transform duration-500 hover:rotate-[360deg] ${scrolled ? "w-16 h-16" : "w-24 h-24"}`}
        />



        {/* Desktop Links */}
        <ul className="hidden xl:flex space-x-6 text-white font-medium">
          <Link href="/"><li className="hover:text-red-600 cursor-pointer duration-300">Home</li></Link>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizza Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Gallery</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Roaming Cannoli</li>
          <Link href="/setuppizzaiolo"><li className="hover:text-red-600 cursor-pointer duration-300">Pizzaiolo Setup</li></Link>
        </ul>

        {/* Contact Button Desktop */}
        <Link href="/contact">
          <button className="hidden xl:block px-4 py-2 rounded-full bg-red-600 border-2 border-red-600 text-white hover:bg-transparent hover:border-white transition cursor-pointer">
            Contact Us
          </button>
        </Link>
        {/* Mobile Menu Icon */}
        <div className="xl:hidden text-white text-3xl cursor-pointer">
          <FiMenu onClick={() => setMenuOpen(true)} />
        </div>
      </nav>

      {/* ✅ MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white transform transition-transform duration-500 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <FiX className="text-3xl cursor-pointer hover:text-red-600" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col items-center space-y-6 text-lg mt-6">
  {menuItems.map(({ label, href }) => (
    <li key={label} onClick={() => setMenuOpen(false)}>
      <Link href={href} className="hover:text-red-600 cursor-pointer">
        {label}
      </Link>
    </li>
  ))}

  <li onClick={() => setMenuOpen(false)}>
    <Link href="/contact" className="text-red-500 font-semibold hover:text-red-400">
      Contact Us
    </Link>
  </li>
</ul>

      </div>
    </header>
  );
}
