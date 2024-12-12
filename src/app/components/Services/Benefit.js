import React from 'react';
import Image from 'next/image';

export default function Benefit({ title = "", description = "", imageSrc = "", imageHeight = "", imageWidth = "" }) {
  return (
    <div className="benefit-box flex flex-col gap-5">
      {/* Image Section */}
      {imageSrc && (
        <div className="flex-shrink-0">
          <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Benefit Icon" />
        </div>
      )}

      {/* Text Section */}
      {(title || description) && (
        <div className="text-section w-full max-w-[514px]">
          {title && <h4 className="text-[22px] md:text-[25px] font-semibold mb-2" dangerouslySetInnerHTML={{__html: title}}></h4>}
          {description && <p className="text-sm md:text-base text-customwhite" dangerouslySetInnerHTML={{ __html: description }}></p>}
        </div>
      )}
    </div>
  );
}
