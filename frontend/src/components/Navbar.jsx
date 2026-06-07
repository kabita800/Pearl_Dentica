import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/doctors", label: "Doctors" },
    { to: "/appointment", label: "Appointment" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full h-20 bg-white shadow-sm px-4 md:px-8 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/PEARL.jpg.jpeg"
            alt="Pearl Dentica"
            className="w-16 md:w-22 h-auto object-contain"
          />
        </div>

        {/* Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ?
                    "text-[#3BAFDA] font-semibold"
                  : "hover:text-[#3BAFDA] transition"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/appointment" className="hidden sm:block">
            <button className="bg-[#3BAFDA] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sky-600 transition text-sm md:text-base">
              Book Now
            </button>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-700 hover:text-[#3BAFDA] transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-40 border-t border-gray-100 transition duration-300 ease-in-out">
          <ul className="flex flex-col py-4 px-6 space-y-2 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ?
                      "block text-[#3BAFDA] font-semibold py-2"
                    : "block hover:text-[#3BAFDA] py-2 transition"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Link to="/appointment" onClick={closeMenu}>
                <button className="w-full bg-[#3BAFDA] text-white py-3 rounded-full font-semibold hover:bg-sky-600 transition text-sm">
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

