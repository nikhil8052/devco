'use client';

import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from '@/app/components/homepage/CombiningCode';
import Chooseservice from "@/app/components/Services/Chooseservice";

export default function Service({ data }) {
  const skill = data;

  return (
    <>
      {/* HeroBanner */}
      {skill.subtitle && skill.top_title && skill.top_description && (
        <HeroBanner
          subtitle={skill.subtitle}
          title={skill.top_title}
          description={skill.top_description}
        />
      )}

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
      {skill.benefits?.title && skill.benefits?.description && skill.benefits?.benefits && (
        <Benefits
          title={skill.benefits.title}
          description={skill.benefits.description}
          benefits={skill.benefits.benefits}
        />
      )}

      {/* Chooseservice */}
      {skill.chooseServices?.card_data && (
        <Chooseservice chooseData={skill.chooseServices.card_data} />
      )}

      {/* Processess */}
      {skill.processes?.title && skill.processes?.processes && (
        <Processess
          title={skill.processes.title}
          processes={skill.processes.processes}
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
