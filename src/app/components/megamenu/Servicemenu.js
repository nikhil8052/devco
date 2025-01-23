import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,           // Software/ IT Staffing
  faTools,             // DevOps
  faProjectDiagram,    // Project Management
  faSitemap,           // Technology Architecture
  faLaptopCode,        // Web Development
  faMobileAlt,         // Mobile Development
  faCogs,              // App Development
  faDraftingCompass,   // UI/UX Design
  faRocket,            // MVP Development
  faCloud,             // SaaS Development
  faCodeBranch,        // API Development
  faClipboardCheck     // QA & Testing
} from '@fortawesome/free-solid-svg-icons';

const skillsmenu = [
  { name: 'Software/ IT Staffing', icon: faUserTie, link: '/staffing' },
  { name: 'DevOps', icon: faTools, link: '/devops' },
  { name: 'Project Management', icon: faProjectDiagram, link: '/project-management' },
  { name: 'Technology Architecture', icon: faSitemap, link: '/technology-architecture' },
  { name: 'Web Development', icon: faLaptopCode, link: '/web' },
  { name: 'Mobile Development', icon: faMobileAlt, link: '/mobile' },
  { name: 'App Development', icon: faCogs, link: '/apps' },
  { name: 'UI/UX Design', icon: faDraftingCompass, link: '/ux-ui' },
  { name: 'MVP Development', icon: faRocket, link: '/mvp' },
  { name: 'SaaS Development', icon: faCloud, link: '/saas' },
  { name: 'API Development', icon: faCodeBranch, link: '/api' },
  { name: 'QA & Testing', icon: faClipboardCheck, link: '/testing' },
];

const Servicemenu = () => {
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

export default Servicemenu;
