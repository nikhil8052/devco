import React from 'react';
import Image from 'next/image';

export default function ClientCount({ imageSrc, imageWidth, imageHeight,  title, description }) {
  return (
    <>
      <div className="w-full p-10 border-2 border-lightBlue rounded-md bg-white/5 backdrop-blur-lg h-full">
        {/* Dynamic Image */}
        <div className="mb-8">
          <Image src={imageSrc} width={imageWidth} height={imageHeight} className='h-[74px] object-contain' alt="Image not found" />
        </div>

        {/* Dynamic Title */}
        <div>
          <h5 className="text-customWhite font-semibold text-[25px] mb-5">
            {title}
          </h5>

          {/* Dynamic Description */}
          <p className="text-customWhite font-normal text-[20px]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
