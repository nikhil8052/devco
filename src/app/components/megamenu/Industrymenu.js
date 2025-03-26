import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const skillsmenu = [
  { name: 'Enterprise',image: '/images/menu_enterprise.svg', link: '/enterprise' },
  { name: 'Government', image: '/images/menu_gov.svg', link: '/government' },
  { name: 'Education', image: '/images/menu_educatrion.svg', link: '/education' },
  { name: 'Small Business', image: '/images/menu_small_bus.svg', link: '/small-business' },
  { name: 'Marketing',image: '/images/menu_marketing.svg', link: '/marketing' },
  { name: 'Finance', image: '/images/menu_finance.svg', link: '/finance' },
  { name: 'Healthcare',image: '/images/menu_healthcare.svg', link: '/healthcare' },
  { name: 'Agriculture', image: '/images/menu_agriculture.svg', link: '/agriculture' },
  { name: 'eCommerce', image: '/images/menu_ecommerce.svg', link: '/ecommerce' },
];

const Industrymenu = () => {
  return (
    <div className="submenu_flex w-full flex gap-2">
      <div className="menu_icons_div basis-[100%]">
        <ul className="icon_list w-full flex flex-wrap gap-y-1">
          {skillsmenu.map((skill, index) => (
            <li key={index} className="p-2 basis-[20%] flex flex-col items-center">
              <Link
                href={skill.link}
                aria-label={skill.name}
                className="flex flex-col items-center"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={50}  // Adjust size as needed
                  height={50} // Adjust size as needed
                  className="mb-2"
                />
                <span className="text-customwhite text-center">{skill.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Industrymenu;
