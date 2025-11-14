import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#808c78] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Clickable Site Title */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-white hover:text-[#ffc0cb] whitespace-nowrap"
          onClick={closeMenu}
        >
          Sage View Counseling
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg">
          <Link to="/" className="text-white hover:text-[#ffc0cb]" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" className="text-white hover:text-[#ffc0cb]" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-[#ffc0cb]" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with smooth slide/fade animation */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        } bg-[#808c78] rounded-b-xl shadow-md flex flex-col items-center`}
      >
        <Link
          to="/"
          className="block px-6 py-2 text-white hover:text-[#ffc0cb] transition-colors"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="block px-6 py-2 text-white hover:text-[#ffc0cb] transition-colors"
          onClick={closeMenu}
        >
          Services
        </Link>
<Link
  to="/contact"
  className="block px-6 py-2 text-white hover:text-[#ffc0cb] transition-colors"
  onClick={closeMenu}
>
  Contact
</Link>
      </div>
    </nav>
  );
}
