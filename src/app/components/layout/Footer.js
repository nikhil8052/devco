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
  { label: 'Web Development', path: '/services/web-development' },
  { label: 'Mobile Development', path: '/services/mobile-development' },
  { label: 'UX/UI Design', path: '/services/ux-ui-design' },
  { label: 'Technology Architecture', path: '/services/technology-architecture' },
  { label: 'Software/IT Staffing', path: '/services/software-it-staffing' },
  { label: 'DevOps Services', path: '/services/devops' },
  { label: 'Quality Assurance Testing', path: '/services/quality-assurance' },
  { label: 'MVP Development', path: '/services/mvp-development' },
  { label: 'SaaS Development', path: '/services/saas-development' },
  { label: 'API Development', path: '/services/api-development' },
  { label: 'Project Management', path: '/services/project-management' },
]
,
    },
    {
      label: 'Skills',
      subCategories: [
        { label: 'Python', path: '/skills/python' },
        { label: 'CSS', path: '/skills/css' },
        { label: 'JavaScript', path: '/skills/javascript' },
        { label: 'Android', path: '/skills/android' },
        { label: 'Next.js', path: '/skills/nextjs' },
        { label: 'Solidworks', path: '/skills/solidworks' },
        { label: 'Node.js', path: '/skills/nodejs' },
        { label: 'Azure', path: '/skills/Azure' },
        { label: 'React.js', path: '/skills/react' },
        { label: 'Sitefinity', path: '/skills/sitefinity' },
        { label: 'Electron.js', path: '/skills/electron' },
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
        { label: 'Artificial Intelligence', path: '/technology/python' },
        { label: 'Cybersecurity', path: '/technology/css' },
        { label: 'Robotic Process Automation', path: '/technology/javascript' },
        { label: 'Blockchain (DLT)', path: '/technology/javascript' },
        { label: 'Extended Reality (AR/VR)', path: '/technology/javascript' },
        { label: 'ERP', path: '/technology/javascript' },
        { label: 'CRM', path: '/technology/javascript' },
        { label: 'Online Storage', path: '/technology/javascript' },
        { label: 'Big Data', path: '/technology/javascript' },
        { label: 'Business Intelligence', path: '/technology/javascript' },
        { label: 'Internet of Things (IOT)', path: '/technology/javascript' },

      ],
    },
    {
      label: 'Industries',
      subCategories: [
        { label: 'Enterprise', path: '/industry/uiux' },
        { label: 'Government', path: '/industry/graphic' },
        { label: 'Education', path: '/industry/graphic' },
        { label: 'Small Business', path: '/industry/graphic' },
        { label: 'Marketing', path: '/industry/graphic' },
        { label: 'Finance', path: '/industry/graphic' },
        { label: 'Healthcare', path: '/industry/graphic' },
        { label: 'Agriculture', path: '/industry/graphic' },
        { label: 'eCommerce', path: '/industry/graphic' },
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
                          <Link key={subIndex} lable={subCategory.label} href={subCategory.path} className="hover:text-customBlue xl:text-[18px] lg:text-[15px] mb-2 font-normal text-customwhite">
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
