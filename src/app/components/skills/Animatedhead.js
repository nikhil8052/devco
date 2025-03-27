"use client";
import Image from "next/image";

const Animatedhead = ({ sectionHeading = [] }) => {
  if (!sectionHeading.length) return null; // Prevents errors if data is missing
  
  const { sectiontitle = "", sectiondescription = "" } = sectionHeading[0];

  return (
    <div className="Animatedhead-sec py-10 pt-24 relative">
      <div className="container mx-auto relative z-10">
        <div className="section_headnanimated">
          {/* Animated Title */}
          <h2
            className="2xl:text-[70px] xl:text-[50px] md:text-[42px] sm:text-[22px] text-[22px] font-semibold text-white-800 flex"
            dangerouslySetInnerHTML={{ __html: sectiontitle || "Default Title" }}
          ></h2>

          {/* Static Description */}
          <div className="section_head_description">
            <p
              className="text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite"
              dangerouslySetInnerHTML={{ __html: sectiondescription || "Default description." }}
            ></p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="bg_right-pattern absolute top-0 left-0 w-[50%] z-[-1]">
        <Image
          src="/images/left_ec_pattern.png"
          width={1920}
          height={500}
          alt="Background Pattern"
          priority
        />
      </div>
    </div>
  );
};

export default Animatedhead;
