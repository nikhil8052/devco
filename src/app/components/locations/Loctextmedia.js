import React from "react";
import Image from "next/image";

export default function Loctextmedia({ contentData }) {
  return (
    <>
      <div className="new_section text-customwhite Textcardsection benefits_section py-5 xl:py-[20] lg:py-[10] md:py[5] relative">
        <div className="location_content_wrap">
          {contentData.map((content, index) => (
            <div key={index} className="location_contentbox">
              <div className="container relative z-10">
                <div className="text-media_wrap flex gap-x-20 items-center">
                  <div className="location-col w-[100%] lg:w-[50%]">
                    <div className="location_text w-full">
                      {content.title && (
                        <h2
                          className="section_head_title font-semibold text-[28px] 2xl:text-[50px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                          dangerouslySetInnerHTML={{ __html: content.title }}
                        ></h2>
                      )}
                      {content.paragraph && (
                        <div className="w-full">
                          <p
                            className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                            dangerouslySetInnerHTML={{ __html: content.paragraph }}
                          ></p>
                        </div>
                      )}
                      {content.listItems && content.listItems.length > 0 && (
                        <div className="content_list">
                          {content.listTitle && (
                            <h3 className="list_head text-[16px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-[700] my-5">
                              {content.listTitle}
                            </h3>
                          )}
                          <ul className="tick_list">
                            {content.listItems.map((item, liIndex) => (
                              <li
                                className="text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] opacity-70"
                                key={liIndex}
                                dangerouslySetInnerHTML={{ __html:item }}>
                               
                              </li>
                            ))}
                            
                          </ul>
                        </div>
                      )}
                      {content.bottomline && (
                        <div className="w-full">
                          <p
                            className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                            dangerouslySetInnerHTML={{ __html: content.bottomline }}
                          ></p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="location-col w-[100%] lg:w-[50%]">
                    {content.imageSrc && (
                      <div className="loc_image">
                        <div className="location_image w-full max-w-[1280px] mx-auto my-10">
                          <Image
                            className="locatrion_image w-full"
                            src={content.imageSrc}
                            alt={content.imageAlt || "Location Image"}
                            width={1160}
                            height={440}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
