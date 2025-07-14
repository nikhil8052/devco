'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function StartUps() {
  const imagesSet1 = useMemo(() => [
    '/images/php.svg',
    '/images/unity.svg',
    '/images/python.svg',
    '/images/reactjs1.svg',
    '/images/java1.svg',
    '/images/nodejs1.svg',
  ], []);

  

  const imagesSet2 = useMemo(() => [
    '/images/unity.svg',
    '/images/reactjs1.svg',
    '/images/nodejs1.svg',
    '/images/php.svg',
    '/images/python.svg',
    '/images/java1.svg',
  ], []);

  // State to manage current image set and animation trigger
  const [currentImages, setCurrentImages] = useState(imagesSet1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle image sets every 2 seconds with animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true); // Trigger animation before switching images

      setTimeout(() => {
        setCurrentImages((prevImages) =>
          prevImages === imagesSet1 ? imagesSet2 : imagesSet1
        );
        setIsAnimating(false); // End animation after images have switched
      }, 500); // Duration of the fade-out animation
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [imagesSet1, imagesSet2]);
  return (
    // <div className='startup_section pt-5 md:pt-0 pb-10 md:pb-20 xl:mt-[-200px] lg:mt-[-100px] md:mt-[-50px] relative z-10'>
     <div className='startup_section pt-5 md:pt-0 pb-10 md:pb-20 xl:-mt-24 lg:-mt-20 md:-mt-12 relative z-10'>
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="lg:text-[24px] md:text-[20px] sm:text[18px] text-customwhite font-semibold">Web Development & Software Engineering</h2>
          <p className='lg:text-[24px] md:text-[18px] sm:text[14px] font-normal text-customwhite'>From next-gen startups to established enterprises.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 min-h-[240px]">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`flex justify-center transition-opacity duration-500 ease-in-out transform ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <Image src={image} width={100} height={100} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
