import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const ProjectManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Project management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-4 sm:px-6 lg:px-8 mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold">Project Management</h1>
        </div>
      </section>

      {/* Video Section with Project Management */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-end">
            <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
              <h2 className="text-5xl font-bold text-blue-600 mb-6">Turnkey Project Management</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From the smallest town to the largest city, we manage telecommunications projects that connect Gujarat, India. We engineer all types of networks from fiber to 5G, perform locates prior to excavation, obtain permits before work begins, and construct and maintain high quality and dependable networks.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With broad expertise in telecommunications construction, we are a preferred partner for our customers. Our local presence, national footprint, and extensive experience enables JKC to reliably manage complex construction projects. Our local offices possess ground level knowledge of the construction work methods that are crucial to success.
              </p>
            </div>
          </div>
          <div className="relative flex items-center pt-12" style={{height: '600px'}}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Project Management"
              className="w-full object-cover"
              style={{height: '460px'}}
            />
            <div className="absolute bottom-16 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Project</h3>
              <h3 className="text-3xl font-bold">Management</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-16">
        <ConnectionSection />
      </div>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ProjectManagement;