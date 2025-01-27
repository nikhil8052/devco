'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UserLayout from "./../user_layout/UserLayout";


export default function BlogDetail() {
  const { slug } = useParams(); // Get slug from URL
  const [blog, setBlog] = useState(null); // Blog state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const post_id = localStorage.getItem('post_id'); // Get post_id from localStorage
    console.log("Fetching blog details for post_id:", post_id, " and slug:", slug);

    // Check if post_id exists, if not, redirect or handle the error
    if (!post_id) {
      console.error("Post ID is missing.");
      return;
    }

    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_id=${post_id}&slug=${slug}`
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const response_data = await response.json();
        const data = response_data.data[0]; // Get first item in the response
        console.log("API response:", data); // Log full API response for debugging

        // Check if we received valid blog data
        if (data && data.Title && data.Created_At) {
          setBlog({
            title: data.Title || "Untitled",
            image: data.Image || "/default-image.jpg", // Fallback for image
            date: new Date(data.Created_At).toLocaleDateString() || "No date available",
            content: data.Content || "No content available", // Fallback for content
            authorName: data.Author_ID?.Name || "Unknown Author",
            authorImage: data.Author_ID?.Avatar || "/default-author.jpg", // Fallback for author image
          });
        } else {
          console.error("Invalid blog data received:", data);
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlog(null); // If error, reset blog state
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    if (slug && post_id) {
      fetchBlogDetails();
    }
  }, [slug]); // Only re-run if `slug` changes

  // Loading state
  if (loading) {
    return (
      <UserLayout>
        <div className="blog_detail_page py-20 bg-black text-center text-customwhite">
          <p className="font-semibold text-[34px]">Loading blog details...</p>
        </div>
      </UserLayout>
    );
  }

  // Blog not found state
  if (!blog) {
    return (
      <UserLayout>
        <div className="blog_detail_page py-20 bg-black text-center text-customwhite">
          <p className="font-semibold text-[34px]">Blog not found.</p>
          <a href="/blog" className="text-customBlue underline mt-4 inline-block">
            Back to Blogs
          </a>
        </div>
      </UserLayout>
    );
  }

  // Blog details state
  return (
    <UserLayout>
      <div className="blog_detail_page py-20 bg-black text-customwhite">
        <div className="blog_detail_top">
          <div className="container mx-auto">
            <div className="blog_det_top">
              <div className="back_blog">
                <a href="/blog" className="text-customBlue underline mt-4 inline-block">Blogs</a>
              </div>
              <div className="blog_autor">
                <div className="author_image">
                  <span className="author_name">{blog.authorName}</span>
                  <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="blog_cartd_image">
            <img src={blog.image} alt="Blog Thumbnail" className="w-full h-auto" />
          </div>
          <div className="blog_meta mt-4">
            <span className="blog_date text-[16px] text-gray-400">{blog.date}</span>
          </div>
          <h2 className="post_title text-[34px] font-semibold my-6">{blog.title}</h2>
          <div
            className="content text-[18px] leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          <div className="author_info mt-10 flex items-center justify-center gap-4">
            <div className="author_image">
              <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
            </div>
            <div className="author_name text-xl font-semibold">{blog.authorName}</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
