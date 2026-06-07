import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-20 bg-white shadow-sm px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/PEARL.jpg.jpeg"
            alt="Pearl Dentica"
            className="w-22 h-auto object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ?
                  "text-[#3BAFDA]  font-semibold"
                : "hover:text-[#3BAFDA] transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-[#3BAFDA] text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
