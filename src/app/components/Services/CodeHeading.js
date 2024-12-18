import React from 'react';

const CodeHeading = ({ headingContent }) => {
  return (
    <div className="custom_section pt-10 md:pt-20 relative pb-0 text-customwhite">
      <div className="container mx-auto">
        <div className="custom_content text-center relative pt-[22%]">
          <img
            src="/images/cust_logo_new.svg"
            alt="Custom Software Development"
            className="mx-auto code_image mb-[-50px] inline-block absolute top-0 left-0 right-0 mx-auto z-1 w-[100%] md:w-[80%] sm:w-[80%]"
          />
          <h2 className="2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[22px] text-[22px] font-semibold text-white-800 relative top-[-10%] z-10"
           dangerouslySetInnerHTML={{ __html: headingContent }}>

          </h2>
        </div>
      </div>
    </div>
  );
};

export default CodeHeading;
