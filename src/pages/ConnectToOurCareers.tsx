import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const ConnectToOurCareers: React.FC = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      id: 1,
      title: "Supervisor Telecom Construction Underground",
      location: "New Braunfels, Texas",
      category: "Construction"
    },
    {
      id: 2,
      title: "Senior Analyst, Risk and Sustainability",
      location: "West Palm Beach, Florida",
      category: "Business"
    },
    {
      id: 3,
      title: "Lead Financial Auditor",
      location: "West Palm Beach, Florida",
      category: "Finance"
    },
    {
      id: 4,
      title: "Warehouse Supervisor",
      location: "Aurora, Oregon",
      category: "Operations"
    },
    {
      id: 5,
      title: "Manager Human Resources",
      location: "West Palm Beach, Florida",
      category: "HR"
    }
  ];

  const handleApplyNow = (jobId: number) => {
    // This will open a new page for each job
    window.open(`/job-details/${jobId}`, '_blank');
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
      <section className="bg-blue-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Connect to Your Next Opportunity</h2>
        </div>
      </section>

      {/* Combined What we stand for and Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {/* What we stand for */}
              <div>
                <h2 className="text-4xl font-bold text-blue-600 mb-6">What we stand for</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our nationwide network of more than 5,000 employees shares a common vision of 
                  connecting Gujarat, India. Our ability to deliver to our customers and reconnect communities 
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
                    subsidiary companies across the country and also unites us as "WORKING TOGETHER at JKC".
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We take time to ensure these values inform every aspect of our operations and are 
                    embedded in systems, processes and policies to drive employee engagement, 
                    organizational performance, customer satisfaction and loyalty.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    What we do and how we do it is based on a set of six core values.
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


      {/* Work Environment Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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


      {/* Jobs Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Check Out These Jobs!</h2>
            <p className="text-lg text-gray-700 mb-2">
              Our breadth of services means there's a position sure to fit your skillset, whether you're just starting out in construction, or a seasoned business professional.
            </p>
            <p className="text-lg text-gray-600 font-bold">
              We offer many remote opportunities giving you the flexibility to work from anywhere.
            </p>
          </div>

          {/* Job Listings - Horizontal Rows */}
          <div className="space-y-4 mb-12">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border-b border-gray-200 p-6 flex items-center hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                <h3 className="text-xl font-bold text-gray-700 flex-1">{job.title}</h3>
                <p className="text-gray-600 flex-shrink-0 mr-8">{job.location}</p>
                <button
                  onClick={() => handleApplyNow(job.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded font-bold transition-colors flex-shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Explore All Opportunities Button */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Explore All Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section style={{ backgroundColor: '#dce5f3' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-600 mb-12">Job Categories just for you</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Support Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Corporate Support"
                className="w-full h-80 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Corporate Support</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Corporate Support</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our Corporate team provides expertise in the following areas: program and project management, safety, fleet and business development.</p>
                </div>
              </div>
            </div>

            {/* Operations Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Operations"
                className="w-full h-80 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Operations</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Operations</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our Operations team provides expertise in the following areas: program and project management, safety, fleet and business development.</p>
                </div>
              </div>
            </div>

            {/* Technology Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Technology"
                className="w-full h-80 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Technology</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Technology</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our Technology team provides expertise in the following areas: program and project management, safety, fleet and business development.</p>
                </div>
              </div>
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
                onClick={() => {
                  navigate('/talent-network');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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

export default ConnectToOurCareers;