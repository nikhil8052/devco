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
            start: "top 40%", // Effect starts when the element reaches the middle of the screen
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
              {["Full-stack web", " development ", "solutions are more", "than aesthetics"].map((text, index) => (
                <div key={index} className="relative overflow-hidden text-line">
                  <span className="relative">{text}</span>
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                </div>
              ))}
            </h2>
            <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
              {["A successful web developer is very different and more than ", 
              "just a web designer. Your custom web application will also",
              "needs user-friendly navigation and well-organized content ",
              "and an unmatched user flow. Your back end development ",
              "needs to be as good as your design. In short, you need ",
              "software programmers with the ability to create dynamic",
              "websites. Without these elements your users, and especially ",
              "development companies, other digital agencies look to our",
              "technical expertise in building their own custom web",
              "applications."        
              ].map((text, index) => (
                <p key={index} className="relative overflow-hidden text-line mb-0">
                  <span className="relative">{text}</span>
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                </p>
              ))}
            </div>
            <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite">
              <p className="text-opacity-70">
                Consider the following stats on web development agencies regarding the importance of a quality web experience:
              </p>
              <ul>
                <li>It takes website visitors 50 milliseconds to form an opinion about your company based on your website design.</li>
                <li>38% of visitors will bounce if your site design is unattractive.</li>
                <li>{`44% of visitors will bounce if they can't find your contact information.`}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textanimatedleft;
