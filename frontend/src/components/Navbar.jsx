import { Link } from "react-router-dom";

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
            <Link to="/" className="hover:text-sky-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-sky-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-sky-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-sky-500 transition">
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/appointment" className="hover:text-sky-500 transition">
              Appointment
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-sky-500 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-sky-500 transition">
              Contact
            </Link>
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