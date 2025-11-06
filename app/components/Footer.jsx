import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo + Paragraph */}
        <div className="space-y-3 ">
          <img
            src="/logo.png"
            alt="Pizzaiolo Logo"
            className="w-20 h-20  transition-transform duration-500 hover:rotate-[360deg]"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            We bring the authentic taste of woodfire pizza directly to your event —
            freshly made on-site with our mobile pizza truck. Perfect for weddings,
            parties, and celebrations!
          </p>
        </div>

        {/* Column 2: Home Links */}
        <div >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Related Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 mt-6">
            <li><Link href="/mobile-pizza-truck-catering-sydney/" className="hover:text-yellow-400">Mobile Pizza Catering Sydney</Link></li>
            <li><Link href="/event-pizza-catering-sydney" className="hover:text-yellow-400">Event Pizza Catering Sydney</Link></li>
            <li><Link href="/pizza-catering-inner-west-sydney" className="hover:text-yellow-400">Pizza Catering Inner West Sydney</Link></li>
            <li><Link href="/wedding-pizza-catering-sydney" className="hover:text-yellow-400">Wedding Pizza Catering Sydney</Link></li>
            <li><Link href="/pizza-catering-sutherland-shire" className="hover:text-yellow-400">Sutherland Shire pizza catering</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg  font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300 mt-6">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
            <li><Link href="/catering-form" className="hover:text-yellow-400">Catering Form</Link></li>
            <li><Link href="/roaming-cannoli" className="hover:text-yellow-400">Roaming Cannoli</Link></li>
            <li><Link href="/pizzaiolo-setup" className="hover:text-yellow-400">Pizzaiolo Setup</Link></li>
          </ul>
        </div>

        {/* Column 4: Map */}
        <div className="w-full h-[200px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424495.5289623424!2d150.9661444!3d-33.77690815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2320bd1be1e60933%3A0xb6d911058b0d864c!2sPizzaiolo%20woodfire%20Pizza%20Pty%20Ltd!5e0!3m2!1sen!2s!4v1761883301011!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 flex flex-col md:flex-row items-center justify-between px-6 text-sm">
        <p>Pizzaiolo © 2025. All rights reserved.</p>

        <div className="flex space-x-4 text-lg mt-3 md:mt-0">
          <a href="https://www.facebook.com/pizzaiolosydney" target="_blank"><FaFacebook /></a>
          <a href="https://www.instagram.com/pizzaiolosydney/" target="_blank"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@pizzaiolosydney" target="_blank"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
