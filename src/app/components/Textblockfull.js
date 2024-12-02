import React from 'react';

export default function Textblockfull({ Textblockdata = [] }) {

  return (
    <div className="Textblockfull-sec py-10 md:py-20">
      <div className="container max-auto">
        <div className="Textblockfull-sec-container">
          {Textblockdata.map((section, index) => (
            <div key={index} className="mb-5">
              {section.title && (
                <h2 className="section_head_title font-semibold text-[24px] 2xl:text-[42px] xl:text-[35px] md:text-[30px] sm:text-[24px] md:mb-3 mb-2 text-customwhite" dangerouslySetInnerHTML={{ __html: section.title }}>
                </h2>
              )}
              {section.description && (
                <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite" dangerouslySetInnerHTML={{ __html: section.description }}>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
