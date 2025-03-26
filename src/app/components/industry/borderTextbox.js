import React from 'react';

export default function BorderTextbox({ title = "", description = "", sitelist = [] }) {
  return (
    <div className="benefit-box flex flex-col gap-2 md:gap-5">
      <div className="text-section w-full max-w-[514px]">
        {/* Display title only if it exists */}
        {title && (
          <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">
            {title}
          </h4>
        )}

        {/* Display description only if it exists */}
        {description && (
          <p
            className="text-sm md:text-base text-customwhite"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {/* Display list only if it has items */}
        {sitelist && sitelist.length > 0 && (
          <ul className=" arrow-list text-sm md:text-base text-customwhite">
            {sitelist.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
