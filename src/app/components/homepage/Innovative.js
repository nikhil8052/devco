import React from 'react';
import Image from 'next/image';

export default function Innovative() {
  return (
   <div className='inovative_section py-20'>
     <div className="container mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h3 className="text-[64px] font-semibold text-white-800">Innovative Software<br></br><span className='text-headingBlue'>Development Services</span></h3>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <Image src='/images/innovate.webp' width={1000} height={800} alt="Innovative" className="rounded-lg shadow-lg"/>
      </div>

      {/* Text Section */}
     <div className="text-left">
     <div className="blue_subhead flex items-center gap-2 mb-5">
              <span
                className="inline-block bg-[#4353FF] w-[14px] h-[6px] rounded-[7px]"
              ></span>
              <h6 className="text-customBlue text-[22px] font-semibold">Our Services</h6>
       </div>
        <h4 className="text-[24px] font-semibold text-customwhite mb-1">
            At DEV.co, we provide full-stack custom software development solutions to businesses small and large.
        </h4>
        <p className=" mb-6 px-4 md:px-0 text-customwhite text-[20px]">
            As a custom software dev agency, we cover the full breadth of custom solutions by developing websites, mobile apps, custom portals, billing solutions, artificial intelligence, SaaS, big data, and other cloud-based applications.
        </p>
        <h4 className="text-[24px] font-semibold text-customwhite mb-1">12+ years as a software development company</h4>
        <p className="mb-6 px-4 md:px-0 text-customwhite text-[20px]">
            For over a decade, we have developed a proven, repeatable system for delivering quality code. We provide solutions across the software development life cycle, ensuring we out-deliver above other custom software development firms on the market.
        </p>
        </div>

    </div>
   </div>
  );
}
