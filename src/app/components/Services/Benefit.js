import React from 'react';
import Image from 'next/image';

export default function Benefit({title="", description="", imageSrc="", imageHeight="", imageWidth="" }) {
  return (
    <div className="benefit-container border-lightBlue border-2 p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Benefit Icon" />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left">
        <h4 className="text-xl md:text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-sm md:text-base text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
