'use client'
import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from '@/app/components/homepage/CombiningCode';
import Chooseservice from "@/app/components/Services/Chooseservice";

export default function Service({data}) {
const skill = data

  return (
    <>
  
      <HeroBanner subtitle={skill.sub_title} title={skill.top_title}  description={skill.top_description}  />
      <StartUps title={skill.startups.title}  description={skill.startups.description}  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <Benefits  title={skill.benefits.title}  description={skill.benefits.description}  benefits={skill.benefits.benefits} />
      <Chooseservice chooseData={skill.chooseServices.card_data  } />
      <Processess  title={skill.processes.title }  processes={skill.processes.processes}  />
      <CombiningCode/>
    </>
  );
}
