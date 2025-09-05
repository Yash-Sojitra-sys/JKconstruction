import React, { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants/images';
import Header from '../components/Header';
import AlwaysModal from '../components/AlwaysModal';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
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
      <section className="py-12 bg-gray-100">
        <div className="w-full">
          <div className="px-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">Employee Health & Safety</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-12">
              At JKC, safety is more than rules and procedures – it's a mindset. We are focused on training, engaging and empowering all our employees to recognize and mitigate hazards, so everyone gets home safely.
            </p>
          </div>
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
                Headway, JKC's SMS, is the preferred path when mitigating risk<br/>
                on the job. Our multi-step strategy and intensive training empowers all<br/>
                our workforce to recognize and enforce instinctive safety techniques.
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
      <section className="py-8 bg-gray-100">
        <div className="w-full">
          <div className="px-20 text-center">
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
        </div>
      </section>

      {/* Training Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-20 py-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-5">Training</h3>
              <p className="text-gray-700 mb-5 text-base leading-relaxed">
                Our employees are actively engaged in training, reporting and auditing safety programs and protocols daily. Employee training is robust and begins at their onboarding.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6 text-base">
                <li>• New Hire Safety Orientation</li>
                <li>• Task and job specific documented safety qualification training</li>
                <li>• 3rd party safety certifications</li>
                <li>• Field mentoring with Qualified Person</li>
                <li>• Ongoing evaluation and continued education as identified via recurring documented field visits (JSO, Gatecheck, etc.)</li>
              </ul>
              <p className="text-gray-700 mb-3 font-semibold text-base">
                Job-focused safety training, for all construction and infrastructure job functions and work types:
              </p>
              <ul className="text-gray-700 space-y-2 text-base">
                <li>• Emergency work (Line strikes, natural disaster recovery, etc.)</li>
                <li>• Working around utility and power poles</li>
                <li>• Fire prevention</li>
                <li>• Stop work authority (for example: No reprisal policy)</li>
                <li>• Aerial construction</li>
                <li>• Underground construction</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="Safety training with workers on utility poles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Driver Safety Program through OSHA Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_5}
              alt="Safety workers with equipment and training"
              className="w-full h-full object-cover"
              style={{minHeight: '700px'}}
            />
          </div>
          <div className="bg-white">
            {/* Driver Safety Program */}
            <div className="py-4">
              <div className="px-20">
                <h3 className="text-3xl font-bold text-blue-600 mb-5">Driver Safety Program</h3>
                <ul className="text-gray-700 space-y-2 mb-6 text-base">
                  <li>• A unique, specialized program created to mitigate in-vehicle risks and hazards</li>
                  <li>• Nearly $6 million invested in best-in-class camera technology to enhance our driver safety program since Fiscal 2021</li>
                  <li>• Drivers receive classroom and on-the-road training focused on blending safe driving principles with modern in-cab video footage and telematic data</li>
                  <li>• Centralized driver Coaching Department</li>
                  <li>• Each driver works with a coach and reviews in-cab video for continuous learning</li>
                </ul>
                <button 
                  onClick={() => setIsBSafeModalOpen(true)}
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors font-semibold"
                >
                  B.S.A.F.E
                </button>
              </div>
            </div>
            
            {/* Safety Training */}
            <div className="py-4 bg-gray-100">
              <div className="px-20">
                <h3 className="text-3xl font-bold text-blue-600 mb-5">Safety Training</h3>
                <p className="text-gray-700 mb-5 text-base leading-relaxed">
                  Our learning management system provides visibility into the compliance and training needs of each worker as well as delivers critical training directly to their devices.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Internally developed digital training content is tailored to our industry's specific tasks, hazards and regulations.
                </p>
              </div>
            </div>
            
            {/* Training Facilities */}
            <div className="py-4">
              <div className="px-20">
                <h3 className="text-3xl font-bold text-blue-600 mb-5">Training Facilities</h3>
                <p className="text-gray-700 mb-5 text-base leading-relaxed">
                  JKC Industries owns several training facilities for various aspects of our business, including aerial wireline and underground construction, cable splicing and more.
                </p>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  Employee students are trained and qualified by our qualified instructors, where students receive hands-on training with equipment, utility pole farms and mock job sites.
                </p>
                <h4 className="text-2xl font-bold text-blue-600 mb-3">OSHA</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  To ensure the safety and wellness of all our team, at a minimum, JKC adopts and follows all OSHA standards and training regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Left Side Sections with Single Image */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-blue-950 text-white">
            {/* Structural Integrity & Safety */}
            <div className="py-4">
              <div className="px-20">
                <h3 className="text-3xl font-bold mb-5">Structural Integrity & Safety</h3>
                <h4 className="text-xl font-semibold mb-5">Safety Policies & Reporting</h4>
                <ul className="space-y-2 mb-6 text-base">
                  <li>• Executive leadership, company Presidents and Safety Leaders together create the Executive Safety Committee, developed to tackle the businesses most challenging safety issues</li>
                  <li>• Each subsidiary maintains a custom EHS manual that complies with all applicable regulatory requirements and focuses on its unique business and environmental hazards and challenges</li>
                  <li>• The JKC Safety Manual details all our safety requirements and expectations. We routinely review and update the manual to ensure we are operating in the safest manner. All employees are provided with a digital manual when hired, which is the foundation of our safety training program</li>
                  <li>• The JKC Safety Data Team supports the enterprise and subsidiary safety leaders with routine analysis and reports to help them manage their safety program. They also provide weekly and monthly reports that JKC management uses to track safety performance across the company</li>
                </ul>
                
                <h3 className="text-3xl font-bold mb-5">Supplier and Subcontractor Safety</h3>
                <p className="text-lg leading-relaxed">
                  In accordance with the Company's Supplier Code of Conduct, JKC expects Suppliers to apply robust health and safety policies and practices in their operations. Suppliers must provide a safe and healthy work environment in accordance with applicable standards, laws, rules and regulations, and must maintain a work environment that is free from violence and threatening, hostile, or abusive behavior. Suppliers should provide appropriate health and safety information and training to their employees. JKC expects Suppliers to minimize the impact of emergency events by proactively implementing business continuity plans and response procedures. Suppliers working on JKC's behalf must have procedures and systems to promptly prevent, manage, track and report all occupational injuries and illnesses and any hazardous or unsafe working conditions. Suppliers are expected to ensure compliance with JKC's Quality, Health, Safety & Environmental Policy.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_7}
              alt="Worker with SLOW sign and safety equipment"
              className="w-full h-full object-cover"
              style={{minHeight: '800px'}}
            />
          </div>
        </div>
      </section>

      {/* On-Site Safety Section - Right Side */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_8}
              alt="Road work and construction safety"
              className="w-full h-full object-cover"
              style={{minHeight: '1000px'}}
            />
          </div>
          <div className="bg-gray-400 text-white">
            <div className="py-4">
              <div className="px-20">
                <h3 className="text-3xl font-bold mb-5">On-Site Safety</h3>
                <p className="mb-5 text-base leading-relaxed">
                  We employ several on-site safety techniques to ensure we are continuously evaluating and minimizing our risk.
                </p>
              
                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">The Job Task Safety Assessment (JTSA)</h4>
                  <p className="text-base leading-relaxed mb-3">
                    This is the process that is performed by crews prior to beginning work on a job site to ensure that all crew members and other authorized personnel are aware of all environmental and task related hazards, and to create a Safety Action Plan to control the risk associated with each hazard.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Job Safety Observation (JSO)</h4>
                  <p className="text-base leading-relaxed">
                    This evaluation is completed by supervisors and managers every 45 days at a minimum.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Root Cause Analysis</h4>
                  <p className="text-base leading-relaxed">
                    Specialized proprietary tool developed to identify incident root causes.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Post-Incident Calls</h4>
                  <p className="text-base leading-relaxed">
                    Conversation aimed to identify the cause of an incident for future mitigation.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Jobsite Inspection</h4>
                  <p className="text-base leading-relaxed">
                    Performance of routine safety jobsite inspection for subcontractors.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Deviation Notification</h4>
                  <p className="text-base leading-relaxed">
                    Deviations found in job sites are emailed to the safety team as well as management for the purpose of coaching, training, tracking, and corrective action.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-xl font-bold mb-3">Daily Vehicle Inspection Record (DVIR)</h4>
                  <ul className="text-base space-y-2">
                    <li>• Drivers inspect their vehicles at every use, ensuring vehicles are safe to be driven on roadways</li>
                    <li>• DVIR application is an internally developed proprietary system that detects vehicle use and movement via GPS telematics to ensure inspections are being performed with each vehicle use</li>
                    <li>• DVIR defects result in immediately sending notifications to supervisors and fleet to ensure vehicle safety issues are resolved as soon as possible</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Gate Checks</h4>
                  <p className="text-base leading-relaxed">
                    Trucks, equipment and all PPE are checked quarterly by supervisors and safety professionals at each field location.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Safety;