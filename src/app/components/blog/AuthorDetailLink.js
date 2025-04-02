// components/AuthorDetailLink.jsx
'use client';

import { useRouter } from 'next/navigation';

export default function AuthorDetailLink({ authorName, authorImage }) {
  const router = useRouter();
  const authName = authorName.split(" ")[0].toLowerCase().trim();

  return (
    <div 
      className="blog_autordetail cursor-pointer" 
      onClick={() => router.push(`/author/${authName}`)}
    >
      <span className="author_name">{authorName}</span>
      <div className="author_image">
        <img src={authorImage} alt="Author" />
      </div>
    </div>
  );
}