import React from 'react';
import Image from 'next/image';

export default function Benefit({title="", description="", imageSrc="", imageHeight="", imageWidth=""}) {
  return (
    <div className=" benefit-box flex flex-col gap-5">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Benefit Icon" />
      </div>

      {/* Text Section */}
      <div className="text-section w-full max-w-[514px]">
        <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">{title}</h4>
        <p className="text-sm md:text-base text-customwhite">
          {description}
        </p>
      </div>
    </div>
  );
}
