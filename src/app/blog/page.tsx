"use client";

import React, { useEffect, useState } from "react";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogGridlist from "@/app/components/blog/BlogGridlist";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "https://dev.co/wp-json/wp/v2/posts?per_page=5&orderby=date&_embed=true"
                );
                const data = await response.json();

                // Format the API response to match the structure expected by your components
                const formattedBlogs = data.map((post) => ({
                    id: post.id,
                    slug: `/blog/${post.slug}`,
                    link: `/blog/${post.slug}`, // For BlogGridlist
                    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.jpg",
                    authorImage: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/default-author.jpg",
                    authorName: post._embedded?.author?.[0]?.name || "Unknown Author",
                    date: new Date(post.date).toLocaleDateString(),
                    title: post.title.rendered,
                    category: post.categories?.[0]?.name || "General", // Ensure this exists
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

    if (loading) {
        return (
            <div className="form_page Blogpage bg-black relative text-customwhite py-20">
                <p className="text-center">Loading blogs...</p>
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

    return (
        <div
            className="form_page Blogpage bg-black relative text-customwhite py-20"
            style={{
                backgroundImage: "url('/images/blog_page_bgtop.svg')",
                backgroundRepeat: "no-repeat",
            }}
        >
            <BlogGrid blogs={blogs} />
            <BlogGridlist blogs={blogs} />
        </div>
    );
}
