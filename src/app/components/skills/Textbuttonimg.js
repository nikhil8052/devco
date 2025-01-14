"use client";
import React from 'react';
import Image from 'next/image';

const Textbuttonimg = ({ data }) => {
    const { title, description, imageSrc, imageAlt } = data[0]; 
    return (
        <div className="Textbuttonimg-section py-10 md:py-20 relative bg-opacity-40 cbg-gradient-to-r from-[#0B0E2B] to-[#000000] ">
            <div className="container relative z-10">

                <div className="code_col basis-[100%] md:basis-[60%]">
                    <div className="code_content">
                        <div className="relative text-center mx-auto w-full max-w-[960px]">
                            <h2 className="text-[34px] 2xl:text-[84px] xl:text-[56px] md:text-[44px] sm:text-[34px] font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="text-[14px] lg:text-[22px] md:text-[16px] font-semibold text-customwhite mb-10">
                                {description}
                            </p>
                            <div className="btn_wrapper flex justify-center gap-x-4">
                                <a href="/contact"
                                    className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
                                   Let&apos;s talk About Your Project
                                </a>
                            </div>
                        </div>
                        <div className="simple-image-image mt-10 text-center mx-auto max-w-[1140px]">
                            <Image
                                className="simple-image-img w-full"
                                src={imageSrc}
                                alt={imageAlt}
                                width={1140}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Textbuttonimg;
