import React from 'react';
import Image from "next/image";

export default function Iconsection({ title, description }) {
  // Check if there's any data to render
  const hasTitle = title && title.trim() !== "";
  const hasDescription = description && description.trim() !== "";
  const hasContent = hasTitle || hasDescription; // Check for any content

  return (
    <>
      <div className="new_section text-customwhite Textcardsection benefits_section py-5 xl:py-[20] lg:py-[10] md:py[5] relative bg-black">
        {/* Background Image */}
        <Image
          className="right_eclipsebg absolute bottom-0 right-0 w-1/2"
          src="/images/right_eclopse.svg"
          alt="Image"
          width={1160}
          height={440}
        />

        {/* Conditional Rendering for Content */}
        {hasContent && (
          <div className="container relative z-10">
            {/* Grid Head Section */}
            {(hasTitle || hasDescription) && (
              <div className="grid-head w-full xl:mb-10 mb-5">
                {hasTitle && (
                  <h2
                    className="section_head_title font-semibold text-[28px] 2xl:text-[70px] xl:text-[50px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                )}
                {hasDescription && (
                  <div className="w-full xl:max-w-[60%]">
                    <p
                      className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  </div>
                )}
              </div>
            )}
            <div className="icon_text_grid text-customwhite">
              <div className="icon_text_row">
                {/* Card Items */}
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/icon_developer.svg"
                        alt="Developers"
                        width={64}
                        height={64}
                      />
                      <h3>Developers</h3>
                    </div>
                  </div>
                </div>
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/iconRecruiters.svg"
                        alt="Recruiters"
                        width={64}
                        height={64}
                      />
                      <h3>Recruiters</h3>
                    </div>
                  </div>
                </div>
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/Recruitersicondesigner.svg"
                        alt="Designers"
                        width={64}
                        height={64}
                      />
                      <h3>Designers</h3>
                    </div>
                  </div>
                </div>
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/icon-pm.svg"
                        alt="Project Managers"
                        width={64}
                        height={64}
                      />
                      <h3>Project Managers</h3>
                    </div>
                  </div>
                </div>
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/icondevopsenge.svg"
                        alt="DevOps Engineers"
                        width={64}
                        height={64}
                      />
                      <h3>DevOps Engineers</h3>
                    </div>
                  </div>
                </div>
                <div className="icon_text_col">
                  <div className="icon_text_card">
                    <div className="icon_thmb">
                      <Image
                        src="/images/icon_securtyexprts.svg"
                        alt="Security Experts"
                        width={64}
                        height={64}
                      />
                      <h3>Security Experts</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text_content">
              <div className="w-full xl:max-w-[60%]">
                <p className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
                  There is a growing trend of on-demand software development
                  services. This means that you no longer have to wait months
                  for a software developer or engineer to be available. You can
                  find someone who is skilled in the programming language or
                  tools that you need, and hire them for as long as you need
                  them.
                  <br></br>
                  This has several advantages over the traditional model of
                  hiring software developers. First, you don’t have to worry
                  about paying benefits or vacation time. Second, you can get
                  someone with the exact skills that you need, instead of having
                  to settle for someone who is only somewhat familiar with your
                  technology stack. Third, on-demand developers are usually more
                  affordable than full-time employees.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
