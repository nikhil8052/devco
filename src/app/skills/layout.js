
import Image from 'next/image';

export default function Home({children}) {


  return (
    <>
      <div
        className="skills_page overflow-x-hidden bg-black relative text-customwhite items-center pt-20"
        style={{
          backgroundImage: "url('/images/servides_banner.svg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_bg_bubble absolute top-0 left-0 right-0 mx-auto z-1">
        <Image
        className='w-[90%] mx-auto'
          src="/images/services_inner_bubbles.svg"
          alt=" Image"
          width={1920}
          height={300}
        /> 
        </div>
        
        {children}

    </div>
    
    </>
  );
}
