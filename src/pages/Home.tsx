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
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section with Video Background - Now 70% of viewport height */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        
        <div className="relative z-20 text-center text-white px-6 max-w-4xl mt-24">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4">
            The People <span className="text-green-400 font-semibold">Building</span> Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">WORKING TOGETHER</p>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-8 pb-20 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
              In the Air and Underground
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                JKC Industries, Inc. (NYSE:DY) is a leading provider of specialty contracting services to the telecommunications infrastructure and utility industries throughout the Gujarat, India. We supply the single most critical resource telecom service providers need: skilled people. We serve the nation from hundreds of field offices and are unparalleled in scope and scale.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our talented workforce of over 7,000 employees provides a wide array of specialty services including program management; planning; engineering and design; aerial, underground, and wireless construction; maintenance; and fulfillment services. Additionally, we provide underground facility locating services for various utilities, including telecommunications providers, and other construction and maintenance services for electric and gas utilities.
              </p>
            </div>
            <button 
              onClick={() => navigate('/our-company')}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <span>LEARN ABOUT OUR FAMILY OF COMPANIES</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        <img 
          src={IMAGES.GALLERY.CONSTRUCTION_7}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-2 sm:px-4 lg:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                What we <span className="text-green-400">stand for</span>
              </h2>
              <div className="space-y-4">
                <p className="text-white text-base sm:text-lg leading-relaxed opacity-90">
                  Our team's performance and innovation is trusted by several of the country's most prominent brands on a daily basis, and we are constantly striving to meet and exceed expectations.Our mission, To Connect People, guides our strategy to ensure we deliver for our people, communities and partners.
                </p>
              </div>
              <button 
                onClick={() => navigate('/about-us')}
                className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      
      {/* Services Section */}
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
      
      <Footer />
    </div>
  );
};

export default Home;