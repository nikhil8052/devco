import React from 'react';
import Benefit from "@/app/components/Services/Benefit";
import Image from "next/image";

export default function Benefits({ title = "", description = "", benefits = [], bottomline=""}) {
  // Check if there's any data to render
  const hasContent = title || description || benefits.length > 0;

  return (
    <>
      {hasContent && ( // Conditionally render `benefits_section` if there's data
        <div className="new_section benefits_section pt-20 relative">
       <Image
        className="right_eclipsebg absolute bottom-0 right-0 w-1/2"
        src="/images/right_eclopse.svg"
        alt="Image"
        width={1160}
        height={440}
      />
          <div className="container relative z-10">
            {(title || description) && (
              <div className="grid-head w-full text-center md:max-w-[80%] mx-auto md:mb-20 mb-5">
                {title && (
                  <h2
                    className="section_head_title text-center font-semibold text-[28px] 2xl:text-[40px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                )}
                {description && (
                  <div className="w-full md:max-w-[80%] mx-auto">
                    <p
                      className="section_head_para text-center text[14px] 2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px] font-normal text-customwhite"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  </div>
                )}
              </div>
            )}

            {benefits.length > 0 && (
              <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {benefits.map((obj, index) => (
                  <div key={index}>
                    <Benefit
                      title={obj.title}
                      description={obj.description}
                      imageSrc={obj.imageSrc}
                      imageHeight={obj.imageHeight}
                      imageWidth={obj.imageWidth}
                    />
                  </div>
                ))}
              </div>
            )}
             {bottomline && (
            <div className='bottom_line_wrap mt-5 lg:mt-20 md:mt-10'>
               <p className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                                  dangerouslySetInnerHTML={{ __html: bottomline }}></p>
            </div>
             )}
          </div>
          <div className="divider flex items-center content-center h-[70px] mt-10 md:h-[150px] w-[100%] mx-auto md:mt-20">
            <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
          </div>
        </div>
      )}
    </>
  );
}
