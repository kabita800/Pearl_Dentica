import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#7DC8D3] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img
              src="/src/assets/pearl_dentica 2.png"
              alt="Pearl Dentica"
              className="w-28 mb-3"
            />
            <p className="text-xs text-gray-800 leading-relaxed max-w-xs">
              Pearl Dentica Care is a modern dental clinic offering comfortable
              and compassionate dental care.
            </p>
            <div className="flex gap-4 mt-4 text-lg text-gray-800">
              <a href="#" className="hover:text-sky-700 transition"><FaFacebook /></a>
              <a href="#" className="hover:text-green-700 transition"><FaWhatsapp /></a>
              <a href="#" className="hover:text-pink-700 transition"><FaInstagram /></a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-bold mb-3 text-gray-950">Links</h2>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>
                <Link to="/" className="hover:text-sky-700 transition font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-700 transition font-medium">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 transition font-medium">Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-sky-700 transition font-medium">Doctors</Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-sky-700 transition font-medium">Appointment</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-sky-700 transition font-medium">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-700 transition font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-bold mb-3 text-gray-950">Services</h2>
            <ul className="space-y-2 text-sm text-gray-800 font-medium">
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
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-bold mb-3 text-gray-950">Contact</h2>
            <div className="space-y-3 text-sm text-gray-800">
              <div>
                <p className="font-bold">Phone:</p>
                <p className="mt-0.5">+977 9804457781</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p className="mt-0.5">info@pearldentica.com</p>
              </div>
              <div>
                <p className="font-bold">Location:</p>
                <p className="mt-0.5">Birtamode-5, Jhapa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400/40 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-800">
            © {new Date().getFullYear()} All rights reserved by
            <span className="text-red-700 font-semibold ml-1">Pearl Dentica</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;