import React from 'react';
import Process from '@/app/components/Services/Process';

export default function Benefits({ title = "", description = "", processes = [] }) {
  return (
    <div className="benefits-section py-12 relative">
      <div className="container relative z-10">
        <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
          <h2
            className="section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div className="w-full">
            <p className="section_head_para text[14px] 2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px] font-normal text-customwhite">
              {description}
            </p>
          </div>
        </div>
        <div className="dev_process-container flex flex-wrap">
          {processes.map((obj, index) => (
            <div className='process_col border-t-2 border-lightBlue basis-[50%] py-6 pr-5 ' key={index}>
              <Process
                title={obj.title}
                description={obj.description}
                imageSrc={obj.imageSrc}
                imageHeight={obj.imageHeight}
                imageWidth={obj.imageWidth}
              />
            </div>
          ))}
        </div>
        <div className='button_wrap mt-3 md:mt-5'>
        <a href="/contact" className="bg-white text-black px-3 md:px-12 text-[14px] md:text-[16px] md:py-3 py-2 rounded-md  shadow-md transition inline-block items-center hover:bg-[#4353FF] hover:text-white">
       {` Let's talk About Your Project`}
            </a>
        </div>
      </div>

      {/* <Image
      className="w-[60%] max-h-[1100px] absolute left-0 top-0 z-1"
          src="/images/develop_bg.svg"
          alt="Banner Image"
          width={1920}
          height={300}
        /> */}
    </div>
  );
}
