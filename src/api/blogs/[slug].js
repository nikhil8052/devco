export default async function handler(req, res) {
    try {
      const { slug } = req.query;
      const blogSlug = Array.isArray(slug) ? slug.join("/") : slug;
  
      // Fetch blog post from WordPress REST API
      const response = await fetch(`https://devco1.wpenginepowered.com/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&post_slug=${first_segment}`);
      const data = await response.json();
  
      if (!data || data.length === 0) {
        return res.status(404).json({ error: "Blog not found" });
      }
  
      // Extract relevant data
      const blog = {
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        date: data[0].date,
        author: data[0].author, // You can fetch author details separately if needed
      };
  
      res.status(200).json(blog);
    } catch (error) {
      console.error("WordPress API Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  