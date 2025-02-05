// 'use client';

// import { useEffect, useState } from "react";
// import { industries } from "@/app/data/industries";
// import { skills } from "@/app/data/skills";
// import { services } from "@/app/data/services";
// import { technologies } from "@/app/data/technology";
// import { locationsdata } from "@/app/data/locations";
// import Industry from "@/app/industry/Industry";
// import Skill from "@/app/skills/Skill";
// import Service from "@/app/ourservices/Service";
// import Technology from "@/app/technology/Technology";
// import Locations from "@/app/locations/Locations";
// import UserLayout from "../../user_layout/UserLayout";
// import BlogPage from "@/app/blog_test/blog_page_test/blog_page";

// // Define types for data
// interface BaseData {
//   slug: string;
//   meta_title?: string;
//   meta_description?: string;
//   og_image?: string;
// }

// interface BlogData {
//   title: string;
//   image: string;
//   date: string;
//   content: string;
//   authorName: string;
//   authorImage: string;
//   authorDesignation?: string; // Add this property
//   authorId: string | null;
//   authorDescription: string;
//   meta_title?: string;
//   meta_description?: string;
//   og_image?: string;
// }

// type IndustryData = BaseData & { industrySpecificProp?: string };
// type SkillData = BaseData & { skillSpecificProp?: string };
// type ServiceData = BaseData & { serviceSpecificProp?: string };
// type TechnologyData = BaseData & { technologySpecificProp?: string };
// type LocationData = BaseData & { locationSpecificProp?: string };

// // Union type for all possible data
// type Data = IndustryData | SkillData | ServiceData | TechnologyData | LocationData | BlogData;

// interface PageProps {
//   params: {
//     first_segment: string;
//     second_segment?: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   const { first_segment, second_segment } = params;
//   const [blog, setBlog] = useState(false);
//   const [blogData, setBlogData] = useState<BlogData | null>(null);
//   const [blogAuthor, setBlogAuthor] = useState({});
//   const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
//   const [data, setData] = useState<Data | null>(null);

//   const fullSlug = second_segment ? `${first_segment}/${second_segment}` : first_segment;

//   // Match the route segment to the data and corresponding component
//   useEffect(() => {
//     let matchedData: Data | null = null;

//     if ((matchedData = industries.find((item) => item.slug === fullSlug))) {
//       setComponent(() => Industry);
//     } else if ((matchedData = skills.find((item) => item.slug === fullSlug))) {
//       setComponent(() => Skill);
//     } else if ((matchedData = services.find((item) => item.slug === fullSlug))) {
//       setComponent(() => Service);
//     } else if ((matchedData = technologies.find((item) => item.slug === fullSlug))) {
//       setComponent(() => Technology);
//     } else if ((matchedData = locationsdata.find((item) => item.slug === fullSlug))) {
//       setComponent(() => Locations);
//     } else {
//       fetchBlogDetails(fullSlug);
//     }

//     setData(matchedData);
//   }, [first_segment, second_segment]);

//   const fetchBlogDetails = async (slug: string) => {
//     try {
//       const url = `https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${slug}`;
//       const response = await fetch(url);
//       if (!response.ok) throw new Error(`API request failed with status ${response.status}`);

//       const response_data = await response.json();
//       const blog_data_res = response_data.data[0];

//       if (blog_data_res?.Title && blog_data_res?.Created_At) {
//         setBlog(true);
//         setBlogData({
//           title: blog_data_res.Title,
//           image: blog_data_res.Image || "/default-image.jpg",
//           date: new Date(blog_data_res.Created_At).toLocaleDateString(),
//           content: blog_data_res.Description || "No content available",
//           authorName: blog_data_res.Author_ID?.Name || "Unknown Author",
//           authorImage: blog_data_res.Author_ID?.Author_Image || "/default-author.jpg",
//           authorId: blog_data_res.Author_ID?.ID,
//           authorDescription: blog_data_res.Author_ID?.Description,
//           authorDesignation: blog_data_res.Author_ID?.Job_title,
//         });

//         if (blog_data_res.Author_Recent_Posts && blog_data_res.Author_ID) {
//           setBlogAuthor({
//             description: blog_data_res.Author_ID.Description || "No description available",
//             recentPosts: blog_data_res.Author_Recent_Posts || [],
//           });
//         }

//         setComponent(() => BlogPage);
//       }
//     } catch (error) {
//       console.error("Error fetching blog details:", error);
//     }
//   };

