import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90">Building Excellence Through Innovation and Dedication</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Founded with a vision to transform India's infrastructure landscape, Jay Krishna Construction has grown from a small construction company to one of the nation's leading infrastructure development firms. Our journey spans over two decades of excellence, innovation, and unwavering commitment to quality.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We have successfully completed over 500 projects across residential, commercial, and infrastructure sectors, establishing ourselves as a trusted partner for clients ranging from government agencies to private developers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment to sustainability, safety, and community development drives every project we undertake, ensuring that we not only build structures but also contribute to the growth and prosperity of the communities we serve.
            </p>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1} 
              alt="Construction site overview"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To build excellence through innovative construction solutions, sustainable practices, and unwavering commitment to quality. We strive to exceed client expectations while contributing to India's infrastructure development and community growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be India's most trusted and innovative construction company, recognized for our excellence in project delivery, commitment to sustainability, and positive impact on communities across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Values</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our core values guide every decision we make and every project we undertake, ensuring that we maintain the highest standards of integrity and excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">I</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Integrity</h3>
            <p className="text-gray-700 leading-relaxed">
              We conduct business with honesty, transparency, and ethical practices in all our interactions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">E</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              We strive for perfection in every project, continuously improving our processes and outcomes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">I</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
            <p className="text-gray-700 leading-relaxed">
              We embrace new technologies and methodologies to deliver cutting-edge construction solutions.
            </p>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default AboutUs;