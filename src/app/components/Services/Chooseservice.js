"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import $ from "jquery"; // Import jQuery
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function ChooseService({
  title = "",
  description = "",
  mainHeading = "",
  subHeading = "",
  chooseData = [],
}) {
  const titleRef = useRef(null);

  useEffect(() => {
    // Split text into letters for animation
    const titleElement = titleRef.current;
    if (titleElement) {
      const letters = titleElement.textContent.split("").map((char) =>
        char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
      );
      titleElement.innerHTML = letters.join("");

      // Animate letters with GSAP
      gsap.fromTo(
        titleElement.querySelectorAll("span"),
        {
          opacity: 0,
          y: 20, // Start slightly below
        },
        {
          opacity: 1,
          y: 0, // Move to original position
          stagger: 0.05, // Delay between each letter
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleElement,
            start: "top 90%", // Trigger animation when 90% of the viewport is reached
            toggleActions: "play none none reset", // Play animation on scroll down
          },
        }
      );
    }

    // Import the Slick JS file dynamically after mounting
    import("slick-carousel")
      .then(() => {
        const devCardRow = $(".dev_card_row");

        if (devCardRow.length) {
          devCardRow.slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
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

  return (
    <div className="choose-section py-10 md:py-20 relative">
      <div className="container relative z-10">
        {/* Animated Section Title */}
        <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
          <h2
            ref={titleRef}
            className="section_head_title font-semibold text-[24px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite"
          >
            {title}
          </h2>
          <div className="w-full">
            <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
              {description}
            </p>
          </div>
        </div>

        <div className="dev_card_row flex gap-6">
          {chooseData.map((card, index) => (
            <div key={index} className="dev_card_col w-full ">
              <div className="dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full">
                <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col">
                  <Image
                    className="w-full block mt-auto"
                    src={card.imgSrc}
                    alt={card.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-section w-full max-w-[514px] relative">
                  <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm md:text-base text-customwhite">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
