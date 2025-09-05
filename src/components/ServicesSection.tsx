import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    switch (service) {
      case 'wireline':
        navigate('/wireline-construction');
        break;
      case 'wireless':
        navigate('/wireless-construction');
        break;
      case 'locating':
        navigate('/locating-and-sue');
        break;
      case 'engineering':
        navigate('/engineering');
        break;
      case 'fulfillment':
        navigate('/fulfillment');
        break;
      case 'maintenance':
        navigate('/maintenance-and-amc');
        break;
      case 'project-management':
        navigate('/project-management');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 text-left leading-tight">Services</h2>
        
        {/* First Row - 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 mb-2">
          {/* Wireline Construction */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireline')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Wireline Construction"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Wireline Construction</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireline Construction</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Across the nation, we complete construction projects with our workers' talents augmented by our enterprise technology tools.</p>
              </div>
            </div>
          </div>

          {/* Wireless Construction */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireless')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_2}
              alt="Wireless Construction"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Wireless Construction</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireless Construction</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC is an expert in wireless communications construction. We complete projects of any size, from macro cells to small cells, for 4G and 5G networks.</p>
              </div>
            </div>
          </div>

          {/* Locating */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('locating')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="Locating"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Locating</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Locating</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our locating services provide the skilled workforce necessary to ensure all underground utilities are identified before work begins.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
          {/* Engineering */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('engineering')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Engineering"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Engineering</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Engineering</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our engineering teams survey and design facilities for copper, coaxial and fiber networks.</p>
              </div>
            </div>
          </div>

          {/* Fulfillment */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('fulfillment')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_2}
              alt="Fulfillment"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Fulfillment</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Fulfillment</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides fulfillment services including complete in-home and drop installations, as well as repair and maintenance of broadband networks.</p>
              </div>
            </div>
          </div>

          {/* Maintenance & Restoration */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('maintenance')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="Maintenance & Restoration"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Maintenance & Restoration</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Maintenance & Restoration</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides ongoing maintenance and service for telecommunication networks across the country, as well as emergency restoration services when required.</p>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('project-management')}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Project Management"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Project Management</h3>
            </div>
            
            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Project Management</h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Expert project management services ensuring successful delivery of complex telecommunications and infrastructure projects on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
