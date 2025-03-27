"use client";
import React from "react";
import Image from "next/image";

const DeveloperDo = ({ data, repeatCount = 1 }) => {
  // Repeat the data array `repeatCount` times
  const repeatedData = Array(repeatCount)
    .fill(data)
    .flat();

  return (
    <div className="Developerdo-sec py-10 md:py-20">
      <div className="container max-auto">
        {repeatedData.map((item, index) => (
          <div
            key={index}
            className="Developerdo-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10"
          >
            {index % 2 === 0 ? (
              <>
                {/* For even index: Text content first */}
                <div className="Developerdo-box Developerdo-col max-w-[470px] md:mt-16 flex flex-col gap-5">
                  <h2 className="section_head_title font-semibold max-w-[420px] text-[34px] 2xl:text-[40px] xl:text-[30px] md:text-[28px] sm:text-[24px] md:mb-3 mb-2 text-customwhite">
                    {item.title}
                  </h2>
                  <div className="w-full">
                    {Array.isArray(item.description) ? (
                      item.description.map((description, paraIndex) => (
                        <p
                          key={paraIndex}
                          className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      ))
                    ) : (
                      <p
                        className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
                <div className="Developerdo-box Developerdo-col">
                  <Image
                    className="service_frame w-full"
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={879}
                    height={500}
                  />
                </div>
              </>
            ) : (
              <>
                {/* For odd index: Image content first */}
                <div className="Developerdo-box Developerdo-col">
                  <Image
                    className="service_frame w-full"
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={879}
                    height={500}
                  />
                </div>
                <div className="Developerdo-box Developerdo-col max-w-[520px] md:mt-10 flex flex-col gap-5">
                  <h2 className="section_head_title font-semibold text-[34px] 2xl:text-[40px] xl:text-[30px] md:text-[28px] sm:text-[24px] md:mb-3 mb-2 text-customwhite">
                    {item.title}
                  </h2>
                  <div className="w-full">
                    {Array.isArray(item.description) ? (
                      item.description.map((description, paraIndex) => (
                        <p
                          key={paraIndex}
                          className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      ))
                    ) : (
                      <p
                        className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperDo;
