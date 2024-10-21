'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StartUps() {
  // Image sets
  const images = [
    '/images/php.svg',
    '/images/unity.svg',
    '/images/python.svg',
    '/images/reactjs1.svg',
    '/images/java1.svg',
    '/images/nodejs1.svg',
    '/images/unity.svg',
    '/images/reactjs1.svg',
    '/images/nodejs1.svg',
  ];

  // No need for two sets, just use a single array and duplicate it for the loop effect

  return (
    <div className="startup_section pb-20">
      <div className="container mx-auto p-4">
        <div className="text-center mb-6">
          <h2 className="text-[22px] text-customwhite font-semibold">
            Web Development & Software Engineering
          </h2>
          <p className="text-[24px] font-normal text-customwhite">
            From next-gen startups to established enterprises.
          </p>
        </div>

        {/* Continuous sliding container */}
        <div className="overflow-hidden relative">
          <div
            className="flex justify-center items-center space-x-4 animate-slide infinite-loop"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex justify-center min-w-[100px]"
              >
                <Image src={image} width={100} height={100} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
