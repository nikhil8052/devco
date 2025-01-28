import React from "react";

export default function AuthorInfo({ blog }) {
    // Check if blog is defined
    if (!blog) {
        return null; // or you can return a fallback UI
    }

    return (
        <div className="author_info mt-10 flex items-center justify-center gap-4">
            <div className="author_image">
                <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
            </div>
            <div className="author_name text-xl font-semibold">{blog.authorName}</div>
        </div>
    );
}