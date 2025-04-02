"use client"; // Enables interactivity

import { useState } from "react";
import Link from "next/link";

const AuthorTabs = ({ blog, author }) => {
  const [activeTab, setActiveTab] = useState("Authorinfo1");

  return (
    <div className="author_tab_block">
      {/* Tabs Navigation */}
      <div className="author_tab_nav">
        <button
          className={`author_tab_link ${activeTab === "Authorinfo1" ? "active" : ""}`}
          onClick={() => setActiveTab("Authorinfo1")}
        >
          Author
        </button>
        <button
          className={`author_tab_link ${activeTab === "Authorinfo2" ? "active" : ""}`}
          onClick={() => setActiveTab("Authorinfo2")}
        >
          Recent Posts
        </button>
      </div>

      {/* Tabs Content */}
      <div className="author_tab_content">
        {activeTab === "Authorinfo1" && author && (
          <div className="author_data AuthorData1">
            <div className="author_info flex">
              <div className="author_image">
                <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
              </div>
              <div className="author_info_detail">
                <div className="author_name text-xl font-semibold">{blog.authorName}</div>
                <div
                  className="author_description"
                  dangerouslySetInnerHTML={{ __html: blog.authorDescription }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Authorinfo2" && author && (
          <div className="author_data AuthorData2">
            <div className="author_info flex">
              <div className="author_image">
                <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
              </div>
              <div className="author_info_detail">
                <div className="author_name text-xl font-semibold">
                  Recent posts by {blog.authorName}
                </div>
                <div className="author_designation">
                  {blog.authorDesignation} at <Link href="/">Software Development Company</Link>
                </div>
                <ul className="recent_posts_list">
                  {Array.isArray(author.recentPosts) && author.recentPosts.length > 0 ? (
                    author.recentPosts.map((post, index) => (
                      <li key={index}>
                        <Link
                          href={`../${post.Slug}`}
                          className="post_title_link"
                          dangerouslySetInnerHTML={{ __html: post.Title }}
                        ></Link>
                      </li>
                    ))
                  ) : (
                    <li>No recent posts available.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorTabs;
