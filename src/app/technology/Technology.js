'use client'
import Benefits from "@/app/components/Services/Benefits";
import SkillBanner from "@/app/components/skills/SkillBanner";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import Buitprtfoliosection from "@/app/components/industry/Buitprtfoliosection";
import CombiningCode from "@/app/components/homepage/CombiningCode";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Textblockfull from '@/app/components/Textblockfull';

export default function Technology({data}) {

  const Technology = data


  return (
    <>
    {/* SkillBanner always rendered since it has data for all sections */}
    <SkillBanner
      bannericon={Technology.bannericon}
      subtitle={Technology.sub_title}
      title={Technology.top_title}
      description={Technology.top_description}
    />

    {Technology.BorderTextbox?.BorderTextdata && (
      <Bordertextsection
        BorderTextdata={Technology.BorderTextbox.BorderTextdata}
      />
    )}

    {Technology.benefits && (
      <Benefits
        title={Technology.benefits.title}
        description={Technology.benefits.description}
        benefits={Technology.benefits.benefits}
      />
    )}
{Technology.Buitprtfoliosection && (
    <Buitprtfoliosection
      title={Technology.Buitprtfoliosection.top_title}
      description={Technology.Buitprtfoliosection.top_description}
      templatesdata={Technology.Buitprtfoliosection.templatesdata}
    />
  )}



    {Technology.Benefitslider?.title && (
      <Benefitslider
        title={Technology.Benefitslider.title}
        description={Technology.Benefitslider.description}
        chooseData={Technology.Benefitslider.card_datas}
      />
    )}

{Technology.benefits2 && (
      <Benefits
        title={Technology.benefits2.title}
        description={Technology.benefits2.description}
        benefits={Technology.benefits2.benefits}
      />
    )}
    
    {Technology.BorderTextbox2?.BorderTextdata && (
      <Bordertextsection
        BorderTextdata={Technology.BorderTextbox2.BorderTextdata}
      />
    )}

    {Technology.Subheadingtext?.heading && (
      <Subheadingtext
        heading={Technology.Subheadingtext.heading}
        subText={Technology.Subheadingtext.subText}
        list1={Technology.Subheadingtext.list1}
        list2={Technology.Subheadingtext.list2}
      />
    )}
 {/* Only render Textblockfull if sectionData exists */}
 {Technology.Textblockfull?.sectionData && (
        <Textblockfull Textblockdata={Technology.Textblockfull.sectionData} />
      )}
    {Technology.processes?.title && (
      <Processess
        title={Technology.processes.title}
        processes={Technology.processes.processes}
      />
    )}

{Technology.Subheadingtext2?.heading && (
      <Subheadingtext
        heading={Technology.Subheadingtext2.heading}
        subText={Technology.Subheadingtext2.subText}
        list1={Technology.Subheadingtext2.list1}
        list2={Technology.Subheadingtext2.list2}
      />
    )}

{Technology.CombiningCodedatas?.CombiningCodedata && (
  <CombiningCode CombiningCodedata={Technology.CombiningCodedatas.CombiningCodedata} />
)}


{Technology.faqs?.faqs?.length > 0 && (
      <Industryfaqs title={Technology.faqs.title} description={Technology.faqs.description} faqs={Technology.faqs.faqs} />
)}


  </>
  );
}
