"use client";
import React from 'react';
import Image from 'next/image';

const Simpleimage = ({ data }) => {

  return (
    <div className="simple-img-sec">
      <div className="container">
        <div className="simple-image-image">
          <Image
            className="service_frame w-full"
            src={data.sideImage} // Corrected to use `data.sideImage`
            alt={data.alt || "Image"} // Use `data.alt` for accessibility or a fallback text
            width={879}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Simpleimage;
