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
  { label: 'Web Development', path: '/web' },
  { label: 'Mobile Development', path: '/mobile' },
  { label: 'Application Development', path: '/apps' },
  { label: 'UX/UI Design', path: '/ux-ui' },
  { label: 'Technology Architecture', path: '/technology-architecture' },
  { label: 'Software/IT Staffing', path: '/staffing' },
  { label: 'DevOps Services', path: '/devops' },
  { label: 'Quality Assurance Testing', path: '/testing' },
  { label: 'MVP Development', path: '/mvp' },
  { label: 'SaaS Development', path: '/saas' },
  { label: 'API Development', path: '/api' },
  { label: 'Project Management', path: '/project-management' }, 
]
,
    },
    {
      label: 'Skills',
      subCategories: [
        { label: 'Java', path: '/java' },
        { label: 'IOS', path: '/ios' },
        { label: 'JavaScript', path: '/javascript' },
        { label: 'Android', path: '/android' },
        { label: 'Next.js', path: '/next-js' },
        { label: 'Solidworks', path: '/solidworks' },
        { label: 'Node.js', path: '/nodejs' },
        { label: 'Azure', path: '/azure' },
        { label: 'React.js', path: '/react' },
        { label: 'Sitefinity', path: '/sitefinity' },
        { label: 'Electron.js', path: '/electron' },
        { label: 'Python', path: '/python' },
        { label: 'OpenCV', path: '/opencv' },
        { label: 'Laravel', path: '/laravel' },
        { label: 'HTML5', path: '/html5' },
        { label: 'AWS', path: '/aws' },
        { label: 'PHP', path: '/php' },
        { label: 'Wordpress', path: '/wordpress' },
        { label: 'Python', path: '/python' },
        { label: 'Salesforce', path: '/salesforce' },
        { label: 'C#/.NET', path: '/c-sharp-dot-net' },
        { label: 'Oracle', path: '/oracle' },
        { label: 'Labview', path: '/labview' },
        { label: 'Nextcloud', path: '/nextcloud' },
        { label: 'Unity', path: '/unity' },
        { label: 'Netsuite', path: '/netsuite' },
        { label: 'Webflow', path: '/webflow' },
        { label: 'SQL', path: '/sql' },
        { label: 'Shopify', path: '/shopify' },
        { label: 'SQL Server', path: '/sql-server' },
        { label: 'SAP', path: '/sap' },
        { label: 'Tableau', path: '/php' },
        { label: 'Kubernetes', path: '/wordpress' },
      ],
    },
    {
      label: 'Technology',
      subCategories: [
        { label: 'Artificial Intelligence', path: '/ai' },
        { label: 'Cybersecurity', path: '/cybersecurity' },
        { label: 'Robotic Process Automation', path: '/robotic-process-automation' },
        { label: 'Blockchain (DLT)', path: '/blockchain' },
        { label: 'Extended Reality (AR/VR)', path: '/vr' },
        { label: 'ERP', path: '/erp' },
        { label: 'CRM', path: '/crm' },
        { label: 'Online Storage', path: '/online-storage' },
        { label: 'Big Data', path: '/big-data' },
        { label: 'Business Intelligence', path: '/bi' },
        { label: 'Internet of Things (IOT)', path: '/iot' },

      ],
    },
    {
      label: 'Industries',
      subCategories: [
        { label: 'Enterprise', path: '/enterprise' },
        { label: 'Government', path: '/government' },
        { label: 'Education', path: '/education' },
        { label: 'Small Business', path: '/small-business' },
        { label: 'Marketing', path: '/marketing' },
        { label: 'Finance', path: '/finance' },
        { label: 'Healthcare', path: '/healthcare' },
        { label: 'Agriculture', path: '/agriculture' },
        { label: 'eCommerce', path: '/ecommerce' },
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
              <Link href="/portfolio" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Our Work</Link>
              <Link href="/locations" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Locations</Link>
              <Link href="#" class="lg:text-[18px] md:text-[16px]  font-normal text-customwhit">Web Design</Link>
              <Link href="/blog" class="lg:text-[18px]md:text-[16px]  font-normal text-customwhit">Dev Blog</Link>
              <Link href="/careers" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Careers</Link>
              <Link href="/contact" class="lg:text-[18px] md:text-[16px] font-normal text-customwhit">Contact Us</Link>
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
