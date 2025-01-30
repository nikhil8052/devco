"use client";

import React, { useEffect, useState } from "react";
import BlogGrid from "@/app/components/blog/BlogGrid";
import UserLayout from "../user_layout/UserLayout";
import { useSearchParams, useRouter } from "next/navigation"; // For handling query params

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const author = searchParams.get("author"); // Get author from URL

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        let apiUrl = `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&author=Ryan`;

        if (author) {
          apiUrl += `&author=${encodeURIComponent(author)}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        const new_data = data.data;

        const formattedBlogs = new_data.map((post) => ({
          id: post.ID,
          slug: post.Slug,
          link: `${post.Slug}`,
          image: post.Image || "/default-image.jpg",
          authorImage: post.Author_ID?.Author_Image || "/default-author.jpg",
          authorName: post.Author_ID?.Name || "Unknown Author",
          date: new Date(post.Created_At).toLocaleDateString(),
          title: post.Title,
          description: post.Description || "No description available",
          category: post.Category || "Uncategorized",
          authorDescription: post.Author_ID?.Description,
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [author]);

  return (
    <UserLayout>
      <div
        className="form_page Blogpage authorpage bg-black relative text-customwhite py-20"
        style={{
          backgroundImage: "url('/images/blog_page_bgtop.svg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="bg_bottom absolute b-0 w-full l-0"
          src="/images/jhjhgh.png"
          alt=""
        />

        {loading && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            Loading blogs...
          </p>
        )}

        {!loading && blogs.length > 0 && <BlogGrid blogs={blogs} />}

        {!loading && blogs.length === 0 && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            No blogs available.
          </p>
        )}
      </div>
    </UserLayout>
  );
}
