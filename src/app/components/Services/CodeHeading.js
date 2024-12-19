import React from 'react';
import Image from 'next/image';

const CodeHeading = ({ headingContent }) => {
  return (
    <div className="custom_section pt-10 md:pt-20 relative pb-0 text-customwhite">
      <div className="container mx-auto">
        <div className="custom_content text-center relative pt-[22%]">
          <div className="code_image_wrapper absolute top-0 left-0 right-0 mx-auto z-1 w-[100%] md:w-[80%] sm:w-[80%]">
            <Image
              src="/images/cust_logo_new.svg"
              alt="Custom Software Development"
              width={800} // Replace with the actual width of your image
              height={800} // Replace with the actual height of your image
              priority // Ensures the image is loaded as quickly as possible for LCP
              className="mx-auto mb-[-50px] inline-block"
            />
          </div>
          <h2
            className="2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[22px] text-[22px] font-semibold text-white-800 relative top-[-10%] z-10"
            dangerouslySetInnerHTML={{ __html: headingContent }}
          ></h2>
        </div>
      </div>
    </div>
  );
};

export default CodeHeading;
