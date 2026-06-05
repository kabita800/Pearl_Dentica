import React from "react";

const About = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/d1.jpg"
              alt="Doctor"
              className="w-full max-w-md object-cover"
            />
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              About <span className="text-[#3ea0d0] italic">PEARL DENTICA</span>
            </h2>

            <p className="text-gray-600 italic text-lg leading-relaxed text-center">
              At <strong>Pearl Dentica Care</strong>, we are committed to
              providing exceptional dental care in a comfortable, friendly, and
              modern environment. Our clinic combines advanced dental technology
              with a patient-centered approach to ensure every visit is safe,
              effective, and stress-free.
              <br />
              <br />
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
            <h2 className="text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-[#3ea0d0] italic">Mission and Vision</span>
            </h2>

            <p className="text-gray-600 text-lg text-center mb-8">
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
          <div className="bg-cyan-100 rounded-[35px] p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-center mb-6">Mission</h3>

            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>

            <p className="text-gray-800 text-xl leading-relaxed">
              To become one of Nepal's most trusted and modern dental care
              brands known for premium patient experience, advanced dental
              solutions, and confidence-building smile transformations.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-green-100 rounded-[35px] p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-center mb-6">Vision</h3>

            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>

            <p className="text-gray-800 text-xl leading-relaxed">
              To provide painless, modern, and patient-friendly dental care
              using advanced technology and compassionate service while
              maintaining the highest standards of hygiene and professionalism.
            </p>
          </div>
        </div>

        <h1 className="font-bold text-4xl text-center mb-5 mt-12">
          Clinic <span className="text-[#3ea0d0] italic">Environment</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-4">
          <img
            src="/src/assets/Waiting-Room-in-Green.jpg"
            alt="Clinic Photo"
            className="w-full h-70 object-cover"
          />

          <img
            src="/src/assets/mainn.jpg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />

          <img
            src="/src/assets/waitingg.jpg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-4xl text-center mt-12">
            Team <span className="text-[#3ea0d0] italic">Members</span>
          </h1>
            <p className="italic text-sm text-center mb-5">Passionate professionals dedicated to exceptional dental care </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20 py-4">

            <img
              src="/src/assets/d1.jpg"
              alt="Doctor Photo"
              className="w-full h-70 object-cover"
            />

            <img
              src="/src/assets/d2.jpg"
              alt="Doctor Photo"
              className="w-full h-70 object-cover"
            />

            <img
              src="/src/assets/d5.webp"
              alt="Doctor Photo"
              className="w-full h-70 object-cover"
            />

            <img
              src="/src/assets/d3.webp"
              alt="Doctor Photo"
              className="w-full h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
