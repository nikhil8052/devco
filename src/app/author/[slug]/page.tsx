"use client";

import React, { useEffect, useState } from "react";
import AuthorGrid from "@/app/components/blog/AuthorGrid"; // Assuming AuthorGrid is similar to BlogGrid
import UserLayout from "../../user_layout/UserLayout";
import { useSearchParams } from "next/navigation"; // For handling query params

export default function Blog({ params }) {
  const slug = params.slug;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8; // Adjust based on your requirement
  const searchParams = useSearchParams();
  const author = searchParams.get("author");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        let apiUrl = `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&author=${slug}`;

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

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Paginated blogs for AuthorGrid
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          className="bg_bottom absolute b-0 w-full l-0 z-0"
          src="/images/jhjhgh.png"
          alt=""
        />

{!loading && blogs.length > 0 && (
  <div className="author_description_block relative z-10 pt-20">
    <div className="container mx-auto">
      <div className="author_data Authodata1">
        <div className="author_info flex">
          <div className="author_image">
            <img src={blogs[0]?.authorImage || "/default-author.jpg"} alt="Author" className="rounded-full w-16 h-16" />
          </div>
          <div className="author_info_detsil">
            <div className="author_name text-xl font-semibold">{blogs[0]?.authorName || "Unknown Author"}</div>
            <div className="authr_description">{blogs[0]?.authorDescription || "No description available"}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


        {loading && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            Loading author...
          </p>
        )}

        {!loading && blogs.length > 0 && <AuthorGrid blogs={paginatedBlogs} />}

        {!loading && blogs.length === 0 && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            No author found.
          </p>
        )}

        {!loading && blogs.length > 0 && (
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
        )}
      </div>
    </UserLayout>
  );
}