//   useEffect(() => {
//     if (blog) {
//       document.title = blogData?.title || "Default Title";

//       // Set meta description
//       const existingMetaDescription = document.querySelector('meta[name="description"]');
//       if (existingMetaDescription) {
//         existingMetaDescription.setAttribute("content", blogData?.meta_description || "Default meta description");
//       } else {
//         const newMetaDescription = document.createElement("meta");
//         newMetaDescription.setAttribute("name", "description");
//         newMetaDescription.setAttribute("content", blogData?.meta_description || "Default meta description");
//         document.head.appendChild(newMetaDescription);
//       }

//       // Set Open Graph image (og:image)
//       const existingOgImage = document.querySelector('meta[property="og:image"]');
//       if (existingOgImage) {
//         existingOgImage.setAttribute("content", blogData?.og_image || "/images/Custom-Website-Development-Services-Icon.png");
//       } else {
//         const newOgImage = document.createElement("meta");
//         newOgImage.setAttribute("property", "og:image");
//         newOgImage.setAttribute("content", blogData?.og_image || "/images/Custom-Website-Development-Services-Icon.png");
//         document.head.appendChild(newOgImage);
//       }

//       // Set additional Open Graph properties
//       const ogTitle = document.querySelector('meta[property="og:title"]');
//       if (ogTitle) {
//         ogTitle.setAttribute("content", blogData?.meta_title || "Default Title");
//       } else {
//         const newOgTitle = document.createElement("meta");
//         newOgTitle.setAttribute("property", "og:title");
//         newOgTitle.setAttribute("content", blogData?.meta_title || "Default Title");
//         document.head.appendChild(newOgTitle);
//       }

//       const ogDescription = document.querySelector('meta[property="og:description"]');
//       if (ogDescription) {
//         ogDescription.setAttribute("content", blogData?.meta_description || "Default meta description");
//       } else {
//         const newOgDescription = document.createElement("meta");
//         newOgDescription.setAttribute("property", "og:description");
//         newOgDescription.setAttribute("content", blogData?.meta_description || "Default meta description");
//         document.head.appendChild(newOgDescription);
//       }
//     } else if (data) {
//       document.title = data.meta_title || "Default Title";

//       // Set meta description
//       const existingMetaDescription = document.querySelector('meta[name="description"]');
//       if (existingMetaDescription) {
//         existingMetaDescription.setAttribute("content", data.meta_description || "Default meta description");
//       } else {
//         const newMetaDescription = document.createElement("meta");
//         newMetaDescription.setAttribute("name", "description");
//         newMetaDescription.setAttribute("content", data.meta_description || "Default meta description");
//         document.head.appendChild(newMetaDescription);
//       }

//       // Set Open Graph image (og:image)
//       const existingOgImage = document.querySelector('meta[property="og:image"]');
//       if (existingOgImage) {
//         existingOgImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
//       } else {
//         const newOgImage = document.createElement("meta");
//         newOgImage.setAttribute("property", "og:image");
//         newOgImage.setAttribute("content", data.og_image || "/images/Custom-Website-Development-Services-Icon.png");
//         document.head.appendChild(newOgImage);
//       }

//       // Set additional Open Graph properties
//       const ogTitle = document.querySelector('meta[property="og:title"]');
//       if (ogTitle) {
//         ogTitle.setAttribute("content", data.meta_title || "Default Title");
//       } else {
//         const newOgTitle = document.createElement("meta");
//         newOgTitle.setAttribute("property", "og:title");
//         newOgTitle.setAttribute("content", data.meta_title || "Default Title");
//         document.head.appendChild(newOgTitle);
//       }

//       const ogDescription = document.querySelector('meta[property="og:description"]');
//       if (ogDescription) {
//         ogDescription.setAttribute("content", data.meta_description || "Default meta description");
//       } else {
//         const newOgDescription = document.createElement("meta");
//         newOgDescription.setAttribute("property", "og:description");
//         newOgDescription.setAttribute("content", data.meta_description || "Default meta description");
//         document.head.appendChild(newOgDescription);
//       }
//     }
//   }, [data, blog, blogData]);

//   // Render the matched component with its data
//   if (!Component) {
//     return <div>Component not found</div>;
//   }

//   return (
//     <UserLayout>
//       {Component ? <Component data={data} /> : <div>Component not found</div>}
//     </UserLayout>
//   );
// }
