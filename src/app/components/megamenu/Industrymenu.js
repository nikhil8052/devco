import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,           // Enterprise
  faLandmark,           // Government
  faGraduationCap,      // Education
  faBriefcase,          // Small Business
  faBullhorn,           // Marketing
  faChartLine,          // Finance
  faHeartbeat,          // Healthcare
  faTractor,            // Agriculture
  faShoppingCart        // eCommerce
} from '@fortawesome/free-solid-svg-icons';

const skillsmenu = [
  { name: 'Enterprise', icon: faBuilding, link: '/enterprise' },
  { name: 'Government', icon: faLandmark, link: '/government' },
  { name: 'Education', icon: faGraduationCap, link: '/education' },
  { name: 'Small Business', icon: faBriefcase, link: '/small-business' },
  { name: 'Marketing', icon: faBullhorn, link: '/marketing' },
  { name: 'Finance', icon: faChartLine, link: '/finance' },
  { name: 'Healthcare', icon: faHeartbeat, link: '/healthcare' },
  { name: 'Agriculture', icon: faTractor, link: '/agriculture' },
  { name: 'eCommerce', icon: faShoppingCart, link: '/ecommerce' },
];

const Industrymenu = () => {
  return (
    <div className="submenu_flex w-full flex gap-2">
      <div className="menu_icons_div basis-[100%]">
        <ul className="icon_list w-full flex flex-wrap gap-y-1">
          {skillsmenu.map((skill, index) => (
            <li key={index} className="p-1 basis-[16%]">
              <Link
                href={skill.link}
                aria-label={skill.name}
                className="text-customwhite text-[20px]"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-customwhite text-[16px]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Industrymenu;
