import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="hero_banner relative w-full bg-black text-white  items-center text-white pt-20" style={{ backgroundImage: "url('/images/banner_bg.png')" }}>
      <div className="absolute inset-0 bg-cover bg-center"/>
      <div className='container mx-auto pt-20'>
      <div className="relative z-2 banner_content">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Development Company</h1>
        <p className="text-lg md:text-xl mb-8">We design, develop & deploy across the tech stack, maximizing your software development project team with expert technical talent. Get in touch regarding your next software or web development project!</p>
        
        <div className='btn_wrapper'>
        <button className="bg-white px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
        Contact Us
        </button>
        <button className=" trans_button   px-6 py-3 rounded-md transition">
        Learn More
        </button>
        </div>
      </div>
      </div>
      <div className='banner_image pl-20'>
      <Image
          src="/images/bannerimg.png" // Path to your image in the public folder
          alt="My Image"
          width={1920} // Width in pixels
          height={300} // Height in pixels
        />
    
      </div>
    </div>
  );
};

export default HeroBanner;
