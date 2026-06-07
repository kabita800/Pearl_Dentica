import React from "react";

const doctors = [
  {
    image: "/src/assets/d1.jpg",
    name: "Dr. Pradip Bhattarai",
    specialty: "Cosmetic Dentistry",
  },
  {
    image: "/src/assets/d2.jpg",
    name: "Dr. Pradip Bhattarai",
    specialty: "Root Canal Treatment",
  },
  {
    image: "/src/assets/d5.webp",
    name: "Dr. Rima Shrestha",
    specialty: "Dental Implants",
  },
  {
    image: "/src/assets/d3.webp",
    name: "Dr. Pradip Bhattarai",
    specialty: "Smile Makeover",
  },
];

const About = () => {
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
              effective, and stress-free.
              We believe that quality dental care goes beyond treatment. It
              involves building trust, understanding each patient's unique
              needs, and helping them achieve healthy, confident smiles. Whether
              you require preventive care, cosmetic dentistry, or restorative
              treatments, our dedicated team strives to deliver personalized
              solutions with compassion, professionalism, and attention to
              detail.
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
          <div className="bg-cyan-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-2">Mission</h3>

            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>

            <p className="text-gray-700 text-base leading-7">
              To become one of Nepal's most trusted and modern dental care
              brands known for premium patient experience, advanced dental
              solutions, and confidence-building smile transformations.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-green-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-2">Vision</h3>

            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>

            <p className="text-gray-700 text-base leading-7">
              To provide painless, modern, and patient-friendly dental care
              using advanced technology and compassionate service while
              maintaining the highest standards of hygiene and professionalism.
            </p>
          </div>
        </div>

        <h1 className="font-bold text-3xl text-center mb-4 mt-10">
          Clinic <span className="text-[#3ea0d0] italic">Environment</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-4">
          <img
            src="/src/assets/Waiting-Room-in-Green.jpg"
            alt="Clinic Photo"
            className="w-full h-56 object-cover"
          />

          <img
            src="/src/assets/mainn.jpg"
            alt="Clinic Photo"
            className="w-full h-56 object-cover"
          />

          <img
            src="/src/assets/waitingg.jpg"
            alt="Clinic Photo"
            className="w-full h-56 object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl text-center mt-10">
            Team <span className="text-[#3ea0d0] italic">Members</span>
          </h1>
          <p className="italic text-xs text-center mb-5">
            Passionate professionals dedicated to exceptional dental care{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-4">
            {doctors.map((doctor, index) => (
              <div key={index}>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-60 object-cover"
                />

                <h3 className="text-[#3BAFDA] font-semibold text-lg mt-2">
                  {doctor.name}
                </h3>

                <p className="text-gray-700 text-sml">{doctor.specialty}</p>
              </div>
            ))}
          </div>

          <h1 className="font-bold text-4xl text-center mt-12 mb-6">
            Certifications and <span className="text-[#3ea0d0] italic">Awards</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
