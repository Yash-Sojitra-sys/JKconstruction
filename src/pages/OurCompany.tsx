import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const OurCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_6}
            alt="Our company building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white mt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Our Company</h1>
        </div>
      </section>

      {/* Accelerating Speed Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">Accelerating speed and capacity</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-5xl">
            The reach of our expansive group of companies is built on our deep relationships with leading service providers. Intensely focused on safety and quality, and located in every region, our teams are ready with skilled personnel and state of art equipment and tooling. No matter the scope of work or promised deadline, find a JKC partner to match your needs.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-40" style={{backgroundColor: '#8ea1ac'}}>
        <div className="w-full">
          <div className="flex justify-center">
            <img 
              src="/images/Map/Maps.png"
              alt="India map showing our presence"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default OurCompany;