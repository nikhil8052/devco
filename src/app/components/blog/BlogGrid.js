"use client";

import React from "react";
import Link from 'next/link';

export default function BlogGrid({ blogs }) {
    return (
        <div className="blog_grid_wrap md:py-14 lg:py-20 py-10">
            <div className="section_head mb-2">
                <div className="container mx-auto">
                    <h2 className="section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
                        Blog
                    </h2>
                </div>
            </div>

            <div className="blogs_grid_block">
                <div className="container mx-auto">
                    <div className="blog_grid flex flex-wrap">
                        {blogs.map((blog) => (
                            <div className="blog_col" key={blog.id}>
                                <div className="blog_card">
                                    <Link className="blog_thumb" href={`../${blog.slug}`}>
                                            <img src={blog.image} alt="Blog Thumbnail" />
                                    </Link>
                                    <div className="blog_card_content">
                                        <div className="author_image">
                                            <img src={blog.authorImage} alt="Author" />
                                        </div>
                                        <div className="blog_meta">
                                            <span className="author_name">{blog.authorName}</span>{" "}
                                            <span className="pos">,</span>
                                            <span className="blog_date">{blog.date}</span>
                                        </div>
                                        <h2 className="post_title">
                                            <a href={blog.slug} className="post_title_link">
                                                {blog.title}
                                            </a>
                                        </h2>
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
