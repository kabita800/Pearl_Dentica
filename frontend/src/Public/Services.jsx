import React, { useState } from "react";

const services = [
  {
    title: "Teeth Whitening",
    image: "/src/assets/teeth.jpeg",
    description:
      "Professional whitening for a noticeably brighter smile. Remove stains and enhance your smile's natural brightness.",
    details:
      "Professional teeth whitening treatment designed to remove stains and discoloration. Achieve a brighter, more radiant smile safely and effectively. Our advanced whitening techniques deliver noticeable results while maintaining tooth sensitivity at a minimum.",
  },
  {
    title: "Dental Implants",
    image: "/src/assets/dental implants.jpg",
    description:
      "Replace missing teeth with durable, natural-looking implants. Restore your smile, confidence, and chewing ability.",
    details:
      "Dental implants provide a permanent solution for missing teeth. They look, feel, and function like natural teeth while preserving jawbone health and restoring your confidence.",
  },
  {
    title: "Braces & Aligners",
    image: "/src/assets/braces.jpg",
    description:
      "Straighten misaligned teeth with modern orthodontic solutions. Achieve a healthier, more confident smile comfortably.",
    details:
      "Our braces and aligner treatments correct crooked teeth, bite issues, and spacing problems. Enjoy a straighter smile with personalized orthodontic care.",
  },
  {
    title: "Root Canal Treatment",
    image: "/src/assets/root canal.jpg",
    description:
      "Save infected teeth with safe and effective root canal therapy. Relieve pain while preserving your natural tooth.",
    details:
      "Root canal treatment removes infected tissue inside the tooth, eliminates pain, and helps preserve your natural tooth structure for long-term oral health.",
  },
  {
    title: "Smile Makeover",
    image: "/src/assets/smile-makeover.jpg",
    description:
      "Transform your smile with customized cosmetic treatments. Enhance appearance, confidence, and overall dental aesthetics.",
    details:
      "A smile makeover combines cosmetic dental procedures to improve the appearance of your smile, giving you a more confident and attractive look.",
  },
  {
    title: "Pediatric Dentistry",
    image: "/src/assets/pediatric.webp",
    description:
      "Gentle dental care designed specifically for children. Promote healthy oral habits and happy smiles from an early age.",
    details:
      "Our pediatric dentistry services focus on preventive care and education to ensure children develop healthy dental habits and maintain beautiful smiles.",
  },
  {
    title: "Dental Cleaning",
    image: "/src/assets/dental cleaning.jpg",
    description:
      "Professional cleaning helps remove plaque and tartar buildup. Maintain healthy teeth, gums, and fresh breath.",
    details:
      "Routine dental cleanings help prevent cavities, gum disease, and bad breath while keeping your teeth looking and feeling their best.",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/src/assets/cosmetic.jpg",
    description:
      "Enhance the beauty of your smile with advanced treatments. Improve the shape, color, and overall appearance of your teeth.",
    details:
      "Cosmetic dentistry includes veneers, bonding, whitening, and other treatments designed to create a naturally beautiful and confident smile.",
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedRow =
    selectedIndex !== null ? Math.floor(selectedIndex / 3) : null;

  const rowEndIndex =
    selectedIndex !== null ?
      Math.min(selectedRow * 3 + 2, services.length - 1)
    : null;

  return (
    <section className="py-12 pb-14 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-[#3ea0d0] italic">Services</span>
        </h1>

        <p className="text-center text-gray-500 italic mb-16 mt-2 max-w-lg mx-auto text-sm md:text-base">
          Our comprehensive dental services are designed to meet all your oral
          health needs
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14 p-4">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              {/* Service Card */}
              <div
                className="
                  group
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  ease-in-out
                  flex flex-col
                  items-center
                  text-center
                  p-6
                  relative
                "
              >
                {/* Image */}
                <div className="-mt-14 mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-20 h-20
                      rounded-full
                      object-cover
                      border-4 border-white
                      shadow-md
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 mb-5 flex-grow">
                  {service.description}
                </p>
                {/* Button */}
                <button
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? null : index)
                  }
                  className="bg-[#3BAFDA] hover:bg-sky-500 text-white px-6 py-2 text-sm rounded-full transition cursor-pointer font-medium"
                >
                  {selectedIndex === index ? "Close" : "Learn More"}
                </button>
                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3BAFDA]" />
              </div>

              {/* Detail Section - Mobile */}
              {selectedIndex === index && (
                <div className="block md:hidden w-full mt-4 bg-[#d8edf5] rounded-3xl p-6 text-left col-span-1 border border-sky-100">
                  <div className="flex justify-center mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-w-[280px] h-40 object-cover rounded-2xl shadow-sm"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h2>
                  <p className="text-gray-700 leading-relaxed text-sm">{service.details}</p>
                </div>
              )}

              {/* Detail Section - Desktop */}
              {selectedIndex !== null && index === rowEndIndex && (
                <div className="hidden md:flex md:col-span-3 mt-6 justify-center">
                  <div className="bg-[#d8edf5] rounded-full p-8 md:p-10 max-w-5xl w-full border border-sky-100">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src={services[selectedIndex].image}
                          alt={services[selectedIndex].title}
                          className="w-full max-w-[360px] h-64 object-cover rounded-full shadow-md"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                          {services[selectedIndex].title}
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {services[selectedIndex].details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
