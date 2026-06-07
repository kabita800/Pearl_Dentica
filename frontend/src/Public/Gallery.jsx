import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    title: "",
  });

  return (
    <div className="w-full overflow-x-hidden bg-white py-12 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our <span className="text-[#3BAFDA] italic">Gallery</span>
      </h1>
      <p className="text-center text-sm text-gray-500 mb-12 mt-2 italic">
        Smiles That Speak for Themselves
      </p>

      {/* Clinic Photos */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mb-3">
          Clinic Photos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-0 md:px-20 py-4">
          <img
            src="/src/assets/Waiting-Room-in-Green.jpg"
            alt="Waiting Room"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/Waiting-Room-in-Green.jpg",
                title: "Clinic Waiting Room",
              })
            }
          />

          <img
            src="/src/assets/mainn.jpg"
            alt="Clinic Main Hall"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/mainn.jpg",
                title: "Clinic Main Hall",
              })
            }
          />

          <img
            src="/src/assets/waitingg.jpg"
            alt="Waiting Area"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/waitingg.jpg",
                title: "Clinic Waiting Area",
              })
            }
          />

          <img
            src="/src/assets/main.jpg"
            alt="Clinic Treatment Room"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/main.jpg",
                title: "Clinic Treatment Room",
              })
            }
          />
        </div>
      </div>

      {/* Treatment Photos */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mb-3">
          Treatment Photos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-0 md:px-20 py-4">
          <img
            src="/src/assets/service1.jpg"
            alt="Dental Treatment 1"
            className="w-full h-64 object-cover  shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/service1.jpg",
                title: "Teeth Whitening",
              })
            }
          />

          <img
            src="/src/assets/treat1.webp"
            alt="Dental Treatment 2"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/treat1.webp",
                title: "Dental Implants",
              })
            }
          />

          <img
            src="/src/assets/service3.webp"
            alt="Dental Treatment 3"
            className="w-full h-64 object-cover  shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/service3.webp",
                title: "Dental Cleaning",
              })
            }
          />

          <img
            src="/src/assets/treat.jpg"
            alt="Dental Treatment 4"
            className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/treat.jpg",
                title: "Dental Exam",
              })
            }
          />
        </div>
      </div>

      {/* Smile Transformation */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mb-3">
          Smile Transformation Images
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-20 py-4">
          <img
            src="/src/assets/smile1.jpg"
            alt="Smile Transformation 1"
            className="w-full h-64 object-cover  shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/smile1.jpg",
                title: "dental Implant",
              })
            }
          />

          <img
            src="/src/assets/smile3.jpeg"
            alt="Smile Transformation 2"
            className="w-full h-64 object-cover  shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/smile3.jpeg",
                title: "Smile Makeover",
              })
            }
          />

          <img
            src="/src/assets/smilr.jpg"
            alt="Smile Transformation 3"
            className="w-full h-64 object-cover  shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() =>
              setSelectedImage({
                image: "/src/assets/smilr.jpg",
                title: "Dental Cleaning",
              })
            }
          />
        </div>
      </div>

      {selectedImage.image && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-bold"
              onClick={() =>
                setSelectedImage({
                  image: "",
                  title: "",
                })
              }
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-[95vw] max-h-[80vh] rounded-xl shadow-2xl"
            />

            <h3 className="text-center text-white text-2xl font-semibold mt-4">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
