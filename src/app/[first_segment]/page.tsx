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


interface IndustryData extends BaseData {
  bannericon?: string;
  sub_title?: string;
  top_title?: string;
  top_description?: string;
  BorderTextbox?: { BorderTextdata: { text: string }[] };
  BorderTextbox2?: { BorderTextdata: { text: string }[] }; 
  faqs?: { question: string; answer: string }[];
}

interface SkillData extends BaseData {
  additionalInfo?: string;
}

interface ServiceData extends BaseData {
  details?: string;
}

interface TechnologyData extends BaseData {
  features?: string[];
}

interface LocationData extends BaseData {
  address?: string;
}

type Data = IndustryData | SkillData | ServiceData | TechnologyData | LocationData | BlogData;

interface PageProps {
  params: {
    first_segment: string;
  };
}

async function fetchBlogDetails(slug: string): Promise<BlogData | null> {
  try {
    const url = `https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${slug}`;
    const response = await fetch(url, { cache: "no-store" }); // Ensure fresh data

    if (!response.ok) return null;
    const responseData = await response.json();
    if (responseData.data.length === 0) return null;

    const blogData = responseData.data[0];

    return {
      title: blogData.Title,
      image: blogData.Image || "/default-image.jpg",
      date: new Date(blogData.Created_At).toLocaleDateString(),
      content: blogData.Description || "No content available",
      authorName: blogData.Author_ID?.Name || "Unknown Author",
      authorImage: blogData.Author_ID?.Author_Image || "/default-author.jpg",
      authorId: blogData.Author_ID?.ID,
      authorDescription: blogData.Author_ID?.Description || "",
      authorDesignation: blogData.Author_ID?.Job_title || "",
      meta_title: blogData.Title,
      meta_description: blogData.Description,
      og_image: blogData.Image,
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
}

export default async function Page({ params }: PageProps) {
  const first_segment = params.first_segment;

  // Check if the slug matches predefined categories
  const matchedData: Data | undefined =
    industries.find((item) => item.slug === first_segment) ||
    skills.find((item) => item.slug === first_segment) ||
    services.find((item) => item.slug === first_segment) ||
    technologies.find((item) => item.slug === first_segment) ||
    locationsdata.find((item) => item.slug === first_segment);

  // Check for corresponding component
  let Component: React.ComponentType<any> | null = null;

  if (matchedData) {
    if (industries.includes(matchedData)) Component = Industry;
    else if (skills.includes(matchedData)) Component = Skill;
    else if (services.includes(matchedData)) Component = Service;
    else if (technologies.includes(matchedData)) Component = Technology;
    else if (locationsdata.includes(matchedData)) Component = Locations;
  } else {
    // If not found in predefined categories, try fetching a blog post
    const blogData = await fetchBlogDetails(first_segment);
    if (blogData) {
      return (
        <UserLayout>
          <BlogPage blog={blogData} author={{ description: blogData.authorDescription }} />
        </UserLayout>
      );
    }
  }

  // If no blog and no predefined content found, return 404 page
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
      <Component data={matchedData} />
    </UserLayout>
  );
}
