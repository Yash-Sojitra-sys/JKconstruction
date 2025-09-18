import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-5xl mx-auto text-left text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Careers</h1>
          <p className="text-xl md:text-2xl opacity-90">Build Your Future With Us</p>
        </div>
      </section>

      {/* Career Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Join Our Team</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At Jay Krishna Construction, we believe our people are our greatest asset. We offer exciting career opportunities for professionals who want to make a meaningful impact on India's infrastructure development.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Whether you're an experienced professional or just starting your career, we provide a supportive environment for growth, learning, and professional development.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1} 
              alt="Team collaboration"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Why Choose JKC</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for professional growth and personal fulfillment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Career Growth</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Clear career progression paths with opportunities for advancement and skill development.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Leadership Development</li>
                <li>• Skill Enhancement Programs</li>
                <li>• Mentorship Opportunities</li>
                <li>• Cross-functional Exposure</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Work-Life Balance</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Flexible work arrangements and comprehensive benefits to support your personal life.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Flexible Hours</li>
                <li>• Health Insurance</li>
                <li>• Paid Time Off</li>
                <li>• Family Support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Innovation Culture</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Work with cutting-edge technology and contribute to innovative construction solutions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Latest Technology</li>
                <li>• Innovation Projects</li>
                <li>• Research & Development</li>
                <li>• Creative Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Career Opportunities</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore diverse career paths across various departments and specializations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Engineering & Technical</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Join our engineering teams working on complex infrastructure and construction projects.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Civil Engineers</li>
              <li>• Project Managers</li>
              <li>• Site Engineers</li>
              <li>• Quality Control Specialists</li>
              <li>• Safety Engineers</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Business & Operations</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Support our business operations and drive organizational excellence.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Business Development</li>
              <li>• Finance & Accounting</li>
              <li>• Human Resources</li>
              <li>• Procurement</li>
              <li>• Legal & Compliance</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Technology & Innovation</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Drive digital transformation and technological advancement in construction.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Software Developers</li>
              <li>• Data Analysts</li>
              <li>• IT Support</li>
              <li>• Digital Innovation</li>
              <li>• Systems Integration</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Skilled Trades</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hands-on construction roles for skilled craftspeople and technicians.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Construction Workers</li>
              <li>• Equipment Operators</li>
              <li>• Electricians</li>
              <li>• Plumbers</li>
              <li>• Welders</li>
            </ul>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Careers;