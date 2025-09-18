import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, FALLBACK_IMAGES } from '../constants/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img 
                src={IMAGES.LOGO.MAIN}
                alt="JKC Logo"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = FALLBACK_IMAGES.LOGO;
                }}
              />
            </Link>
            <div className="text-gray-600 text-base space-y-1 mb-6">
              <p className="font-medium text-gray-700">Jay Krishna Construction</p>
              <p>716, Millenium Business Hub</p>
              <p>Sarthana Jakatnaka</p>
              <p>Varrachha Main Road</p>
              <p>Surat, Gujarat - 395006</p>
            </div>
            <div className="text-gray-600 text-base space-y-1 mb-6">
              <p>+91 9374701899</p>
              <p>jaykrishna.surat@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://www.linkedin.com/in/jaykrishnaconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-700" />
              </a>
              <Instagram className="w-5 h-5 text-pink-600 cursor-pointer hover:text-pink-700" />
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-medium text-gray-700 mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li><Link to="/" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</Link></li>
              <li><Link to="/our-company" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>About Us</Link></li>
              <li><Link to="/our-family-of-companies" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Our Companies</Link></li>
              <li><Link to="/safety" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Safety</Link></li>
              <li><Link to="/quality" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Quality</Link></li>
              <li><Link to="/sustainability" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Sustainability</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-medium text-gray-700 mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li><Link to="/project-management" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Project Management</Link></li>
              <li><Link to="/wireline-construction" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Wireline Construction</Link></li>
              <li><Link to="/wireless-construction" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Wireless Construction</Link></li>
              <li><Link to="/engineering" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Engineering</Link></li>
              <li><Link to="/locating-and-sue" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Locating</Link></li>
              <li><Link to="/fulfillment" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Fulfillment</Link></li>
              <li><Link to="/maintenance-and-amc" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Maintenance & Restoration</Link></li>
            </ul>
          </div>

          {/* Careers Section */}
          <div>
            <h4 className="font-medium text-gray-700 mb-4 text-lg">Careers</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li><Link to="/connect-to-our-careers" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>About Our Careers</Link></li>
              <li><Link to="/connect-to-our-careers" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Opportunities</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-medium text-gray-700 mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li><Link to="/contact-us" className="hover:text-gray-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-left text-base text-gray-700">
            © 2025 Jay Krishna Construction | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;