'use client';
import { useState, useRef } from 'react'

import LazyBackgroundSection from '../LazyBackgroundSection'

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "What is Software Development?",
      answer: `Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations.
      Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations.`,

    },
    {
      question: "How Do You Choose the Best Software Development Company?",
      answer: `When choosing a custom software development company, it is important to consider the company's experience and expertise. The company should have a good reputation and be able to provide references. It is also important to consider the cost of the services, and make sure that the company has a good track record of completing projects on time and on budget.`,
      lists: [
        {
          heading: "The best software development companies have a number of characteristics in common, including:",
          items: [
            "They have a lot of experience and expertise in software development",
            "They have a good reputation and are able to provide references",
            "They are able to complete projects on time and on budget",
            "They have a team of skilled developers who are able to meet the needs of the customer or client",
            "They use the latest tools and technologies",
            "They have a strong understanding of the software development process",
            "They are able to provide support and maintenance after the software has been deployed"
          ]
        },
        {
          heading: "What questions should you ask your software development company before hiring them?",
          items: [
            "What is your experience and expertise in software development?",
            "Do you have a good reputation and are able to provide references?",
            "Can you complete projects on time and on budget?",
            "Do you have a team of skilled developers who are able to meet the needs of the customer or client?",
            "What tools and technologies do you use?",
            "Do you have a strong understanding of the software development process?",
            "What kind of support and maintenance can you provide after the software has been deployed?"
          ]
        }
      ]
    },
    {
      question: "What is Agile Software Development?",
      answer: "",
      lists: [
        {
          heading: "The agile software development process consists of the following five stages:",
          items: [
            "Initiation: This stage includes gathering requirements from the customer or client, and designing the software.",
            "Planning: In this stage, the development team creates a plan for developing the software. This includes creating a schedule and budget, and determining which features will be included in each stage of the project.",
            "Execution: In this stage, the development team writes code and tests it to make sure it meets all of the requirements.",
            "Delivery: In this stage, the software is delivered to the customer or client for testing.",
            "Feedback: In this stage, the customer or client provides feedback about the software, and the development team makes changes based on that feedback."
          ]
        },
        {
          heading: "How does agile software development differ from other methodologies?",
          items: [
            "Agile development is a process that is used to create custom software for a customer or client. It is a collaborative process that involves regular communication between the customer or client and the development team. Agile software development is based on the principle of iterative and incremental development, which means that the software is developed in stages, and new features are added after each stage has been completed. This allows the customer or client to see a working prototype of the software and provide feedback.",
            "At any given time, we are using various software development tools to fully implement agile software development methodologies.",
          ]
        }
      ]
    },
    {
      question: "How Much Do Your Custom Software Engineering Services Cost?",
      answer: `Custom software development services can vary in price, depending on the size and complexity of the project. However, most companies charge by the hour, with rates that range from $75 to $250 per hour. Some companies also charge a fixed price for the project, which is determined by the scope of work. Contact us today for a quote on your next project!`,
      lists: [
        {
          heading: "When considering the cost of software development services, there are several factors to take into account:",
          items: [
            "The size and complexity of the project. The larger and more complex the project, the higher the cost of the services.",
            "The development team's experience and expertise. More experienced and expert developers will charge more for their services.",
            "The company's overhead costs. Companies with higher overhead costs, such as larger companies or those located in major metropolitan areas, will charge more for their services.",
            "The type of project. Some projects, such as those that require a lot of custom coding, will be more expensive than others.",
            "The development methodologies used. Agile software development is a more expensive methodology than traditional waterfall development.",
            "The number of hours required to complete the project. The more hours required, the higher the cost of the services.",
            "The level of experience and expertise of the development team. More experienced and skilled developers will charge more for their services.",
            "The geographical location of the development team. Development teams in countries such as India or China typically charge less than teams in North America or Europe.",
          ]
        }
      ]
    },
    {
      question: "What Are the Benefits of Custom Software Development?",
      answer: "",
      lists: [
        {
          heading: "Increased efficiency",
          items: [
            "Custom software is designed to meet the specific needs of a business, which can help to increase efficiency and productivity."
          ]
        },
        {
          heading: "Improved customer satisfaction",
          items: [
            "By providing a software solution that is tailored to the specific needs of a customer or client, businesses can improve customer satisfaction levels.",
          ]
        },
        {
          heading: "Cost savings",
          items: [
            "By avoiding the need to purchase off-the-shelf software, businesses can save money on the cost of development and maintenance.",
          ]
        }
      ]
    },
    {
      question: "How Long Does it Take to Create and Build Custom Software?",
      answer: "Custom software development using the agile method typically takes between 4 and 6 months, but can take longer depending on the complexity of the project.",
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <LazyBackgroundSection image="/images/faz_bg.webp" className="faq_section w-full lg:py-20 md:py-10 sm:py-5 relative z-10">

    {/* <div className="faq_section w-full lg:py-20 md:py-10 sm:py-5 relative z-10" style={{
      backgroundImage: "url('/images/faz_bg.webp')",
      backgroundRepeat: "no-repeat",
    }}> */}
      <div className="container mx-auto">
        <div className="section_head items-end grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-5 lg:gap-20 mb-20">
          <div className='left_text_col'>
            <div className="blue_subhead flex items-center gap-2 mb-5">
              <span className="inline-block bg-[#4353FF] w-[14px] h-[6px] rounded-[7px]"></span>
              <h6 className="text-customBlue text-[22px] font-semibold">FAQs</h6>
            </div>
            <h2 className="text-white text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-0"> Frequently Asked <br />Questions</h2>
          </div>
          <div className='right_text_col'>
            <p className='text-[14px] 2xl:text-[24px] xl:text-[22px] md:text-[16px] sm:text-[14px] font-normal text-customwhite'>Here are some of the most common questions regarding our software dev services</p>
          </div>
        </div>
        <div id="accordion-collapse" className='accordion max-w-[1064px] mx-auto pb-16'>
          {faqs.map((faq, index) => (
            <div key={index} className='acc_tab border-b border-lightBlue'>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full pt-12 pb-6 font-semibold text-[18px] md:text[25px] sm:text-[20px] text-white gap-3 text-left"
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
                <p className="mb-2 text-customwhite text-[16px]">{faq.answer}</p>
                {faq.lists && faq.lists.length > 0 && faq.lists.map((list, listIndex) => (
                  <div key={listIndex} className="mb-4">
                    {list.heading && <h4 className="text-customwhite font-semibold text-[16px] mt-3 mb-2">{list.heading}</h4>}
                    <ul className="list-disc pl-5">
                      {list.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-customwhite text-[16px]">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* </div> */}
    </LazyBackgroundSection>

  );
}
