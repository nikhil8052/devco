"use client";
import React from 'react';
import Image from 'next/image';
import sideImage from '/public/images/develop-do.png'; // Update with the correct path to your image

const DeveloperDo = () => {
  return (
    <div className="Developerdo-sec py-10 md:py-20">
        <div className='container max-auto'>
        <div className="Developerdo-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            <div className="Developerdo-box flex flex-col gap-5">
            <div className="Developerdo-col max-w-[520px] md:mt-10">
                <h2 className="section_head_title font-semibold text-[34px] 2xl:text-[40px] xl:text-[30px] md:text-[28px] sm:text-[24px] md:mb-3 mb-2 text-customwhite">
                What does a JavaScript Developer do
                </h2>
                <div className="w-full">
                <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4">
                    A JavaScript Developer is responsible for developing and maintaining web applications using the JavaScript programming language in computer science. They work with other web developers and designers to create websites and web-based applications that are interactive and user-friendly. In addition to writing code, a JavaScript Developer may also be responsible for troubleshooting, testing, and debugging Web-based application.
                </p>
                <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
                    As a JavaScript developer, you will be responsible for developing and maintaining Web-based application using JavaScript. This may include tasks such as debugging code, writing code to create new features or enhancements, and troubleshooting code issues. In addition, you will also be responsible for working with other members of the development team to ensure that the application meets all requirements and is up to date with the latest web standards.
                </p>
                </div>
            </div>
            </div>
            <div className="Developerdo-box flex flex-col gap-5">
            <div className="Developerdo-col">
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
        </div>
    </div>
  );
};

export default DeveloperDo;
