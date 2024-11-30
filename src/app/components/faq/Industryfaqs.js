'use client';
import React, { useState, useRef } from 'react';

export default function Industryfaqs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "How much does custom web development cost?",
      answer: `The cost of ecommerce website development can vary depending on the scope and complexity of the project. However, our team of experts will work with you to create a custom development plan that fits your budget and needs. Contact us today to learn more about our pricing and get started on your ecommerce project!`,

    },
    {
      question: "What is the process of e-commerce development?",
      answer: `The process of ecommerce development can vary depending on the needs and requirements of the business. However, in general, the process will involve the following steps: 1. Planning and Analysis – In this stage, the ecommerce developer will work with the client to map out the requirements and goals of the project. They will also analyze the existing website or system to determine what needs to be changed or updated. 2. Design – Once the requirements have been finalized, the ecommerce developer will create a design for the new website or system. This design will be based on the goals and needs of the client, as well as industry best practices. 3. Development – Once the design is finalized, the ecommerce developer will begin to code and build the new website or system. They will work closely with the client to ensure that all requirements are met. 4. Testing – Once the development phase is complete, the ecommerce developer will test the website or system to ensure that it is functioning properly. They will also test for any compatibility issues with existing systems or software. 5. Launch – Once all testing is complete, the ecommerce developer will launch the new website or system. They will provide training and support to help get your business up and running smoothly. – What are the benefits of ecommerce development?`,

    },
    {
      question: "What is the difference between ecommerce web development and website design?",
      answer: `Ecommerce development and ecommerce design are two important aspects of online stores. However, they are often confused with one another. So, what is the difference between ecommerce development and ecommerce design? Ecommerce development is the process of creating a custom ecommerce system or website. This involves coding and building the site, as well as testing it for functionality and compatibility. Website design is the process of creating a visually appealing website that meets the needs of the client. This typically involves choosing a template or design, and then customizing it to match the needs of the business. So, which one is more important? In general, ecommerce development is more important than ecommerce design. This is because the development phase is responsible for creating a functional website or system that meets all the requirements of the client. The design phase can help make the website or system look nicer, but it is not as essential as the development phase.`,
    },
    {
      question: "Can you do custom e-commerce dev?",
      answer: `Yes, we can do custom ecommerce development. Our team of experienced developers will work with you to create a system or website that meets all your requirements. We specialize in custom coding and development, so you can be sure that your project will be done correctly and efficiently. Contact us today to learn more about our pricing and get started on your ecommerce project!`,

    },
    {
      question: "Do I need a developer to do e-commerce development?",
      answer: `No, you do not need a developer to do ecommerce development. Our team of experienced developers can take care of everything for you. We specialize in custom coding and development, so you can be sure that your project will be done correctly and efficiently. Contact us today to learn more about our pricing and get started on your ecommerce project!`,

    },
    {
      question: "How can I find an experienced ecommerce developer?",
      answer: "If you’re looking for an experienced ecommerce developer, then you’ve come to the right place. DEV.co is a premier ecommerce development service, with over 10 years of experience in the industry. We have a team of experienced developers who can create a custom ecommerce system or website for your business. Contact us today to learn more about our pricing and get started on your ecommerce project!",
    },
    {
        question: "How should I prepare for my e-commerce development project?",
        answer: "Before you begin your ecommerce development project, there are a few things you should keep in mind: – Make sure you have a clear idea of what you want the finished site to look like. This will help your developer create a system that meets your specific needs. – Know your budget. This will help you choose the right developer and ensure that your project stays on track financially. – Be prepared to provide detailed specifications for your project. This will help your developer understand your requirements and avoid any confusion or delays. – Be patient! The development process can take time, but the end result is well worth it.",
      }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_section w-full lg:py-20 md:py-10 sm:py-5 relative z-10" style={{
      backgroundImage: "url('/images/faz_bg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container mx-auto">
        <div id="accordion-collapse" className='accordion max-w-[1064px] mx-auto pb-16'>
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
    </div>
  );
}
