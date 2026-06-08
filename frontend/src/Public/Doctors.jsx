import { Phone, Clock3, GraduationCap } from "lucide-react";

export default function Doctors() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#3ea0d0] italic">Doctors</span>
          </h2>

          <p className="text-gray-600 italic mt-2">
            Creating Beautiful Smiles with Precision and Care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor 1 */}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d3.webp"
                    alt="Dr. Aarav Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Aarav Khadka
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Aarav Khadka specializes in cosmetic and restorative
                  dentistry, combining advanced techniques with compassionate
                  care to help patients achieve healthy, confident, and
                  long-lasting smiles.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">
                  Teeth Whitening Specialist
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d10.jpg"
                    alt="Dr. Rima Shrestha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Rima Shrestha
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Rima Shrestha is known for her gentle approach and
                  expertise in smile enhancement treatments, providing
                  personalized dental care with a strong focus on patient
                  comfort and satisfaction.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">
                  Smile Makeover Specialist
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d5.webp"
                    alt="Dr.James Gurung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. James Gurung
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. James Gurung has extensive experience in orthodontic
                  treatments, helping patients improve dental alignment and oral
                  health through modern braces and clear aligner solutions.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">
                  Braces & Aligners Specialist
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/* Doctor 4 */}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d13.png"
                    alt="Dr. Manish B.K"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Manish B.K
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Manish B.K focuses on restorative dental procedures and
                  advanced root canal treatments, ensuring comfortable care
                  while preserving natural teeth and long-term oral health.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">
                  Root Canal Treatment Specialist
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/* Doctor 5*/}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d7.avif"
                    alt="Dr. Aarav Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Roshni Gurung
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Roshni Gurung excels in cosmetic dentistry, creating
                  beautiful and natural-looking smiles through customized
                  treatment plans designed to meet each patient's unique dental
                  goals.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">Cosmetic Dentistry Specialist</p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/*Doctor 6 */}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d9.avif"
                    alt="Dr. Aarav Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Lamish KC
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Lamish KC specializes in dental implant procedures,
                  restoring both function and aesthetics with precision-driven
                  treatments that help patients regain confidence in their
                  smiles.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">Dental Implants Specialist</p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/*Doctor 7*/}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d8.avif"
                    alt="Dr. Aarav Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Aavash Maharjan
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Aavash Maharjan is dedicated to preventive dentistry and
                  oral hygiene, providing thorough dental cleaning treatments
                  that support healthier teeth, gums, and overall wellness.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">Dental Cleaning Specialist</p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>

          {/*Doctor 8*/}
          <div className="bg-[#d7eaf3] rounded-[28px] p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[220px]">
                <div className="bg-white rounded-[20px] overflow-hidden h-[280px]">
                  <img
                    src="/src/assets/d6.png"
                    alt="Dr. Aarav Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-[#39a0d5]">
                  Dr. Sarah Khan
                </h3>

                <p className="mt-4 leading-7 text-[14px] text-gray-700">
                  Dr. Sarah Khan specializes in pediatric dentistry, creating a
                  friendly and welcoming environment where children receive
                  gentle, high-quality dental care tailored to their needs.
                </p>

                <div className="mt-5 space-y-2 text-[14px] text-gray-700">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 ">
                <h4 className="font-semibold text-sm mb-2">24 Hrs Service</h4>
                <p className="text-xs text-gray-600">
                  Emergency dental care available anytime.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">
                  8+ Years Experience
                </h4>
                <p className="text-xs text-gray-600">
                  Trusted expertise in modern dentistry.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-semibold text-sm mb-2">Specialist</h4>
                <p className="text-xs text-gray-600">Pediatric Dentistry Specialist</p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#67d667] hover:bg-[#56c656] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
