import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const WirelessConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Wireless construction infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Wireless Construction</h1>
          <p className="text-xl md:text-2xl opacity-90">Building Tomorrow's Wireless Networks</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Wireless Infrastructure Solutions</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our wireless construction division builds the cellular and wireless infrastructure that powers modern mobile communications. From cell tower construction to small cell deployments, we enable seamless wireless connectivity.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With expertise in 4G, 5G, and emerging wireless technologies, we provide comprehensive solutions for carriers, enterprises, and government agencies requiring robust wireless infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-gray-600">Cell Sites Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Small Cells Deployed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Wireless construction work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Wireless Construction Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Complete wireless infrastructure solutions for next-generation connectivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Cell Tower Construction</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Complete cell tower construction services from foundation to antenna installation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Tower Erection</li>
                <li>• Foundation Work</li>
                <li>• Antenna Installation</li>
                <li>• Equipment Shelters</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Small Cell Deployment</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Small cell and DAS installation for enhanced urban coverage and capacity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Small Cell Installation</li>
                <li>• DAS Systems</li>
                <li>• Pole Attachments</li>
                <li>• Concealment Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">5G Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Next-generation 5G network infrastructure deployment and optimization.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 5G Radio Installation</li>
                <li>• Massive MIMO</li>
                <li>• Edge Computing</li>
                <li>• Network Slicing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Site Acquisition</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Complete site acquisition and development services for wireless infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Site Selection</li>
                <li>• Lease Negotiation</li>
                <li>• Zoning & Permits</li>
                <li>• Environmental Studies</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Network Optimization</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Performance optimization and maintenance of wireless network infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• RF Optimization</li>
                <li>• Drive Testing</li>
                <li>• Performance Analysis</li>
                <li>• Capacity Planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Emergency Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                24/7 emergency response and disaster recovery for wireless networks.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Storm Response</li>
                <li>• Emergency Repairs</li>
                <li>• Temporary Solutions</li>
                <li>• Rapid Deployment</li>
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

export default WirelessConstruction;