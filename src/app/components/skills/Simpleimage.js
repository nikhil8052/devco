"use client";
import React from 'react';
import Image from 'next/image';
import sideImage from '/public/images/simple-img-box1.svg'; // Update with the correct path to your image

const Simpleimage = () => {
  return (

    <div className='simple-img-sec'>
      <div className='container'>
      <div className='simple-image-image'>
      <Image
                className="service_frame w-full"
                src={sideImage}
                alt="Banner Image"
                width={879}
                height={500}
                />
        </div>
      </div>
    </div>

    );
  };

  export default Simpleimage;