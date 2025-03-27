"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { slidesData } from "@/app/data/web";

const ParrlexScrolltemp = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 767) {
    let swipePanels = gsap.utils.toArray(".parelex_slide");
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".parelex_slider_wrapper",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    timeline.to(swipePanels, {
      yPercent: -100,
      ease: "none",
      stagger: {
        each: 1,
      },
    });

    return () => {

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }
  }, []);

  return (
    <div className="parelex_section lg:pt-20 pt-10 pb-0">
      <div className="section_head mb-5">
        <div className="container mx-auto">
          <div className="head_border">
            <h3 className="text-[22px] uppercase">
              Elements of high-performing, custom websites
            </h3>
          </div>
          <div className="w-full max-w-[962px] mt-3 mb-5 header paradiv text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite">
            <p className="mb-3">
              {`High-performing websites consistently generate leads and sales. A high-performing website is one that meets the needs of its users while also providing a positive experience.`}
            </p>
            <p>
              {`We create websites with a combination of front-end development and technical back-end support. In doing so, we focus on the following critical elements:`}
            </p>

          </div>
        </div>
      </div>
      <div className="parelex_slider_wrapper cards">
        <div className="parelex_slide card">
          <div className="container mx-auto">
            <div className="parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
              <div className="parelex_card_header flex wrap">
                <div className="parelec_headig_col w-[50%]">
                  <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                    High search visibility
                  </h2>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    {`High-performing websites and dynamic web pages come up in search results on the major search platforms like Google, Bing, and Yahoo. Nearly 90% of people use a search engine to find what they’re looking for. You’re losing money each day you’re not visible in the major search engines.`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    When creating a website, it is important to make sure the site is highly visible to your target audience.
                  </p>
                </div>
                <div className="parelec_image_col w-[50%] image-full-h ">
                  <img className="w-full" src="/images/investux1.png" alt="" />
                </div>
              </div>
              <div className="parelex_card_content">
                <div className="paralex-list parex_grid_col">
                  <p className="text-customWhite xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10 font-semibold opacity-100 list-head">
                    At DEV.co, we focus on the following from the outset of the web development process:
                  </p>
                  <ul>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                      Build with search engine optimization (SEO) in mind in order to make your site more visible in search engine results pages.
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                      Make sure your site is easy to find and navigate and includes the proper sitemap and is synced with Google Search Consold (GSC)
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                      Use high-quality (preferably custom) images and videos on your site
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                      Create compelling written content that will engage and inform your audience on your products and services
                    </li>
                  </ul>
                  <p className="text-customWhite xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px]"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parelex_slide card">
          <div className="container mx-auto">
            <div className="parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
              <div className="parelex_card_header flex wrap">
                <div className="parelec_headig_col w-[50%]">
                  <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                    Mobile-friendly design
                  </h2>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    {`More than 57% of people search for content using a mobile device and in 2018, 63% of all paid Google search clicks originated from a mobile device. If your website isn’t mobile-friendly and doesn't perform like most mobile apps, you’re losing the majority of your leads that come from smaller screen sizes.`}
                  </p>
                </div>
                <div className="parelec_image_col w-[50%]">
                  <img className="w-full" src="/images/investux2.png" alt="" />
                </div>
              </div>
              <div className="parelex_card_content">
                <div className="paralex-list parex_grid_col full-col w-[100%] ">
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    {`So, how do web development companies like DEV.co make their clients' websites mobile-friendly? One way is by using responsive design. With responsive design, the layout of a website can change depending on the size of the screen it is being viewed on. This means that no matter what device you are using, you will always have a clear and easy-to-use website.`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    {`Another way we create mobile-friendly is by using adaptive web design. With adaptive design, the layout of a website changes depending on the type of device it is being viewed on. For example, if a website is being viewed on a phone, the layout will be different than if it is being viewed on a laptop. This ensures that all users have the best possible experience when visiting your website.`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                    {`So, which approach should you use for your website? It really depends on your needs and budget. However, both responsive design and adaptive design are great ways to make your website mobile-friendly. We're not just a custom software development company, but we are one of the best mobile app development companies on the market as well.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parelex_slide card">
          <div className="container mx-auto">
            <div className="parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
              <div className="parelex_card_header flex wrap">
                <div className="parelec_headig_col w-[50%]">
                  <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                  Secure data transmission
                  </h2>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                  {`Data security is critical, especially for ecommerce websites. High-performing sites use SSL to encrypt data like credit card numbers, email addresses, and personal information to make visitors feel confident and secure. But our cybersecurity in web development is more than just an SSL. We offer government level security encryption, for web apps that require higher security measures.`}
                  </p>
                </div>
                <div className="parelec_image_col w-[50%]">
                  <img className="w-full" src="/images/investux3.png" alt="" />
                </div>
              </div>
              <div className="parelex_card_content">
                <div className="paralex-list parex_grid_col full-col w-[100%] ">
                <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                {`As web developers, we are responsible for ensuring the security of data transmission on our client web projects. We take into account a variety of factors, such as the type of data being transmitted, the level of security required, and the environment in which the data will be used.`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                 {` Data can be classified into two categories: sensitive and nonsensitive. Sensitive data is any information that could potentially cause harm if it were to fall into the wrong hands. Nonsensitive data is less sensitive and doesn't pose as much of a risk if it were to be leaked.`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                  {`When it comes to securing data, we take a layered approach. This means using a variety of security measures to protect data at every stage of its life cycle. Some common security measures include: password protection, encryption, firewalls, antivirus software, and data loss prevention (DLP) software`}
                  </p>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10 list-head">
                  Web developers also need to be aware of the different types of attacks that can be launched against their websites. Some common attacks include:
                  </p>
                  <ul className="block">
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    SQL injection
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Cross-site scripting
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Phishing attacks
                    </li>
                  </ul>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                 {` DEV.co's web development agency can help secure your web project with an experienced web development services team and comprehensive security solutions.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parelex_slide card">
          <div className="container mx-auto">
            <div className="parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
              <div className="parelex_card_header flex wrap">
                <div className="parelec_headig_col w-[50%]">
                  <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                  Fast loading speed
                  </h2>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                  {`One of the most important aspects of any website is its loading time. A slow-loading website can frustrate users and cause them to leave before they even have a chance to see what your website has to offer. When your conversion rate takes a dive, so does your revenue. Some experts estimate that slow-loading websites cause retailers across the country to lose $2.6 billion in sales every year. We focus on Core Web Vitals (CWV) to ensure your web app loads smoothly without interruption.`}
                  </p>
                </div>
                <div className="parelec_image_col w-[50%]">
                  <img className="w-full" src="/images/investux4.png" alt="" />
                </div>
              </div>
              <div className="parelex_card_content">
                <div className="paralex-list parex_grid_col full-col w-[100%] ">
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10 font-semibold list-head">
                  Here are a few ways we can help make your website load faster:
                  </p>
                  <ul>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Use a web hosting service provider that is optimized for site speed
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    {`Use a caching plugin to store a copy of your website’s pages in the visitor’s browser`}
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Minimize the use of images and videos on your website
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Make sure all of your files are properly compressed
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                   {` Use a content delivery network (CDN) to serve your website’s files from multiple servers around the world`}
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    {`Optimize your website’s code for faster loading times`}
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Strip out any unnecessary code or plugins
                    </li>
                  </ul>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                  {`DEV.co's web development agency can help secure your web project with an experienced web development services team and comprehensive security solutions.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parelex_slide card">
          <div className="container mx-auto">
            <div className="parelex_slide_card" style={{ backgroundImage: "url(/images/blue_grad.svg)" }}>
              <div className="parelex_card_header flex wrap">
                <div className="parelec_headig_col w-[50%]">
                  <h2 className="text-[34px] 2xl:text-[60px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800">
                  Clear calls to action (CTAs)
                  </h2>
                </div>
                <div className="parelec_image_col w-[50%]">
                  <img className="w-full" src="/images/investux5.png" alt="" />
                </div>
              </div>
              <div className="parelex_card_content">
                <div className="paralex-list parex_grid_col full-col w-[100%] mt-5 ">
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10 list-head">
                 {` A clear CTA tells visitors exactly what to do. For instance, should they call you, sign up for a free demo, or join your email list? A clear CTA including in your website's layout will leave no room for confusion. There are a few things we work with you to implement to create effective CTAs:`}
                  </p>
                  <ul className="block">
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Use strong, catchy text
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Make your CTA stand out visually
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Place your CTA in a prominent location
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Use color and contrast to draw attention to your CTA
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Keep your CTA simple and easy to understand
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Use clear and concise language
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Use action-oriented verbs
                    </li>
                    <li className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-4">
                    Test different CTA designs to see what works best
                    </li>
                  </ul>
                  <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] mb-10">
                 {` DEV.co's web development agency can help secure your web project with an experienced web development services team and comprehensive security solutions.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParrlexScrolltemp;
