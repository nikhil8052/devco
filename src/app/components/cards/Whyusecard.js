import React from 'react';
import Image from 'next/image';
import whyuse1 from '/public/images/whyuse1.svg';
import whyuse2 from '/public/images/whyuse2.svg';

export default function Whyusecard({ title, description, imageSrc, imageWidth, imageHeight, subTitle, details }) {
  return (

    <>
    <div className="Developerdo-sec py-20">
        <div className='container max-auto'>
        <div className="Developerdo-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            <div className="w-full max-w-[590px] grid  lg:grid-cols-2 rounded overflow-hidden shadow-lg border-lightBlue border p-5 data_card bg-white/4 backdrop-blur-lg">
                {/* Title and description */}
                {/* <div>
                <h3 className="text-headingBlue font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">{title}</h3>
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] ">{description}</p>
                </div> */}

                {/* Image */}
                <div>
                <Image src={whyuse1} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[230px] my-4 xl:my-8 md:my-8 ' />
                </div>

                {/* SubTitle and details */}
                <div>
                <h5 className="text-customWhite font-semibold text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] mb-2">Interactive navigation</h5>
                <p className="text-customWhite text-[14px] xl:text-[18px] lg:text-[16x] md:text-[16px] sm:text-[14px]">Make your navigation elements fun with JavaScript. Popular elements include panels that slide out when clicked, custom dialog boxes, and tabbed navigation with special effects.</p>
                </div>
            </div>
            <div className="w-full max-w-[590px] grid  lg:grid-cols-2 rounded overflow-hidden shadow-lg border-lightBlue border p-5 data_card bg-white/4 backdrop-blur-lg">
                {/* Title and description */}
                {/* <div>
                <h3 className="text-headingBlue font-semibold xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[18px] text-[18px]">{title}</h3>
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] ">{description}</p>
                </div> */}

                {/* Image */}
                <div>
                <Image src={whyuse2} width={imageWidth} height={imageHeight} alt="Not found" className=' w-full max-w-[230px] my-4 xl:my-8 md:my-8 ' />
                </div>

                {/* SubTitle and details */}
                <div>
                <h5 className="text-customWhite font-semibold text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] mb-2">Animations</h5>
                <p className="text-customWhite text-[14px] xl:text-[18px] lg:text-[16x] md:text-[16px] sm:text-[14px]">Animations are a powerful way to capture and hold a visitor’s attention. Custom JavaScript animations will also help you achieve your conversion goals.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}
