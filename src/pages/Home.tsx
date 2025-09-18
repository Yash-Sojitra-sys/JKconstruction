import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    const serviceRoutes: { [key: string]: string } = {
      'wireline': '/wireline-construction',
      'wireless': '/wireless-construction',
      'locating': '/locating-and-sue',
      'engineering': '/engineering',
      'fulfillment': '/fulfillment',
      'maintenance': '/maintenance-and-amc',
      'project-management': '/project-management'
    };
    
    if (serviceRoutes[service]) {
      navigate(serviceRoutes[service]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section with Video Background - Now 70% of viewport height */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dos3cln9d/video/upload/v1750507839/construction_site_timelapse_vc7h3i.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src={IMAGES.HERO.MAIN}
            alt="Construction site"
            className="w-full h-full object-cover"
          />
        </video>
        
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6">
            The People <span className="text-green-400 font-semibold">Building</span> Excellence
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90">WORKING TOGETHER</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 leading-tight mb-6 sm:mb-8">
              In the Air and Underground
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                JKC(Jay Krishna Construction) is a leading provider of specialty contracting services to the telecommunications infrastructure and utility industries throughout the Gujarat, India. We supply the single most critical resource telecom service providers need: skilled people. We serve the nation from hundreds of field offices and are unparalleled in scope and scale.
              </p>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Our talented workforce of over 7,000 employees provides a wide array of specialty services including program management; planning; engineering and design; aerial, underground, and wireless construction; maintenance; and fulfillment services. Additionally, we provide underground facility locating services for various utilities, including telecommunications providers, and other construction and maintenance services for electric and gas utilities.
              </p>
            </div>
            <button 
              onClick={() => {
                navigate('/our-company');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm sm:text-base lg:text-lg"
            >
              <span>LEARN ABOUT OUR FAMILY OF COMPANIES</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent"></div>
        <img 
          src={IMAGES.GALLERY.CONSTRUCTION_7}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8">
                What we <span className="text-green-400">stand for</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 mb-4 sm:mb-6">
                  Embracing a common vision of connecting India, JKC proudly builds networks and partnerships nationwide. Our engaged workforce is key to meeting the needs of our customers by bringing and keeping communities online and connected. We live by our values at JKC. They guide our interactions with each other, with our customers, and with the communities where we live and work.
                </p>
              </div>
              <button 
                onClick={() => {
                  navigate('/about-us');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-green-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base lg:text-lg"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-6 sm:mb-8 lg:mb-10 text-left leading-tight">Services</h2>
          
          {/* First Row - 3 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Wireline Construction */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireline')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Wireline Construction"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Wireline Construction</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireline Construction</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Across the nation, we complete construction projects with our workers' talents augmented by our enterprise technology tools.</p>
                </div>
              </div>
            </div>

            {/* Wireless Construction */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireless')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Wireless Construction"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Wireless Construction</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireless Construction</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC is an expert in wireless communications construction. We complete projects of any size, from macro cells to small cells, for 4G and 5G networks.</p>
                </div>
              </div>
            </div>

            {/* Locating */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('locating')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Locating"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Locating</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Locating</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our locating services provide the skilled workforce necessary to ensure all underground utilities are identified before work begins.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 4 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Engineering */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('engineering')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Engineering"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Engineering</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Engineering</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our engineering teams survey and design facilities for copper, coaxial and fiber networks.</p>
                </div>
              </div>
            </div>

            {/* Fulfillment */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('fulfillment')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Fulfillment"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Fulfillment</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Fulfillment</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides fulfillment services including complete in-home and drop installations, as well as repair and maintenance of broadband networks.</p>
                </div>
              </div>
            </div>

            {/* Maintenance & Restoration */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('maintenance')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Maintenance & Restoration"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Maintenance & Restoration</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Maintenance & Restoration</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides ongoing maintenance and service for telecommunication networks across the country, as well as emergency restoration services when required.</p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('project-management')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Project Management"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Project Management</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Project Management</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Expert project management services ensuring successful delivery of complex telecommunications and infrastructure projects on time and within budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;