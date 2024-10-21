'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StartUps() {
  // Image sets
  const imagesSet1 = [
    '/images/php.svg',
    '/images/unity.svg',
    '/images/python.svg',
    '/images/reactjs1.svg',
    '/images/java1.svg',
    '/images/nodejs1.svg',
  ];

  const imagesSet2 = [
    '/images/unity.svg',
    '/images/unity.svg',
    '/images/unity.svg',
    '/images/unity.svg',
    '/images/unity.svg',
    '/images/unity.svg',
  ];

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
  }, []);

  return (
    <div className='startup_section pb-20'>
      <div className="container mx-auto p-4">
        <div className="text-center mb-6">
          <h2 className="text-[22px] text-customwhite font-semibold">Web Development & Software Engineering</h2>
          <p className='text-[24px] font-normal text-customwhite'>From next-gen startups to established enterprises.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
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
