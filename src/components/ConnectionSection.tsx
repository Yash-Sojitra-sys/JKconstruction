import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectionSection = () => {
  const navigate = useNavigate();

  const handleNavigationClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 text-left leading-tight">Connection with Intention</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
          Our team's performance and innovation is trusted by several of the country's most prominent brands on a daily basis, and we are constantly striving to meet and exceed expectations. Our mission, <strong><em>To Connect People</em></strong>, guides our strategy to ensure we deliver for our people, communities and partners.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Safety</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
            We believe safety is more than rules and procedures – it's a mindset. Headpath program is our preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers workers to recognize and enforce natural safety techniques, so they always get home safe.
          </p>
          <button 
            onClick={() => handleNavigationClick('/safety')}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
          >
            <span>Safety</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">People</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
            Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
          </p>
          <button 
            onClick={() => handleNavigationClick('/life-at-jkc')}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
          >
            <span>People</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Our Reach</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
           The reach of our expansive group of companies is built on our deep relationships with leading developers and government bodies. Dedicated to safety and quality, we have the partners to meet the needs of every client, no matter the scope or deadline. Our innovation ensures solutions that exceed expectations.
          </p>
          <button 
            onClick={() => handleNavigationClick('/our-family-of-companies')}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
          >
            <span>Our Family of Companies</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ConnectionSection;