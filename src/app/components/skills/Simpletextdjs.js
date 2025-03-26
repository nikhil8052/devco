"use client";
import React from "react";

const Simpletextdjs = ({ data }) => {
  const { title, paragraphs } = data;

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
          <div className="w-full">
            {Array.isArray(paragraphs) &&
              paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simpletextdjs;
