import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const slug = params.slug; // Extract the author's slug
  const apiUrl = `https://dev.co/wp-json/custom/v1/blog-details?username=devdotco&password=MnFI%204eZL%20xMDN%20SWF0%20WZa6%20AmiX&author=${slug}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.data.length > 0) {
      const authorName = data.data[0]?.Author_ID?.Name || "Unknown Author";

      return {
        title: `${authorName} - Blog Author | DEV`,
        description: `Read blog posts written by ${authorName}. Join our software development blog covering mobile, website, and software design & development.`,
        openGraph: {
          title: `${authorName} - Blog Author | DEV`,
          description: `Explore insights and blogs from ${authorName}.`,
          type: "website",
          images: [{ url: "/images/footer_logo.svg", width: 1200, height: 630, alt: "Blog OpenGraph Image" }],
        },
        twitter: {
          card: "summary_large_image",
          title: `${authorName} - Blog Author | DEV`,
          description: `Explore insights and blogs from ${authorName}.`,
          images: ["/images/cropped-favicon.png"],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  return {
    title: "Blog Author | DEV",
    description: "Explore blog posts from various authors in our software development blog.",
  };
}

export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
