'use client';

import { useEffect } from "react"; // Ensure useEffect is imported
import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import { locationsdata } from "@/app/data/locations";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";
import Service from "@/app/services/Service";
import Technology from "@/app/technology/Technology";
import Locations from "@/app/locations/Locations";
import { blogs } from "@/app/data/blog";
import BlogPage from "@/app/blog_page/BlogPage";

interface PageProps {
  params: {
    first_segment: string;
  };
}

export default function Page({ params }: PageProps) {
  const first_segment = params.first_segment;

  let data: any = null; // Declare `data` variable
  let Component: React.ElementType | null = null;

  // Match the route segment to the data and corresponding component
  if ((data = industries.find((item) => item.slug === first_segment))) {
    Component = Industry;
  } else if ((data = skills.find((item) => item.slug === first_segment))) {
    Component = Skill;
  } else if ((data = services.find((item) => item.slug === first_segment))) {
    Component = Service;
  } else if ((data = technologies.find((item) => item.slug === first_segment))) {
    Component = Technology;
  } else if ((data = locationsdata.find((item) => item.slug === first_segment))) {
    Component = Locations;
  } else if ((data = blogs.find((item) => item.slug === first_segment))) {
    Component = BlogPage;
  }

  // Fallback if no match found
  if (!data) {
    return <div>Not Found</div>;
  }

  // Set the page title and meta description dynamically
  useEffect(() => {
    document.title = data.meta_title || "Default Page Title";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        data.meta_description || "Default Page Description"
      );
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = data.meta_description || "Default Page Description";
      document.head.appendChild(metaTag);
    }
  }, [data]); // Dependency array ensures this runs when `data` changes

  // Render the matched component with its data
  return <Component data={data} />;
}
