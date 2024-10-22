'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Faq() {
  // React state to keep track of which item is open, first item (index 0) is open by default
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of FAQs to dynamically render
  const faqs = [
    {
      question: "Vetted Software Developers?",
      answer: "We only engage the top 1% of vetted software engineering talent. Our software engineers and custom software project developers come fully-vetted from years of active project-based experience, including deliverables and glowing reviews from past client engagements. We also utilize a proven candidate filtration process for sifting through thousands of active software developers worldwide, solidifying on those with the ample experience across the tech stack using live projects, engineering exams, coding challenge reports and pre-hire interviews providing you best talent available. In this way, we work as a software development partner and not just a vendor."
    },
    {
      question: "Dev Staff Augmentation",
      answer: "We only engage the top 1% of vetted software engineering talent. Our software engineers and custom software project developers come fully-vetted from years of active project-based experience, including deliverables and glowing reviews from past client engagements. We also utilize a proven candidate filtration process for sifting through thousands of active software developers worldwide, solidifying on those with the ample experience across the tech stack using live projects, engineering exams, coding challenge reports and pre-hire interviews providing you best talent available. In this way, we work as a software development partner and not just a vendor."
    },
    {
      question: "Dedicated Dev Teams",
      answer: "We only engage the top 1% of vetted software engineering talent. Our software engineers and custom software project developers come fully-vetted from years of active project-based experience, including deliverables and glowing reviews from past client engagements. We also utilize a proven candidate filtration process for sifting through thousands of active software developers worldwide, solidifying on those with the ample experience across the tech stack using live projects, engineering exams, coding challenge reports and pre-hire interviews providing you best talent available. In this way, we work as a software development partner and not just a vendor."
    },
  ];

  // Function to handle clicking the accordion item
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="faz_section w-full py-20 relative z-10">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="accordion-collapse">
            {faqs.map((faq, index) => (
              <div key={index} className='acc_tab border-b border-lightBlue'>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-[25px] text-white gap-3"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-collapse-body-${index}`}
                  >
                    <span className="text-left">{faq.question}</span>
                    <svg
                      className={`w-3 h-3 ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
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
                  className={`${activeIndex === index ? '' : 'hidden'} pb-5`}
                >
                  <p className="mb-2 text-customwhite text-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='pl-10'>
              <Image src="/images/custom_devkjhk.png" height={400} width={400} className='ml-auto' />
            </div>
          </div>
        </div>
      </div>
      <Image src="/images/New-imgm.svg" height={512} width={1920} className='ml-auto w-1/2 dev_bg absolute top-[-300px] max-w-[840px] right-0 z-[-1]' />
    </div>
  );
}
