import React, { useState, useEffect } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{[key: string]: boolean}>({});
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setExpandedMenus({});
    }
  };

  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/assets/images/JKCLogo.PNG"
                alt="JKC Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800" />
            <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleMenu}>
              {/* Hamburger Menu Icon */}
              <div className="flex flex-col space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-500 ease-in-out z-50 shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-y-auto`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              {/* Logo only - no text */}
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                <img 
                  src="/assets/images/JKCLogo.PNG"
                  alt="JKC Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <X className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={toggleMenu} />
          </div>
          
          <nav className="flex-1 flex flex-col justify-center space-y-6">
            {/* Home */}
            <div className={`transform transition-all duration-700 delay-100 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Link 
                to="/" 
                className="block text-gray-800 text-2xl font-light hover:text-blue-600 transition-colors py-1 relative group"
                onClick={toggleMenu}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            
            {/* About Us */}
            <div className={`transform transition-all duration-700 delay-200 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-1" onClick={() => toggleSubmenu('about')}>
                  <span className="text-gray-800 text-2xl font-light hover:text-blue-600 transition-colors relative group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    expandedMenus.about ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedMenus.about ? 'max-h-44 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
                }`}>
                  <div className="ml-6 space-y-3 text-base text-gray-600 pt-2">
                    <Link 
                      to="/our-company" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Our Company
                    </Link>
                    <Link 
                      to="/safety" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Safety
                    </Link>
                    <Link 
                      to="/quality" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Quality
                    </Link>
                    <Link 
                      to="/sustainability" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Sustainability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What We Do */}
            <div className={`transform transition-all duration-700 delay-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-1" onClick={() => toggleSubmenu('services')}>
                  <span className="text-gray-800 text-2xl font-light hover:text-blue-600 transition-colors relative group">
                    What We Do
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    expandedMenus.services ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedMenus.services ? 'max-h-[350px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
                }`}>
                  <div className="ml-6 space-y-3 text-base text-gray-600 pt-2">
                    <Link 
                      to="/wireline-construction" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Wireline Construction
                    </Link>
                    <Link 
                      to="/wireless-construction" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Wireless Construction
                    </Link>
                    <Link 
                      to="/engineering" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Engineering
                    </Link>
                    <Link 
                      to="/fulfillment" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Fulfillment
                    </Link>
                    <Link 
                      to="/locating-and-sue" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Locating & SUE
                    </Link>
                    <Link 
                      to="/project-management" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Project Management
                    </Link>
                    <Link 
                      to="/maintenance-and-amc" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Maintenance & AMC
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Careers */}
            <div className={`transform transition-all duration-700 delay-400 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-2" onClick={() => toggleSubmenu('careers')}>
                  <span className="text-gray-800 text-2xl font-light hover:text-blue-600 transition-colors relative group">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    expandedMenus.careers ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedMenus.careers ? 'max-h-28 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
                }`}>
                  <div className="ml-6 space-y-3 text-base text-gray-600 pt-3">
                    <Link 
                      to="/benefits" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Benefits
                    </Link>
                    <Link 
                      to="/life-at-jkc" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Life at JKC
                    </Link>
                    <Link 
                      to="/connect-to-our-careers" 
                      className="block hover:text-blue-600 transition-colors transform transition-transform duration-300 hover:translate-x-1"
                      onClick={toggleMenu}
                    >
                      Connect to Our Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Us */}
            <div className={`transform transition-all duration-700 delay-500 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Link 
                to="/contact-us" 
                className="block text-gray-800 text-2xl font-light hover:text-blue-600 transition-colors py-1 relative group"
                onClick={toggleMenu}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </nav>
          
          <div className={`mt-auto pt-6 border-t border-gray-200 transform transition-all duration-700 delay-700 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-base text-blue-600">Jay Krishna Construction</p>
              <div className="text-gray-600 space-y-1 text-sm">
                <p>716, Millenium Business Hub</p>
                <p>Sarthana Jakatnaka Varachha Main Road</p>
                <p>Surat, Gujarat - 395006</p>
                <p className="mt-3"><span className="font-medium">T:</span> +91 9374701899</p>
                <p><span className="font-medium">E:</span> jaykrishna.surat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;