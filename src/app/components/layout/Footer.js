// components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Define your footer categories with subcategories
  //
  const footerCategories = [
    {
      label: 'Services',
      subCategories: [
        { label: 'Web development', path: '/services/python' },
        { label: 'Mobile Development', path: '/services/css' },
        { label: 'UX/UI Design', path: '/services/javascript' },
        { label: 'Technology Architecture', path: '/services/frontend' },
        { label: 'Software/IT Staffing', path: '/services/backend' },
        { label: 'DevOps Services', path: '/services/uiux' },
        { label: 'Quality Assurance Testing', path: '/services/graphic' },
        { label: 'MVP Development', path: '/services/graphic' },
        { label: 'SaaS Development', path: '/services/graphic' },
        { label: 'API Development', path: '/services/graphic' },
        { label: 'Project Management', path: '/services/graphic' },
      ],
    },
    {
      label: 'Skills',
      subCategories: [
        { label: 'Python', path: '/skills/python' },
        { label: 'CSS', path: '/skills/css' },
        { label: 'JavaScript', path: '/skills/javascript' },
        { label: 'Android', path: '/skills/javascript' },
        { label: 'Next.js', path: '/skills/javascript' },
        { label: 'Solidworks', path: '/skills/javascript' },
        { label: 'Node.js', path: '/skills/javascript' },
        { label: 'Azure', path: '/skills/javascript' },
        { label: 'React.js', path: '/skills/javascript' },
        { label: 'Sitefinity', path: '/skills/javascript' },
        { label: 'Electron.js', path: '/skills/javascript' },
        { label: 'OpenCV', path: '/skills/javascript' },
        { label: 'Laravel', path: '/skills/javascript' },
        { label: 'HTML5', path: '/skills/javascript' },
        { label: 'AWS', path: '/skills/javascript' },
        { label: 'PHP', path: '/skills/javascript' },
        { label: 'Wordpress', path: '/skills/javascript' },
      ],
    },
    {
      label: 'Technology',
      subCategories: [
        { label: 'Python', path: '/technology/python' },
        { label: 'CSS', path: '/technology/css' },
        { label: 'JavaScript', path: '/technology/javascript' },
        { label: 'Android', path: '/technology/javascript' },
        { label: 'Next.js', path: '/technology/javascript' },
        { label: 'Solidworks', path: '/technology/javascript' },
        { label: 'Node.js', path: '/technology/javascript' },
        { label: 'Azure', path: '/technology/javascript' },
        { label: 'React.js', path: '/technology/javascript' },
        { label: 'Sitefinity', path: '/technology/javascript' },
        { label: 'Electron.js', path: '/technology/javascript' },
        { label: 'OpenCV', path: '/technology/javascript' },
        { label: 'Laravel', path: '/technology/javascript' },
        { label: 'HTML5', path: '/technology/javascript' },
        { label: 'AWS', path: '/technology/javascript' },
        { label: 'PHP', path: '/technology/javascript' },
        { label: 'Wordpress', path: '/technology/javascript' },

      ],
    },
    {
      label: 'Industries',
      subCategories: [
        { label: 'UI/UX', path: '/industry/uiux' },
        { label: 'Graphic Design', path: '/industry/graphic' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-5 lg:pt-20 md:pt-10">
      
      <div className='footer_wrapper'>
        <div className='container mx-auto'>
          <div className='footer_links_wrapper'>
            <div className='footer_grid flex flex-wrap w-full'>
              <div className='footer_col 2xl:basis-1/5 basis-full xl:pr-10 lg:pr-0 md:pr-0 pr-0 '>
                <div className='footer_logo_col mb-8 2xl:mb-0 flex 2xl:flex-col 2xl: justify-between justify-between flex-row gap-5 2xl:gap-20'>
                  <Image
                          className='footer_logo'
                          src="/images/footer_logo.svg"
                          alt="Banner Image"
                          width={115}
                          height={75}
                        />
                   <div className='footer_logo_text'>
                    <Link href="#" className='tel_link inline-block text-[14px] md:text-[18px] font-normal text-customwhite'>+1 (206) 438-9789</Link>
                    <p className='text-[14px] md:text-[18px] font-normal text-customwhite mt-2 2xl:mt-10 lg:mt-2 '>© 2024 Nead, LLC. All Rights Reserved</p>
                   </div>
                </div>
              </div>
              <div className='footer_col 2xl:basis-4/5 lg:basis-full'>
                <div className="footer__links_grid  flex flex-wrap gap-y-5 2xl:gap-0">
                  {footerCategories.map((category, index) => (
                    <div key={index} className="basis-[22%] Footer_links_col">
                      <h3 className="font-semibold text-[24px] mb-2 font-normal text-customwhite">{category.label}</h3>
                      <div className="flex flex-col pr-2">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <Link key={subIndex} href={subCategory.path} className="hover:text-customBlue xl:text-[18px] lg:text-[15px] mb-2 font-normal text-customwhite">
                            {subCategory.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='bottom_footer'>
        <div className='container mx-auto'>
          <div className='footer_copy_right text-center py-10 mt-5 2xl:mt-10 lg:mt-7 border-t border-lightBlue' >
            <ul className="flex flex-wrap justify-center w-full xl:gap-6 gap-4">
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">About Us</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Our Work</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Locations</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px]  font-normal text-customwhit">Web Design</Link>
              <Link href="#" class="lg:text-[18px]md:text-[16px]  font-normal text-customwhit">Dev Blog</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Careers</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Contact Us</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px]  font-normal text-customwhit">Privacy Policy</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Privacy Policy</Link>
              <Link href="#" class="lg:text-[18px]  md:text-[16px] font-normal text-customwhit">Terms of Service</Link>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
