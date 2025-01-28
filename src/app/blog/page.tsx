'use client';

import React, { useEffect, useState } from "react";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogGridlist from "@/app/components/blog/BlogGridlist";
import UserLayout from "../user_layout/UserLayout";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  // Fetch data for author and recent posts
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

      return {
        authorDescription: authorData.Description || "No description available",
        recentPosts: recentPostsData.data || [],
      };
    } catch (error) {
      console.error("Error fetching author data:", error);
      return { authorDescription: "Error fetching author details", recentPosts: [] };
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX"
        );
        const data = await response.json();

        const new_data = data.data;

        const formattedBlogs = await Promise.all(
          new_data.map(async (post) => {
            const { authorDescription, recentPosts } = await fetchAuthorData(post.Author_ID?.ID);

            return {
              id: post.ID,
              slug: post.Slug,
              link: `/blog/${post.Slug}`,
              image: post.Image || "/default-image.jpg",
              authorImage: post.Author_ID?.Author_Image || "/default-author.jpg",
              authorName: post.Author_ID?.Name || "Unknown Author",
              date: new Date(post.Created_At).toLocaleDateString(),
              title: post.Title,
              description: post.Description || "No description available",
              category: post.Category || "Uncategorized",
              authorDescription, // Adding author description
              recentPosts, // Adding recent posts for the author
            };
          })
        );

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const firstFiveBlogs = blogs.slice(0, 5);

  return (
    <UserLayout>
      <div
        className="form_page Blogpage bg-black relative text-customwhite py-20"
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

        {!loading && blogs.length > 0 && (
          <>
            <BlogGrid blogs={firstFiveBlogs} />
            <BlogGridlist blogs={paginatedBlogs} />

            <div className="pagination flex justify-center items-center gap-2 mt-10 relative z-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex justify-center items-center border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
              >
                ←
              </button>

              {currentPage > 2 && (
                <>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="w-10 h-10 rounded-full flex justify-center items-center border hover:bg-gray-700 text-gray-300"
                  >
                    1
                  </button>
                  {currentPage > 3 && <span className="text-gray-300 px-2">...</span>}
                </>
              )}

              {Array.from({ length: 3 }, (_, index) => currentPage - 1 + index)
                .filter((page) => page > 0 && page <= totalPages)
                .map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-full flex justify-center items-center border ${currentPage === pageNumber ? "bg-customBlue text-white" : "hover:bg-gray-700 text-gray-300"}`}
                  >
                    {pageNumber}
                  </button>
                ))}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && <span className="text-gray-300 px-2">...</span>}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="w-10 h-10 rounded-full flex justify-center items-center border hover:bg-gray-700 text-gray-300"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex justify-center items-center border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
              >
                →
              </button>
            </div>
          </>
        )}

        {!loading && blogs.length === 0 && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            No blogs available.
          </p>
        )}
      </div>
    </UserLayout>
  );
}
