import React from 'react';
import Image from 'next/image';

export default function TechCard({ title, description, imageSrc, imageWidth, imageHeight, subTitle, details }) {
  return (
    <>
      <div className="w-[500px]">
        {/* Title and description */}
        <div>
          <h3 className="text-headingBlue text-[24px]">{title}</h3>
          <p className="text-customWhite text-[20px]">{description}</p>
        </div>

        {/* Image */}
        <div>
          <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Not found" />
        </div>

        {/* SubTitle and details */}
        <div>
          <h5 className="text-customWhite font-bold">{subTitle}</h5>
          <p className="text-customWhite">{details}</p>
        </div>
      </div>
    </>
  );
}
