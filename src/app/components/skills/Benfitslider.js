"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery"; // Import jQuery
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS

export default function Benefitslider({ title, description, chooseData = [] }) {
  useEffect(() => {
    import("slick-carousel")
      .then(() => {
        const devCardRow = $(".dev_card_row");

        if (devCardRow.length) {
          devCardRow.slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            autoplay: true, // Enables autoplay
autoplaySpeed: 3000, // Sets the autoplay speed (in milliseconds)
speed: 500, // Adjusts the transition speed for smoother sliding

            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
        }
      })
      .catch((error) =>
        console.error("Slick Carousel could not be initialized:", error)
      );
  }, []);

  // Check if any content exists
  const hasContent = title || description || chooseData.length > 0;

  if (!hasContent) return null; // Hide the entire component if there's no content

  return (
    <div className="benefits-section py-10 md:py-20 relative">
      <div className="container relative z-10">
        {(title || description) && (
          <div className="grid-head w-full max-w-[100%] xl:max-w-[60%] xl:mb-10 mb-5">
            {title && (
              <h2 className="section_head_title font-semibold text-[24px] 2xl:text-[42px] xl:text-[35px] md:text-[30px] sm:text-[24px] md:mb-3 mb-2 text-customwhite"  dangerouslySetInnerHTML={{ __html: title }}>
              </h2>
            )}
            {description && (
              <div className="w-full">
                {description && (
                  <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite" dangerouslySetInnerHTML={{ __html: description }}>
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {chooseData.length > 0 && (
          <div className="dev_card_row flex gap-6">
            {chooseData.map((card, index) => (
              <div key={index} className="dev_card_col w-full">
                <div className="dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full">
                  {card.imgSrc && (
                    <div className="thumb relative mb-2 md:mb-5 flex flex-col">
                      <Image
                        className="block mt-auto min-h-[50px]"
                        src={card.imgSrc}
                        alt={card.title}
                        width={30}
                        height={50}
                      />
                    </div>
                  )}
                  <div className="text-section w-full">
                    <h4 className="text-[20px] md:text-[25px] font-semibold mb-2">
                      {card.title}
                    </h4>
                    {card.description && (
                      <p className="text-sm md:text-base text-customwhite max-w-[514px]">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
