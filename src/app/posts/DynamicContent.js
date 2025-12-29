'use client';

import { useEffect, useState } from "react";

const DynamicContent = ({ content }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="content text-[14px] md:text-[18px] leading-relaxed text-gray-300 min-h-[100px] animate-pulse bg-gray-800 rounded">
        {/* Loading skeleton */}
      </div>
    );
  }

  // Clean the content - remove empty divs that might cause hydration issues
  const cleanContent = content
    ?.replace(/<div class="content[^>]*>\s*<\/div>/g, '')
    ?.replace(/\r\n/g, ' ')
    ?.replace(/\s\s+/g, ' ')
    ?.trim();

  return (
    <div
      className="content text-[14px] md:text-[18px] leading-relaxed text-gray-300"
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
};

export default DynamicContent;