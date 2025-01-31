export const metadata = {
    title: "Custom Software & Web Development Blog | DEV",
    description:
      "Join our software development blog as we discuss mobile, website and software design & development across the capital stack.",
    openGraph: {
      title: "Custom Software & Web Development Blog | DEV",
      description:
        "Join our software development blog as we discuss mobile, website and software design & development across the capital stack.",
      type: "website",
      images: [
        {
          url: "/images/footer_logo.svg", // Update this to the correct image path
          width: 1200,
          height: 630,
          alt: "Blog OpenGraph Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Software & Web Development Blog | DEV",
      description:
        "Join our software development blog as we discuss mobile, website and software design & development across the capital stack.",
      images: ["/images/cropped-favicon.png"], // Update this to the correct image path
    },
  };
  
  export default function BlogPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }


//   <div className="author_section">
//   <div className="author_tab_block">
//     <div className="author_tab_nav">
//       <div
//         className={`author_tab_link ${activeTab === 'Authorinfo1' ? 'active' : ''}`}
//         onClick={() => handleTabSwitch('Authorinfo1')}
//       >
//         Author
//       </div>
//       <div
//         className={`author_tab_link ${activeTab === 'Authorinfo2' ? 'active' : ''}`}
//         onClick={() => handleTabSwitch('Authorinfo2')}
//       >
//         Recent Posts
//       </div>
//     </div>
//     <div className="author_tab_content">
//       {/* Author Info */}
//       {activeTab === 'Authorinfo1' && author && (
//         <div className="author_data Authodata1">
//           <div className="author_info flex">
//             <div className="author_image">
//               <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
//             </div>
//             <div className="author_info_detsil">
//               <div className="author_name text-xl font-semibold">{blog.authorName}</div>
//               <div className="authr_description">{blog.authorDescription}</div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Recent Posts */}
//       {activeTab === 'Authorinfo2' && author && (
//         <div className="author_data Authodata2">
//           <div className="author_info flex">
//             <div className="author_image">
//               <img src={blog.authorImage} alt="Author" className="rounded-full w-16 h-16" />
//             </div>
//             <div className="author_info_detsil">
//               <div className="author_name text-xl font-semibold">Recent posts by {blog.authorName}</div>
//               <ul className="recent_posts_list">
//                 {Array.isArray(author.recentPosts) && author.recentPosts.length > 0 ? (
//                   author.recentPosts.map((post, index) => (
//                     <li key={index}>
//                       <Link
//                         href={`/blog/${post.Slug}?post_id=${post.ID}`}
//                         onClick={() => localStorage.setItem('post_id', post.ID)}
//                         className="post_title_link"
//                       >
//                         {post.Title}
//                       </Link>
//                     </li>
//                   ))
//                 ) : (
//                   <li>No recent posts available.</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   </div>
// </div>
  