"use client";



const Standout = () => {
    const descriptions = [
        "A custom website from the best web development company will make your company stand out in a sea of template-based designs. There’s virtually no limit to what we can accomplish for you with a custom design.",
        "Whether you prefer the familiarity of WordPress, the versatility of Drupal, or want a completely custom content management system (CMS), we can bring your vision to life.",
        "When you work with DEV.co, your custom website will be attractive, well-organized, and will draw visitors back like a magnet.",
      ];
  return (
    <div className="standout-wrapper pb-10">
      <div className="container">
        <div className="standout-content parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
          <div className="parelex_card_header flex wrap justify-between">
            <div className="parelec_headig_col w-[50%] stand-left">
              <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-bold text-white-800">
                Stand out with a DEV.co custom website
              </h2>
              {descriptions.map((text, index) => (
                <p
                  key={index}
                  className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="parelec_image_col w-[50%] stand-img">
              <img
                className="w-full"
                src="/images/Standout.png"
                alt="Invest in UX/UI Design"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standout;
