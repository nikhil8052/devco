import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Benefits from "@/app/components/Services/Benefits";
import Processess from "@/app/components/Services/Processess";
import { skills } from "@/app/data/skills";





export default function Home() {

  const skill = skills[0];

  return (
    <>
  
      <HeroBanner title={skill.top_title}  description={skill.top_description}  />
      <StartUps title={skill.startups.title}  description={skill.startups.title}  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <Benefits  benefits={skill.benefits.benefits} />
      <Processess  title={skill.processes.title }  processes={skill.processes.processes}  />
    
    </>
  );
}
