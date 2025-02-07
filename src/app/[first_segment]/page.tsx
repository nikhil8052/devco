'use client';

import { useEffect, useState } from "react";
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
import BlogPage from "@/app/posts/Post";

// Define types for data
interface BaseData {
  slug: string;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

interface BlogData {
  title: string;
  image: string;
  date: string;
  content: string;
  authorName: string;
  authorImage: string;
  authorDesignation?: string;
  authorId: string | null;
  authorDescription: string;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

type IndustryData = BaseData & { industrySpecificProp?: string };
type SkillData = BaseData & { skillSpecificProp?: string };
type ServiceData = BaseData & { serviceSpecificProp?: string };
type TechnologyData = BaseData & { technologySpecificProp?: string };
type LocationData = BaseData & { locationSpecificProp?: string };

type Data = IndustryData | SkillData | ServiceData | TechnologyData | LocationData | BlogData;

interface PageProps {
  params: {
    first_segment: string;
  };
}

export default function Page({ params }: PageProps) {
  const first_segment = params.first_segment;
  const [blog, setBlog] = useState(false);
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [blogAuthor, setBlogAuthor] = useState({});
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    let foundData: Data | null = null;
    let matchedComponent: React.ComponentType<any> | null = null;

    if ((foundData = industries.find((item) => item.slug === first_segment))) {
      matchedComponent = Industry;
    } else if ((foundData = skills.find((item) => item.slug === first_segment))) {
      matchedComponent = Skill;
    } else if ((foundData = services.find((item) => item.slug === first_segment))) {
      matchedComponent = Service;
    } else if ((foundData = technologies.find((item) => item.slug === first_segment))) {
      matchedComponent = Technology;
    } else if ((foundData = locationsdata.find((item) => item.slug === first_segment))) {
      matchedComponent = Locations;
    }

    if (foundData) {
      setData(foundData);
      setComponent(() => matchedComponent);
      setBlog(false);
    } else {
      fetchBlogDetails();
    }
  }, [first_segment]);

  const fetchBlogDetails = async () => {
    try {
      const url = `https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${first_segment}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);

      const response_data = await response.json();
      console.log(response_data, "This is the response data");
      const blog_data_res = response_data.data[0];

      if (blog_data_res?.Title && blog_data_res?.Created_At) {
        setBlog(true);
        setBlogData({
          title: blog_data_res.Title,
          image: blog_data_res.Image || "/default-image.jpg",
          date: new Date(blog_data_res.Created_At).toLocaleDateString(),
          content: blog_data_res.Description || "No content available",
          authorName: blog_data_res.Author_ID?.Name || "Unknown Author",
          authorImage: blog_data_res.Author_ID?.Author_Image || "/default-author.jpg",
          authorId: blog_data_res.Author_ID?.ID,
          authorDescription: blog_data_res.Author_ID?.Description,
          authorDesignation: blog_data_res.Author_ID?.Job_title,
        });

        if (blog_data_res.Author_Recent_Posts && blog_data_res.Author_ID) {
          setBlogAuthor({
            description: blog_data_res.Author_ID.Description || "No description available",
            recentPosts: blog_data_res.Author_Recent_Posts || [],
          });
        }
        setComponent(() => BlogPage);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    if (blog && blogData) {
      document.title = blogData.title;
      updateMetaTags(blogData.meta_title, blogData.meta_description, blogData.og_image);
    } else if (data) {
      document.title = data.meta_title || "Default Title";
      updateMetaTags(data.meta_title, data.meta_description, data.og_image);
    }
  }, [data, blogData, blog]);

  const updateMetaTags = (title?: string, description?: string, image?: string) => {
    const setMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) || document.createElement("meta");
      tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };

    setMetaTag("description", description || "Default meta description");
    setMetaTag("og:title", title || "Default Title");
    setMetaTag("og:description", description || "Default meta description");
    setMetaTag("og:image", image || "/images/Custom-Website-Development-Services-Icon.png");
  };

  if (blog) {
    return (
      <UserLayout>
        {Component && <Component blog={blogData} author={blogAuthor} />}
      </UserLayout>
    );
  }

  if (!Component) {
    return (
      <UserLayout>
        <div className="text-center text-white py-20">
          <div className="container">
            <div className="fourzero_div flex items-center content-center direction-column py-10">
              <div className="404wrap">
                <h1>404 - Page Not Found</h1>
                <p>The requested page could not be found.</p>
                <a href="/" className="mt-5 text-center bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition inline-block hover:bg-[#ffffff] hover:text-black">
                  Go Back to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      {Component && <Component data={data} />}
    </UserLayout>
  );
}
