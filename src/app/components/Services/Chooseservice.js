import React from 'react';
import Image from 'next/image';

export default function Chooseservice() {
  return (
    <div className="choose-section py-20 relative">
      <div className="container relative z-10">
        <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
          <h2
            className="section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite"
          > How to Choose a Software Development Staffing Company</h2>
          <div className="w-full">
            <p className="section_head_para text[14px] 2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px] font-normal text-customwhite">
            Of course, not all software development staffing companies are created equal.
            When searching for a potential staffing partner, make sure you consider:
            </p>
          </div>
        </div>
        <div className='dev_card_row flex gap-6 '>
            <div className='dev_card_col w-full max-w-[456px]'>
                <div className='dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full'>
                    <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col">
                        <Image 
                            className='w-full w-full block mt-auto '
                                src="/images/card_1.svg" 
                                alt="Description of image" 
                                width={500} 
                                height={300} 
                            />
                    </div>
                    <div className="text-section w-full max-w-[514px]">
                        <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">Experience</h4>
                        <p className="text-sm md:text-base text-customwhite">
                        Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele, and can anticipate the usual barriers to success.
                        </p>
                    </div>
                </div>
            </div>
            <div className='dev_card_col w-full max-w-[456px]'>
                <div className='dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full'>
                        <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col">
                            <Image 
                                className='w-full  w-full block mt-auto '
                                    src="/images/card_real.svg" 
                                    alt="Description of image" 
                                    width={500} 
                                    height={300} 
                                />
                        </div>
                        <div className="text-section w-full max-w-[514px]">
                            <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">Speed</h4>
                            <p className="text-sm md:text-base text-customwhite">
                            Even if your project isn’t time-sensitive, you’ll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster.
                            </p>
                        </div>
                    </div>
            </div>
            <div className='dev_card_col w-full max-w-[456px]'>
                <div className='dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full'>
                        <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col ">
                            <Image 
                                className='w-full  w-full block mt-auto'
                                    src="/images/accessimg.svg" 
                                    alt="Description of image" 
                                    width={500} 
                                    height={300} 
                                />
                        </div>
                        <div className="text-section w-full max-w-[514px]">
                            <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">Access</h4>
                            <p className="text-sm md:text-base text-customwhite">
                            What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?
                            </p>
                        </div>
                    </div>
            </div>
            <div className='dev_card_col w-full max-w-[456px]'>
                <div className='dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full'>
                        <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col ">
                            <Image 
                                className='w-full  w-full block mt-auto'
                                    src="/images/comminuctn.svg" 
                                    alt="Description of image" 
                                    width={500} 
                                    height={300} 
                                />
                        </div>
                        <div className="text-section w-full max-w-[514px]">
                            <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">Communication</h4>
                            <p className="text-sm md:text-base text-customwhite">
                            A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner, and discuss your vision?
                            </p>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}
