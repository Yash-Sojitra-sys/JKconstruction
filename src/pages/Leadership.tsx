import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      image: IMAGES.TEAM.CEO,
      bio: "With over 25 years of experience in construction and infrastructure development, Rajesh leads JKC with a vision for sustainable growth and innovation."
    },
    {
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      image: IMAGES.TEAM.PROJECT_MANAGER,
      bio: "Priya oversees all operational aspects of JKC, ensuring project delivery excellence and maintaining our high standards of quality and safety."
    },
    {
      name: "Amit Patel",
      position: "Chief Technology Officer",
      image: IMAGES.TEAM.ENGINEER,
      bio: "Amit drives technological innovation at JKC, implementing cutting-edge construction technologies and digital transformation initiatives."
    },
    {
      name: "Sunita Gupta",
      position: "Chief Financial Officer",
      image: IMAGES.TEAM.SUPERVISOR,
      bio: "Sunita manages JKC's financial strategy and operations, ensuring sustainable growth and optimal resource allocation across all projects."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Leadership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white mt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Leadership</h1>
          <p className="text-xl md:text-2xl opacity-90">Visionary Leaders Driving Excellence</p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Leadership Team</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of industry expertise, innovative thinking, and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{leader.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Leadership Philosophy</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Our leadership approach is built on collaboration, innovation, and a deep commitment to our people and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Visionary Thinking</h3>
              <p className="text-gray-700 leading-relaxed">
                We anticipate future trends and challenges, positioning JKC at the forefront of industry innovation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Collaborative Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in empowering our teams and fostering a culture of collaboration and mutual respect.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Ethical Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain the highest ethical standards in all our business practices and decision-making processes.
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

export default Leadership;