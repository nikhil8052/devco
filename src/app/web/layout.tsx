// src/app/web/layout.tsx
import { metadata as importedMetadata } from "@/app/data/web";

export const metadata = {
  title: importedMetadata.title,
  description: importedMetadata.description,
  openGraph: {
    ...importedMetadata.openGraph, // Spread the existing openGraph data
    title: importedMetadata.title,
    description: importedMetadata.description,
    type: "website",
  },
};

export default function Uxuilayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}