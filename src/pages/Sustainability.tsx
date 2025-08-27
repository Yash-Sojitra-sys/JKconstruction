import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Sustainable construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Our Commitment to Sustainability</h1>
        </div>
      </section>

      {/* Sustainability Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              JKC is driven by the vision of Connecting People, and we believe sustainability is crucial to achieving that vision responsibly. Our sustainability strategy is built on three core pillars: Safety, People, and Environment. This means prioritizing the safety of our workforce, fostering a culture of continuous learning and development, and actively minimizing our environmental impact.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Sustainability report"
              className="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">CORPORATE SUSTAINABILITY REPORT</span>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Through innovation, hard work, and a focus on leading with our values, JKC is dedicated to leaving the world better than we found it, and to helping our customers create robust networks that enable others to do the same.
          </p>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
              alt="Sustainable construction practices"
              className="rounded-lg shadow-xl w-full h-64 object-cover mb-4"
            />
            <div className="text-center">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sustainability Pillars */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="relative text-white p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Safety background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/95 via-green-500/85 to-green-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Safety</h3>
              <p className="text-sm leading-relaxed">
                We strive to ensure the highest level of protection for our employees, customers, and the community in which we operate by fostering an instinctually safe culture.
              </p>
            </div>
          </div>
          
          <div className="relative text-white p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
                alt="People background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/95 via-green-500/85 to-green-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">People</h3>
              <p className="text-sm leading-relaxed">
                Employees are our most important resource and are at the heart of everything we do. We strive every day to create the right environment for them to grow their skills, work collaboratively, and deliver our services at the highest quality to our customers.
              </p>
            </div>
          </div>
          
          <div className="relative text-white p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Environment background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/95 via-green-500/85 to-green-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Environment</h3>
              <p className="text-sm leading-relaxed">
                Working together, we strive to continually reduce our environmental impact by embracing advancements in sustainable technologies optimized by our core business practices and a highly skilled workforce.
              </p>
            </div>
          </div>
          
          <div className="relative text-white p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Business practices background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/95 via-green-500/85 to-green-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Business Practices</h3>
              <p className="text-sm leading-relaxed">
                Strong corporate governance and risk management practices underpin everything that we do, enabling us to serve our stakeholders in the most responsible manner.
              </p>
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

export default Sustainability;