"use client";
import React from 'react';
import Image from 'next/image';
import sideImage from '/public/images/get-in-touch.svg'; // Update with the correct path to your image

const Textbuttonimg = () => {
    return (

        <div className="Textbuttonimg-section py-10 md:py-20 relative bg-opacity-40 cbg-gradient-to-r from-[#0B0E2B] to-[#000000] ">
            <div className="container relative z-10">

                <div className="code_col basis-[100%] md:basis-[60%]">
                    <div className="code_content">
                        <div className="relative text-center mx-auto w-full max-w-[960px]">
                            <h2 className="text-[34px] 2xl:text-[84px] xl:text-[56px] md:text-[44px] sm:text-[34px] font-semibold mb-2">
                                Get in touch with us
                            </h2>
                            <p className="text-[14px] lg:text-[22px] md:text-[16px] font-semibold text-customwhite mb-10">
                                If you’re ready to add more value to your website through dynamic visitor interaction,
                                choose Dev.co for your JavaScript development partner.
                                Connect with us today and let us know how we can help bring your ideas to life.
                            </p>
                            <div className="btn_wrapper flex justify-center gap-x-4">
                                <button
                                    className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
                                    Let's talk About Your Project
                                </button>
                            </div>
                        </div>
                        <div className='simple-image-image mt-10 text-center mx-auto max-w-[1140px]'>
                            <Image
                                className="simple-image-img w-full"
                                src={sideImage}
                                alt="simple-img"
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