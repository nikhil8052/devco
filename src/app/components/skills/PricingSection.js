"use client";
import React from "react";

const PricingSection = ({ title, description }) => {

  return (
    <div className="simple-text-sec pb-10 lg:pb-20 md:pb-10">
      <div className="container">
        <div className="simple-text text-center">
          {title && (
            <h2
              className="section_head_title font-semibold text-[26px] 2xl:text-[54px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          )}
           {description && (
            <p
              className="description_title text-[26px] 2xl:text-[22px] xl:text-[20] md:text-[14] sm:text-[14px] text-customwhite"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
