import React from "react";
import { useState } from "react";
import { FaTooth, FaTeeth, FaRegSmile } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const Home = () => {
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
    <div className="relative h-screen w-full">
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
          YOUR SMILE DESERVES
          <span className="block">THE BEST CARE</span>
        </h1>

        <p className="text-lg max-w-2xl mb-8">
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
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold mb-4">
            About <span className="text-[#3BAFDA] italic">Clinic</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/src/assets/dental.jpg"
                alt="Dental Care"
                className="w-[280px] h-[270px] object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-800 text-[16px] leading-7 max-w-md mb-8">
                Our team of skilled and experienced dental professionals strives
                to create comfortable and welcoming environment for each and
                every patients.
              </p>

              <button className="bg-[#3BAFDA] hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded-full text-2xl transition">
                Book Appointment
              </button>

              <img
                src="/src/assets/img-3.jpg"
                alt="Dental Treatment"
                className="w-[320px] h-[210px] object-cover mt-10"
              />
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/img-2.webp"
                alt="Dental Checkup"
                className="w-[280px] h-[270px] object-cover"
              />

              <div className="mt-6 text-left w-full max-w-[280px]">
                <h3 className="text-4xl font-bold text-black">98%</h3>
                <p className="text-gray-800 text-xl mt-2">
                  Client Satisfaction with our services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 px-6 md:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services <span className="text-[#3BAFDA] italic">Overview</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
            <FaTooth className="text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-3">Teeth Whitening</h3>
            <p className="text-gray-700 leading-relaxed">
              Safely remove stains and discoloration to achieve a brighter, more
              confident smile.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D8EAF1] p-6 min-h-[220px] hover:shadow-lg transition">
            <FaTeeth className="text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-3">Dental Implants</h3>
            <p className="text-gray-700 leading-relaxed">
              Replace missing teeth with natural-looking, long-lasting solutions
              that restore function and confidence.
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
          <Link to="/services">
            <button className="bg-[#D8EAF1] px-6 py-3 rounded-full font-medium hover:bg-[#c6dfe8] transition">
              View All Services ↗
            </button>
          </Link>
        </div>
      </section>

      {/* why choose us */}
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Why <span className="text-[#3BAFDA] italic">choose</span> us?
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/docto.webp"
              alt="Doctor"
              className="w-[420px] h-[420px] object-cover rounded-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#3BAFDA] mb-2">
              Your path to a Healthier Smile
            </h2>

            <p className="text-gray-600 max-w-lg mb-10">
              Lorem ipsum dolor sit amet consectetur. Quis massa est justo
              scelerisque eu faucibus eget id quisque.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="font-semibold">Experience Doctor</p>
              </div>

              <div className="bg-[#3BAFDA] text-white px-10 py-8 text-center">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="font-semibold">Patient Satisfaction</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold">20k+</h3>
                <p className="font-semibold">Appointment Book</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg">Easy online Appointment Booking</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg">Experienced and caring dentists</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg">Advanced dental Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors/Expert */}
       <h1 className="text-3xl font-bold text-center mb-8 mt-12 text-[#3BAFDA] italic">
        Doctors & Experts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 py-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative overflow-hidden"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[400px] gap-4 object-cover"
            />

            {/* Doctor Info Box */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%] bg-white shadow-xl py-4 px-2 text-center">
              <h3 className="text-xl font-bold text-[#3BAFDA]">
                {doctor.name}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                {doctor.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View Details Button */}
      <div className="flex justify-end mb-12 mt-8">
        <Link to="/doctors">
          <button className="bg-[#D8EAF1] mr-12 px-4 py-2 rounded-full font-medium hover:bg-[#c6dfe8] transition">
            View Doctor Details ↗
          </button>
        </Link>
      </div>


      {/* before and after the smile showcase */}
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Before and After the{" "}
          <span className="text-[#3BAFDA] italic">smile showcase</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 py-4">

  {/* Dental Implants */}
  <div className="text-center">
    <img
      src="/src/assets/before1.webp"
      alt="Dental Implants"
      className="w-full h-70 object-cover"
    />
    <h3 className="text-2xl font-bold text-[#3BAFDA] mt-3">
      Dental Implants
    </h3>
    <p className="text-gray-600 text-sm">
      Complete restoration, natural feel
    </p>
  </div>

  {/* Teeth Whitening */}
  <div className="text-center">
    <img
      src="/src/assets/before2.webp"
      alt="Teeth Whitening"
      className="w-full h-70 object-contain"
    />
    <h3 className="text-2xl font-bold text-[#3BAFDA] mt-3">
      Teeth Whitening
    </h3>
    <p className="text-gray-600 text-sm">
      8 shades brighter in 1 session
    </p>
  </div>

  {/* Smile Makeover */}
  <div className="text-center">
    <img
      src="/src/assets/image.jpeg"
      alt="Smile Makeover"
      className="w-full h-70 object-cover"
    />
    <h3 className="text-2xl font-bold text-[#3BAFDA] mt-3">
      Smile Makeover
    </h3>
    <p className="text-gray-600 text-sm">
      Complete smile transformation tailored
    </p>
  </div>

  {/* Dental Cleaning */}
  <div className="text-center">
    <img
      src="/src/assets/smile11.jpg"
      alt="Dental Cleaning"
      className="w-full h-70 object-contain"
    />
    <h3 className="text-2xl font-bold text-[#3BAFDA] mt-3">
      Dental Cleaning
    </h3>
    <p className="text-gray-600 text-sm">
      Professional cleaning for healthier teeth
    </p>
  </div>

