import React from "react";
import { useState, useEffect } from "react";
import { FaTooth, FaTeeth, FaRegSmile } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50 && activeSlide < 2) {
      setActiveSlide(activeSlide + 1); // swipe left
    }

    if (distance < -50 && activeSlide > 0) {
      setActiveSlide(activeSlide - 1); // swipe right
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  const doctors = [
    {
      image: "/src/assets/d1.jpg",
      name: "Dr. Anna Sharma",
      specialization: "Dental Surgeon",
    },
    {
      image: "/src/assets/d5.webp",
      name: "Dr. Sarah Khan",
      specialization: "Orthodontist",
    },
    {
      image: "/src/assets/d1.jpg",
      name: "Dr. James Lee",
      specialization: "Cosmetic Dentist",
    },
    {
      image: "/src/assets/d5.webp",
      name: "Dr. Emily Brown",
      specialization: "Periodontist",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "It is recommended to visit the dentist every 6 months for regular checkups and cleanings.",
    },
    {
      question: "Do dental implants hurt?",
      answer:
        "Dental implant procedures are usually performed under anesthesia, so discomfort is minimal.",
    },
    {
      question: "How long do braces or aligners take?",
      answer:
        "Treatment time varies, but most patients wear braces or aligners for 12–24 months.",
    },
    {
      question: "Are treatments suitable for children?",
      answer:
        "Yes, we provide safe and gentle dental care specially designed for children.",
    },
    {
      question: "Can I eat after a filling or treatment?",
      answer:
        "It depends on the treatment. Your dentist will provide specific aftercare instructions.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment online, by phone, or by visiting our clinic.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Banner Section */}
      <div className="relative h-[75vh] md:h-screen w-full">
        <img
          src="/src/assets/herobanner.png"
          alt="Pearl Dentica"
          className="w-full h-full object-cover bg-white"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
          {showContent && (
            <div className="animate-fadeIn max-w-xl md:max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                YOUR SMILE DESERVES
                <span className="block">THE BEST CARE</span>
              </h1>

              <p className="text-sm md:text-lg mb-8 leading-relaxed">
                Modern dentistry in a comfortable, caring environment. From
                routine checkups to full smile makeovers — we've got you
                covered.
              </p>

              <div className="flex gap-4">
                <Link to="/appointment">
                  <button className="bg-[#3BAFDA] px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition text-sm md:text-base cursor-pointer">
                    Book Now
                  </button>
                </Link>

                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About Clinic */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold mb-10">
            About <span className="text-[#3BAFDA] italic">Clinic</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/src/assets/dental.jpg"
                alt="Dental Care"
                className="w-full max-w-[280px] h-[270px] object-cover shadow-md"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-800 text-[16px] leading-7 max-w-md mb-8">
                Our team of skilled and experienced dental professionals strives
                to create comfortable and welcoming environment for each and
                every patients.
              </p>

              <Link to="/appointment">
                <button className="bg-[#3BAFDA] hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full text-xl transition cursor-pointer shadow-md">
                  Book Appointment
                </button>
              </Link>

              <img
                src="/src/assets/img-3.jpg"
                alt="Dental Treatment"
                className="w-full max-w-[320px] h-[210px] object-cover mt-10 shadow-md"
              />
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/img-2.webp"
                alt="Dental Checkup"
                className="w-full max-w-[280px] h-[270px] object-cover shadow-md"
              />

              <div className="mt-6 text-center md:text-left w-full max-w-[280px]">
                <h3 className="text-4xl font-bold text-[#3BAFDA]">98%</h3>
                <p className="text-gray-800 text-lg mt-1 font-medium">
                  Client Satisfaction with our services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4 md:px-20 bg-gray-50/50">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services <span className="text-[#3BAFDA] italic">Overview</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition rounded-2xl">
            <FaTooth className="text-4xl mb-4 text-[#3BAFDA]" />
            <h3 className="text-2xl font-bold mb-3">Teeth Whitening</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Safely remove stains and discoloration to achieve a brighter, more
              confident smile.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition rounded-2xl">
            <FaTeeth className="text-4xl mb-4 text-[#3BAFDA]" />
            <h3 className="text-2xl font-bold mb-3">Dental Implants</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Replace missing teeth with natural-looking, long-lasting solutions
              that restore function and confidence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition rounded-2xl">
            <PiBracketsCurlyBold className="text-4xl mb-4 text-[#3BAFDA]" />
            <h3 className="text-2xl font-bold mb-3">Braces & Aligners</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Straighten teeth comfortably with modern orthodontic treatments
              designed for every age.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition rounded-2xl">
            <FaRegSmile className="text-4xl mb-4 text-[#3BAFDA]" />
            <h3 className="text-2xl font-bold mb-3">Smile Makeover</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Enhance your smile with a complete cosmetic dental transformation
              tailored to your needs.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end mt-8">
          <Link to="/services">
            <button className="bg-[#D8EAF1] px-6 py-3 rounded-full font-medium hover:bg-[#c6dfe8] transition cursor-pointer">
              View All Services ↗
            </button>
          </Link>
        </div>
      </section>

      {/* why choose us */}
      <section className="py-16 px-4 md:px-16">
        <h1 className="text-4xl font-bold text-center mb-10">
          Why <span className="text-[#3BAFDA] italic">choose</span> us?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/docto.webp"
              alt="Doctor"
              className="w-full max-w-[420px] h-[320px] md:h-[420px] object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3BAFDA] mb-4">
              Your path to a Healthier Smile
            </h2>

            <p className="text-gray-600 max-w-lg mb-8">
              Lorem ipsum dolor sit amet consectetur. Quis massa est justo
              scelerisque eu faucibus eget id quisque.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-4">
              <div className="text-center bg-gray-50 py-6 px-4  flex-1">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="font-semibold text-sm mt-1 text-gray-700">
                  Experience Doctor
                </p>
              </div>

              <div className="bg-[#3BAFDA] text-white text-center py-6 px-4 flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="font-semibold text-sm mt-1">
                  Patient Satisfaction
                </p>
              </div>

              <div className="text-center bg-gray-50 py-6 px-4  flex-1">
                <h3 className="text-3xl font-bold">20k+</h3>
                <p className="font-semibold text-sm mt-1 text-gray-700">
                  Appointment Booked
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-black font-bold text-xl">✓</span>
                <span className="text-gray-700">
                  Easy online Appointment Booking
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-black font-bold text-xl">✓</span>
                <span className="text-gray-700">
                  Experienced and caring dentists
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-black font-bold text-xl">✓</span>
                <span className="text-gray-700">Advanced dental Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors/Expert */}
      <section className="py-12 bg-gray-50/50">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#3BAFDA] italic">
          Doctors & Experts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20 py-4 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Doctor Info Box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%] bg-white shadow-xl py-4 px-2 text-center">
                <h3 className="text-xl font-bold text-[#3BAFDA]">
                  {doctor.name}
                </h3>
                <p className="text-gray-700 text-md mt-1">
                  {doctor.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <div className="flex justify-center md:justify-end mb-8 mt-8 px-4 md:px-20 max-w-7xl mx-auto">
          <Link to="/doctors">
            <button className="bg-[#D8EAF1] px-6 py-2.5 rounded-full font-medium hover:bg-[#c6dfe8] transition cursor-pointer">
              View Doctor Details ↗
            </button>
          </Link>
        </div>
      </section>

      {/* before and after the smile showcase */}
      <section className="py-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Before and After the{" "}
          <span className="text-[#3BAFDA] italic">smile showcase</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:px-18 py-4 max-w-7xl mx-auto">
          {/* Dental Implants */}
          <div className="text-center bg-white p-4">
            <img
              src="/src/assets/before1.webp"
              alt="Dental Implants"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-[#3BAFDA] mt-3">
              Dental Implants
            </h3>
            <p className="text-gray-600 text-xs">
              Complete restoration, natural feel
            </p>
          </div>

          {/* Teeth Whitening */}
          <div className="text-center bg-white p-4">
            <img
              src="/src/assets/before2.webp"
              alt="Teeth Whitening"
              className="w-full h-48 object-contain"
            />
            <h3 className="text-xl font-bold text-[#3BAFDA] mt-3">
              Teeth Whitening
            </h3>
            <p className="text-gray-600 text-xs">
              8 shades brighter in 1 session
            </p>
          </div>

          {/* Smile Makeover */}
          <div className="text-center bg-white p-4">
            <img
              src="/src/assets/image.jpeg"
              alt="Smile Makeover"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-[#3BAFDA] mt-3">
              Smile Makeover
            </h3>
            <p className="text-gray-600 text-xs">
              Complete smile transformation tailored
            </p>
          </div>

          {/* Dental Cleaning */}
          <div className="text-center bg-white p-4">
            <img
              src="/src/assets/smile11.jpg"
              alt="Dental Cleaning"
              className="w-full h-48 object-contain"
            />
            <h3 className="text-xl font-bold text-[#3BAFDA] mt-3">
              Dental Cleaning
            </h3>
            <p className="text-gray-600 text-xs">
              Professional cleaning for healthier teeth
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50/50">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Testimonials
        </h2>

        <p className="text-center text-[#3BAFDA] italic font-bold text-xl md:text-2xl mb-8">
          What our patients say
        </p>

        {/* Mobile Testimonials */}
        <div
          className="md:hidden px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm min-h-[250px]">
            {activeSlide === 0 && (
              <>
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-6 mb-6">
                  I had my teeth whitening done here, and the results were
                  amazing. The staff was professional, friendly, and made me
                  feel comfortable throughout the process.
                </p>
                <h4 className="font-bold text-base text-gray-950">
                  - Priya R.
                </h4>
                <p className="text-gray-500 text-xs">Teeth Whitening Patient</p>
              </>
            )}

            {activeSlide === 1 && (
              <>
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-6 mb-6">
                  The dental implant procedure was smooth and painless. The
                  doctors explained everything clearly, and my new smile looks
                  completely natural.
                </p>
                <h4 className="font-bold text-base text-gray-950">
                  - David T.
                </h4>
                <p className="text-gray-500 text-xs">Dental Implant Patient</p>
              </>
            )}

            {activeSlide === 2 && (
              <>
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-6 mb-6">
                  I brought my daughter for a dental checkup, and the team was
                  incredibly patient and caring. She actually looks forward to
                  her visits now!
                </p>
                <h4 className="font-bold text-base text-gray-950">
                  - Sarah S.
                </h4>
                <p className="text-gray-500 text-xs">Parent of Patients</p>
              </>
            )}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ?
                    "bg-[#3BAFDA] scale-125"
                  : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              I had my teeth whitening done here, and the results were amazing.
              The staff was professional, friendly, and made me feel comfortable
              throughout the process.
            </p>

            <h4 className="font-bold text-base text-gray-950">- Priya R.</h4>
            <p className="text-gray-500 text-xs">Teeth Whitening Patient</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              The dental implant procedure was smooth and painless. The doctors
              explained everything clearly, and my new smile looks completely
              natural.
            </p>

            <h4 className="font-bold text-base text-gray-950">- David T.</h4>
            <p className="text-gray-500 text-xs">Dental Implant Patient</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              I brought my daughter for a dental checkup, and the team was
              incredibly patient and caring. She actually looks forward to her
              visits now!
            </p>

            <h4 className="font-bold text-base text-gray-950">- Sarah S.</h4>
            <p className="text-gray-500 text-xs">Parent of Patients</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
            Frequently Asked Questions{" "}
            <span className="text-[#3BAFDA] italic">(FAQs)</span>
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-bold italic text-gray-800">
                    {faq.question}
                  </span>

                  {openIndex === index ?
                    <Minus className="text-[#3BAFDA]" size={24} />
                  : <Plus className="text-[#3BAFDA]" size={24} />}
                </button>

                {openIndex === index && (
                  <div className="pb-5 pr-4 text-gray-600 text-sm leading-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[710px] mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#3BAFDA] italic">
            Contact & Location
          </h2>

          <div className="flex flex-col md:flex-row border border-[#67d1f5]/60 rounded-2xl bg-white overflow-hidden shadow-lg">
            {/* Left Form */}
            <div className="flex-1 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 bg-[#f2f2f2] px-3 outline-none rounded-lg focus:ring-2 focus:ring-sky-200 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-11 bg-[#f2f2f2] px-3 outline-none rounded-lg focus:ring-2 focus:ring-sky-200 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">
                    Your Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 bg-[#f2f2f2] px-3 outline-none rounded-lg focus:ring-2 focus:ring-sky-200 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 bg-[#f2f2f2] px-3 outline-none rounded-lg focus:ring-2 focus:ring-sky-200 transition"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1.5 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#f2f2f2] p-3 resize-none outline-none rounded-lg focus:ring-2 focus:ring-sky-200 transition"
                />
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-[265px] bg-[#d8edf6] px-6 py-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <div className="w-16 h-0.5 bg-sky-500 mx-auto mt-2" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[#39A8D9] italic font-bold text-[16px] mb-1">
                    Location:
                  </h4>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    Birtamode-5, Jhapa, Nepal
                    <br />
                    Near B&amp;C Hospital Road
                  </p>
                </div>

                <div>
                  <h4 className="text-[#39A8D9] italic font-bold text-[16px] mb-1">
                    Contact Details:
                  </h4>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    Phone: +977 980-4457781
                    <br />
                    Email: info@pearldentica.com
                  </p>
                </div>

                <div>
                  <h4 className="text-[#39A8D9] italic font-bold text-[16px] mb-1">
                    Opening Hours:
                  </h4>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    9:00 am to 6:00 pm
                    <br />
                    Sunday to Friday
                    <br />
                    <span className="text-[10px] text-gray-500 block mt-1">
                      (Open for emergencies on Saturdays with notice)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
