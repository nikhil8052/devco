"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home({ children }) {
  return (
    <>
      <div className="skills_page overflow-x-hidden bg-black relative text-customwhite items-center pt-20">
        {/* Parallax moving dots */}
        <motion.div
          className="banner_bg_dots absolute top-[180px] left-0 right-0 mx-auto z-1"
          animate={{
            y: [0, 20, 0], // Moves up and down
          }}
          transition={{
            duration: 4, // Time for one full cycle
            repeat: Infinity, // Loop the animation
            ease: "easeInOut", // Smooth ease in and out
          }}
        >
          <Image
            className="w-[90%] max-w-[1160px] mx-auto"
            src="/images/Skillsbg.svg"
            alt="Image"
            width={1160}
            height={440}
          />
        </motion.div>

        {children}
      </div>
    </>
  );
}
