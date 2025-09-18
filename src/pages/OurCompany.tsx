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

      {/* Company Profile Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">Company Profile</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Jay Krishna Construction stands as a beacon of excellence in India's construction industry. With over 27+ years of experience, we have established ourselves as a premier construction company specializing in infrastructure development, residential projects, and commercial construction.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our company operates across multiple states in India, with headoffice in Surat, Gujarat, serving a diverse clientele across multiple states.
              </p>
            </div>
            
            {/* Right Image */}
            <div>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Construction work in progress"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Certifications Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Recognition & Certifications</h2>
          <p className="text-gray-500 text-xl mb-16 max-w-4xl mx-auto">
            Our commitment to excellence has been recognized through various industry awards and certifications.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-20">
            {/* ISO 9001:2015 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management</p>
            </div>

            {/* OHSAS 18001 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{backgroundColor: '#c38e30'}}>
                <span className="text-white text-xl font-bold">OHSAS</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">OHSAS 18001</h3>
              <p className="text-gray-600">Safety Management</p>
            </div>

            {/* Excellence Award */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl font-bold">AWARD</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Excellence Award</h3>
              <p className="text-gray-600">Industry Recognition</p>
            </div>
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