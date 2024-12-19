'use client'
import Benefits from "@/app/components/Services/Benefits";
import Newbannerskills from "@/app/components/skills/Newbannerskills";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from "@/app/components/homepage/CombiningCode";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Textblockfull from '@/app/components/Textblockfull';
import StartUps from "@/app/components/Services/StartUps";




export default function Skill({data}) {
  const skill = data
  return (
    <>
       <Newbannerskills
      bannericon={skill.bannericon}
      subtitle={skill.sub_title}
      title={skill.top_title}
      description={skill.top_description}
    />

{skill.startups?.title && skill.startups?.description && (
        <StartUps
          title={skill.startups.title}
          description={skill.startups.description}
          images={skill.startups.images}
          imageHeight={skill.startups.imageHeight}
          imageWidth={skill.startups.imageWidth}
        />
      )}

    {skill.BorderTextbox?.BorderTextdata && (
      <Bordertextsection
        BorderTextdata={skill.BorderTextbox.BorderTextdata}
      />
    )}

    {skill.benefits && (
      <Benefits
        title={skill.benefits.title}
        description={skill.benefits.description}
        benefits={skill.benefits.benefits}
      />
    )}


    {skill.Benefitslider?.title && (
      <Benefitslider
        title={skill.Benefitslider.title}
        description={skill.Benefitslider.description}
        chooseData={skill.Benefitslider.card_datas}
      />
    )}

{skill.benefits2 && (
      <Benefits
        title={skill.benefits2.title}
        description={skill.benefits2.description}
        benefits={skill.benefits2.benefits}
      />
    )}
    
    {skill.BorderTextbox2?.BorderTextdata && (
      <Bordertextsection
        BorderTextdata={skill.BorderTextbox2.BorderTextdata}
      />
    )}

    {skill.Subheadingtext?.heading && (
      <Subheadingtext
        heading={skill.Subheadingtext.heading}
        subText={skill.Subheadingtext.subText}
        list1={skill.Subheadingtext.list1}
        list2={skill.Subheadingtext.list2}
      />
    )}
 {/* Only render Textblockfull if sectionData exists */}
 {skill.Textblockfull?.sectionData && (
        <Textblockfull Textblockdata={skill.Textblockfull.sectionData} />
      )}
    {skill.processes?.title && (
      <Processess
        title={skill.processes.title}
        processes={skill.processes.processes}
      />
    )}

{skill.Subheadingtext2?.heading && (
      <Subheadingtext
        heading={skill.Subheadingtext2.heading}
        subText={skill.Subheadingtext2.subText}
        list1={skill.Subheadingtext2.list1}
        list2={skill.Subheadingtext2.list2}
      />
    )}

{skill.CombiningCodedatas?.CombiningCodedata && (
  <CombiningCode CombiningCodedata={skill.CombiningCodedatas.CombiningCodedata} />
)}


{skill.faqs?.faqs?.length > 0 && (
      <Industryfaqs title={skill.faqs.title} description={skill.faqs.description} faqs={skill.faqs.faqs} />
)}

    </>
  );
}

