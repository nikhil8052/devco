'use client';
import dynamic from "next/dynamic";
import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";


export default function Page({ params }) {

  const firstSegment = params.first_segment;

  let foundIn = null;
  let data={};
  let Component=null;
  

  if ((data = industries.find((item) => item.slug === firstSegment || industries[0]))) {
     Component = dynamic(() => import("@/app/industry/page"), {
      ssr: false, 
    });
    foundIn = "industry";
  } else if ((data = skills.find((item) => item.slug === firstSegment || skills[0] ))) {
     Component = dynamic(() => import("@/app/skills/page"), {
      ssr: false, 
    });
    foundIn = "skills";
  } else if ((data = services.find((item) => item.slug === firstSegment || services[0]))) {
     Component = dynamic(() => import("@/app/services/page"), {
      ssr: false, 
    });
    foundIn = "services";
  }else if ((data = technologies.find((item) => item.slug === firstSegment || technologies[0]))) {
    Component = dynamic(() => import("@/app/technology/page"), {
     ssr: false, 
   });
   foundIn = "technology";
 }
 


 return (
  foundIn ? (
    <div>
      { data ? <Component dataProp={data} /> : null  }
      
    </div>
  ) : (
    <>Not found</>
  )
);
}
