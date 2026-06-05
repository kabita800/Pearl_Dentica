import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300",
    description:
      "Professional whitening for a noticeably brighter smile. Remove stains and enhance your smile's natural brightness.",
  },
  {
    title: "Dental Implants",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Replace missing teeth with durable, natural-looking implants. Restore your smile, confidence, and chewing ability.",
  },
  {
    title: "Braces & Aligners",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=300",
    description:
      "Straighten misaligned teeth with modern orthodontic solutions. Achieve a healthier, more confident smile comfortably.",
  },

  {
    title: "Root Canal Treatment",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Save infected teeth with safe and effective root canal therapy. Relieve pain while preserving your natural tooth.",
  },

  {
    title: "Smile Makeover",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Transform your smile with customized cosmetic treatments. Enhance appearance, confidence, and overall dental aesthetics.",
  },

  {
    title: "Pediatric Dentistry",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Gentle dental care designed specifically for children. Promote healthy oral habits and happy smiles from an early age.",
  },

  {
    title: "Dental Cleaning",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Professional cleaning helps remove plaque and tartar buildup. Maintain healthy teeth, gums, and fresh breath.",
  },

  {
    title: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300",
    description:
      "Enhance the beauty of your smile with advanced treatments. Improve the shape, color, and overall appearance of your teeth.",
  },
];


export default function Services() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-[#3ea0d0] italic">Services</span>
        </h1>
        <p className="text-center text-gray-500 italic mb-12">
          Our comprehensive dental services are designed to meet all your oral health needs
        </p>



        <div className="grid md:grid-cols-3 gap-x-5 gap-y-14 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-5 relative"
            >
              {/* Circular Image */}
              <div className="-mt-12 mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6 mb-5">
                {service.description}
              </p>

              {/* Button */}
              <button className="bg-[#3BAFDA] hover:bg-sky-500 text-white px-6 py-2 text-sm rounded-full transition">
                Learn More
              </button>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3BAFDA]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}