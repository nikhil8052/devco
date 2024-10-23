'use client';
import Image from 'next/image';

export default function StartUps({title="",description="" , images= [], imageHeight=100, imageWidth=100 }) {
  // Image sets


  // No need for two sets, just use a single array and duplicate it for the loop effect

  return (
    <div className="startup_section pb-20">
      <div className="container mx-auto p-4">
        <div className="text-center mb-6">
          <h2 className="text-[22px] text-customwhite font-semibold">
           {title}
          </h2>
          <p className="text-[24px] font-normal text-customwhite">
            {description}
          </p>
        </div>

        {/* Continuous sliding container */}
        <div className="overflow-hidden relative">
          <div
            className="flex justify-center items-center space-x-4 animate-slide infinite-loop"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex justify-center min-w-[100px]"
              >
                <Image src={image} width={imageHeight} height={imageWidth} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
