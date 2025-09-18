import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Fulfillment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Fulfillment operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold">Fulfillment</h1>
        </div>
      </section>

      {/* Video Section with Fulfillment */}
      <section>
        <div className="grid md:grid-cols-2 gap-0 mx-4 sm:mx-6 lg:mx-8">
          <div className="bg-white flex items-end">
            <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
              <h2 className="text-5xl font-bold text-blue-600 mb-6">Installation and Fulfillment</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                JKC provides fulfillment services including complete in-home and drop installations, as well as repair and maintenance of broadband networks. Our highly trained employees deliver service to customers quickly, professionally, and consistently.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We activate service for residential, commercial, or mixed-use premises, and educate end-users on-site to ensure they understand the advanced technology installed. Our ability to access cross-functional teams makes integrated installation easy for our customers. Our fulfillment teams complete both fiber and coaxial installs and provide real time completion reports.
              </p>
            </div>
          </div>
          <div className="relative flex items-center pt-12" style={{height: '520px'}}>
            <video 
              className="w-full object-cover"
              style={{height: '380px'}}
              controls
              preload="metadata"
              poster={IMAGES.GALLERY.CONSTRUCTION_1}
            >
              <source src="/videos/Fulfillment/video1.mp4" type="video/mp4" />
              <track 
                kind="subtitles" 
                src="/videos/Fulfillment/video1.vtt" 
                srcLang="en" 
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-16 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Installation</h3>
              <h3 className="text-3xl font-bold">and Fulfillment</h3>
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

export default Fulfillment;