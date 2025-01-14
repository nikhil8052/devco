import React from 'react';

export default function Textbuttonsection({ title, description }) {
  // Check if there's any data to render
  const hasTitle = title && title.trim() !== "";
  const hasDescription = description && description.trim() !== "";
  const hasContent = hasTitle || hasDescription; // Check for any content

  return (
    <>
      <div className="new_section text-customwhite Textcardsection benefits_section pt-10 lg:pt-20 relative bg-black">
        {/* Conditional Rendering for Content */}
        {hasContent && (
          <div className="container relative z-10">
            {/* Grid Head Section */}
            {(hasTitle || hasDescription) && (
              <div className="grid-head w-full xl:max-w-[678px] xl:mb-10 mb-5">
                {hasTitle && (
                  <h2
                    className="section_head_title font-semibold text-[28px] 2xl:text-[70px] xl:text-[50px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                )}
                {hasDescription && (
                  <div className="w-full">
                    <p
                      className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  </div>
                )}
                <div className="btn_wrapper flex gap-x-4 mt-4 md:mt-10">
                  <a href="/contact" className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
                    Let&apos;s talk About Your Project
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Divider Section */}
        <div className="divider flex items-center content-center h-[70px] mt-10 md:h-[150px] w-[100%] mx-auto md:mt-20">
          <div className="container mx-auto">
            <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
