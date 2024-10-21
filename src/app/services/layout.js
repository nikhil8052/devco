


export default function Home({children}) {


  return (
    <>
      <div
        className="home_page overflow-x-hidden bg-black relative text-customwhite items-center pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        {children}

    </div>
    
    </>
  );
}
