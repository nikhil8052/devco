import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faJs,
  faNodeJs,
  faReact,
  faLaravel,
  faHtml5,
  faPhp,
  faPython,
  faUnity,
  faAndroid,
  faApple,
  faShopify,
  faWordpress,
  faAws,
  faSalesforce,
  faRobot,
} from '@fortawesome/free-brands-svg-icons';

import {
  faFlask,
  faGlobe,
  faCogs,
  faCloud,
  faDatabase,
  faMoneyCheckAlt,
  faServer,
  faChartBar,
  faIndustry,
  faCubes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const skillsmenu = [
  { name: 'Java', icon: faJava, link: '/java' },
  { name: 'JavaScript', icon: faJs, link: '/javascript' },
  { name: 'Node.js', icon: faNodeJs, link: '/nodejs' },
  { name: 'React', icon: faReact, link: '/react' },
  { name: 'Laravel', icon: faLaravel, link: '/' },
  { name: 'HTML5', icon: faHtml5, link: '/' },
  { name: 'PHP', icon: faPhp, link: '/' },
  { name: 'Python', icon: faPython, link: '/' },
  { name: 'Flask', icon: faFlask, link: '/' },
  { name: 'Unity', icon: faUnity, link: '/' },
  { name: 'Webflow', icon: faGlobe, link: '/' },
  { name: 'Shopify', icon: faShopify, link: '/' },
  { name: 'Android', icon: faAndroid, link: '/' },
  { name: 'iOS', icon: faApple, link: '/' },
  { name: 'SolidWorks', icon: faCogs, link: '/' },
  { name: 'Azure', icon: faCloud, link: '/' },
  { name: 'AWS', icon: faAws, link: '/' },
  { name: 'Sitefinity', icon: faGlobe, link: '/' },
  { name: 'WordPress', icon: faWordpress, link: '/' },
  { name: 'OpenCV', icon: faRobot, link: '/' },
  { name: 'Salesforce', icon: faSalesforce, link: '/' },
  { name: 'Oracle', icon: faDatabase, link: '/' },
  { name: 'Nextcloud', icon: faCloud, link: '/' },
  { name: 'NetSuite', icon: faMoneyCheckAlt, link: '/' },
  { name: 'SQL', icon: faDatabase, link: '/' },
  { name: 'SQL Server', icon: faServer, link: '/' },
  { name: 'Tableau', icon: faChartBar, link: '/' },
  { name: 'SAP', icon: faIndustry, link: '/' },
  { name: 'Kubernetes', icon: faCubes, link: '/' },
  { name: 'ElasticSearch', icon: faSearch, link: '/' },
];

const Skillsmenu = () => {
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

export default Skillsmenu;
