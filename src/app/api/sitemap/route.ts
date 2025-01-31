import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://devco-sepia.vercel.app";

  const staticPages = [
    "",
    "portfolio",
    "about",
    "contact",
    "services",
    "web",
    "mobile",
    "apps",
    "ux-ui",
    "technology-architecture",
    "staffing",
    "devops",
    "testing",
    "mvp",
    "saas",
    "api",
    "project-management",
    "java",
    "ios",
    "javascript",
    "android",
    "next-js",
    "solidworks",
    "nodejs",
    "azure",
    "react",
    "sitefinity",
    "electron",
    "python",
    "opencv",
    "laravel",
    "html5",
    "aws",
    "php",
    "wordpress",
    "salesforce",
    "c-sharp-dot-net",
    "oracle",
    "labview",
    "nextcloud",
    "unity",
    "netsuite",
    "webflow",
    "sql",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page === "" ? "1.00" : "0.80"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
