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
                <div className="footer__links_grid  flex">
                  {footerCategories.map((category, index) => (
                    <div key={index} className="basis-[22%] Footer_links_col">
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
