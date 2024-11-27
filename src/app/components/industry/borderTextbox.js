import React from 'react';

export default function BorderTextbox({ title = "", description = "" }) {
  return (
    <div className="benefit-box flex flex-col gap-5">
      <div className="text-section w-full max-w-[514px]">
        <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">{title}</h4>
        <p
          className="text-sm md:text-base text-customwhite"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
