"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimated2 = () => {
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
            start: "top 50%", // Effect starts when the element reaches the middle of the screen
            end: "top 20%", // Ends slightly lower for longer visibility
            scrub: 2, // Makes the effect smoother and slower
          },
        }
      );
    });
  }, []);

  return (
    <div className="hero_bannerux relative w-full pt-20">
      <div className="container mx-auto relative z-10">
        <div ref={textRef} className="animated_text_wrap text-center w-full max-w-[980px]  mx-auto">
          <h2 className="text-[34px] 2xl:text-[70px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
            {[
              "Get the edge over your ", 
              "competition with a quality ", 
              "website from an experienced ",
              "custom software development ",
              "company"
            ].map((text, index) => (
              <div key={index} className="relative overflow-hidden text-line">
                <span className="relative">{text}</span>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
              </div>
            ))}
          </h2>
            <div className="content_div w-full max-w-[890px]  mx-auto">
            <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
            {[
              "If your website is outdated, needs an overhaul, or you’d like to start from scratch, we’re here to help. Our web professionals have years of experience developing custom websites that serve as profitable digital marketing and operational assets for your business.", 
            "We work with all kinds of businesses in different industries, including small and enterprise organizations. Our expert software developers know precisely how to target your industry and speak to your market with a design that will capture and hold the attention of your users.",
            "As a top software development company, we have experience across the tech stack when it comes to building your custom online application. Our web development firm can work with a variety of popular platforms and programming languages, including hypertext markup language (HTML), cascading style sheets (CSS), PHP, JavaScript, MySQL, Python, React.js and much more!",
          ].map((text, index) => (
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

export default TextAnimated2;
