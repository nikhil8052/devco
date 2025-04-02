import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import UserLayout from "../user_layout/UserLayout";
import AuthorTabs from "@/app/components/blog/AuthorTabs";
import AuthorDetailLink from "@/app/components/blog/AuthorDetailLink"; // Import the new client component

const BlogPage = ({ blog, author }) => {
  const loading = false;
  const sections = blog.content.split("\n");

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

  return (
    <div className="blog_detail_page bg-black relative z-10 text-customwhite">
      {/* Blog Top Section */}
      <div className="blog_detail_top">
        <div className="container mx-auto">
          <div className="blog_det_top">
            <div className="back_blog">
              <a href="/blog" className="text-customWhite underline mt-4 inline-block">
                <FontAwesomeIcon icon={faChevronLeft} className="text-customWhite text-[12px]" /> Blogs
              </a>
            </div>
            <AuthorDetailLink 
              authorName={blog.authorName} 
              authorImage={blog.authorImage} 
            />
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="container mx-auto">
        <div className="blog_card_image">
          <img src={blog.image} alt="Blog Thumbnail" className="w-full h-auto" />
        </div>
        <div className="blog_meta mt-4">
          <span className="blog_date text-[16px] text-gray-400">{blog.date}</span>
        </div>
        <h1
          className="post_title text-[32px] md:text-[40px] font-semibold my-6"
          dangerouslySetInnerHTML={{ __html: blog.title }}
        ></h1>
        {sections.map((section, index) => (
          <div
            key={index}
            className="content text-[14px] md:text-[18px] leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: section }}
          ></div>
        ))}

        <AuthorTabs blog={blog} author={author} />
      </div>
    </div>
  );
};

export default BlogPage;