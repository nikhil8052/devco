"use client";
import React from "react";
import Image from "next/image";

const Whyusecard = ({ data, sectionHeading, imageWidth, imageHeight }) => {
  // Ensure sectionHeading exists and has content
  const { sectiontitle, sectiondescription } = sectionHeading?.[0] || {};

  return (
    <div className="Whyusecard-sec py-10 md:pt-20 relative ">
      <div className="container mx-auto relative z-10">
        {/* Dynamic Section Heading */}
        {sectiontitle && (
          <div className="section_headnew section_head_half">
            <h2 dangerouslySetInnerHTML={{ __html: sectiontitle }}></h2>
            <div className="section_head_description">
              <p dangerouslySetInnerHTML={{ __html: sectiondescription }}></p>
            </div>
          </div>
        )}

        {/* Dynamic Cards */}
        <div className="Whyusecard-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-full rounded overflow-hidden shadow-lg border-lightBlue border p-5 data_card bg-white/4 backdrop-blur-lg"
            >
              {/* Image */}
              <div className="image_div">
                <Image
                  src={item.imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  alt={item.imageAlt || "Not Found"}
                  className="w-full"
                />
              </div>

              {/* SubTitle and Details */}
              <div className="text_block my-4 xl:my-4 md:my-8">
                <h5 className="text-customWhite font-semibold text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] mb-2">
                  {item.title}
                </h5>
                <p className="text-customWhite text-[14px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="bg_right-pattern absolute top-[-10%] right-0 z-1 w-[50%]">
        <Image
          src="/images/why-use.png"
          width={1920}
          height={500}
          alt="Background Pattern"
        />
      </div>
    </div>
  );
};

export default Whyusecard;
