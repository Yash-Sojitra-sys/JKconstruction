import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-1">
              <img 
                src="/assets/images/JKCLogo.PNG" 
                alt="JKC Logo"
                className="w-32 h-32 object-contain"
              />
              <span className="text-3xl font-bold text-gray-900"></span>
            </Link>
            <div className="text-gray-600 text-sm sm:text-base space-y-2">
              <p>Jay Krishna Construction</p>
              <p>716, Millenium Business Hub</p>
              <p>Sarthana Jakatnaka Varachha Main Road</p>
              <p>Surat, Gujarat - 395006</p>
              <p className="mt-4 font-medium">jaykrishna.surat@gmail.com</p>
              <p className="font-medium">+91 9374701899</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Linkedin className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800" />
              <Youtube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-800" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-base sm:text-lg mt-8">Company</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/our-company" className="hover:text-blue-600 transition-colors">Our Companies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-base sm:text-lg mt-8">Services</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wireline Construction</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wireless Construction</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Fulfillment</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Locating & SUE</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Maintenance & AMC</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-base sm:text-lg mt-8">Careers</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li><Link to="/benefits" className="hover:text-blue-600 transition-colors">Benefits</Link></li>
              <li><Link to="/life-at-jkc" className="hover:text-blue-600 transition-colors">Life at JKC</Link></li>
              <li><Link to="/connect-to-our-careers" className="hover:text-blue-600 transition-colors">Connect to Our Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-base sm:text-lg mt-8">Investor Relations</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Events & Presentations</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Financials & Filings</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Stock Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Shareholder Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-10">
          <p className="text-center text-sm sm:text-base text-gray-500">
            © 2025 Jay Krishna Construction | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;