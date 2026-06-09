import React, { useState } from "react";

const doctors = [
  {
    image: "/src/assets/d11.avif",
    name: "Dr. Rajat Timsina",
    specialty: "Cosmetic Dentistry",
  },
  {
    image: "/src/assets/d2.jpg",
    name: "Dr. Pradip Bhattarai",
    specialty: "Root Canal Treatment",
  },
  {
    image: "/src/assets/d9.avif",
    name: "Dr. Lamish KC",
    specialty: "Dental Implants",
  },
  {
    image: "/src/assets/d3.webp",
    name: "Dr. Ashish Karki",
    specialty: "Smile Makeover",
  },
];

const clinicImages = [
  "/src/assets/Waiting-Room-in-Green.jpg",
  "/src/assets/mainn.jpg",
  "/src/assets/waitingg.jpg",
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < clinicImages.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setSelectedImage(clinicImages[next]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      setSelectedImage(clinicImages[prev]);
    }
  };

  return (
    <section className=" bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/d1.jpg"
              alt="Doctor"
              className="w-full max-w-sm object-cover"
            />
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              About <span className="text-[#3ea0d0] italic">PEARL DENTICA</span>
            </h2>

            <p className="text-gray-600 italic text-base leading-7 text-center">
              At <strong>Pearl Dentica Care</strong>, we are committed to
              providing exceptional dental care in a comfortable, friendly, and
              modern environment. Our clinic combines advanced dental technology
              with a patient-centered approach to ensure every visit is safe,
              effective, and stress-free. We believe that quality dental care
              goes beyond treatment. It involves building trust, understanding
              each patient's unique needs, and helping them achieve healthy,
              confident smiles. Whether you require preventive care, cosmetic
              dentistry, or restorative treatments, our dedicated team strives
              to deliver personalized solutions with compassion,
              professionalism, and attention to detail.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Mission & Vision Intro */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our{" "}
              <span className="text-[#3ea0d0] italic">Mission and Vision</span>
            </h2>

            <p className="text-gray-600 text-sm text-center mb-6">
              To provide high-quality, patient-centered dental care that
              promotes healthy, confident smiles in a comfortable and welcoming
              environment.
            </p>

            <img
              src="/src/assets/treat.jpg"
              alt="Clinic"
              className="w-full rounded shadow-md"
            />
          </div>

          {/* Mission Card */}
          <div className="bg-cyan-100 rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            {" "}
            <h3 className="text-2xl font-bold text-center mb-2">Mission</h3>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-base leading-7">
              To become one of Nepal's most trusted and modern dental care
              brands known for premium patient experience, advanced dental
              solutions, and confidence-building smile transformations.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-green-100 rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            {" "}
            <h3 className="text-2xl font-bold text-center mb-2">Vision</h3>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-base leading-7">
              To provide painless, modern, and patient-friendly dental care
              using advanced technology and compassionate service while
              maintaining the highest standards of hygiene and professionalism.
            </p>
          </div>
        </div>

        {/* Clinic Environment */}
        <h1 className="font-bold text-3xl text-center mb-4 mt-10">
          Clinic <span className="text-[#3ea0d0] italic">Environment</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 py-4">
          {clinicImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Clinic ${index + 1}`}
              className="w-full h-56 object-cover rounded-2xl shadow-sm cursor-pointer transition hover:scale-105"
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
        {/*Team Members*/}
        <div>
          <h1 className="font-bold text-3xl text-center mt-10">
            Team <span className="text-[#3ea0d0] italic">Members</span>
          </h1>
          <p className="italic text-xs text-center mb-5 text-gray-500">
            Passionate professionals dedicated to exceptional dental care
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-0 md:px-10 py-4">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-60 object-cover rounded-xl shadow-sm"
                />

                <h3 className="text-[#3BAFDA] font-bold text-lg mt-3">
                  {doctor.name}
                </h3>

                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
              </div>
            ))}
          </div>

          <h1 className="font-bold text-4xl text-center mt-12 mb-6">
            Certifications and{" "}
            <span className="text-[#3ea0d0] italic">Awards</span>
          </h1>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous */}
            {currentIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white text-xl md:text-2xl hover:bg-[#3BAFDA] transition z-50"
              >
                ❮
              </button>
            )}

            {/* Image */}
            <div className="w-[90vw] md:w-[900px] h-[300px] md:h-[600px] bg-black rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Full Size"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Next */}
            {currentIndex < clinicImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white text-xl md:text-2xl hover:bg-[#3BAFDA] transition z-50"
              >
                ❯
              </button>
            )}

            {/* Close */}
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
