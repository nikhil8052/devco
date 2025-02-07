import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const skillsmenu = [
  { name: 'Java',image: '/images/menu_juava.svg', link: '/java' },
  { name: 'Java Script',image: '/images/menu_javascript.svg', link: '/javascript' },
  { name: 'Node.js',image: '/images/menu_nodejs.svg', link: '/nodejs' },
  { name: 'React',image: '/images/menu_react.svg', link: '/react' },
  { name: 'Electron',image: '/images/menu_electron.svg', link: '/electron' },
  { name: 'OpenCV',image: '/images/menu_opencv.svg', link: '/opencv' },
  { name: 'HTML5',image: '/images/menu_html.svg', link: '/html5' },
  { name: 'PHP',image: '/images/menu_php.svg', link: '/php' },
  { name: 'Python',image: '/images/menu_python.svg', link: '/python' },
  { name: 'C#/.NET',image: '/images/menu_csharp.svg', link: '/c-sharp-dot-net' },
  { name: 'Labview',image: '/images/menu_labview.svg', link: '/labview' },
  { name: 'Unity',image: '/images/menu_unity.svg', link: '/unity' },
  { name: 'Webflow',image: '/images/menu_webflow.svg', link: '/webflow' },
  { name: 'Shopify',image: '/images/menu_shopify.svg', link: '/shopify' },
  { name: 'SAP',image: '/images/menu_sap.svg', link: '/sap' },
  { name: 'Kubernetes',image: '/images/menu_kubernets.svg', link: '/kubernetes' },
  { name: 'IOS',image: '/images/menu_ios_skills.svg', link: '/ios' },
  { name: 'Android',image: '/images/menu_skills_android.svg', link: '/android' },
  { name: 'Solidworks',image: '/images/menu_solidwork.svg', link: '/solidworks' },
  { name: 'Azure',image: '/images/menu_azure.svg', link: '/azure' },
  { name: 'Sitefinity',image: '/images/menu_site_infinity.svg', link: '/sitefinity' },
  { name: 'Laravel',image: '/images/menu_laravel.svg', link: '/laravel' },
  { name: 'AWS',image: '/images/menu_aws.svg', link: '/aws' },
  { name: 'Wordpress',image: '/images/menu_wordpress.svg', link: '/wordpress' },
  { name: 'Salesforce',image: '/images/menu_salesforce.svg', link: '/salesforce' },
  { name: 'Oracle',image: '/images/menu_oracle.svg', link: '/oracle' },
  { name: 'Nextcloud',image: '/images/menu_nextcloud.svg', link: '/nextcloud' },
  { name: 'Netsuite',image: '/images/menu_netsuit.svg', link: '/netsuite' },
  { name: 'SQL',image: '/images/menu_sqlserver.svg', link: '/sql' },
  { name: 'Tableau',image: '/images/menu_tableu.svg', link: '/tableau' },
  { name: 'Elasticsearch',image: '/images/menu_elastic_search.svg', link: '/elasticsearch' },
  
];

const Skillsmenu = () => {
  return (
    <div className="submenu_flex w-full flex gap-2">
      <div className="menu_icons_div basis-[100%]">
        <ul className="icon_list skills_icon_list w-full flex flex-wrap gap-y-1">
          {skillsmenu.map((skill, index) => (
            <li key={index} className="p-2 basis-[16.16%] flex flex-col items-center">
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

export default Skillsmenu;
