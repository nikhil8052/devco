import React from 'react';
import Image from 'next/image';

export default function TechCard({ title, description, imageSrc, imageWidth, imageHeight, subTitle, details }) {
  return (
    <>
      <div className="w-full max-w-[500px]">
        {/* Title and description */}
        <div>
          <h3 className="text-headingBlue font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">{title}</h3>
          <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] ">{description}</p>
        </div>

        {/* Image */}
        <div>
          <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[600px] my-4 xl:my-8 md:my-8 ' />
        </div>

        {/* SubTitle and details */}
        <div>
          <h5 className="text-customWhite font-semibold text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] mb-2">{subTitle}</h5>
          <p className="text-customWhite text-[14px] xl:text-[18px] lg:text-[16x] md:text-[16px] sm:text-[14px]">{details}</p>
        </div>
      </div>
    </>
  );
}
