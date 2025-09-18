import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <img 
                src={IMAGES.LOGO.MAIN}
                alt="JKC Logo"
                className="w-32 h-32 object-contain mb-4"
              />
            </Link>
            <div className="text-gray-600 text-sm space-y-1">
              <p className="font-semibold text-gray-900">Jay Krishna Construction</p>
              <p>716, Millenium Business Hub</p>
              <p>Sarthana Jakatnaka</p>
              <p>Varrachha Main Road</p>
              <p>Surat, Gujarat - 395006</p>
              <p className="mt-3 font-medium">jaykrishna.surat@gmail.com</p>
              <p className="font-medium">+91 9374701899</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/jaykrishnaconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800" />
              </a>
              <Youtube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-800" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</Link></li>
              <li><Link to="/our-company" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>About Us</Link></li>
              <li><Link to="/our-family-of-companies" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Our Companies</Link></li>
              <li><Link to="/safety" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Safety</Link></li>
              <li><Link to="/quality" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Quality</Link></li>
              <li><Link to="/sustainability" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/wireline-construction" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Wireline Construction</Link></li>
              <li><Link to="/wireless-construction" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Wireless Construction</Link></li>
              <li><Link to="/engineering" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Engineering</Link></li>
              <li><Link to="/fulfillment" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Fulfillment</Link></li>
              <li><Link to="/locating-and-sue" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Locating</Link></li>
              <li><Link to="/project-management" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Project Management</Link></li>
              <li><Link to="/maintenance-and-amc" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Maintenance & Restoration</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Careers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/connect-to-our-careers" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Connect to Our Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/contact-us" className="hover:text-blue-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Contact Us</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-16 pt-10">
          <p className="text-center text-sm sm:text-base text-gray-500">
            &copy; 2025 Jay Krishna Construction | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;