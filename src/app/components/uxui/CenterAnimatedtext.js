"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CenterAnimatedText = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Fade in and up animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", 
          end: "bottom 60%", 
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect on background logo
    gsap.to(bgRef.current, {
      y: "-50px", // Adjust based on scroll effect
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="hero_CenterAnimatedtext relative w-full py-[10px]">
      <div className="container mx-auto relative z-10">
        <div className="full_wrap bg_logo_div relative py-[100px]">
          {/* Background Image with Parallax Effect */}
          <img
            ref={bgRef}
            src="images/fade_logobg.png"
            alt="Background Logo"
            className="absolute inset-0 mx-auto object-contain bg_fade_logo"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />

          {/* Animated Text Content */}
          <div
            ref={textRef}
            className="animated_text_wrap text-center w-full max-w-[653px] mx-auto relative z-10 opacity-0"
          >
            <h2 className="text-[34px] 2xl:text-[70px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white">
              We’ll reply in 24 hrs
            </h2>
            <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
              <p className="relative overflow-hidden text-line mb-5">
                We’ll get back to you within 24 hours. Your time matters, and we’re here to respond quickly.
              </p>
            </div>

            {/* Contact Us Button */}
            <div className="btn_wrapper mt-2 justify-center text-center flex gap-x-4">
              <a
                href="/contact"
                className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterAnimatedText;
