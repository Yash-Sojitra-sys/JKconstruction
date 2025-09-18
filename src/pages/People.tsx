import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const People: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="People"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-left text-white mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">People</h1>
          <p className="text-xl md:text-2xl opacity-90">Our Most Important Resource</p>
        </div>
      </section>

      {/* People Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Our People Make the Difference</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our success is built on the dedication, expertise, and commitment of our team members who bring their best to every project, every day.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
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

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our People Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">Respect</h4>
              <p className="text-gray-700 leading-relaxed">
                We treat every team member with dignity and respect, valuing diverse perspectives and contributions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">Growth</h4>
              <p className="text-gray-700 leading-relaxed">
                We invest in our people's professional development and provide opportunities for career advancement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">Collaboration</h4>
              <p className="text-gray-700 leading-relaxed">
                We work together as one team, supporting each other to achieve common goals and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Employee Development */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Employee Development</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Training & Education</h4>
              <ul className="text-gray-700 space-y-3">
                <li>• Comprehensive onboarding programs</li>
                <li>• Continuous skills development</li>
                <li>• Leadership training opportunities</li>
                <li>• Technical certification support</li>
                <li>• Safety training and awareness</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Career Advancement</h4>
              <ul className="text-gray-700 space-y-3">
                <li>• Clear career progression paths</li>
                <li>• Mentorship programs</li>
                <li>• Cross-functional opportunities</li>
                <li>• Performance recognition</li>
                <li>• Internal promotion priority</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Environment */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Our Work Environment</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Safe</h4>
              <p className="text-gray-600 text-sm">Safety-first culture with comprehensive protocols</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Inclusive</h4>
              <p className="text-gray-600 text-sm">Diverse and welcoming workplace for all</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Innovative</h4>
              <p className="text-gray-600 text-sm">Encouraging creativity and new ideas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">R</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Rewarding</h4>
              <p className="text-gray-600 text-sm">Competitive benefits and recognition programs</p>
            </div>
          </div>
        </div>

        {/* Employee Benefits */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Why Our People Choose JKC</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Comprehensive Benefits</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Health, dental, and vision insurance</li>
                <li>• Retirement savings plans</li>
                <li>• Paid time off and holidays</li>
                <li>• Life and disability insurance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Work-Life Balance</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Flexible work arrangements</li>
                <li>• Employee assistance programs</li>
                <li>• Wellness initiatives</li>
                <li>• Family-friendly policies</li>
              </ul>
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

export default People;