import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Infrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Infrastructure</h1>
          <p className="text-xl md:text-2xl opacity-90">Connecting Communities, Building Futures</p>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Infrastructure Development</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our infrastructure division focuses on creating the essential systems that support modern society. From transportation networks to energy systems, we build the critical infrastructure that enables economic growth and improves quality of life.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We specialize in large-scale infrastructure projects that require advanced engineering, innovative solutions, and meticulous project management to deliver on time and within budget.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">Infrastructure Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">₹5000Cr+</div>
                <div className="text-gray-600">Project Value</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
              alt="Infrastructure development"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Types */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Infrastructure Solutions</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive infrastructure development across multiple sectors and scales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Transportation Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive transportation solutions including highways, railways, airports, and urban transit systems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Highway Networks</li>
                <li>• Railway Systems</li>
                <li>• Airport Infrastructure</li>
                <li>• Metro Rail Projects</li>
                <li>• Port Development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Energy Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Power generation, transmission, and distribution infrastructure for sustainable energy solutions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Power Plants</li>
                <li>• Transmission Lines</li>
                <li>• Solar Farms</li>
                <li>• Wind Energy Projects</li>
                <li>• Substations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Water Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Water supply, treatment, and management systems for urban and rural communities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Water Treatment Plants</li>
                <li>• Distribution Networks</li>
                <li>• Sewage Treatment</li>
                <li>• Irrigation Systems</li>
                <li>• Flood Management</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Digital Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Modern telecommunications and digital infrastructure for smart cities and connectivity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Fiber Optic Networks</li>
                <li>• Data Centers</li>
                <li>• Smart City Systems</li>
                <li>• 5G Infrastructure</li>
                <li>• IoT Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Why Choose Our Infrastructure Services</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our infrastructure projects are designed for longevity, sustainability, and maximum community benefit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Sustainability</h3>
            <p className="text-gray-700 leading-relaxed">
              Environmentally conscious design and construction practices for long-term sustainability.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">I</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
            <p className="text-gray-700 leading-relaxed">
              Cutting-edge technology and innovative solutions for complex infrastructure challenges.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">Q</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Quality</h3>
            <p className="text-gray-700 leading-relaxed">
              Uncompromising quality standards ensuring infrastructure that lasts for generations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">E</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Efficiency</h3>
            <p className="text-gray-700 leading-relaxed">
              Optimized project delivery with advanced project management and execution strategies.
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

export default Infrastructure;