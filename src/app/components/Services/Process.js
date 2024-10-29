import React from 'react';
import Image from 'next/image';

export default function Process({ title, description , imageSrc="", imageHeight=30, imageWidth=30}) {
  return (
   <div className='process_grid border-l-2 border-lightBlue'>
    <div className="process_card flex items-start justify-between max-w-sm mx-auto md:max-w-full">
      <div className="icon_head flex items-center">
        <Image src={imageSrc} height={imageHeight} width={imageWidth} alt="Icon" />
        <h6 className="text-md font-semibold">{title}</h6>
      </div>
      <div className='descrside w-[200px]'>
        <p className="text-[14px] text-customwhite"
          dangerouslySetInnerHTML={{ __html: description }}>
        </p>
      </div>
    </div>
   </div>
  );
}
