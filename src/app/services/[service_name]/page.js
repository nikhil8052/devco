import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import { skills } from "@/app/data/services";
import CombiningCode from '../../components/homepage/CombiningCode';
import Chooseservice from "@/app/components/Services/Chooseservice";




export default function Home(content) {

const slug = content.params.service_name;

// Find the skill based on the slug or return the first skill if not found
const skill = skills.find((item) => item.slug === slug) || skills[0];

// Now 'skill' will either be the matching skill or the first item in the array



  return (
    <>
  
      <HeroBanner subtitle={skill.sub_title} title={skill.top_title}  description={skill.top_description}  />
      <StartUps title={skill.startups.title}  description={skill.startups.description}  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <Benefits  title={skill.benefits.title}  description={skill.benefits.description}  benefits={skill.benefits.benefits} />
      <Chooseservice/>
      <Processess  title={skill.processes.title }  processes={skill.processes.processes}  />
      <CombiningCode/>
    </>
  );
}
