import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectionSection = () => {
  const navigate = useNavigate();

  const handleNavigationClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 text-left leading-tight">Connection with Intention</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Our team's performance and innovation is trusted by several of the country's most prominent brands on a daily basis, and we are constantly striving to meet and exceed expectations. Our mission, <strong>To Connect People</strong>, guides our strategy to ensure we deliver for our people, communities and partners.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow min-h-[380px] flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8 mt-8 text-center">Safety</h3>
          <p className="text-base sm:text-lg text-gray-500 mb-8 leading-8 flex-grow px-4">
            We believe safety is more than rules and procedures – it's a mindset. Headpath program is our preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers workers to recognize and enforce natural safety techniques, so they always get home safe.
          </p>
          <div className="flex justify-center mt-6 mb-4">
            <button 
              onClick={() => handleNavigationClick('/safety')}
              className="bg-blue-600 text-white px-3 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
            >
              <span className="px-3">Safety</span>
              <div className="ml-2 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow min-h-[380px] flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8 mt-8 text-center">People</h3>
          <p className="text-base sm:text-lg text-gray-500 mb-8 leading-8 flex-grow px-4">
            Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
          </p>
          <div className="flex justify-center mt-6 mb-4">
            <button 
              onClick={() => handleNavigationClick('/connect-to-our-careers')}
              className="bg-blue-600 text-white px-3 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
            >
              <span className="px-3">People</span>
              <div className="ml-2 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow min-h-[380px] flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8 mt-8 text-center">Our Reach</h3>
          <p className="text-base sm:text-lg text-gray-500 mb-8 leading-8 flex-grow px-4">
           The reach of our expansive group of companies is built on our deep relationships with leading developers and government bodies. Dedicated to safety and quality, we have the partners to meet the needs of every client, no matter the scope or deadline. Our innovation ensures solutions that exceed expectations.
          </p>
          <div className="flex justify-center mt-6 mb-4">
            <button 
              onClick={() => handleNavigationClick('/our-company')}
              className="bg-blue-600 text-white px-3 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors inline-flex whitespace-nowrap text-sm sm:text-base"
            >
              <span className="px-3">Our Family of Companies</span>
              <div className="ml-2 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ConnectionSection;