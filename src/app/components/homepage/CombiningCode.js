import React from "react";
import Image from "next/image";

export default function CombiningCode() {
    return (
       <div className="code_combine_section py-10 md:py-20">
            <div className="container mx-auto">
                <div 
                    className="combine_code_wrapper overflow-hidden shadow-lg border-lightBlue border rounded-[15px] lg:rounded-[60px] md:rounded-[30px] sm:rounded-[25px] p-5 sm:p-12"
                    style={{
                        backgroundImage: `url('/images/code_crbg.svg')`, // replace with your image path
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="code_row flex flex-wrap items-center">
                        <div className="code_col basis-[100%] md:basis-[40%]">
                            <Image 
                                className="w-full hidden md:block"
                                src="/images/code_creative.svg" 
                                alt="Description of image" 
                                width={500} 
                                height={300} 
                            />
                        </div>
                        <div className="code_col basis-[100%] md:basis-[60%]">
                            <div className="code_content">
                                <div className="relative w-full max-w-[650px]">
                                    <h2 className="text-[34px] 2xl:text-[54px] xl:text-[36px] md:text-[34px] sm:text-[34px] font-semibold mb-2">
                                    Software Developers Combining Code + Creativity
                                    </h2>
                                    <p className="text-[14px] lg:text-[22px] md:text-[16px] font-normal text-customwhite mb-5">
                                        {`View our company's portfolio and engage with our sales team. With our white label program, we offer our engineering consulting and software dev solutions to other top software development companies.`}

                                    </p>
                                    <div className="btn_wrapper flex gap-x-4">
                                        <button className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
                                            Tell Us About Your Next Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
