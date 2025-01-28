import React from 'react';
import Link from 'next/link';

const skillsmenu = [
  {
    category: 'Frontend Technologies',
    items: [
      { name: 'JavaScript', link: '/javascript' },
      { name: 'React', link: '/react' },
      { name: 'HTML5', link: '/html5' },
      { name: 'CSS', link: '/css' },
      { name: 'Vue.js', link: '/vuejs' },
      { name: 'Electron', link: '/electron' },
    ]
  },
  {
    category: 'Backend Technologies',
    items: [
      { name: 'Node.js', link: '/nodejs' },
      { name: 'PHP', link: '/php' },
      { name: 'Python', link: '/python' },
      { name: 'C#/ .NET', link: '/c-sharp-dot-net' },
      { name: 'Laravel', link: '/laravel' },
    ]
  },
  {
    category: 'Mobile Development',
    items: [
      { name: 'iOS', link: '/ios' },
      { name: 'Android', link: '/android' },
    ]
  },
  {
    category: 'Cloud and DevOps',
    items: [
      { name: 'AWS', link: '/aws' },
      { name: 'Azure', link: '/azure' },
      { name: 'Kubernetes', link: '/kubernetes' },
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL', link: '/sql' },
      { name: 'SQL Server', link: '/sql-server' },
      { name: 'Oracle', link: '/oracle' },
      { name: 'ElasticSearch', link: '/elasticsearch' },
    ]
  },
  {
    category: 'Other Technologies',
    items: [
      { name: 'WordPress', link: '/wordpress' },
      { name: 'Shopify', link: '/shopify' },
      { name: 'Webflow', link: '/webflow' },
      { name: 'Sitefinity', link: '/sitefinity' },
      { name: 'Tableau', link: '/tableau' },
      { name: 'Salesforce', link: '/salesforce' },
      { name: 'LabVIEW', link: '/labview' },
      { name: 'Unity', link: '/unity' },
      { name: 'SolidWorks', link: '/solidworks' },
      { name: 'NetSuite', link: '/netsuite' },
      { name: 'Nextcloud', link: '/nextcloud' },
      { name: 'SAP', link: '/sap' },
      { name: 'OpenCV', link: '/opencv' },
    ]
  }
];

const Skillsmenu = () => {
  return (
    <div className="submenu_flex skillsmenu w-full flex gap-4">
      {skillsmenu.map((category, index) => (
        <div key={index} className="menu_section basis-[100%]">
          <h3 className="text-customwhite text-[24px] font-semibold mb-4">{category.category}</h3>
          <ul className="icon_list w-full flex flex-wrap gap-x-3 gap-y-1">
            {category.items.map((skill, idx) => (
              <li key={idx} className=" ">
                <Link href={skill.link} aria-label={skill.name} className="text-customwhite text-[16px] py-0 hover:underline">
                  {skill.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skillsmenu;
