import { Phone, Clock3, GraduationCap } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Aarav Khadka",
      image: "/src/assets/d3.webp",
      bg: "bg-[#d7eaf3]",
      nameColor: "text-[#39a0d5]",
      textColor: "text-gray-700",
      description:
        "Dr. Aarav Khadka is a dedicated dental professional with extensive experience in cosmetic, restorative, and preventive dentistry. He is committed to providing personalized treatment and helping patients achieve healthy, confident smiles.",
    },
    {
      name: "Dr. Amish Khatiwada",
      image: "/src/assets/d2.jpg",
      bg: "bg-[#69c2ea]",
      nameColor: "text-white",
      textColor: "text-white",
      description:
        "Dr. Amish Khatiwada provides exceptional dental care with a strong focus on preventive and restorative treatments. His patient-centered approach ensures comfort, quality, and long-term oral health.",
    },
    {
      name: "Dr. Aarav Khadka",
      image: "/src/assets/d3.webp",
      bg: "bg-[#d7eaf3]",
      nameColor: "text-[#39a0d5]",
      textColor: "text-gray-700",
      description:
        "Dr. Aarav Khadka is a dedicated dental professional with extensive experience in cosmetic, restorative, and preventive dentistry. He is committed to providing personalized treatment and helping patients achieve healthy, confident smiles.",
    },
    {
      name: "Dr. Amish Khatiwada",
      image: "/src/assets/d2.jpg",
      bg: "bg-[#69c2ea]",
      nameColor: "text-white",
      textColor: "text-white",
      description:
        "Dr. Amish Khatiwada provides exceptional dental care with a strong focus on preventive and restorative treatments. His patient-centered approach ensures comfort, quality, and long-term oral health.",
    },
    {
      name: "Dr. Aarav Khadka",
      image: "/src/assets/d3.webp",
      bg: "bg-[#d7eaf3]",
      nameColor: "text-[#39a0d5]",
      textColor: "text-gray-700",
      description:
        "Dr. Aarav Khadka is a dedicated dental professional with extensive experience in cosmetic, restorative, and preventive dentistry. He is committed to providing personalized treatment and helping patients achieve healthy, confident smiles.",
    },

    {
      name: "Dr. Amish Khatiwada",
      image: "/src/assets/d2.jpg",
      bg: "bg-[#69c2ea]",
      nameColor: "text-white",
      textColor: "text-white",
      description:
        "Dr. Amish Khatiwada provides exceptional dental care with a strong focus on preventive and restorative treatments. His patient-centered approach ensures comfort, quality, and long-term oral health.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#3ea0d0] italic">Doctors</span>
          </h2>

          <p className="text-gray-600 italic mt-2">
            Creating Beautiful Smiles with Precision and Care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`${doctor.bg} rounded-[28px] p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              {/* Top Section */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-[220px] flex-shrink-0">
                  <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-[26px] font-bold ${doctor.nameColor}`}>
                    {doctor.name}
                  </h3>

                  <p
                    className={`mt-4 leading-7 text-[14px] ${doctor.textColor}`}
                  >
                    {doctor.description}
                  </p>

                  <div
                    className={`mt-5 space-y-2 text-[14px] ${doctor.textColor}`}
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} />
                      <span>Bachelor of Dental Surgery (BDS)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} />
                      <span>Master of Dental Surgery (MDS)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock3 size={16} />
                    <h4 className="font-semibold text-sm">24 Hrs Service</h4>
                  </div>

                  <p className="text-xs text-gray-600 leading-5">
                    Emergency dental support available whenever you need us.
                  </p>
                </div>

                <div className="bg-white  p-4">
                  <h4 className="font-semibold text-sm mb-2">
                    8+ Years Experience
                  </h4>

                  <p className="text-xs text-gray-600 leading-5">
                    Providing trusted dental care with proven expertise.
                  </p>
                </div>

                <div className="bg-white p-4">
                  <h4 className="font-semibold text-sm mb-2">Specialist</h4>

                  <p className="text-xs text-gray-600 leading-5">
                    Expert care in cosmetic, restorative and preventive
                    dentistry.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-[#67d667] hover:bg-[#56c656] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition">
                  <Phone size={18} />
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
