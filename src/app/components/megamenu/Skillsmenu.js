import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { 
  faJava, faJs, faNodeJs, faReact, faLaravel, faHtml5, faPhp, faPython, 
  faUnity, faAndroid, faApple, faShopify, faWordpress, faAws, faSalesforce 
} from '@fortawesome/free-brands-svg-icons';

import { 
  faCode, faLaptopCode, faServer, faRobot, faTools, faMicrochip, 
  faGlobe, faCloud, faDatabase, faCogs, faChartBar, faIndustry, faCubes, faSearch, 
  faMoneyCheckAlt, faProjectDiagram 
} from '@fortawesome/free-solid-svg-icons';

const skillsmenu = [
  { name: 'Java', icon: faJava, link: '/java' }, // Java
  { name: 'JavaScript', icon: faJs, link: '/javascript' }, // JavaScript
  { name: 'Node.js', icon: faNodeJs, link: '/nodejs' }, // Node.js
  { name: 'React', icon: faReact, link: '/react' }, // React
  { name: 'Electron', icon: faLaptopCode, link: '/electron' }, // Electron
  { name: 'Laravel', icon: faLaravel, link: '/laravel' }, // Laravel
  { name: 'HTML5', icon: faHtml5, link: '/html5' }, // HTML5
  { name: 'PHP', icon: faPhp, link: '/php' }, // PHP
  { name: 'Python', icon: faPython, link: '/python' }, // Python
  { name: 'C#/ .NET', icon: faCode, link: '/c-sharp-dot-net' }, // C# / .NET
  { name: 'LabVIEW', icon: faMicrochip, link: '/labview' }, // LabVIEW
  { name: 'Unity', icon: faUnity, link: '/unity' }, // Unity
  { name: 'Webflow', icon: faGlobe, link: '/webflow' }, // Webflow
  { name: 'Shopify', icon: faShopify, link: '/shopify' }, // Shopify
  { name: 'iOS', icon: faApple, link: '/ios' }, // iOS
  { name: 'Android', icon: faAndroid, link: '/android' }, // Android
  { name: 'SolidWorks', icon: faTools, link: '/solidworks' }, // SolidWorks
  { name: 'Azure', icon: faCloud, link: '/azure' }, // Azure
  { name: 'AWS', icon: faAws, link: '/aws' }, // AWS
  { name: 'Sitefinity', icon: faGlobe, link: '/sitefinity' }, // Sitefinity
  { name: 'WordPress', icon: faWordpress, link: '/wordpress' }, // WordPress
  { name: 'OpenCV', icon: faRobot, link: '/opencv' }, // OpenCV
  { name: 'Salesforce', icon: faSalesforce, link: '/salesforce' }, // Salesforce
  { name: 'Oracle', icon: faDatabase, link: '/oracle' }, // Oracle
  { name: 'Nextcloud', icon: faCloud, link: '/nextcloud' }, // Nextcloud
  { name: 'NetSuite', icon: faMoneyCheckAlt, link: '/netsuite' }, // NetSuite
  { name: 'SQL', icon: faDatabase, link: '/sql' }, // SQL
  { name: 'SQL Server', icon: faServer, link: '/sql-server' }, // SQL Server
  { name: 'Tableau', icon: faChartBar, link: '/tableau' }, // Tableau
  { name: 'SAP', icon: faIndustry, link: '/sap' }, // SAP
  { name: 'Kubernetes', icon: faCubes, link: '/kubernetes' }, // Kubernetes
  { name: 'ElasticSearch', icon: faSearch, link: '/elasticsearch' }, // ElasticSearch
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
