"use client";

import React from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation

export default function BlogGridlist({ blogs }) {
    return (
        <div className="blog_grid_wrap relative z-10 md:pt-14 lg:pt-20 pt-10 pb-0">
            <div className="section_head mb-2">
                <div className="container mx-auto">
                    <h2 className="section_head_title font-semibold text-[22px] 2xl:text-[22px] xl:text-[22px] md:text-[22px] sm:text-[22px] mb-5 text-customwhite">
                        More Blogs
                    </h2>
                </div>
            </div>

            <div className="blogs_grid_block">
                <div className="container mx-auto">
                    <div className="blog_grid blog_grid_list flex flex-wrap">
                        {blogs.map((blog) => (
                            <div className="blog_col w-full" key={blog.id}>
                                {/* Use Next.js Link for better navigation */}
                                    <div className="blog_card">
                                        <div className="blog_card_content">
                                            <div className="car_content">
                                                {/* Blog Title */}
                                                <h2 className="post_title">
                                                    <Link href={`./blog/${blog.slug}&post_id=${blog.id}`} className="post_title_link"
                                                    dangerouslySetInnerHTML={{ __html: blog.title }}>
                                                       
                                                    </Link>
                                                </h2>
                                                {/* Blog Category */}
                                                <div className="blog_category">
                                                    <p>{blog.category || "Uncategorized"}</p> {/* Fallback if category is missing */}
                                                </div>
                                                {/* Blog Meta */}
                                                <div className="blog_meta">
                                                    <span className="author_name">{blog.authorName}</span>
                                                    <span className="pos">,</span>
                                                    <span className="blog_date">{blog.date}</span>
                                                </div>
                                            </div>
                                            {/* Author Image */}
                                            <div className="author_image">
                                                <img src={blog.authorImage} alt="Author" />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
