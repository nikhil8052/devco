"use client";

import React, { useEffect, useState } from "react";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogGridlist from "@/app/components/blog/BlogGridlist";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const blogsPerPage = 10; // Number of blogs per page for BlogGridlist

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "https://dev.co/wp-json/wp/v2/posts?per_page=50&orderby=date&_embed=true"
                );
                const data = await response.json();

                // Format the API response
                const formattedBlogs = data.map((post) => ({
                    id: post.id,
                    slug: `/blog/${post.slug}`,
                    link: `/blog/${post.slug}`,
                    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.jpg",
                    authorImage: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/default-author.jpg",
                    authorName: post._embedded?.author?.[0]?.name || "Unknown Author",
                    date: new Date(post.date).toLocaleDateString(),
                    title: post.title.rendered,
                    category: post.categories?.[0]?.name || "General",
                }));

                setBlogs(formattedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Pagination logic
    const totalPages = Math.ceil((blogs.length - 5) / blogsPerPage);
    const paginatedBlogs = blogs.slice(
        5 + (currentPage - 1) * blogsPerPage,
        5 + currentPage * blogsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return (
            <div className="form_page Blogpage bg-black relative text-customwhite py-20">
                <p  className="text-center py-20 section_head_title font-semibold text-[20px] 2xl:text-[50] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">Loading blogs...</p>
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="form_page Blogpage bg-black relative text-customwhite py-20">
                <p className="text-center">No blogs available.</p>
            </div>
        );
    }

    // Slice blogs into the first 5 for BlogGrid
    const firstFiveBlogs = blogs.slice(0, 5);

    // Logic to determine which pagination numbers to show (only 3 counters)
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    return (
        <div
            className="form_page Blogpage bg-black relative text-customwhite py-20"
            style={{
                backgroundImage: "url('/images/blog_page_bgtop.svg')",
                backgroundRepeat: "no-repeat",
            }}
        >
            <img
                className="bg_bottom absolut b-0 w-full l-0"
                src="/images/jhjhgh.png"
                alt=""
            />
            {/* Render the first 5 blogs in BlogGrid */}
            <BlogGrid blogs={firstFiveBlogs} />

            {/* Render paginated blogs in BlogGridlist */}
            <BlogGridlist blogs={paginatedBlogs} />

            {/* Pagination */}
            <div className="pagination flex justify-center items-center gap-2 mt-10 relative z-10">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                        currentPage === 1
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-700"
                    }`}
                >
                    ←
                </button>

                {/* Page Numbers */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                                currentPage === pageNumber
                                    ? "bg-customBlue text-white"
                                    : "hover:bg-gray-700 text-gray-300"
                            }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                        currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-700"
                    }`}
                >
                    →
                </button>
            </div>
        </div>
    );
}
