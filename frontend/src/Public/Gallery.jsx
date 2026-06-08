import React, { useState } from "react";
import BeforeAfterCard from "../components/BeforeAfterCard";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clinicImages = [
    {
      image: "/src/assets/Waiting-Room-in-Green.jpg",
      title: "Clinic Waiting Room",
    },
    {
      image: "/src/assets/mainn.jpg",
      title: "Clinic Main Hall",
    },
    {
      image: "/src/assets/waitingg.jpg",
      title: "Clinic Waiting Area",
    },
    {
      image: "/src/assets/main.jpg",
      title: "Clinic Treatment Room",
    },
  ];

  const treatmentImages = [
    {
      image: "/src/assets/service1.jpg",
      title: "Teeth Whitening",
    },
    {
      image: "/src/assets/treat1.webp",
      title: "Dental Implants",
    },
    {
      image: "/src/assets/service3.webp",
      title: "Dental Cleaning",
    },
    {
      image: "/src/assets/treat.jpg",
      title: "Dental Exam",
    },
  ];

  const openImage = (gallery, index) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setSelectedImage(gallery[index]);
  };

  const nextImage = () => {
    if (currentIndex < currentGallery.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedImage(currentGallery[nextIndex]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedImage(currentGallery[prevIndex]);
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-white py-6 px-4 md:px-6">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-0 md:px-20 py-4">
          {clinicImages.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
              onClick={() => openImage(clinicImages, index)}
            />
          ))}
        </div>
      </div>

      {/* Treatment Photos */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mb-3">
          Treatment Photos
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-0 md:px-20 py-4">
          {treatmentImages.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
              onClick={() => openImage(treatmentImages, index)}
            />
          ))}
        </div>
      </div>

      {/* Smile Transformation */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-xl text-[#3BAFDA] md:text-2xl font-bold text-center mb-3">
          Smile Transformation Image
        </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
          {/* Card 1 */}
          <div className="text-center">
            <BeforeAfterCard
              before="/src/assets/bracesbeffore.jpg"
              after="/src/assets/bracessbefore&after.jpg"
            />

            <h3 className="mt-4 text-xl font-bold text-[#3BAFDA]">
              Braces & Aligners
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              Complete restoration with a natural feel
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <BeforeAfterCard
              before="/src/assets/beforeShowcaseeee.png"
              after="/src/assets/beforeshow.png"
            />

            <h3 className="mt-4 text-xl font-bold text-[#3BAFDA]">
              Teeth Whitening
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              8 shades brighter in 1 session
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <BeforeAfterCard
              before="/src/assets/beforee.jpeg"
              after="/src/assets/after.jpeg"
            />

            <h3 className="mt-4 text-xl font-bold text-[#3BAFDA]">
              Smile Makeover
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              Complete smile transformation tailored
            </p>
          </div>
        </div>
      </div>

      {/*Modal*/}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
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
            <div className="flex flex-col items-center">
              <div className="w-[90vw] md:w-[800px] h-[300px] md:h-[550px] overflow-hidden rounded-xl shadow-2xl bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-center text-white text-xl md:text-2xl font-semibold mt-4">
                {selectedImage.title}
              </h3>
            </div>

            {/* Next */}
            {currentIndex < currentGallery.length - 1 && (
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
    </div>
  );
};
export default Gallery;
