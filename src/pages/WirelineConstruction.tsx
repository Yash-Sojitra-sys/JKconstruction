import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const WirelineConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Wireline construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Wireline Construction</h1>
          <p className="text-xl md:text-2xl opacity-90">Connecting Communities Through Advanced Infrastructure</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Wireline Infrastructure Excellence</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our wireline construction division specializes in building and maintaining the critical telecommunications infrastructure that keeps communities connected. From fiber optic networks to copper line installations, we deliver reliable connectivity solutions.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With expertise in both underground and aerial installations, we provide comprehensive wireline services that support modern communication needs across residential, commercial, and industrial sectors.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Network Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10,000km+</div>
                <div className="text-gray-600">Cable Installed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Wireline construction work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Wireline Construction Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive wireline solutions for telecommunications and data infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Fiber Optic Installation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                High-speed fiber optic network installation for residential and commercial applications.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• FTTH Networks</li>
                <li>• Backbone Infrastructure</li>
                <li>• Splice Enclosures</li>
                <li>• Testing & Certification</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Underground Construction</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Underground cable installation and duct systems for protected infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Directional Boring</li>
                <li>• Duct Installation</li>
                <li>• Manholes & Handholes</li>
                <li>• Cable Pulling</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Aerial Construction</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Overhead cable installation and pole line construction services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Pole Installation</li>
                <li>• Cable Stringing</li>
                <li>• Guy Wire Systems</li>
                <li>• Storm Restoration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Network Maintenance</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ongoing maintenance and repair services for existing wireline infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Preventive Maintenance</li>
                <li>• Emergency Repairs</li>
                <li>• System Upgrades</li>
                <li>• Performance Testing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Copper Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Traditional copper line installation and maintenance for voice and data services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Copper Cable Installation</li>
                <li>• Cross-Connect Systems</li>
                <li>• Terminal Equipment</li>
                <li>• Line Testing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Project Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                End-to-end project management for large-scale wireline construction projects.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Design Engineering</li>
                <li>• Permit Acquisition</li>
                <li>• Construction Management</li>
                <li>• Quality Assurance</li>
              </ul>
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

export default WirelineConstruction;