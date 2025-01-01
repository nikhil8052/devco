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
import Locations from "@/app/locations/Locations"; // Corrected name
import { blogs } from "@/app/data/blog";
import BlogPage from "@/app/blog_page/BlogPage";

interface PageProps {
  params: {
    first_segment: string; // The dynamic route segment to match
  };
}

export default function Page({ params }: PageProps) {
  const first_segment = params.first_segment;

  let foundIn = null;
  let data: any = {}; // Use `any` if data shape varies; otherwise, define a proper type
  let Component: React.ElementType | null = null;

  console.log(services, "All the services");

  // Match the route segment to the data and corresponding component
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
  } else if ((data = locationsdata.find((item) => item.slug === first_segment))) {
    Component = Locations; // Corrected the component name
    foundIn = "locations";
  } else if ((data = blogs.find((item) => item.slug === first_segment))) {
    Component = BlogPage;
    foundIn = "blog";
  }

  // Fallback if no match found
  if (!foundIn) {
    return <div>Not Found</div>;
  }

  // Set the page title and meta description
  // useEffect(() => {
  //   document.title = data.meta_title || "Page Title Not Defined";    
  // }); // Dependency array ensures this runs only when `data` changes

  // Render the matched component with its data
  return <Component data={data} />;
}
