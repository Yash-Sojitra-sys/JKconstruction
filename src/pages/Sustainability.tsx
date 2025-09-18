import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_8}
            alt="Road construction with vehicles and traffic cones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-left text-white mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Our Commitment to Sustainability</h1>
          <p className="text-xl md:text-2xl opacity-90">Building a Sustainable Future</p>
        </div>
      </section>

      {/* 2. Combined Text Section with Image */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                JKC is driven by the vision of Connecting People, and we believe sustainability is crucial to achieving that vision responsibly. Our sustainability strategy is built on three core pillars: Safety, People, and Environment. This means prioritizing the safety of our workforce, fostering a culture of continuous learning and development, and actively minimizing our environmental impact on the environment. Strong governance, ethical practices, and a commitment to transparency underpin our efforts.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through innovation, hard work, and a focus on leading with our values, JKC is dedicated to leaving the world better than we found it, and to helping our customers create robust networks that enable others to do the same.
              </p>
            </div>
            <div className="relative">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3} 
                alt="Corporate Sustainability Report"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Four Pillars Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative text-white p-8 rounded-lg overflow-hidden min-h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_4} 
                  alt="Safety background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-600/85"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4">Safety</h3>
                <p className="text-base leading-relaxed">
                  We strive to ensure the highest level of protection for our employees, customers, and the community in which we operate by fostering an instinctually safe culture.
                </p>
              </div>
            </div>
            
            <div className="relative text-white p-8 rounded-lg overflow-hidden min-h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_5} 
                  alt="People background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-600/85"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4">People</h3>
                <p className="text-base leading-relaxed">
                  Employees are our most important resource and are at the heart of everything we do. We strive every day to create the right environment for them to grow their skills, work collaboratively, and deliver our services at the highest quality to our customers.
                </p>
              </div>
            </div>
            
            <div className="relative text-white p-8 rounded-lg overflow-hidden min-h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_6} 
                  alt="Environment background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-600/85"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4">Environment</h3>
                <p className="text-base leading-relaxed">
                  Working together, we strive to continually reduce our environmental impact by embracing advancements in sustainable technologies optimized by our core business practices and a highly skilled workforce.
                </p>
              </div>
            </div>
            
            <div className="relative text-white p-8 rounded-lg overflow-hidden min-h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_7} 
                  alt="Business practices background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-600/85"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4">Business Practices</h3>
                <p className="text-base leading-relaxed">
                  Strong corporate governance and risk management practices underpin everything that we do, enabling us to serve our stakeholders in the most responsible manner.
                </p>
              </div>
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

export default Sustainability;