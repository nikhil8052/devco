'use client'
import React, { useState, useRef } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0); // Set default to 0 for the first item
  const contentRefs = useRef([]);

  // Array of FAQs to dynamically render
  const faqs = [
    {
      question: "What is Software Development?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      question: "How Do You Choose the Best Software Development Company?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      question: "What is Agile Software Development?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      question: "How Much Do Your Custom Software Engineering Services Cost?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      question: "What Are the Benefits of Custom Software Development?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      question: "How Long Does it Take to Create and Build Custom Software?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faz_section w-full lg:py-20 md:py-10 sm:py-5 relative z-10" style={{
      backgroundImage: "url('/images/faz_bg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container mx-auto">
        <div className="section_head grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-5 lg:gap-20 mb-20">
          <div className='left_text_col'>
            <div className="blue_subhead flex items-center gap-2 mb-5">
              <span
                className="inline-block bg-[#4353FF] w-[14px] h-[6px] rounded-[7px]"
              ></span>
              <h6 className="text-customBlue text-[22px] font-semibold">FAQs</h6>
            </div>
            <h2 className="text-white text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-0"> Frequently Asked <br />Questions</h2>
          </div>
          <div className='right_text_col'>
            <p className='text-[14px] 2xl:text-[24px] xl:text-[22px] md:text-[16px] sm:text-[14px] font-normal text-customwhite'>Here are some of the most common questions regarding our software dev services</p>
          </div>
        </div>
        <div id="accordion-collapse" className='accordian max-w-[1064px] mx-auto pb-16'>
          {faqs.map((faq, index) => (
            <div key={index} className='acc_tab border-b border-lightBlue'>
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
                    className={`w-3 h-3 transform ${activeIndex === index ? 'rotate-0' : 'rotate-180'} transition-transform duration-300`}
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
                ref={el => contentRefs.current[index] = el}
                className={`${activeIndex === index ? 'pb-5 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                <p className="mb-2 text-customwhite text-[16px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
