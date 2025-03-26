import React from "react";
import Link from 'next/link';

export default function BlogGrid({ blogs }) {

    return (
        <div className="blog_grid_wrap md:py-14 lg:py-20 py-10">

            <div className="blogs_grid_block">
                <div className="container mx-auto">
                    <div className="blog_grid flex flex-wrap">
                        {blogs.map((blog) => (
                            <div className="blog_col" key={blog.id}>
                                <div className="blog_card">
                                    {/* Updated href to point to /blog/[id] */}
                                    <Link 
                                    className="blog_thumb" href={`/${blog.slug}`} 
                                    >
                                        <img src={blog.image} alt="Blog Thumbnail" />
                                    </Link>
                                    <div className="blog_card_content">
                                        <div className="author_image">
                                            <img src={blog.authorImage} alt="Author" />
                                        </div>
                                        <div className="blog_meta">
                                            <span className="author_name" >{blog.authorName}</span>{" "}
                                            <span className="pos">,</span>
                                            <span className="blog_date">{blog.date}</span>
                                        </div>
                                        <h2 className="post_title">
                                            <Link href={`/${blog.slug}`} className="post_title_link" dangerouslySetInnerHTML={{ __html: blog.title }}>
                                            </Link>
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
