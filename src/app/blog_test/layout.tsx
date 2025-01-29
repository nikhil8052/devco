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
  