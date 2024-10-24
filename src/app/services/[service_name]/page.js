import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import { skills } from "@/app/data/skills";





export default function Home(content) {

const slug = content.params.service_name;

// Find the skill based on the slug or return the first skill if not found
const skill = skills.find((item) => item.slug === slug) || skills[0];

// Now 'skill' will either be the matching skill or the first item in the array



  return (
    <>
  
      <HeroBanner title={skill.top_title}  description={skill.top_description}  />
      <StartUps title={skill.startups.title}  description={skill.startups.title}  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <Benefits  benefits={skill.benefits.benefits} />
      <Processess  title={skill.processes.title }  processes={skill.processes.processes}  />
    
    </>
  );
}
