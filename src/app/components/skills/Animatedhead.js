"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Animatedhead = ({ sectionHeading }) => {
  const { sectiontitle, sectiondescription } = sectionHeading[0];
  const controls = useAnimation();
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 } // Adjust the threshold for when the animation should trigger
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, [controls]);

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.1, // Delay for each letter
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="Animatedhead-sec py-10 md:pt-20 relative">
      <div className="container max-auto relative z-10">
        <div className="section_headnanimated">
          {/* Animated Title */}
          <h2
            className="2xl:text-[70px] xl:text-[50px] md:text-[42px] sm:text-[22px] text-[22px] font-semibold text-white-800 flex"
            ref={h2Ref}
          >
            {/* Map each letter for animation */}
            {sectiontitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                animate={controls}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
              </motion.span>
            ))}
          </h2>

          {/* Static Description */}
          <div className="section_head_description">
            <p
              className="text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite"
              dangerouslySetInnerHTML={{ __html: sectiondescription }}
            ></p>
          </div>
        </div>
      </div>
      <div className="bg_right-pattern absolute top-[0%] left-0 z-1 w-[50%]">
        <Image
          src="/images/left_ec_pattern.png"
          width={1920}
          height={500}
          alt="Background Pattern"
        />
      </div>
    </div>
  );
};

export default Animatedhead;
