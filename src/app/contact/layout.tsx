import { metadata as importedMetadata } from "@/app/data/contact";

export const metadata = {
  title: importedMetadata.title,
  description: importedMetadata.description,
  openGraph: {
    title: importedMetadata.title,
    description: importedMetadata.description,
    type: "website",
    images: [
      {
        url: importedMetadata.image,
        width: 1200,
        height: 630,
        alt: "Software Development Company",
      },
    ],
  },
};

export default function contactlayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}