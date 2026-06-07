import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  const features = [
    "Experienced Dental Professionals",
    "Modern Technology & Equipment",
    "Comfortable & Hygienic Environment",
    "Personalized Treatment Plans",
    "Patient-Centered Care",
  ];

  return (
    <div
      className=" bg-white min-h-screen px-4 md:px-25 py-10 font-sans"
    
    >
      {/* Appointment Form Card*/}
      <div
        className="rounded-2xl overflow-hidden shadow-lg border border-sky-200"
        style={{ backgroundColor: "#CDE7F0" }}
      >
        {/* Header Banner */}
        <div
          className="text-center py-4 px-6"
          style={{ backgroundColor: "rgba(59,175,218,0.6667)" }} 
        >
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Book Your Appointment
          </h1>
          <p className="text-white text-sm italic mt-1 max-w-lg mx-auto leading-snug">
            Schedule your visit with our experienced dental team. We're here to
            provide comfortable, personalized care for your healthiest smile.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Row 1 — Full Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-semibold mb-1 text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g Alia Chaudhary"
                  className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-600 placeholder-gray-300 shadow-sm focus:ring-2 focus:ring-sky-300 transition"
                />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1 text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+977 98--------"
                  className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-600 placeholder-gray-300 shadow-sm focus:ring-2 focus:ring-sky-300 transition"
                />
              </div>
            </div>

            {/* Row 2 — Email & Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-semibold mb-1 text-gray-700">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Alia@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-600 placeholder-gray-300 shadow-sm focus:ring-2 focus:ring-sky-300 transition"
                />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1 text-gray-700">
                  Preferred Date:
                </label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="e.g 2083-10-25"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-600 placeholder-gray-300 shadow-sm focus:ring-2 focus:ring-sky-300 transition"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-base font-semibold mb-1 text-gray-700">
                Services:
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-500 shadow-sm focus:ring-2 focus:ring-sky-300 transition appearance-none cursor-pointer"
              >
                <option value="">Select a type</option>
                <option>Teeth Whitening</option>
                <option>Dental Implants</option>
                <option>Braces &amp; Aligners</option>
                <option>Smile Makeover</option>
                <option>Root Canal Treatment</option>
                <option>Pediatric Dentistry</option>
                <option>Dental Cleaning</option>
                <option>Cosmetic Dentistry</option>

              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-base font-semibold mb-1 text-gray-700">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Send us a message (Optional)"
                className="w-full px-4 py-3 rounded-xl bg-white outline-none text-gray-600 placeholder-gray-300 shadow-sm resize-none focus:ring-2 focus:ring-sky-300 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-12 py-3 rounded-full font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#3BAFDA" }}
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>





      {/*  Why Choose Section  */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">

        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
            Why{" "}
            <span className="italic font-bold" style={{ color: "#3BAFDA" }}>
              Choose Pearl Dentica Care?
            </span>
          </h2>

          <div className="space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-sm text-gray-700 font-medium text-base flex items-center gap-3"
                style={{ backgroundColor: "#B8D9E8" }}
              >
                <span className="text-sky-600 font-bold text-lg">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="rounded-xl overflow-hidden shadow-lg h-[380px] md:h-[420px]">
          <img
            src="/src/assets/service3.webp"
            alt="Dental Care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
