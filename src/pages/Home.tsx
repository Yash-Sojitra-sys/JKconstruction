import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section with Video Background - Now 55% of viewport height */}
      <section className="relative h-[58vh] flex items-center justify-center overflow-hidden">
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Construction site aerial view"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            The People <span className="text-green-400 font-normal">Building</span> Excellence®
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">WORKING TOGETHER</p>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-8 pb-20 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">
                In the Air and Underground™
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Jay Krishna Construction (JKC) is a leading provider of specialty contracting services to the infrastructure and construction industries throughout India. We supply the single most critical resource construction projects need: skilled people. We serve the nation from hundreds of field offices and are unparalleled in scope and scale.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Our talented workforce of over 5,000 employees provides a wide array of specialty services including program management; planning; engineering and design; construction; maintenance; and fulfillment services for residential, commercial, and infrastructure projects.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm sm:text-base">
                <span>LEARN ABOUT OUR FAMILY OF COMPANIES</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/23mgV6vG/Whats-App-Image-2025-06-21-at-17-57-28-e4f6fcea.jpg" 
                alt="Construction workers"
                className="rounded-lg shadow-xl w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600/80"></div>
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-2 sm:px-4 lg:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                What we <span className="text-green-400">stand for</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-90">
                Embracing a common vision of Connecting People, JKC proudly builds infrastructure and partnerships nationwide. Our engaged workforce is key to meeting the needs of our customers by bringing and keeping communities connected. We live by our values at JKC. They guide our interactions with each other, with our customers, and with the communities where we live and work.
              </p>
              <button className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;