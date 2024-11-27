'use client'
import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import { industries } from "@/app/data/industries";
import CombiningCode from '../../components/homepage/CombiningCode';
import Benefitslider from "@/app/components/skills/Benfitslider";




export default function Home(content) {

const slug = content.params.industries_name;
const selectedindustries = industries.find((item) => item.slug === slug) || industries[0];




  return (
    <>
  
      <HeroBanner subtitle={selectedindustries.sub_title} title={selectedindustries.top_title}  description={selectedindustries.top_description}  />
      <StartUps title={selectedindustries.startups.title}  description={selectedindustries.startups.description}  images={selectedindustries.startups.images} imageHeight={selectedindustries.startups.imageHeight}   imageWidth={selectedindustries.startups.imageWidth}   />
      <Bordertextsection/>
      <Benefitslider title={selectedindustries.Benefitslider.title} description={selectedindustries.Benefitslider.description} chooseData={selectedindustries.Benefitslider.card_datas  }/>
      <Processess  title={selectedindustries.processes.title }  processes={selectedindustries.processes.processes}  />
      <CombiningCode/>
    </>
  );
}
