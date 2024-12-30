"use client";

import React from 'react';

export default function BlogGridlist({ blogs }) {
    return (
        <div className="blog_grid_wrap relative md:py-14 lg:py-20 py-10" >
            <img className='bg_bottom ' src="/images/jhjhgh.png" alt=""/>
            <div className="section_head mb-2">
                <div className="container mx-auto">
                    <h2 className="section_head_title font-semibold text-[22px] 2xl:text-[22px] xl:text-[22px] md:text-[22px] sm:text-[22px] mb-5 text-customwhite">More Blogs</h2>
                </div>
            </div>

            <div className="blogs_grid_block">
                <div className="container mx-auto">
                    <div className="blog_grid blog_grid_list flex flex-wrap">
                        {blogs.map((blog) => (
                            <div className="blog_col w-full" key={blog.id}>
                                <a href="{blog.link}" className='blog_grid_list_link'>
                                    <div className="blog_card">
                                        <div className="blog_card_content">
                                            <div className='car_content'>
                                                <h2 className="post_title">
                                                    <a href={blog.link} className="post_title_link">{blog.title}</a>
                                                </h2>
                                                <div className='blog_category'>
                                                    <p>{blog.category}</p>
                                                </div>
                                                <div className="blog_meta">
                                                    <span className="author_name">{blog.authorName}</span> <span className="pos">,</span>
                                                    <span className="blog_date">{blog.date}</span>
                                                </div>
                                            </div>
                                            <div className="author_image">
                                                <img src={blog.authorImage} alt="Author" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
