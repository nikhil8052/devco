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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const cachedBlogs = localStorage.getItem('blogs');
    if (cachedBlogs) {
      setBlogs(JSON.parse(cachedBlogs));
      setFilteredBlogs(JSON.parse(cachedBlogs));
      setLoading(false);
    } else {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI 4eZL xMDN SWF0 WZa6 AmiX");
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
            authorDesignation: post.Author_ID?.Job_title,
          }));
          setBlogs(formattedBlogs);
          setFilteredBlogs(formattedBlogs);
          localStorage.setItem('blogs', JSON.stringify(formattedBlogs));
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlogs();
    }
  }, []);
  

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const firstFiveBlogs = isSearching ? filteredBlogs : blogs.slice(0, 5);
  const paginatedBlogs = blogs.slice(
    5 + (currentPage - 1) * blogsPerPage,
    5 + currentPage * blogsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      resetSearch();
    } else {
      setIsSearching(true);
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };
  
  // Reset search when clearing the input
  const resetSearch = () => {
    setIsSearching(false);
    setSearchQuery("");
    setFilteredBlogs(blogs);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full flex justify-center items-center border ${
            currentPage === i ? "bg-customBlue text-white" : "hover:bg-gray-700 text-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination flex justify-center items-center gap-2 mt-10 relative z-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flex justify-center items-center border ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          ←
        </button>
        {pageNumbers}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex justify-center items-center border ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          →
        </button>
      </div>
    );
  };

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

          <div className="blogs_wrap_div relative z-10">
          {loading && (
          <p className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
            Loading blogs...
          </p>
        )}

        {!loading && blogs.length > 0 && (
          <>

            <div className="serch_block md:pt-20 pt-10 relative z-10">
              <div className="container mx-auto">
               <div className="blogs_head_wrap">
                <div className="blogs_head_row flex">
                <div className="blogs_headingmain">
                  <h1 className="section_head_title font-semibold text-[34px] 2xl:text-[55px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
                      Web Development Blog
                  </h1>
                </div>
               <div className="search_filter_col">
               <div className="search_filter">
                  <form onSubmit={handleSearch}>
                  <input type="text"
                      className="p-2 border rounded color-[black]"
                      placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (e.target.value.trim() === "") {
                          resetSearch();
                        }
                      }}
                    />

                    <button
                      type="submit"
                      className="ml-2 p-2 bg-blue-500 text-white rounded"
                    >
                      Search
                    </button>
                  </form>
                </div>
               </div>
                </div>
               </div>
              </div>
            </div>

            <BlogGrid blogs={firstFiveBlogs} />
            {!isSearching && <BlogGridlist blogs={paginatedBlogs} />}

            {!isSearching && renderPagination()}
          </>
        )}
          </div>
      </div>
    </UserLayout>
  );
}
