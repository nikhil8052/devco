"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const imagesSet1 = [
  "/images/unity.svg",
  "/images/python.svg",
  "/images/reactjs1.svg",
  "/images/java1.svg",
  "/images/nodejs1.svg",
  "/images/php.svg",
];

export default function SwappingLogos() {
  const [columns, setColumns] = useState(["", "", "", ""]);
  const [currentCol, setCurrentCol] = useState(0); // Track which column swaps next

  useEffect(() => {
    // Initialize columns with unique logos
    const generateInitialLogos = () => {
      let shuffled = [...imagesSet1].sort(() => 0.5 - Math.random());
      setColumns(shuffled.slice(0, 4)); // Pick first 4 unique logos
    };

    generateInitialLogos();

    const swapSingleLogo = () => {
      setColumns((prevColumns) => {
        let availableLogos = imagesSet1.filter((img) => !prevColumns.includes(img));

        // If no unique logos are left, reset available logos
        if (availableLogos.length === 0) {
          availableLogos = [...imagesSet1];
        }

        const newColumns = [...prevColumns];

        // Ensure new logo is different from the current one in that column
        let newLogo;
        do {
          newLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];
        } while (newLogo === prevColumns[currentCol]); // Prevent duplicate in the same column

        newColumns[currentCol] = newLogo;

        // Animate only the swapped column
        gsap.fromTo(
          `.logo_box_col:nth-child(${currentCol + 1}) .logo_box img`,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        return newColumns;
      });

      // Move to the next column in a cycle (0 → 1 → 2 → 3 → repeat)
      setCurrentCol((prevCol) => (prevCol + 1) % 4);
    };

    const interval = setInterval(swapSingleLogo, 2000); // Swap one logo every 2s
    return () => clearInterval(interval);
  }, [currentCol]); // Depend on currentCol to change only one at a time

  return (
    <div className="swap_logo_section relative z-10 py-20">
      <div className="container mx-auto">
        <div className="logo_grid grid grid-cols-4 w-full max-w-[1108px] mx-auto">
          {columns.map((image, colIndex) => (
            <div
              key={colIndex}
              className="logo_box_col flex justify-center items-center h-[100px]"
            >
              <div className="logo_box overflow-hidden">
                <Image src={image} width={100} height={100} alt={`Logo ${colIndex}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
