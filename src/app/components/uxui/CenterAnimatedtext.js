"use client";


const CenterAnimatedtext = () => {
  return (
    <div className="hero_CenterAnimatedtext relative w-full py-[50px]">
      <div className="container mx-auto relative z-10">
        <div className="full_wrap relative">
        <div className="animated_text_wrap text-center w-full max-w-[653px] mx-auto relative z-10">
          <h2 className="text-[34px] 2xl:text-[70px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
           We’ll reply in 24 hrs
          </h2>
          <div className="mt-5 paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
              <p className="relative overflow-hidden text-line mb-5">
                We’ll get back to you within 24 hours. Your time matters, and we’re here to respond quickly.
              </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CenterAnimatedtext;
