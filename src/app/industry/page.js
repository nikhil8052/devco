'use client'
import Benefits from "@/app/components/Services/Benefits";
import SkillBanner from "@/app/components/skills/SkillBanner";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from "@/app/components/homepage/CombiningCode";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Industryfaqs from "@/app/components/faq/Industryfaqs";

export default function Home({data={}}) {
 
  const selectedindustries = data

  return (
    <>
      {/* SkillBanner always rendered since it has data for all sections */}
      <SkillBanner
        bannericon={selectedindustries.bannericon}
        subtitle={selectedindustries.sub_title}
        title={selectedindustries.top_title}
        description={selectedindustries.top_description}
      />

      {selectedindustries.BorderTextbox?.BorderTextdata && (
        <Bordertextsection
          BorderTextdata={selectedindustries.BorderTextbox.BorderTextdata}
        />
      )}

      {selectedindustries.benefits && (
        <Benefits
          title={selectedindustries.benefits.title}
          description={selectedindustries.benefits.description}
          benefits={selectedindustries.benefits.benefits}
        />
      )}

      {selectedindustries.Benefitslider?.title && (
        <Benefitslider
          title={selectedindustries.Benefitslider.title}
          description={selectedindustries.Benefitslider.description}
          chooseData={selectedindustries.Benefitslider.card_datas}
        />
      )}

      {selectedindustries.BorderTextbox2?.BorderTextdata && (
        <Bordertextsection
          BorderTextdata={selectedindustries.BorderTextbox2.BorderTextdata}
        />
      )}

      {selectedindustries.Subheadingtext?.heading && (
        <Subheadingtext
          heading={selectedindustries.Subheadingtext.heading}
          subText={selectedindustries.Subheadingtext.subText}
          list1={selectedindustries.Subheadingtext.list1}
          list2={selectedindustries.Subheadingtext.list2}
        />
      )}

      {selectedindustries.processes?.title && (
        <Processess
          title={selectedindustries.processes.title}
          processes={selectedindustries.processes.processes}
        />
      )}

{selectedindustries.Subheadingtext2?.heading && (
        <Subheadingtext
          heading={selectedindustries.Subheadingtext2.heading}
          subText={selectedindustries.Subheadingtext2.subText}
          list1={selectedindustries.Subheadingtext2.list1}
          list2={selectedindustries.Subheadingtext2.list2}
        />
      )}

{selectedindustries.CombiningCodedatas?.CombiningCodedata && (
  <CombiningCode CombiningCodedata={selectedindustries.CombiningCodedatas.CombiningCodedata} />
)}

      {selectedindustries.faqs?.faqs?.length > 0 && (
  <Industryfaqs title={selectedindustries.faqs.title} description={selectedindustries.faqs.description} faqs={selectedindustries.faqs.faqs} />
)}


    </>
  );
}
