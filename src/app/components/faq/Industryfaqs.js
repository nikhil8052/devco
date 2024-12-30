'use client';
import React, { useState, useRef } from 'react';

export default function Industryfaqs({ title, description, faqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="faq_section w-full lg:py-20 md:py-10 sm:py-5 relative z-10"
      style={{
        backgroundImage: "url('/images/faz_bg.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        {/* Render section_head only if title or description exists */}
        {(title || description) && (
          <div className="section_head mb-20">
            {title && (
              <h2
                className="text-white text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            )}
            {description && (
              <p
                className="text-[14px] 2xl:text-[24px] xl:text-[22px] md:text-[16px] sm:text-[14px] font-normal text-customwhite"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            )}
          </div>
        )}
        <div
          id="accordion-collapse"
          className="accordion max-w-[1064px] mx-auto pb-16"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="acc_tab border-b border-lightBlue">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-semibold text-[18px] md:text[25px] sm:text-[20px] text-white gap-3 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-3 h-3 transform ${
                      activeIndex === index ? 'rotate-0' : 'rotate-180'
                    } transition-transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className={`${
                  activeIndex === index
                    ? 'pb-5 max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {/* Use faq.answer for dangerouslySetInnerHTML */}
                <p
                  className="mb-2 text-customwhite text-[16px]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
                {faq.lists &&
                  faq.lists.length > 0 &&
                  faq.lists.map((list, listIndex) => (
                    <div key={listIndex} className="mb-4">
                      {list.heading && (
                        <h4 className="text-customwhite font-semibold text-[16px] mt-3 mb-2">
                          {list.heading}
                        </h4>
                      )}
                      <ul className="list-disc pl-5">
                        {list.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-customwhite text-[16px] opacity-[0.7]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p
                  className="mt-2 mb-2 text-customwhite text-[16px]"
                  dangerouslySetInnerHTML={{ __html: faq.bottomline }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
