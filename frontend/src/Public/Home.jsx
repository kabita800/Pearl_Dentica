import React from "react";
import {
  FaTooth,
  FaTeeth,
  FaRegSmile,
} from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/src/assets/img-1.jpg"
        alt="Pearl Dentica"
        className="w-full h-full object-cover bg-white"
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-20 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Your smile deserves the best care
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Modern dentistry in a comfortable, caring environment. From routine
          checkups to full smile makeovers — we've got you covered.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#3BAFDA] px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
            Book Now
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* About Clinic */}
      <div className="py-16 px-6 md:px-20 bg-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About <span className="text-sky-500 italic">Clinic</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* left image */}
          <div className="space-y-4">
            <img
              src="/src/assets/dental.jpg"
              alt="Dentist"
              className="shadow-lg w-full h-64 object-cover"
            />

            <img
              src="/src/assets/img-3.jpg"
              alt="Clinic"
              className="shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* center  */}
          <div className="text-center px-2">
            <p className="text-gray-600">
              Our team of skilled and experienced dental professionals strives
              to create a comfortable and welcoming environment for each and
              every patient. We focus on advanced dental care with a personal
              touch.
            </p>

            <button className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
              Book Appointment
            </button>

            {/* stats */}
            <div className="mt-10">
              <h2 className="text-4xl font-bold text-black">98%</h2>
              <p className="text-gray-500 mt-1">
                Client Satisfaction with our services
              </p>
            </div>
          </div>

          {/* right image */}
          <div className="space-y-4">
            <img
              src="/src/assets/img-3.jpg"
              alt="Treatment"
              className=" shadow-lg w-full h-64 object-cover"
            />

            <img
              src="/src/assets/img-2.webp"
              alt="Dental care"
              className="shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

     
{/* Services Overview */}
<section className="py-20 px-6 md:px-20">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Services <span className="text-sky-500 italic">Overview</span>
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Card 1 */}
    <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
      <FaTooth className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold mb-3">Teeth Whitening</h3>
      <p className="text-gray-700 leading-relaxed">
        Safely remove stains and discoloration to achieve a brighter,
        more confident smile.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
      <FaTeeth className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold mb-3">Dental Implants</h3>
      <p className="text-gray-700 leading-relaxed">
        Replace missing teeth with natural-looking, long-lasting
        solutions that restore function and confidence.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
      <PiBracketsCurlyBold className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold mb-3">Braces & Aligners</h3>
      <p className="text-gray-700 leading-relaxed">
        Straighten teeth comfortably with modern orthodontic treatments
        designed for every age.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
      <FaRegSmile className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold mb-3">Smile Makeover</h3>
      <p className="text-gray-700 leading-relaxed">
        Enhance your smile with a complete cosmetic dental transformation
        tailored to your needs.
      </p>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-end mt-8">
    <button className="bg-[#D8EAF1] px-6 py-3 rounded-full font-medium hover:bg-[#c6dfe8] transition">
      View All Services ↗
    </button>
  </div>
</section>


<Footer />
    </div>
  );
};

export default Home;
