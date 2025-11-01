"use client";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative min-h-[60vh] flex flex-col justify-between text-white bg-black border-t border-white/20"
      // style={{
      //   backgroundImage: "url('/newcon.png')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundColor: "black",
      // }}
    >
      { }
      <div className="absolute inset-0 bg-black/60"></div>

      { }
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16">
        { }
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img
            src="/logo.png"
            alt="Pizzaiolo Logo"
            className="w-40 h-28 object-contain"
          />
          <p className="text-gray-300 leading-relaxed">
            We bring the authentic taste of woodfire pizza directly to your
            event — freshly made on-site with our mobile pizza truck. Perfect
            for weddings, parties, and all celebrations!
          </p>
        </div>

        { }
        <div className="flex flex-col items-center justify-center space-y-5">
          <h3 className="text-xl font-semibold  text-yellow-400">
            Quick Links
          </h3>
          <a href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
          <a href="/gallery" className="hover:text-yellow-400 transition-colors">
            Gallery
          </a>
          <a href="/catering-form" className="hover:text-yellow-400 transition-colors">
            Catering Form
          </a>
          <a href="/roaming-cannoli" className="hover:text-yellow-400 transition-colors">
            Roaming Cannoli
          </a>
          <a href="/pizzaiolo-setup" className="hover:text-yellow-400 transition-colors">
            Pizzaiolo Setup
          </a>
        </div>

        { }
        <div className="flex justify-center md:justify-end">
          <div className="w-full h-[250px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424495.5289623424!2d150.9661444!3d-33.77690815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2320bd1be1e60933%3A0xb6d911058b0d864c!2sPizzaiolo%20woodfire%20Pizza%20Pty%20Ltd!5e0!3m2!1sen!2s!4v1761883301011!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      { }
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-4 border-t border-white/20 text-center">
        { }
        <p className="text-sm text-center w-full md:w-auto">
          Pizzaiolo © 2025. All rights reserved.
        </p>

        { }
        <div className="flex space-x-4 mt-3 md:mt-0 text-2xl md:absolute md:right-6">
          <a
            href="https://www.facebook.com/pizzaiolosydney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/pizzaiolosydney/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@pizzaiolosydney?_t=ZS-9100mVwgCMS&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="hover:text-purple-500 transition-colors duration-300" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