</div>

      {/* Testimonials */}
      <section className="py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Testimonials
        </h2>

        <p className="text-center text-[#3BAFDA] italic font-bold text-2xl md:text-2xl mb-8">
          What our patients say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white border border-[#d9b9b9] rounded-2xl p-4">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-5 mb-6">
              I had my teeth whitening done here, and the results were amazing.
              The staff was professional, friendly, and made me feel comfortable
              throughout the process.
            </p>

            <h4 className="font-bold text-base">- Priya R.</h4>
            <p className="text-gray-500 text-sm">Teeth Whitening Patient</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#d9b9b9] rounded-2xl p-4">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-5 mb-6">
              The dental implant procedure was smooth and painless. The doctors
              explained everything clearly, and my new smile looks completely
              natural.
            </p>

            <h4 className="font-bold text-base">- David T.</h4>
            <p className="text-gray-500 text-sm">Dental Implant Patient</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#d9b9b9] rounded-2xl p-4">
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

            <p className="text-gray-600 text-sm leading-5 mb-6">
              I brought my daughter for a dental checkup, and the team was
              incredibly patient and caring. She actually looks forward to her
              visits now!
            </p>

            <h4 className="font-bold text-base">- Sarah S.</h4>
            <p className="text-gray-500 text-sm">Parent of Patients</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
            Frequently Asked Questions{" "}
            <span className="text-[#3BAFDA] italic">(FAQs)</span>
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-xl font-bold italic">
                    {faq.question}
                  </span>

                  {openIndex === index ?
                    <Minus className="text-[#3BAFDA]" size={28} />
                  : <Plus className="text-[#3BAFDA]" size={28} />}
                </button>

                {openIndex === index && (
                  <div className="pb-5 pr-10 text-gray-600 text-sm leading-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



{/* Contact & Location */}
      <section className="bg-white py-6">
  <div className="max-w-[710px] mx-auto">
    <h2 className="text-center text-3xl font-bold mb-6 text-[#3BAFDA] italic">
      Contact & Location
    </h2>

    <div className="flex flex-col md:flex-row border border-[#67d1f5] rounded-b-[14px] bg-white overflow-hidden">
      
      {/* Left Form */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5">
          <div>
            <label className="block text-[14px] text-[#555] mb-2">
              Your Full Name <span className="text-[#f28c52]">*</span>
            </label>
            <input
              type="text"
              className="w-full h-[42px] bg-[#f2f2f2] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-[14px] text-[#555] mb-2">
              Your Email <span className="text-[#f28c52]">*</span>
            </label>
            <input
              type="email"
              className="w-full h-[42px] bg-[#f2f2f2] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-[14px] text-[#555] mb-2">
              Your Subject <span className="text-[#f28c52]">*</span>
            </label>
            <input
              type="text"
              className="w-full h-[42px] bg-[#f2f2f2] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-[14px] text-[#555] mb-2">
              Contact Number <span className="text-[#f28c52]">*</span>
            </label>
            <input
              type="text"
              className="w-full h-[42px] bg-[#f2f2f2] px-3 outline-none"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-[14px] text-[#555] mb-2">
            Message <span className="text-[#f28c52]">*</span>
          </label>
          <textarea
            rows={6}
            className="w-full bg-[#f2f2f2] p-3 resize-none outline-none"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[265px] bg-[#d8edf6] px-4 py-5">
        <div className="text-center mb-5">
          <h3 className="text-[20px] font-bold text-black">
            Get In Touch
          </h3>
          <div className="w-[100px] h-[1px] bg-black mx-auto mt-2" />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-[#39A8D9] italic font-bold text-[18px] mb-2">
              Location:
            </h4>
            <p className="text-[14px] text-black leading-[18px]">
              Birtamode-5, Jhapa, Nepal
              <br />
              Near B&amp;C Hospital Road
            </p>
          </div>

          <div>
            <h4 className="text-[#39A8D9] italic font-bold text-[18px] mb-2">
              Contact Details:
            </h4>
            <p className="text-[14px] text-black leading-[18px]">
              Phone: +977 980-4457781
              <br />
              Email: info@pearldentica.com
            </p>
          </div>

          <div>
            <h4 className="text-[#39A8D9] italic font-bold text-[18px] mb-2">
              Opening Hours:
            </h4>
            <p className="text-[14px] text-black leading-[18px]">
              9:00 am to 6:00 pm
              <br />
              Sunday to Friday
              <br />
              (Open for emergencies on Saturdays with prior notice)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Home;
