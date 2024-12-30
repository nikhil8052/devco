"use client";
import React from "react";

const Subheadingtext = ({ heading, subText, list1, list2 }) => {
  // Check if any data exists
  const hasContent =
    heading || subText || (list1?.length > 0) || (list2?.length > 0);

  // Return null if there's no data
  if (!hasContent) return null;

  return (
    <div className="sub-heading-ulli-sec py-10 md:py-20 relative">
      <div className="container relative z-10">
        <div className="code_content">
          {/* Render heading and subText only if they are provided */}
          {(heading || subText) && (
            <div className="relative mx-auto w-full mb-5">
              {heading && (
                <h3 className="text-[24px] max-w-[500px] 2xl:text-[40px] xl:text-[36px] md:text-[30px] sm:text-[26px] font-semibold mb-2">
                  {heading}
                </h3>
              )}
              {subText && (
                <p
                  className="text-[14px] lg:text-[22px] md:text-[16px] text-customwhite mb-10"
                  dangerouslySetInnerHTML={{ __html: subText }}
                ></p>
              )}
            </div>
          )}
          {/* Render lists only if they are provided */}
          {(list1?.length > 0 || list2?.length > 0) && (
            <div className="ulli-text">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 gap-x-4 md:gap-y-10">
                {list1?.length > 0 && (
                  <ul className="section_ulli pl-7 text-opacity-70 max-w-[500px] 2xl:max-w-[690px] list-disc text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4">
                    {list1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {list2?.length > 0 && (
                  <ul className="section_ulli pl-7 text-opacity-70 max-w-[500px] 2xl:max-w-[690px] list-disc text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4">
                    {list2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subheadingtext;
