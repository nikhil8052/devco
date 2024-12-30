import React from 'react';
import Image from "next/image";

export default function Textcardsection({ title, description, Textcardata }) {
  // Check if there's any data to render
  const hasTitle = title && title.trim() !== "";
  const hasDescription = description && description.trim() !== "";
  const hasTextcardata = Array.isArray(Textcardata) && Textcardata.length > 0; // Check if Textcardata is valid and has data
  const hasContent = hasTitle || hasDescription || hasTextcardata; // Check for any content

  return (
    <>
      <div className="new_section text-customwhite Textcardsection benefits_section py-5 xl:py-[20] lg:py-[10] md:py[5] relative bg-black">
        {/* Background Image */}
        <Image
          className="right_eclipsebg absolute bottom-0 right-0 w-1/2"
          src="/images/right_eclopse.svg"
          alt="Image"
          width={1160}
          height={440}
        />

        {/* Conditional Rendering for Content */}
        {hasContent && (
          <div className="container relative z-10">
            {/* Grid Head Section */}
            {(hasTitle || hasDescription) && (
              <div className="grid-head w-full xl:mb-10 mb-5">
                {hasTitle && (
                  <h2
                    className="section_head_title font-semibold text-[28px] 2xl:text-[50px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                )}
                {hasDescription && (
                  <div className="w-full lg:max-w-[60%] md:max-w-[80%] xl:max-w-[678px]">
                    <p
                      className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  </div>
                )}
              </div>
            )}

            {/* Dynamically Render Cards */}
            {hasTextcardata && (
              <div className="text_card_row flex flex-wrap ml-[-15px] mr-[-15px] gap-y-[30px]">
                {Textcardata.map((card, index) => {
                  const hasCardImage = card.image && card.image.trim() !== "";
                  const hasCardTitle = card.title && card.title.trim() !== "";
                  const hasCardDescription = card.description && card.description.trim() !== "";

                  // Skip rendering if card has no content
                  if (!hasCardImage && !hasCardTitle && !hasCardDescription) {
                    return null;
                  }

                  return (
                    <div key={index} className="text_card_col w-full lg:w-[50%] px-[15px]">
                      <div className="text-card h-full">
                        <div className="text-card_inner">
                          {hasCardImage && (
                            <div className="text_card_thumb">
                              <Image
                                className="text_card_thumbimg w-full mb-3"
                                src={card.image}
                                alt={hasCardTitle ? card.title : "Card Image"}
                                width={1160}
                                height={440}
                              />
                            </div>
                          )}
                          <div className="text_inner">
                            {hasCardTitle && <h3 dangerouslySetInnerHTML={{ __html: card.title }}></h3>}
                            {hasCardDescription && <p  dangerouslySetInnerHTML={{ __html: card.description }}></p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Divider Section */}
        <div className="divider flex items-center content-center h-[70px] mt-10 md:h-[150px] w-[100%] mx-auto md:mt-20">
          <div className='container mx-auto'>
          <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
