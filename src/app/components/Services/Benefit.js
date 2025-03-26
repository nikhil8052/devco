import React from 'react';
import Image from 'next/image';

export default function Benefit({ title = "", description = "" }) {
  return (
    <div className="benefit-box icon_benefit-box flex flex-col gap-5">
      {/* Image Section */}
      <div className="flex-shrink-0 benefit_box_icon">
        <Image 
          src="/images/footer_logo.svg" 
          alt="Benefit Icon" 
          width={100} 
          height={100} 
        />
      </div>

      {/* Text Section */}
      {(title || description) && (
        <div className="text-section w-full">
          {title && <h4 className="text-[22px] md:text-[25px] font-semibold mb-2" dangerouslySetInnerHTML={{__html: title}}></h4>}
          {description && <p className="text-sm md:text-base text-customwhite" dangerouslySetInnerHTML={{ __html: description }}></p>}
        </div>
      )}
    </div>
  );
}
