// components/Header.tsx
'use client'
import Link from 'next/link';

const Header = () => {
  // Define your navigation items with optional dropdown items
  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      path: '/about',
      dropdown: [
        { label: 'Team', path: '/about/team' },
        { label: 'Company', path: '/about/company' },
      ],
    },
    { label: 'Contact', path: '/contact' },
    
    { label: 'Services', path: '/services' },
  ];

  return (
    <header className="bg-customBlue text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="relative group"> {/* Add relative positioning for dropdown */}
              <Link href={item.path} className="hover:text-blue-400">
                {item.label}
              </Link>
              
              {/* Render dropdown if it exists */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ul className="py-2">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <li key={dropIndex}>
                        <Link 
                          href={dropItem.path} 
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
