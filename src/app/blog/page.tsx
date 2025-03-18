import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogGridlist from "@/app/components/blog/BlogGridlist";
import UserLayout from "../user_layout/UserLayout";
// Service side fetch the blogs 
async function fetchBlogs(searchQuery = "") {
  try {
    const response = await fetch("https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI4eZLxMDNSWF0WZa6AmiX", {
      cache: "no-store",
    });

    const data = await response.json();
    const new_data = data.data;

    let blogs = new_data.map((post) => ({
      id: post.ID,
      slug: post.Slug,
      link: `${post.Slug}`,
      image: post.Image || "/default-image.jpg",
      authorImage: post.Author_ID?.Author_Image || "/default-author.jpg",
      authorName: post.Author_ID?.Name || "Unknown Author",
      date: new Date(post.Created_At).toLocaleDateString(),
      title: post.Title,
      description: post.Description || "No description available",
      category: post.Category || "Uncategorized",
      authorDescription: post.Author_ID?.Description,
      authorDesignation: post.Author_ID?.Job_title,
    }));

    if (searchQuery) {
      searchQuery = searchQuery.trim();
      blogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return blogs;

  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function Blog( { searchParams } ) {
  const searchQuery = searchParams?.search || ""; // Get query from URL
  const blogs = await fetchBlogs(searchQuery);
  let firstFiveBlogs=[];
  let gridListBlog=[];
  if(searchQuery==""){
    firstFiveBlogs = blogs.slice(0, 5);
    gridListBlog = blogs.slice(5);
  }else{
    firstFiveBlogs = blogs;
  }

  return (
    <UserLayout>
      <div
        className="form_page Blogpage bg-black relative text-customwhite py-20"
        style={{
          backgroundImage: "url('/images/blog_page_bgtop.svg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="bg_bottom absolute b-0 w-full l-0"
          src="/images/jhjhgh.png"
          alt=""
        />

        <div className="blogs_wrap_div relative z-10">
            <>
              <div className="serch_block md:pt-20 pt-10 relative z-10">
                <div className="container mx-auto">
                  <div className="blogs_head_wrap">
                    <div className="blogs_head_row flex">
                      <div className="blogs_headingmain">
                        <h1 className="section_head_title font-semibold text-[34px] 2xl:text-[55px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite">
                          Web Development Blog
                        </h1>
                      </div>
                      <div className="search_filter_col">
                        <div className="search_filter">
                          <form  action="/blog" method="GET" >
                            <input type="text"
                              name="search"
                              className="p-2 border rounded color-[black]"
                              placeholder="Search blogs..."
                              defaultValue={searchQuery.trim()}
                            />
                            <button
                              type="submit"
                              className="ml-2 p-2 bg-blue-500 text-white rounded"
                            >
                              Search
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <BlogGrid blogs={firstFiveBlogs} />
              {
                searchQuery=="" && (
                  <BlogGridlist blogs={gridListBlog} />
                )
              }
            </>
         
        </div>
      </div>
    </UserLayout>
  );
}
