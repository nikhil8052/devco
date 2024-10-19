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
        { label: 'Web development', path: '/technology/python' },
        { label: 'Mobile Development', path: '/technology/css' },
        { label: 'UX/UI Design', path: '/technology/javascript' },
        { label: 'Technology Architecture', path: '/development/frontend' },
        { label: 'Software/IT Staffing', path: '/development/backend' },
        { label: 'DevOps Services', path: '/design/uiux' },
        { label: 'Quality Assurance Testing', path: '/design/graphic' },
        { label: 'MVP Development', path: '/design/graphic' },
        { label: 'SaaS Development', path: '/design/graphic' },
        { label: 'API Development', path: '/design/graphic' },
        { label: 'Project Management', path: '/design/graphic' },
      ],
    },
    {
      label: 'Skills',
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
        { label: 'UI/UX', path: '/design/uiux' },
        { label: 'Graphic Design', path: '/design/graphic' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-20">
      
      <div className='footer_wrapper'>
        <div className='container mx-auto'>
          <div className='footer_links_wrapper'>
            <div className='footer_grid flex w-full'>
              <div className='footer_col basis-1/5 pr-10'>
              <Image
                    className='footer_logo'
                    src="/images/footer_logo.svg"
                    alt="Banner Image"
                    width={115}
                    height={75}
                  />
                <Link href="#" className='tel_link inline-block mt-10 mb-16 text-[18px] font-normal text-customwhite'>+1 (206) 438-9789</Link>
                <p className='text-[18px] font-normal text-customwhite'>© 2024 Nead, LLC. All Rights Reserved</p>
              </div>
              <div className='footer_col basis-4/5'>
                <div className="footer__links_grid grid grid-cols-4 gap-4">
                  {footerCategories.map((category, index) => (
                    <div key={index} className="Footer_links_col">
                      <h3 className="font-semibold text-[24px] mb-2 font-normal text-customwhite">{category.label}</h3>
                      <div className="flex flex-col">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <Link key={subIndex} href={subCategory.path} className="hover:text-blue-400 text-[18px] mb-2 font-normal text-customwhite">
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
          <div className='footer_copy_right text-center py-10 mt-20 border-t border-lightBlue' >
            <ul class="flex justify-center w-full space-x-10">
              <Link href="#" class="text-[18px] font-normal text-customwhit">About Us</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Our Work</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Locations</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Web Design</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Dev Blog</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Careers</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Contact Us</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Privacy Policy</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Privacy Policy</Link>
              <Link href="#" class="text-[18px] font-normal text-customwhit">Terms of Service</Link>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
