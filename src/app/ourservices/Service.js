'use client'
import StartUps from "@/app/components/Services/StartUps";
import Newbanner from "@/app/components/Services/Newbanner";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from '@/app/components/homepage/CombiningCode';
import Chooseservice from "@/app/components/Services/Chooseservice";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Textblockfull from '@/app/components/Textblockfull';
import Logofloat from "@/app/components/Logofloat";



export default function Service({ data, metadata  }) {

  console.log( metadata, " This is the meta service ")
  const skill = data;

  return (
    <>

      {/* HeroBanner */}
      <Newbanner
        subtitle={skill.subtitle}
        title={skill.top_title}
        bannerImage={skill.bannerImage}
        description={skill.top_description}
      />

      {/* StartUps */}
      {skill.startups?.title && skill.startups?.description && (
        <StartUps
          title={skill.startups.title}
          description={skill.startups.description}
          images={skill.startups.images}
          imageHeight={skill.startups.imageHeight}
          imageWidth={skill.startups.imageWidth}
        />
      )}

      {/* Bordertextsection */}
      {skill.BorderTextbox?.BorderTextdata && (
        <Bordertextsection
          BorderTextdata={skill.BorderTextbox.BorderTextdata}
        />
      )}

      {/* Benefits */}
      {skill.benefits?.title && skill.benefits?.benefits && (
        <Benefits
          title={skill.benefits.title}
          description={skill.benefits.description}
          benefits={skill.benefits.benefits}
        />
      )}

      {/* SubheadingText */}
      {skill.Subheadingtext?.heading && (
        <Subheadingtext
          heading={skill.Subheadingtext.heading}
          subText={skill.Subheadingtext.subText}
          list1={skill.Subheadingtext.list1}
          list2={skill.Subheadingtext.list2}
        />
      )}

      {/* Chooseservice */}
      {skill.chooseServices?.card_data && (
        <Chooseservice
          title={skill.chooseServices.title}
          description={skill.chooseServices.description}
          chooseData={skill.chooseServices.card_data}
        />
      )}

      {/* Benefitslider */}
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

      {/* TextblockFull */}
      {skill.Textblockfull?.sectionData && (
        <Textblockfull Textblockdata={skill.Textblockfull.sectionData} />
      )}

      {/* Processess */}
      {skill.processes?.title && skill.processes?.processes && (
        <Processess
          title={skill.processes.title}
          processes={skill.processes.processes}
        />
      )}

      {/* SubheadingText 2 */}
      {skill.Subheadingtext2?.heading && (
        <Subheadingtext
          heading={skill.Subheadingtext2.heading}
          subText={skill.Subheadingtext2.subText}
          list1={skill.Subheadingtext2.list1}
          list2={skill.Subheadingtext2.list2}
        />
      )}

      {/* Logofloat */}
      {(skill.firstrowimages?.imagesdata ||
        skill.secondrowimages?.imagesdata ||
        skill.thirdrowimages?.imagesdata ||
        skill.fourthrowimages?.imagesdata) && (
        <Logofloat
          firstrowimages={skill.firstrowimages?.imagesdata}
          secondrowimages={skill.secondrowimages?.imagesdata}
          thirdrowimages={skill.thirdrowimages?.imagesdata}
          fourthrowimages={skill.fourthrowimages?.imagesdata}
        />
      )}

      {/* CombiningCode */}
      {skill.CombiningCodedatas?.CombiningCodedata && (
        <CombiningCode
          CombiningCodedata={skill.CombiningCodedatas.CombiningCodedata}
        />
      )}

      {/* Industryfaqs */}
      {skill.faqs?.faqs?.length > 0 && (
        <Industryfaqs
          title={skill.faqs.title}
          description={skill.faqs.description}
          faqs={skill.faqs.faqs}
        />
      )}
    </>
  );
}


