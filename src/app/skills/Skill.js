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
import CodeHeading from "@/app/components/Services/CodeHeading";
import Dividercontainer from "@/app/components/skills/Dividercontainer";
import Simpleimage from "@/app/components/skills/Simpleimage";
import Simpletextdjs from "@/app/components/skills/Simpletextdjs";
import Textbuttonimg from "@/app/components/skills/Textbuttonimg";

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

      {/* Code Heading Section */}
      {skill?.codeheadingsection && (
        <CodeHeading
          headingContent={skill.codeheadingsection.headingContent}
          paracontent={skill.codeheadingsection.paracontent}
        />
      )}

      {/* Divider */}
      <div className="mt-2 md:mt-10">
        <Dividercontainer />
      </div>

      {/* DeveloperDo Section */}
      {skill?.DeveloperDocontent?.data?.length > 0 && (
        <DeveloperDo data={skill.DeveloperDocontent.data} />
      )}

{/* Simple Image */}
{skill?.Simpleimagecontent?.data?.[0] && (
  <Simpleimage data={skill.Simpleimagecontent.data[0]} />
)}

{/* simpleText */}
{skill?.simpleTextDatacontent?.data?.[0] && (
  <Simpletextdjs data={skill.simpleTextDatacontent.data[0]} />
)}


      {/* Benefits Section */}
      {skill?.benefits && (
        <Benefits
          title={skill.benefits.title}
          description={skill.benefits.description}
          benefits={skill.benefits.benefits}
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

      {/* Secondary Subheading Text Section */}
      {skill?.Subheadingtext2?.heading && (
        <Subheadingtext
          heading={skill.Subheadingtext2.heading}
          subText={skill.Subheadingtext2.subText}
          list1={skill.Subheadingtext2.list1}
          list2={skill.Subheadingtext2.list2}
        />
      )}

      {/* simpleText */}
      {skill?.simpleTextDatacontent2?.data?.[0] && (
        <Simpletextdjs data={skill.simpleTextDatacontent2.data[0]} />
      )}

      {/* Combining Code Section */}
      {skill?.CombiningCodedatas?.CombiningCodedata && (
        <CombiningCode CombiningCodedata={skill.CombiningCodedatas.CombiningCodedata} />
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
