'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import UserLayout from "../../user_layout/UserLayout";

export default function BlogDetail() {
  const { slug } = useParams(); // Get slug from URL
  const [blog, setBlog] = useState(null); // Blog state
  const [author, setAuthor] = useState(null); // Author state
  const [loading, setLoading] = useState(true); // Loading state
  const [activeTab, setActiveTab] = useState("Authorinfo1"); // State to manage active tab

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(currentUrl);
    const post_id = urlParams.get('post_id');

    // Function to fetch blog details
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_id=${post_id}`
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const response_data = await response.json();
        const data = response_data.data[0];
        if (data && data.Title && data.Created_At) {
          setBlog({
            title: data.Title,
            image: data.Image || "/default-image.jpg",
            date: new Date(data.Created_At).toLocaleDateString(),
            content: data.Description || "No content available",
            authorName: data.Author_ID?.Name || "Unknown Author",
            authorImage: data.Author_ID?.Author_Image || "/default-author.jpg",
            authorId: data.Author_ID?.ID,
            authorDescription: data.Author_ID?.Description, // Adding author description
          });

          // Fetch author data once the blog data is available
          if (data.Author_ID?.ID) {
            fetchAuthorData(data.Author_ID?.ID);
          }
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    // Function to fetch author details and recent posts
    const fetchAuthorData = async (authorId) => {
      try {
        const authorResponse = await fetch(
          `https://dev.co/wp-json/custom/v1/author-details?id=${authorId}`
        );
        const authorData = await authorResponse.json();
        const recentPostsResponse = await fetch(
          `https://dev.co/wp-json/custom/v1/recent-posts?author_id=${authorId}`
        );
        const recentPostsData = await recentPostsResponse.json();

        setAuthor({
          description: authorData.Description || "No description available",
          recentPosts: recentPostsData.data || [],
        });
      } catch (error) {
        console.error("Error fetching author data:", error);
        setAuthor({ description: "Error fetching author details", recentPosts: [] });
      }
    };

    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <UserLayout>
        <div className="blog_detail_page bg-black text-center text-customwhite">
          <p className="font-semibold text-[34px]">Loading blog details...</p>
        </div>
      </UserLayout>
    );
  }

  // Blog not found state
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

  // Handle tab switching
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <UserLayout>
      <div className="blog_detail_page bg-black text-customwhite">
        <div className="blog_detail_top">
          <div className="container mmx-auto">
            <div className="blog_det_top">
              <div className="back_blog">
                <FontAwesomeIcon icon={faChevronLeft} className="text-customWhite text-[12px]" />
                <a href="/blog" className="text-customWhite underline mt-4 inline-block">Blogs</a>
              </div>
              <div className="blog_autordetail">
                <span className="author_name">{blog.authorName}</span>
                <div className="author_image">
                  <img src={blog.authorImage} alt="Author" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="blog_cartd_image">
            <img src={blog.image} alt="Blog Thumbnail" className="w-full h-auto" />
          </div>
          <div className="blog_meta mt-4">
            <span className="blog_date text-[16px] text-gray-400">{blog.date}</span>
          </div>
          <h1 className="post_title text-[32px] md:text-[40px] font-semibold my-6"
            dangerouslySetInnerHTML={{ __html: blog.title }}></h1>
          <div
            className="content text-[18px] leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          
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
                  <div className="author_data Authodata1">
                    <div className="author_info flex">
                      <div className="author_image">
                        <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                      </div>
                      <div className="author_info_detsil">
                        <div className="author_name text-xl font-semibold">{blog.authorName}</div>
                        <div className="authr_description">{blog.authorDescription}</div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Recent Posts */}
                {activeTab === 'Authorinfo2' && author && (
                  <div className="author_data Authodata2">
                    <div className="author_info flex">
                      <div className="author_image">
                        <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
                      </div>
                      <div className="author_info_detsil">
                        <div className="author_name text-xl font-semibold">Recent posts by {blog.authorName}</div>
                        <ul className="recent_posts_list">
                          {Array.isArray(author.recentPosts) && author.recentPosts.length > 0 ? (
                            author.recentPosts.map((post, index) => (
                              <li key={index}>
                                <Link
                                  href={`/blog/${post.Slug}?post_id=${post.ID}`}
                                  onClick={() => localStorage.setItem('post_id', post.ID)}
                                  className="post_title_link"
                                >
                                  {post.Title}
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
    </UserLayout>
  );
}
