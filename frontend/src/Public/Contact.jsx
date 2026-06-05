import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gray-100">
      {/* Top Blue Background */}
      <div className="absolute top-0 left-0 w-full h-[320px] bg-[#3BAFDA]"
      style={{ backgroundColor: "rgba(59,175,218,0.6667)" }} 
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-14 px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white uppercase">
          Get In Touch
        </h1>

        <p className="text-white italic mt-2 text-center">
          Any questions or remarks? just write us a message!
        </p>

        {/* Contact Card */}
        <div className="mt-10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
          {/* Left Side */}
          <div className="bg-white p-7">
            <h2 className="text-2xl font-bold text-center italic">
              CONTACT US
            </h2>
            <p className="text-gray-600 text-sm mb-8 italic text-center">
          Any questions or remarks? just write us a message!
        </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none"
              />

              <textarea
                rows="4"
                placeholder="Write us a Message!"
                className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none resize-none"
              ></textarea>

              <button className="w-full bg-[#3BAFDA] text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="bg-[#333A61] text-white p-7">
            <div className="mb-8">
              <h3 className="text-xl font-bold italic mb-3">
                Location:
              </h3>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />

                <p className="text-base leading-relaxed">
                  Birtamode-5, Jhapa, Nepal
                  <br />
                  Near B&C Hospital Road
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold italic mb-3">
                Contact Details:
              </h3>

              <p className="flex items-center gap-3 text-base mb-2">
                <FaPhoneAlt />
                +977 980-4457781
              </p>

              <p className="flex items-center gap-3 text-base">
                <FaEnvelope />
                info@pearldentica.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold italic mb-3">
                Opening Hours:
              </h3>

              <p className="text-base leading-relaxed">
                9:00 am to 6:00 pm
                <br />
                Sunday to Friday
                <br />
                (Open for emergencies on Saturdays with prior notice)
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-indigo-900 transition">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-indigo-900 transition">
                <FaInstagram />
              </div>

              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-indigo-900 transition">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full max-w-4xl mb-10 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Birtamode%205%20Jhapa&output=embed"
            className="w-full h-60 border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;