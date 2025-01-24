'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // This is correct for Next.js 13 App Directory
import UserLayout from "../../user_layout/UserLayout"; // Adjust the import path if necessary

export default function BlogDetail() {
  const { id } = useParams(); // Get the dynamic blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://dev.co/wp-json/custom/v1/blog-details/${id}`
        );
        const data = await response.json();

        console.log("API response:", data); // Log the response for debugging

        if (data && data.Title && data.Created_At) {
          setBlog({
            title: data.Title,
            image: data.Image || "/default-image.jpg",
            date: new Date(data.Created_At).toLocaleDateString() || 'Unknown Date',
            content: data.Content || 'No content available',
            authorName: data.Author_ID?.Name || "Unknown Author",
            authorImage: data.Author_ID?.Avatar || "/default-author.jpg",
          });
        } else {
          console.error("Invalid blog data:", data);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return (
      <UserLayout>
        <div className="blog_detail_page py-20 bg-black relative text-customwhite text-center">
          <p className="font-semibold text-[34px] 2xl:text-[42px] xl:text-[40px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">Loading blog details...</p>
        </div>
      </UserLayout>
    );
  }

  if (!blog) {
    return (
      <UserLayout>
        <div className="blog_detail_page py-20 bg-black relative text-customwhite text-center">
          <p className="font-semibold text-[34px] 2xl:text-[42px] xl:text-[40px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">Blog not found.</p>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="blog_detail_page py-20">
        <div className="Blogtopsection">
          <div className="container mx-auto">
            <div className="blogs_content w-full max-w-[890px] mx-auto">
              <div className="blog_cartd_image">
                <img src={blog.image} alt="Blog Thumbnail" />
              </div>
              <div className="blog_meta">
                <span className="blog_date">{blog.date}</span>
              </div>
              <h2 className="post_title">{blog.title}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
              <div className="author_info mt-8">
                <div className="author_image">
                  <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                </div>
                <div className="author_name text-xl font-semibold">{blog.authorName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
