// import metadata from "@/app/data/sitemap";

// export const metadata = {
//   title: importedMetadata.title,
//   description: importedMetadata.description,
//   openGraph: {
//     title: importedMetadata.title,
//     description: importedMetadata.description,
//     type: "website",
//     images: [
//       {
//         url: importedMetadata.image,
//         width: 1200,
//         height: 630,
//         alt: "Software Development Company",
//       },
//     ],
//   },
// };

// export default function sitemap({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }


import metadata from "@/app/data/sitemap";

// export const metadata1 = {
//   title: metadata.title,
//   description: metadata.description,
//   openGraph: {
//     title: metadata.title,
//     description: metadata.description,
//     type: "website",
//     images: [
//       {
//         url: metadata.image,
//         width: 1200,
//         height: 630,
//         alt: "Software Development Company",
//       },
//     ],
//   },
// };

export default function Layout({ children }) {
  return <>{children}</>;
}


