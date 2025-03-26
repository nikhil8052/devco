'use client';
import React from "react";
import Image from "next/image";

export default function CombiningCode({ CombiningCodedata = [] }) {
    // Filter out any invalid or empty entries in CombiningCodedata
    const validData = CombiningCodedata.filter(
        (data) => data.mainImage || data.heading || data.description || data.buttonText
    );

    // If no valid data exists, do not render the section
    if (validData.length === 0) {
        return null;
    }

    return (
        <div className="code_combine_section py-10 md:py-20">
            <div className="container mx-auto">
                {validData.map((data, index) => (
                    <div
                        key={index}
                        className="combine_code_wrapper overflow-hidden shadow-lg border-lightBlue border rounded-[15px] lg:rounded-[60px] md:rounded-[30px] sm:rounded-[25px] p-5 sm:p-12 mb-10"
                        style={{
                            backgroundImage: `url('/images/code_crbg.svg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="code_row flex flex-wrap items-center">
                            <div className="code_col basis-[100%] lg:basis-[35%]">
                                <Image
                                    className="w-full hidden md:block max-h-[400px]"
                                    src={data.mainImage}
                                    alt={data.alt || "Creative code illustration"}
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="code_col basis-[100%] md:basis-[65%]">
                                <div className="code_content">
                                    <div className="relative w-full">
                                        <h2
                                            className="text-[26px] 2xl:text-[54px] xl:text-[34px] md:text-[30px] sm:text-[30px] font-semibold mb-2"
                                            dangerouslySetInnerHTML={{ __html: data.heading }}
                                        />
                                        <p
                                            className="text-[14px] xl:text-[22px] lg:text-[18px] md:text-[15px] font-normal text-customwhite mb-5"
                                            dangerouslySetInnerHTML={{ __html: data.description }}
                                        />
                                        <div className="btn_wrapper flex gap-x-4">
                                            {/* Render button only if buttonText exists */}
                                                <a  href="/contact"className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black"
                                                    
                                                >
                                                    Tell Us About Your Next Project
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
