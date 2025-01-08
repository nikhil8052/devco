'use client';
import { useEffect } from "react";
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

  let data = null; // Declare `data` variable
  let Component = null;

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

  useEffect(() => {
    console.log(data, "Format the home component");

    // Set document title
    document.title = data.meta_title || "Title Not Defined";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", data.meta_description || "Default meta description");
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("name", "description");
      newMetaDescription.setAttribute("content", data.meta_description || "Default meta description");
      document.head.appendChild(newMetaDescription);
    }

    // Set Open Graph image (og:image)
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      // Dynamically set og:image if the image exists in `data.og_image`
      ogImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
    } else {
      const newOgImage = document.createElement("meta");
      newOgImage.setAttribute("property", "og:image");
      // Dynamically set og:image if the image exists in `data.og_image`
      newOgImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
      document.head.appendChild(newOgImage);
    }
  }, [data]); // Dependency on `data`

  // Fallback if no match found
  if (!data) {
    return <div>Not Found</div>;
  }

  // Render the matched component with its data
  return <Component data={data} />;
}
