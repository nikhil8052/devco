import React from 'react';
import Image from "next/image";

export default function Textcardsection({ title, description }) {
  // Check if there's any data to render
  const hasTitle = title && title.trim() !== "";
  const hasDescription = description && description.trim() !== "";
  const hasContent = hasTitle || hasDescription; // Check for both title and description

  return (
    <>
      <div className="new_section text-customwhite Textcardsection benefits_section pt-20 relative bg-black">
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
            <div className="grid-head w-full xl:mb-10 mb-5">
              {hasTitle && (
                <h2
                  className="section_head_title font-semibold text-[28px] 2xl:text-[50px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
              )}
              {hasDescription && (
                <div className="w-full xl:max-w-[678px]">
                  <p
                    className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                </div>
              )}
            </div>

            <div className='text_card_row flex gap-[20px]'>
                <div className='text_card_col w-[50%]'>
                    <div className='text-card h-full'>
                        <div className='text-card_inner'>
                            <div className='text_card_thumb'>
                               <Image
                                className="text_card_thumbimg w-full mb-3"
                                src="/images/goal_startgy.svg"
                                alt="Image"
                                width={1160}
                                height={440}
                                />
                            </div>
                            <div className='text_inner'>
                                <h3>Goals & Strategy</h3>
                                <p>By quantifying end goals, we reverse engineer conceptual designs, preparing for project completion from the outset.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text_card_col w-[50%]'>
                    <div className='text-card h-full'>
                        <div className='text-card_inner'>
                        <div className='text_card_thumb'>
                               <Image
                                className="text_card_thumbimg w-full mb-3"
                                src="/images/StrategyQuestionnaire.svg"
                                alt="Image"
                                width={1160}
                                height={440}
                                />
                            </div>
                            <div className='text_inner'>
                                <h3>Strategy Questionnaire</h3>
                                <p>We seek to understand both the high-level and low-level requirements of your digital project with a detailed on-boarding questionnaire.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* Divider Section */}
        <div className="divider flex items-center content-center h-[70px] mt-10 md:h-[150px] w-[100%] mx-auto md:mt-20">
          <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
        </div>
      </div>
    </>
  );
}
