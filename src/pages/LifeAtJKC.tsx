import React, { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const LifeAtJKC: React.FC = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleProgram = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center px-0">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_3}
            alt="Connect to a Career With a Purpose"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full text-center text-white px-1 mt-4">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">Connect to a Career With a Purpose</h1>
        </div>
      </section>

      {/* Connect to Your Next Opportunity Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Connect to Your Next Opportunity</h2>
        </div>
      </section>


      {/* Combined What we stand for and Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {/* What we stand for */}
              <div>
                <h2 className="text-4xl font-bold text-blue-600 mb-6">What we stand for</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our nationwide network of more than 15,000 employees shares a common vision of 
                  connecting America. Our ability to deliver to our customers and reconnect communities 
                  online relies on our engaged workforce. The values we hold at JKC define our culture.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  The values guide us in our dealings with one another, with our customers, and with the 
                  communities where we live.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Team members strive to treat each other with respect, value different perspectives and 
                  experiences; keep our and others' safety at the forefront of our minds, and uphold the 
                  highest ethical standards.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-4xl font-bold text-blue-600 mb-8">Values</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A value-based, purpose-driven, inclusive and diverse culture comes to life at each of our 
                    subsidiary companies across the country and also unites us as "One JKC".
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We take time to ensure these values inform every aspect of our operations and are 
                    embedded in systems, processes and policies to drive employee engagement, 
                    organizational performance, customer satisfaction and loyalty.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    What we do and how we do it is based on a set of <a href="#" className="text-blue-600 underline">six core values</a>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              {/* Professional Values Diagram - Even larger size */}
              <div className="relative w-[600px] h-[600px]">
                <img 
                  src="/images/Life at JKC/Photo1.png"
                  alt="Jay Krishna Construction Values Diagram"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Cards Section */}
      <section className="py-12 px-4" style={{ backgroundColor: '#dce5f3' }}>
        <div className="max-w-7xl mx-auto">
          {/* Title and Description above cards */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Talent Development and Growth</h2>
            <div className="w-full">
              <p className="text-gray-700 text-base px-0 mx-0 text-center">
                We provide opportunities for our people to learn and develop the skills and knowledge to be successful in their current role as well as to prepare them for future growth within the company.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* On the Job Training */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="On the Job Training"
                className="w-full h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">On the Job Training</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">On the Job Training</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    Continuous learning is the surest path to continuous success. Learn everyday from the best of the best. Our team is made up of both tenured professionals and newcomers alike. All our employees are provided with opportunities to enhance their skills and expand their expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Assistance Program */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Education Assistance Program"
                className="w-full h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Education Assistance Program</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Education Assistance Program</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    Employees with more than 6 months of service can participate. This program provides reimbursement for associate, bachelor's and master's degree programs for any employee. Participants are eligible for a maximum of $7,500 annually.
                  </p>
                </div>
              </div>
            </div>

            {/* Online Professional Development */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Online Professional Development"
                className="w-full h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Online Professional Development Resources and Training Programs</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Online Professional Development Resources and Training Programs</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    Our entire team has access to LinkedIn Learning's Library of over 10,000 professional development courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Where We Operate</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Not only do we have over 40 operating divisions and over 500 offices and warehouses 
                located across the US, JKC has adopted a hybrid work model for many positions, which 
                means you can take your job anywhere, coast to coast.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[500px] h-[400px]">
                <img 
                  src="/images/Life at JKC/Photo2.png"
                  alt="Where We Operate Map"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_4}
                alt="Work Environment"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We believe in fostering a work environment where our people are treated with respect, 
                can be productive, and are empowered to thrive personally and professionally. As a 
                company that operates across communities where we live in, work in, and serve a wide variety of 
                communities and it is important to us that our workforce reflects these communities.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our people bring their own experiences, backgrounds and talents to work every day. Our 
                commitment is to provide an engaging environment that attracts the very best talent and 
                provides opportunities for them to develop and grow with us.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We hold ourselves accountable to one another and treat others with respect. This respect 
                takes the form of our commitment to fair safety and employment conditions, as well as the 
                fundamental protections that empower our diverse company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Career Development Section */}
      <section className="py-16 px-2 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Early Career Development</h2>
          <p className="text-gray-700 text-lg mb-12 px-1">
            Just starting out? Not sure what path you want to take? Our Early Career Development is designed to guide both new graduates and new entrants in the workforce and support them right from the start of their career.
          </p>
          
          {/* Expandable Sections */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleProgram('internship')}
              >
                <h3 className="text-2xl font-bold text-gray-800">JKC Summer Internship Program</h3>
                <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  {expandedProgram === 'internship' ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </div>
              {expandedProgram === 'internship' && (
                <div className="mt-6 pt-4 border-t border-gray-200 text-left">
                  <p className="text-gray-700 text-base leading-relaxed text-left">
                    Targeted at providing meaningful internship experiences to students studying technology, finance, and business, the program provides students with specific projects to work on during their internship experience while learning about JKC and our business.
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleProgram('2020')}
              >
                <h3 className="text-2xl font-bold text-gray-800">20/20 Program</h3>
                <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  {expandedProgram === '2020' ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </div>
              {expandedProgram === '2020' && (
                <div className="mt-6 pt-4 border-t border-gray-200 text-left">
                  <p className="text-gray-700 text-base leading-relaxed text-left">
                    JKC IT has partnered with Palm Beach State College to offer students studying technology the opportunity for practical work experience as they finish their degree program. This program has been successful in generating talent for our IT staff; we have 11 employees working with us who have graduated from the program since its launch in 2018.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-5 gap-4 items-center">
          <div className="text-white text-center flex flex-col justify-center md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 leading-tight">Connecting You to Possibilities</h2>
            <p className="text-xl mb-8">Join Our Talent Network!</p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('/talent-network', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-base transition-colors flex items-center gap-2"
              >
                Connect with us!
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative md:col-span-3 md:pr-0 md:pl-8">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Career opportunities"
              className="w-4/5 h-80 object-cover rounded-lg shadow-lg ml-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeAtJKC;