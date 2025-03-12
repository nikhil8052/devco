"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Textanimatedleft = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray(".text-line");
    lines.forEach((line) => {
      const overlay = line.querySelector(".overlay");

      gsap.fromTo(
        overlay,
        { x: "0%" },
        {
          x: "100%",
          ease: "power2.out",
          duration: 2.5, // Slower effect
          scrollTrigger: {
            trigger: line,
            start: "top 30%", // Effect starts when the element reaches the middle of the screen
            end: "top 20%", // Ends slightly lower for longer visibility
            scrub: 2, // Makes the effect smoother and slower
          },
        }
      );
    });
  }, []);

  return (
    <div className="animated_text_left relative w-full py-[50px]">
      <div className="section_inner_animated relative z-10">
        <div className="container mx-auto relative z-10">
          <div ref={textRef} className="animated_text_wrap w-full max-w-[603px]">
            <h2 className="text-[34px] 2xl:text-[70px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
              {["Strong UX/UI ", "design", "by Dev.co", "delivers ROI"].map((text, index) => (
                <div key={index} className="relative overflow-hidden text-line">
                  <span className="relative">{text}</span>
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                </div>
              ))}
            </h2>
            <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
              {["A great product with poor UX/UI won’t reach its full potential. Companies that haven’t invested in UX optimization are being eclipsed by competitors with UX/UI-optimized websites. ", "In other words, you need intentional UX/UI design to generate ROI at your highest potential. Dev.co understands what it takes to create an exceptional user experience through a powerful user interface. Our team is committed to creating an exceptional, intuitive user experience for our clients."].map((text, index) => (
                <p key={index} className="relative overflow-hidden text-line mb-5">
                  <span className="relative">{text}</span>
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textanimatedleft;
