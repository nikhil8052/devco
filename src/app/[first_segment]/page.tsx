'use client';
import { useEffect } from "react";
import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import { locationsdata } from "@/app/data/locations";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";
import Service from "@/app/ourservices/Service";
import Technology from "@/app/technology/Technology";
import Locations from "@/app/locations/Locations";
import UserLayout from "../user_layout/UserLayout";

interface PageProps {
  params: {
    first_segment: string;
  };
}

export default function Page({ params }: PageProps) {
  const first_segment = params.first_segment;

  let data: any = null; // Declare `data` as `any` type
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
  }

  useEffect(() => {
    if (!data) return;

    console.log(data, "Formatted data for the component");

    // Set document title
    document.title = data.meta_title || "Default Title";

    // Set meta description
    const existingMetaDescription = document.querySelector('meta[name="description"]');
    if (existingMetaDescription) {
      existingMetaDescription.setAttribute("content", data.meta_description || "Default meta description");
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("name", "description");
      newMetaDescription.setAttribute("content", data.meta_description || "Default meta description");
      document.head.appendChild(newMetaDescription);
    }

    // Set Open Graph image (og:image)
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    if (existingOgImage) {
      existingOgImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
    } else {
      const newOgImage = document.createElement("meta");
      newOgImage.setAttribute("property", "og:image");
      newOgImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
      document.head.appendChild(newOgImage);
    }

    // Set additional Open Graph properties
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", data.meta_title || "Default Title");
    } else {
      const newOgTitle = document.createElement("meta");
      newOgTitle.setAttribute("property", "og:title");
      newOgTitle.setAttribute("content", data.meta_title || "Default Title");
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", data.meta_description || "Default meta description");
    } else {
      const newOgDescription = document.createElement("meta");
      newOgDescription.setAttribute("property", "og:description");
      newOgDescription.setAttribute("content", data.meta_description || "Default meta description");
      document.head.appendChild(newOgDescription);
    }
  }, [data]); // Dependency on `data`

  // Fallback if no match is found
  if (!data || !Component) {
    return (
      <UserLayout>
        <div className="text-center text-white py-20">
          <h1>404 - Page Not Found</h1>
          <p>The requested page could not be found.</p>
        </div>
      </UserLayout>
    );
  }

  // Render the matched component with its data
  return (
    <UserLayout>
      <Component data={data} />
    </UserLayout>
  );
}
