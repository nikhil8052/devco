"use client";
import React from "react";
import Benefits from "@/app/components/Services/Benefits";
import Newbannerskills from "@/app/components/skills/Newbannerskills";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from "@/app/components/homepage/CombiningCode";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Textblockfull from "@/app/components/Textblockfull";
import StartUps from "@/app/components/Services/StartUps";
import DeveloperDo from "@/app/components/skills/DeveloperDo";
import PricingSection from "@/app/components/skills/PricingSection";
import CodeHeading from "@/app/components/Services/CodeHeading";
import Dividercontainer from "@/app/components/skills/Dividercontainer";
import Simpleimage from "@/app/components/skills/Simpleimage";
import Simpletextdjs from "@/app/components/skills/Simpletextdjs";
import Textbuttonimg from "@/app/components/skills/Textbuttonimg";
import Whyusecard from "@/app/components/cards/Whyusecard";
import Animatedhead from "@/app/components/skills/Animatedhead";
import Checkimgcard from "@/app/components/cards/checkimgcard";

export default function Skill({ data }) {
  const skill = data;

  return (
    <>
      {/* Banner Section */}
      <Newbannerskills
        bannericon={skill?.bannericon}
        subtitle={skill?.sub_title}
        title={skill?.top_title}
        description={skill?.top_description}
      />

      {/* StartUps Section */}
      {skill?.startups?.title && skill?.startups?.description && (
        <StartUps
          title={skill.startups.title}
          description={skill.startups.description}
          images={skill.startups.images}
          imageHeight={skill.startups.imageHeight}
          imageWidth={skill.startups.imageWidth}
        />
      )}

      {/* BorderText Section */}
      {skill?.BorderTextbox?.BorderTextdata && (
        <Bordertextsection BorderTextdata={skill.BorderTextbox.BorderTextdata} />
      )}

      {/* Animated Heading Section */}
      {skill?.Animatedhead && (
        <Animatedhead sectionHeading={skill.Animatedhead.sectionHeading} />
      )}

      {/* Divider */}
      <div className="divider flex items-center content-center h-[50px] md:h-[150px] w-[100%] mx-auto">
        <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
      </div>

      {/* Why Use Section */}
      {skill?.whyuseSection && (
        <Whyusecard
          sectionHeading={skill.whyuseSection.sectionHeading}
          data={skill.whyuseSection.data}
          imageWidth={400}
          imageHeight={400}
        />
      )}

      {/* Subheading Text Section */}
      {skill?.Subheadingtextwhysection && (
        <Subheadingtext
          heading={skill.Subheadingtextwhysection.heading}
          subText={skill.Subheadingtextwhysection.subText}
          list1={skill.Subheadingtextwhysection.list1}
          list2={skill.Subheadingtextwhysection.list2}
        />
      )}

      {/* Code Heading Section */}
      {skill?.codeheadingsection && (
        <CodeHeading
          headingContent={skill.codeheadingsection.headingContent}
          paracontent={skill.codeheadingsection.paracontent}
        />
      )}

      {/* Divider */}
      <div className="divider mt-2">
        <Dividercontainer />
      </div>

      {/* DeveloperDo Section */}
      {skill?.DeveloperDocontent?.data?.length > 0 && (
        <DeveloperDo data={skill.DeveloperDocontent.data} />
      )}

      {/* Simple Image Section */}
      {skill?.Simpleimagecontent?.data?.[0] && (
        <Simpleimage data={skill.Simpleimagecontent.data[0]} />
      )}

      {/* Simple Text Section */}
      {skill?.simpleTextDatacontent?.data?.[0] && (
        <Simpletextdjs data={skill.simpleTextDatacontent.data[0]} />
      )}

      {/* Animated Heading 2 Section */}
      {skill?.Animatedhead2 && (
        <Animatedhead sectionHeading={skill.Animatedhead2.sectionHeading} />
      )}

      {/* Benefits Section */}
      {skill?.benefits && (
        <Benefits
          title={skill.benefits.title}
          description={skill.benefits.description}
          benefits={skill.benefits.benefits}
          bottomline={skill.benefits.bottomline}
        />
      )}

      {/* Combining Code Section */}
      {skill?.CombiningCodedatas2?.CombiningCodedata && (
        <CombiningCode CombiningCodedata={skill.CombiningCodedatas2.CombiningCodedata} />
      )}

      {/* Benefits Slider */}
      {skill?.Benefitslider?.title && (
        <Benefitslider
          title={skill.Benefitslider.title}
          description={skill.Benefitslider.description}
          chooseData={skill.Benefitslider.card_datas}
        />
      )}

      {/* Secondary Benefits Section */}
      {skill?.benefits2 && (
        <Benefits
          title={skill.benefits2.title}
          description={skill.benefits2.description}
          benefits={skill.benefits2.benefits}
        />
      )}

      {/* Secondary BorderText Section */}
      {skill?.BorderTextbox2?.BorderTextdata && (
        <Bordertextsection BorderTextdata={skill.BorderTextbox2.BorderTextdata} />
      )}

      {/* Text Button Image Section */}
      {skill?.getintouchdata && (
        <Textbuttonimg data={skill.getintouchdata.data} />
      )}

      {/* Subheading Text Section */}
      {skill?.Subheadingtext?.heading && (
        <Subheadingtext
          heading={skill.Subheadingtext.heading}
          subText={skill.Subheadingtext.subText}
          list1={skill.Subheadingtext.list1}
          list2={skill.Subheadingtext.list2}
        />
      )}

      {/* Text Block Section */}
      {skill?.Textblockfull?.sectionData && (
        <Textblockfull Textblockdata={skill.Textblockfull.sectionData} />
      )}

      {/* Processes Section */}
      {skill?.processes?.title && (
        <Processess
          title={skill.processes.title}
          processes={skill.processes.processes}
        />
      )}
            {skill?.Animatedhead3 && (
        <Animatedhead sectionHeading={skill.Animatedhead3.sectionHeading} />
      )}

      {/* Check Image Card Section */}
      {skill?.checkImgCardDatasection && (
         <Checkimgcard data={skill.checkImgCardDatasection.checkImgCardData} imageWidth={400} imageHeight={400} />
      )}

      {/* Simple Text Section 2 */}
      {skill?.simpleTextDatacontent2?.data?.[0] && (
        <Simpletextdjs data={skill.simpleTextDatacontent2.data[0]} />
      )}

      {/* Combining Code Section */}
      {skill?.CombiningCodedatas?.CombiningCodedata && (
        <CombiningCode CombiningCodedata={skill.CombiningCodedatas.CombiningCodedata} />
      )}

            {/* Benefits Section */}
   {skill?.Pricingsection && (
        <PricingSection
          title={skill.Pricingsection.title}
          description={skill.Pricingsection.description}
        />
      )}

      {/* FAQs Section */}
      {skill?.faqs?.faqs?.length > 0 && (
        <Industryfaqs
          title={skill.faqs.title}
          description={skill.faqs.description}
          faqs={skill.faqs.faqs}
        />
      )}
    </>
  );
}
