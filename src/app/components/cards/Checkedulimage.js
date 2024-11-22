import React from 'react';
import Image from 'next/image';
import whyuse1 from '/public/images/sp1.svg';
import whyuse2 from '/public/images/sp2.svg';
import checkblue from '/public/images/check-blue.svg';

export default function Checkedulimage({ imageWidth, imageHeight}) {
  return (

    <>
    <div className="Checkedulimage-sec pb-12 lg:pb-20">
        <div className='container max-auto'>
        <div className="Checkedulimage-container grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="w-full rounded overflow-hidden shadow-lg border-lightBlue border p-7 data_card bg-white/4 backdrop-blur-lg">
                {/* Title and description */}
                {/* <div>
                <h3 className="text-headingBlue font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">{title}</h3>
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] ">{description}</p>
                </div> */}
                 {/* SubTitle and details */}
                 <div className='my-2 xl:my-4 md:my-8'>
                <ul className=' check-blue-tick'>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                </ul>
                </div>

                {/* Image */}
                <div>
                <Image src={whyuse1} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full w-100 mt-10 ' />
                </div>

               
            </div>
            <div className="w-full rounded overflow-hidden shadow-lg border-lightBlue border p-7 data_card bg-white/4 backdrop-blur-lg">
                {/* Title and description */}
                {/* <div>
                <h3 className="text-headingBlue font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">{title}</h3>
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] ">{description}</p>
                </div> */}

                 {/* SubTitle and details */}
                 <div className='my-4 xl:my-4 md:my-8'>
                <ul className='check-blue-tick'>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                  <li className='flex items-baseline gap-x-2 mb-2'><span><Image src={checkblue} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[23px] ' /></span>Specialised in development from scratch and on-going maintenance.</li>
                </ul>
                </div>

                {/* Image */}
                <div>
                <Image src={whyuse2} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full w-100 mt-10' />
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}
