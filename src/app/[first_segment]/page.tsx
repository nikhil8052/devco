'use client';

import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import { locationsdata } from "@/app/data/locations";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";
import Service from "@/app/services/Service";
import Technology from "@/app/technology/Technology";
import locations from "@/app/locations/Locations";
import { blogs } from "@/app/data/blog";
import BlogPage from "@/app/blog_page/BlogPage";


interface PageProps {
  params: {
    first_segment: string; // Adjust this to match your actual dynamic route structure
  };
}

export default function Page({params}: PageProps) {
 const first_segment = params.first_segment 

  let foundIn = null;
  let data = {};
  let Component = null;

  console.log( services, " All the services ")
  // Find the matching data and set the corresponding component
  if ((data = industries.find((item) => item.slug === first_segment))) {
    Component = Industry;
    foundIn = "industry";
  } else if ((data = skills.find((item) => item.slug === first_segment))) {
    Component = Skill;
    foundIn = "skills";
  } else if ((data = services.find((item) => item.slug === first_segment))) {
    Component = Service;
    foundIn = "services";
  } else if ((data = technologies.find((item) => item.slug === first_segment))) {
    Component = Technology;
    foundIn = "technology";
  }else if ((data = locationsdata.find((item) => item.slug === first_segment))) {
    Component = locations;
    foundIn = "locations";
  }
  else if ((data = blogs.find((item) => item.slug === first_segment))) {
    Component = BlogPage;
    foundIn = "Blog";
    
  }

  // Fallback case for no match
  if (!foundIn) {
    return <div>Not Found</div>;
  }



  console.log( data ,foundIn,  " his is he dta we need to take cate ")
  // Render the selected component with the data
  return (
    <div>
      <Component data={data} />
    </div>
  );
}
