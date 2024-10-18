import React from 'react';
import Image from 'next/image';

export default function ClientCount({ imageSrc, imageWidth, imageHeight, title, description }) {
  return (
    <>
      <div className="w-[300px] p-8 border-2 border-lightBlue rounded-md">
        {/* Dynamic Image */}
        <div className="mb-3">
          <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Image not found" />
        </div>

        {/* Dynamic Title */}
        <div>
          <h5 className="text-customWhite font-bold mb-1">
            {title}
          </h5>

          {/* Dynamic Description */}
          <p className="text-customWhite">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
