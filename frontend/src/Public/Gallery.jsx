import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">
        Our <span className="text-[#3BAFDA] italic">Gallery</span>
      </h1>
      <p className="text-center text-sm text-gray-600 mb-12 italic">
        Smiles That Speak for Themselves
      </p>

      <div>
        <h1 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mt-6">
          Clinic Photos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20 py-4">
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

          <img
            src="/src/assets/main.jpg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>



      <div>
        <h1 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mt-6">
          Treatment Photos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20 py-4">
          <img
            src="/src/assets/service1.jpg"
            alt="Clinic Photo"
            className="w-full h-70 object-cover"
          />

          <img
            src="/src/assets/treat1.webp"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />

          <img
            src="src/assets/service3.webp"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />

          <img
            src="/src/assets/treat.jpg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


<div>
        <h1 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mt-6">
          Smile Transformation Images
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-4">
          <img
            src="/src/assets/smile1.jpg"
            alt="Clinic Photo"
            className="w-full h-70 object-cover"
          />

          <img
            src="/src/assets/smile3.jpeg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />

          <img
            src="/src/assets/smilr.jpg"
            alt="Clinic Photo"
            className="w-full h-full object-cover"
          />

        </div>
      </div>

    </div>
  );
};

export default Gallery;
