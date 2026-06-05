import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#7DC8D3] py-6 px-4 md:px-10">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {/* Logo */}
      <div>
        <img
          src="/src/assets/pearl_dentica 2.png"
          alt="Pearl Dentica"
          className="w-28"
        />

        <p className="text-xs text-gray-800 leading-relaxed">
          Pearl Dentica Care is a modern dental clinic offering comfortable
          and compassionate dental care.
        </p>

        <div className="flex gap-3 mt-3 text-lg">
          <FaFacebook />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>

      {/* Links */}
      <div>
        <h2 className="text-lg font-bold mb-2">Links</h2>
        <ul className="space-y-1 text-sm text-gray-700">
           <li>
    <Link to="/" className="hover:text-sky-600">
      Home
    </Link>
  </li>

    <li>
    <Link to="/about" className="hover:text-sky-600">
      About
    </Link>
  </li>

    <li>
    <Link to="/services" className="hover:text-sky-600">
      Services
    </Link>
  </li>


  <li>
    <Link to="/doctors" className="hover:text-sky-600">
      Doctors
    </Link>
  </li>

    <li>
    <Link to="/appointment" className="hover:text-sky-600">
      Appointment
    </Link>
  </li>
  
    <li>
    <Link to="/gallery" className="hover:text-sky-600">
      Gallery
    </Link>
  </li>


    <li>
    <Link to="/contact" className="hover:text-sky-600">
      Contact
    </Link>
  </li>

        
        </ul>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-lg font-bold mb-2">Services</h2>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>Teeth Whitening</li>
          <li>Dental Implants</li>
          <li>Braces & Aligners</li>
          <li>Root Canal Treatment</li>
          <li>Smile Makeover</li>
          <li>Pediatric Dentistry</li>
          <li>Dental Cleaning</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-lg font-bold mb-2">Contact</h2>

        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+977 9804457781</p>
          </div>

          <div>
            <p className="font-semibold">Email:</p>
            <p>info@pearldentica.com</p>
          </div>

          <div>
            <p className="font-semibold">Location:</p>
            <p>Birtamode-5, Jhapa</p>
          </div>
        </div>
      </div>

    </div>

    <div className="border-t border-gray-400 mt-4 pt-2 text-center">
      <p className="text-sm text-gray-700">
        © All rights reserved by
        <span className="text-red-500 ml-1">Pearl_Dentica</span>
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;