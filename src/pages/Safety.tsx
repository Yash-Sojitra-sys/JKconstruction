import React, { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants/images';
import Header from '../components/Header';
import AlwaysModal from '../components/AlwaysModal';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Safety: React.FC = () => {
  const [isAlwaysModalOpen, setIsAlwaysModalOpen] = useState(false);
  const [isBSafeModalOpen, setIsBSafeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_3}
            alt="Construction safety with workers and equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold">Safety</h1>
        </div>
      </section>

      {/* Employee Health & Safety Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">Employee Health & Safety</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-12">
            At JKC, safety is more than rules and procedures – it's a mindset. We are focused on training, engaging and empowering all our employees to recognize and mitigate hazards, so everyone gets home safely.
          </p>
        </div>
      </section>

      {/* SMS Sections - Continuous Background */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="text-center text-white" style={{backgroundColor: '#8ea1ac'}}>
            <div className="px-20 py-8">
              <div className="mb-96"></div>
              <h3 className="text-4xl font-bold mb-6 leading-tight">
                JKC's Safety<br/>
                Management System<br/>
                (SMS)
              </h3>
              <p className="text-lg mb-8 leading-relaxed">
                Headway, JKC's SMS, is the preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers all our workforce to recognize and enforce instinctive safety techniques.
              </p>
              <div className="flex justify-center mb-16">
                <img 
                  src={IMAGES.SAFETY.IMAGE_1}
                  alt="Safety Management System"
                  className="w-full max-w-7xl h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-white">
            {/* Commit & Lead */}
            <div className="py-4" style={{minHeight: '300px'}}>
              <div className="px-20">
                <div className="mb-3"></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Commit & Lead</h3>
                <p className="text-gray-700 mb-3 text-base leading-relaxed">
                  Our executive and managerial leadership demonstrate their commitment to our safety program and supporting initiatives through various tools and actions, for example:
                </p>
                <ul className="text-gray-700 space-y-1 text-base">
                  <li>• Executive safety committee</li>
                  <li>• Monthly safety calls and annual safety management conferences</li>
                  <li>• Budget and resource allocation</li>
                  <li>• Leadership Engagement Program</li>
                  <li>• Safety & Operations Forums</li>
                </ul>
              </div>
            </div>
            
            {/* Train & Engage */}
            <div className="py-4" style={{minHeight: '300px'}}>
              <div className="px-20">
                <div className="mb-3"></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Train & Engage</h3>
                <p className="text-gray-700 mb-3 text-base leading-relaxed">
                  Effective, consistent and deliberate communication is a critical component of our safety program. As an integral part of our safety process, all our team members, whether in the office or in the field, are required to undergo mandatory safety training. They are actively engaged in training, reporting and auditing safety programs and protocols daily.
                </p>
                <ul className="text-gray-700 space-y-1 text-base">
                  <li>• Short-Service Employee Program</li>
                  <li>• Training Network, our enterprise resource sharing program</li>
                  <li>• Safety non-negotiables, foundational to our safety culture</li>
                  <li>• Subsidiary safety committees</li>
                  <li>• Stop work authority without reprisal</li>
                  <li>• Feedback loop, dedicated hotline</li>
                  <li>• Consistent communications and routine meetings</li>
                  <li>• Pulse Surveys</li>
                  <li>• Headway Recognition Program</li>
                </ul>
              </div>
            </div>
            
            {/* Identify & Mitigate */}
            <div className="py-4">
              <div className="px-20">
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Identify & Mitigate</h3>
                <p className="text-gray-700 mb-3 text-base leading-relaxed">
                  Appropriate risk mitigation involves identifying potential risks to a project and implementing strategies to help prevent or reduce the risk. We employ several techniques through our on-site safety protocols to ensure we are continuously evaluating and minimizing our risk.
                </p>
              </div>
            </div>
            
            {/* Evaluate & Improve */}
            <div className="py-4">
              <div className="px-20">
                <div className="mb-3"></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Evaluate & Improve</h3>
                <p className="text-gray-700 mb-3 text-base leading-relaxed">
                  Cultivating a culture of accountability supports our vision of instinctual safety. We are duty driven to support team members, provide consistent feedback and training and drive responsibility through education and rewards systems.
                </p>
                <ul className="text-gray-700 space-y-1 text-base">
                  <li>• Job Safety Observation (JSO)</li>
                  <li>• SMS Improvement Plan ensure continuous improvement of the safety programs</li>
                  <li>• Task-Based Gap Analysis</li>
                  <li>• Learning Teams</li>
                  <li>• Leading & Lagging Indicator Metrics Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A.L.W.A.Y.S. Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6"></div>
          <h2 className="text-5xl font-bold text-blue-600 mb-5">A.L.W.A.Y.S.</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            We believe that to create a best-in-class safety program, all employees must commit to a core list of safeguards. The safeguards are designed to protect against the most common causes of severe injury. They are foundational to our safety culture.
          </p>
          <button 
            onClick={() => setIsAlwaysModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
          >
            CLICK TO VIEW
          </button>
          <div className="mb-6"></div>
        </div>
      </section>





      <AlwaysModal 
        isOpen={isAlwaysModalOpen} 
        onClose={() => setIsAlwaysModalOpen(false)} 
      />
      
      {/* B.S.A.F.E. Modal */}
      {isBSafeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsBSafeModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="p-8">
              <iframe 
                src="/images/Saftey/BESAFE.pdf"
                className="w-full h-[80vh] border-0 rounded-lg"
                title="B.S.A.F.E. Safety Guidelines"
              />
            </div>
          </div>
        </div>
      )}

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Safety;