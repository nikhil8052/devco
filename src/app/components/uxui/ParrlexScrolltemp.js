"use client";
import { slidesData } from "@/app/data/uxui"; 

const ParrlexScrolltemp = () => {
  return (
    <div className="parelex_section py-20">
            {slidesData.map((slide) => (
              <div className="parelex_slide" key={slide.id}>
               <div className="container mx-auto">
               <div
                  className="parelex_slide_card"
                  style={{ backgroundImage: "url(/images/blue_grad.svg)" }}
                >
                  <div className="parelex_card_header flex wrap">
                    <div className="parelec_headig_col w-[50%]">
                      <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                        {slide.title}
                      </h2>
                    </div>
                    <div className="parelec_image_col w-[50%]">
                      <img
                        className="w-full"
                        src={slide.imageSrc}
                        alt="Invest in UX/UI Design"
                      />
                    </div>
                  </div>
                  <div className="parelex_card_content">
                    <div className="parelex_card_grid">
                      {slide.content.map((item, index) => (
                        <div className="parex_grid_col" key={index}>
                          <div className="parelex_grid_text">
                            <h3 className="text-customWhite mb-2 font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">
                              {item.heading}
                            </h3>
                            <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

               </div>
              </div>
            ))}

    </div>
  );
};

export default ParrlexScrolltemp;