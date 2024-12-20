import React from 'react';
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogGridlist from "@/app/components/blog/BlogGridlist"; 
import { blogs } from "@/app/data/blog";

export default function Blog() {
  return (
    <div className='form_page Blogpage bg-black relative text-customwhite py-20' 
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
