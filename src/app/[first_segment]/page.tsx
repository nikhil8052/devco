'use client';
import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";

import Service from "@/app/services/Service";
import Technology from "@/app/technology/Technology";


export default function Page({ params }) {

  const firstSegment = params.first_segment;

  let foundIn = null;
  let data={};
  let Component=null;
  

  if ((data = industries.find((item) => item.slug === firstSegment || industries[0]))) {
    
    Component= < Industry data= {data} /> 
    foundIn = "industry";
  } else if ((data = skills.find((item) => item.slug === firstSegment || skills[0] ))) {
    Component= < Skill data= {data} /> 
     
    foundIn = "skills";
  } else if ((data = services.find((item) => item.slug === firstSegment || services[0]))) {
    Component= < Service data= {data} /> 
     
    foundIn = "services";
  }else if ((data = technologies.find((item) => item.slug === firstSegment || technologies[0]))) {
    Component= < Technology data= {data} /> 
  
   foundIn = "technology";
 }
 


 return (
  foundIn ? (
    <div>
    <Component/> 
      
    </div>
  ) : (
    <>Not found</>
  )
);
}
