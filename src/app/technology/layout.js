'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home({ children }) {
  const parallaxAnimation = {
    y: [0, 20, 0],
  };

  const parallaxTransition = {
    duration: 4, 
    repeat: Infinity, 
    ease: "easeInOut",
  };

  return (
    <div className="skills_page techologypage overflow-x-hidden bg-black relative text-customwhite items-center pt-20">
      {/* Parallax moving dots */}
      <motion.div
        className="banner_bg_dots absolute top-[180px] left-0 right-0 mx-auto z-1"
        animate={parallaxAnimation}
        transition={parallaxTransition}
      >
        <Image
          className="w-[90%] max-w-[1160px] mx-auto"
          src="/images/Skillsbg.svg"
          alt="Image"
          width={1160}
          height={440}
          priority
        />
      </motion.div>
      {children}
    </div>
  );
}
