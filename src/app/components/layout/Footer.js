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
  { label: 'Application Development', path: '/services/mobile-development' },
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
        { label: 'Java', path: '/skills/javascript' },
        { label: 'JavaScript', path: '/skills/javascript' },
        { label: 'Android', path: '/skills/android' },
        { label: 'Next.js', path: '/skills/nextjs' },
        { label: 'Solidworks', path: '/skills/solidworks' },
        { label: 'Node.js', path: '/skills/nodejs' },
        { label: 'Azure', path: '/skills/Azure' },
        { label: 'React.js', path: '/skills/react' },
        { label: 'Sitefinity', path: '/skills/sitefinity' },
        { label: 'Electron.js', path: '/skills/electron' },
        { label: 'OpenCV', path: '/skills/opencv' },
        { label: 'Laravel', path: '/skills/laravel' },
        { label: 'HTML5', path: '/skills/html5' },
        { label: 'AWS', path: '/skills/aws' },
        { label: 'PHP', path: '/skills/php' },
        { label: 'Wordpress', path: '/skills/wordpress' },
        { label: 'Ios', path: '/skills/react' },
        { label: 'Salesforce', path: '/skills/sitefinity' },
        { label: 'C#/.NET', path: '/skills/electron' },
        { label: 'Oracle', path: '/skills/opencv' },
        { label: 'Labview', path: '/skills/laravel' },
        { label: 'Nextcloud', path: '/skills/html5' },
        { label: 'Unity', path: '/skills/aws' },
        { label: 'Netsuite', path: '/skills/php' },
        { label: 'Webflow', path: '/skills/wordpress' },
        { label: 'SQL', path: '/skills/opencv' },
        { label: 'Shopify', path: '/skills/laravel' },
        { label: 'SQL Server', path: '/skills/html5' },
        { label: 'SAP', path: '/skills/aws' },
        { label: 'Tableau', path: '/skills/php' },
        { label: 'Kubernetes', path: '/skills/wordpress' },
      ],
    },
    {
      label: 'Technology',
      subCategories: [
        { label: 'Artificial Intelligence', path: '/technology/ai' },
        { label: 'Cybersecurity', path: '/technology/cybersecurity' },
        { label: 'Robotic Process Automation', path: '/technology/robotic-process-automation' },
        { label: 'Blockchain (DLT)', path: '/technology/blockchain' },
        { label: 'Extended Reality (AR/VR)', path: '/technology/vr' },
        { label: 'ERP', path: '/technology/erp' },
        { label: 'CRM', path: '/technology/crm' },
        { label: 'Online Storage', path: '/technology/online-storage' },
        { label: 'Big Data', path: '/technology/big-data' },
        { label: 'Business Intelligence', path: '/technology/bi' },
        { label: 'Internet of Things (IOT)', path: '/technology/iot' },

      ],
    },
    {
      label: 'Industries',
      subCategories: [
        { label: 'Enterprise', path: '/industry/enterprise' },
        { label: 'Government', path: '/industry/government' },
        { label: 'Education', path: '/industry/education' },
        { label: 'Small Business', path: '/industry/small-business' },
        { label: 'Marketing', path: '/industry/marketing' },
        { label: 'Finance', path: '/industry/finance' },
        { label: 'Healthcare', path: '/industry/healthcare' },
        { label: 'Agriculture', path: '/industry/agriculture' },
        { label: 'eCommerce', path: '/industry/eCommerce' },
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
              <Link href="#" class="lg:text-[18px]  md:text-[16px] font-normal text-customwhit">Terms of Service</Link>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
