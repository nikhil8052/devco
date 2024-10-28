import React from 'react';
import Image from 'next/image';

export default function Process({ title, description , imageSrc="/images/rotation_mug.svg", imageHeight=30, imageWidth=30}) {
  return (
   <div className='benifits_grid'>
    <div className="border border-lightBlue p-6 rounded-md shadow-lg flex flex-col items-start max-w-sm mx-auto md:max-w-full">
      <div className="flex items-center space-x-4 mb-4">
        <Image src={imageSrc} height={imageHeight} width={imageWidth} alt="Icon" />
        <h6 className="text-md font-semibold">{title}</h6>
          <p className="text-gray-600">
        {description}
      </p>
      </div>
    
    </div>
   </div>
  );
}
