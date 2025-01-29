'use client';

import { useEffect , useState} from "react";
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
import BlogPage from "@/app/blog_test/blog_page_test/blog_page";

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

// Union type for all possible data
type Data = IndustryData | SkillData | ServiceData | TechnologyData | LocationData | BlogData;;

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
  const [authorID, setAuthorID] = useState(null);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  let [data, setData] = useState<Data | null>(null);

  // Match the route segment to the data and corresponding component
  useEffect(() => {
    // let data: Data | null = null;
    // Match the route segment to the data and corresponding component
    if ((data = industries.find((item) => item.slug === first_segment))) {
      setComponent(() => Industry);
    } else if ((data = skills.find((item) => item.slug === first_segment))) {
      setComponent(() => Skill);
    } else if ((data = services.find((item) => item.slug === first_segment))) {
      setComponent(() => Service);
    } else if ((data = technologies.find((item) => item.slug === first_segment))) {
      setComponent(() => Technology);
    } else if ((data = locationsdata.find((item) => item.slug === first_segment))) {
      setComponent(() => Locations);
    } else {
      fetchBlogDetails();
    }
    setData(data);
  }, [first_segment]);

  useEffect(() => {
    if(blog){
      setAuthorID(blogData.authorId);
      fetchAuthorData(authorID);
    }
}, [ blogData]);


const fetchBlogDetails = async () => {
  try {
    const url = `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${first_segment}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);

    const response_data = await response.json();
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
      });

      console.log(blogData, " Ths is the data ")
      // blogData.autherID
     
      setComponent(() => BlogPage);
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
};

const fetchAuthorData = async (authorId) => {
  try {
    const authorResponse = await fetch(
      `https://dev.co/wp-json/custom/v1/author-details?id=${authorId}`
    );
    const authorData = await authorResponse.json();
    const recentPostsResponse = await fetch(
      `https://dev.co/wp-json/custom/v1/recent-posts?author_id=${authorId}`
    );
    const recentPostsData = await recentPostsResponse.json();

    setBlogAuthor({
      description: authorData.Description || "No description available",
      recentPosts: recentPostsData.data || [],
    });
  } catch (error) {
    console.error("Error fetching author data:", error);
  }
};


  useEffect(() => {

    
    // if (data ==null && !data ){
      
    //   console.log( " Return Meta BLOG ", blog )
    //   console.log( " Return Meta ")
    //   return;
    // } 

    if(blog ){
   
      document.title = "Default Title";

      // Set meta description
      const existingMetaDescription = document.querySelector('meta[name="description"]');
      if (existingMetaDescription) {
        existingMetaDescription.setAttribute("content", "Default meta description");
      } else {
        const newMetaDescription = document.createElement("meta");
        newMetaDescription.setAttribute("name", "description");
        newMetaDescription.setAttribute("content", "Default meta description");
        document.head.appendChild(newMetaDescription);
      }
  
      // Set Open Graph image (og:image)
      const existingOgImage = document.querySelector('meta[property="og:image"]');
      if (existingOgImage) {
        existingOgImage.setAttribute("content","/images/Custom-Website-Development-Services-Icon.png");
      } else {
        const newOgImage = document.createElement("meta");
        newOgImage.setAttribute("property", "og:image");
        newOgImage.setAttribute("content","/images/Custom-Website-Development-Services-Icon.png");
        document.head.appendChild(newOgImage);
      }
  
      // Set additional Open Graph properties
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content",  "Default Title");
      } else {
        const newOgTitle = document.createElement("meta");
        newOgTitle.setAttribute("property", "og:title");
        newOgTitle.setAttribute("content", "Default Title");
        document.head.appendChild(newOgTitle);
      }
  
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute("content", "Default meta description");
      } else {
        const newOgDescription = document.createElement("meta");
        newOgDescription.setAttribute("property", "og:description");
        newOgDescription.setAttribute("content","Default meta description");
        document.head.appendChild(newOgDescription);
      }

      
    }else if(data){

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

    }
 
    
  
  }, [data, blog]); // Dependency on `data`

  // Fallback if no match is found
  // if (!data || !Component) {
  //   return (
  //     <UserLayout>
  //       <div className="text-center text-white py-20">
  //         <h1>404 - Page Not Found</h1>
  //         <p>The requested page could not be found.</p>
  //       </div>
  //     </UserLayout>
  //   );
  // }

  // Render the matched component with its data
  if(blog){
    return (
      <UserLayout>
        {Component && <Component blog={blogData} author={blogAuthor}/>}
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      {Component && <Component data={data} />}
    </UserLayout>
  );
}
