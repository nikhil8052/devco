'use client'
import Image from "next/image";

export default function Home({children}) {



  return (
    <>





    
      <div className="skills_page industrypage overflow-x-hidden bg-black relative text-customwhite items-center">
        {/* Parallax moving dots */}
        <Image
            className="top_left_blue z-1"
            src="/images/inner_page_lefttop.svg"
            alt="Image"
            width={1160}
            height={440}
          />
        <div className="inner_contentpage relative z-10">
        {children}
        </div>
      </div>
    
    </>
  );
}




