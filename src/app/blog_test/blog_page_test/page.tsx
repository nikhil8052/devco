'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import UserLayout from "../../user_layout/UserLayout";
import { useRouter } from "next/navigation";

/**
 * @typedef {Object} Blog
 * @property {string} title - The title of the blog post
 * @property {string} content - The content of the blog post
 * @property {string} image - URL of the blog post image
 * @property {string} date - The publication date of the blog post
 * @property {string} authorName - The name of the author
 * @property {string} authorImage - URL of the author's image
 * @property {string} authorDescription - Description of the author
 * @property {string} authorDesignation - Designation of the author
 */

/**
 * @typedef {Object} Author
 * @property {string} Name - The author's name
 * @property {string} Author_Image - URL of the author's image
 * @property {string} ID - The author's ID (nullable)
 * @property {Array<Object>} recentPosts - An array of the author's recent blog posts
 * @property {string} recentPosts[].Title - The title of the recent post
 * @property {string} recentPosts[].Slug - The slug of the recent post
 */

/**
 * Blog Detail page component.
 * @param {Object} props
 * @param {Blog} props.blog - The blog data
 * @param {Author} props.author - The author data
 * @returns {JSX.Element}
 */
export default function BlogDetail({ blog, author }) {
  const [activeTab, setActiveTab] = useState("Authorinfo1"); // State to manage active tab
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter(); 

  const sections = blog.content.split('\n');
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    return (
      <div className="blog_detail_page bg-black text-center text-customwhite py-20">
        <p className="font-semibold text-[34px]">Loading Blogs...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <UserLayout>
        <div className="blog_detail_page bg-black text-center text-customwhite">
          <p className="font-semibold text-[34px]">Blog not found.</p>
          <a href="/blog" className="text-customBlue underline mt-4 inline-block">
            Back to Blogs
          </a>
        </div>
      </UserLayout>
    );
  }

  const authName = blog.authorName.split(" ")[0].toLowerCase().trim();

  // Handle tab switching
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="blog_detail_page bg-black relative z-10 text-customwhite">
      <div className="blog_detail_top">
        <div className="container mx-auto">
          <div className="blog_det_top">
            <div className="back_blog">
              <a href="/blog" className="text-customWhite underline mt-4 inline-block">
                <FontAwesomeIcon icon={faChevronLeft} className="text-customWhite text-[12px]" /> Blogs
              </a>
            </div>
            <div className="blog_autordetail" onClick={() => router.push(`/author/${authName}`)}>
              <span className="author_name">{blog.authorName}</span>
              <div className="author_image">
                <img src={blog.authorImage} alt="Author" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="blog_card_image">
          <img src={blog.image} alt="Blog Thumbnail" className="w-full h-auto" />
        </div>
        <div className="blog_meta mt-4">
          <span className="blog_date text-[16px] text-gray-400">{blog.date}</span>
        </div>
        <h1 className="post_title text-[32px] md:text-[40px] font-semibold my-6"
          dangerouslySetInnerHTML={{ __html: blog.title }}></h1>
        {
          sections.map((section, index) => (
            <div key={index}
              className="content text-[14px] md:text-[18px] leading-relaxed text-gray-300"
              dangerouslySetInnerHTML={{ __html: section }}
            ></div>
          ))
        }
        <div className="author_section">
          <div className="author_tab_block">
            <div className="author_tab_nav">
              <div
                className={`author_tab_link ${activeTab === 'Authorinfo1' ? 'active' : ''}`}
                onClick={() => handleTabSwitch('Authorinfo1')}
              >
                Author
              </div>
              <div
                className={`author_tab_link ${activeTab === 'Authorinfo2' ? 'active' : ''}`}
                onClick={() => handleTabSwitch('Authorinfo2')}
              >
                Recent Posts
              </div>
            </div>
            <div className="author_tab_content">
              {/* Author Info */}
              {activeTab === 'Authorinfo1' && author && (
                <div className="author_data AuthorData1">
                  <div className="author_info flex">
                    <div className="author_image" onClick={() => router.push(`/author/${authName}`)}>
                      <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                    </div>
                    <div className="author_info_detsil">
                      <div className="author_name text-xl font-semibold" onClick={() => router.push(`/author/${authName}`)}>{blog.authorName}</div>
                      <div className="author_description" dangerouslySetInnerHTML={{ __html: blog.authorDescription }}></div>
                    </div>
                  </div>
                </div>
              )}
              {/* Recent Posts */}
              {activeTab === 'Authorinfo2' && author && (
                <div className="author_data AuthorData2">
                  <div className="author_info flex">
                    <div className="author_image" onClick={() => router.push(`/author/${authName}`)}>
                      <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                    </div>
                    <div className="author_info_detsil">
                      <div className="author_name text-xl font-semibold">Recent posts by {blog.authorName}</div>
                      <div className="author_designation">{blog.authorDesignation} at <Link href="/">Software Development Company</Link></div>
                      <ul className="recent_posts_list">
                        {Array.isArray(author.recentPosts) && author.recentPosts.length > 0 ? (
                          author.recentPosts.map((post, index) => (
                            <li key={index}>
                              <Link
                                href={`../${post.Slug}`}
                                className="post_title_link"
                                dangerouslySetInnerHTML={{ __html: post.Title }}>
                              </Link>
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
        </div>
      </div>
    </div>
  );
}
