import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import { locationsdata } from "@/app/data/locations";
import BlogPage from "@/app/posts/Post";
import UserLayout from "../user_layout/UserLayout";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";
import Service from "@/app/ourservices/Service";
import Technology from "@/app/technology/Technology";
import Locations from "@/app/locations/Locations";


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

interface AuthorData {
  description: string;
  recentPosts: any[];
}

interface BlogResponse {
  blog: BlogData;
  author: AuthorData;
}

export async function generateMetadata({ params }) {
  const { first_segment } = params;
  const url_path = `${first_segment}`;

  // Check if the URL matches predefined categories
  let foundData = industries.find((item) => item.slug === url_path) ||
    skills.find((item) => item.slug === url_path) ||
    services.find((item) => item.slug === url_path) ||
    technologies.find((item) => item.slug === url_path) ||
    locationsdata.find((item) => item.slug === url_path);

  if (foundData) {
    return {
      title: foundData.meta_title || foundData.name || "Default Title",
      description: foundData.meta_description || "Default Description",
      openGraph: {
        title: foundData.meta_title || foundData.name,
        description: foundData.meta_description || "Default Description",
        images: [{ url: foundData.og_image || "/default-og.jpg" }],
      },
    };
  }

  // If not found in predefined categories, check blog data
  const blogData = await fetchBlogDetails(url_path);
  if (blogData) {
    return {
      title: blogData.blog.title,
      description: blogData.blog.meta_description || "Default Blog Description",
      openGraph: {
        title: blogData.blog.title,
        description: blogData.blog.meta_description || "Default Blog Description",
        images: blogData.blog.image,
      },
    };
  }

  // Default metadata for 404 pages
  return {
    title: "404 - Page Not Found",
    description: "The requested page could not be found.",
  };
}

async function fetchBlogDetails(url_path: string): Promise<BlogResponse | null> {
  try {
    const url = `https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${url_path}`;
    const response = await fetch(url, { cache: "no-store" }); // No caching to always get fresh data

    if (!response.ok) return null;
    const response_data = await response.json();
    if (!response_data.data.length) return null;
    const blog_data_res = response_data.data[0];

    return {
      "blog": {
        title: blog_data_res.Title,
        image: blog_data_res.Image || "/default-image.jpg",
        date: new Date(blog_data_res.Created_At).toLocaleDateString(),
        content: blog_data_res.Description || "No content available",
        authorName: blog_data_res.Author_ID?.Name || "Unknown Author",
        authorImage: blog_data_res.Author_ID?.Author_Image || "/default-author.jpg",
        authorId: blog_data_res.Author_ID?.ID,
        authorDescription: blog_data_res.Author_ID?.Description,
        authorDesignation: blog_data_res.Author_ID?.Job_title,
        meta_title: blog_data_res.Meta_title,
        meta_description: blog_data_res.Meta_description,
        og_image: blog_data_res.Og_image,
      },
      "author": {
        description: blog_data_res.Author_ID.Description || "No description available",
        recentPosts: blog_data_res.Author_Recent_Posts || [],
      }
    };


  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
}

export default async function Page({ params }) {
  const { first_segment } = params;
  const url_path = `${first_segment}`;
  let matchedComponent = null;
  let foundData = null;
  if ((foundData = industries.find((item) => item.slug === url_path))) {
    matchedComponent = Industry;
  } else if ((foundData = skills.find((item) => item.slug === url_path))) {
    matchedComponent = Skill;
  } else if ((foundData = services.find((item) => item.slug === url_path))) {
    matchedComponent = Service;
  } else if ((foundData = technologies.find((item) => item.slug === url_path))) {
    matchedComponent = Technology;
  } else if ((foundData = locationsdata.find((item) => item.slug === url_path))) {
    matchedComponent = Locations;
  }

  if (foundData) {
    const Component = matchedComponent;

    return (
      <UserLayout>
        <Component data={foundData} />
      </UserLayout>
    );
  }

  // Fetch blog details
  const blogData = await fetchBlogDetails(url_path);

  if (blogData) {
    return (
      <UserLayout>
        <BlogPage blog={blogData.blog} author={blogData.author} />
      </UserLayout>
    );
  }

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
