'use client'
import Image from "next/image";

export default function Home({children}) {



  return (
    <>
      <div className="skills_page industrypage overflow-x-hidden bg-black relative text-customwhite items-center pt-20">
        {/* Parallax moving dots */}
        <Image
            className="top_left_blue"
            src="/images/inner_page_lefttop.svg"
            alt="Image"
            width={1160}
            height={440}
          />
        {children}
      </div>
    
    </>
  );
}




