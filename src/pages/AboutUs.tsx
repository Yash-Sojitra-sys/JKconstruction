import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Connection With Intention</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">About Us</h2>
              <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                Dycom Industries, Inc. is a leading provider of specialty contracting services to 
                the telecommunications infrastructure and utility industries throughout the 
                United States. Since our incorporation in the State of Florida in 1969, we have 
                expanded our scope and service offerings organically and through acquisitions. 
                Today, Dycom is made up of more than 40 operating companies that serve a 
                diverse customer base across all 50 states from hundreds of field offices. Our 
                geographic presence and substantial workforce provide the scale needed to 
                quickly execute on opportunities to service existing and new customers 
                throughout urban and rural America.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                Dycom's family of companies supply telecommunications providers with a 
                comprehensive portfolio of specialty services, including program management; 
                planning; engineering and design; aerial, underground, and wireless construction; 
                maintenance; and fulfillment services. Additionally, we provide underground 
                facility locating services for various utilities, including telecommunications 
                providers, and other construction and maintenance services for electric and gas 
                utilities. Dycom supplies the labor, tools, and equipment necessary to provide 
                these services to our customers.
              </p>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative w-full h-[600px]">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_4}
                  alt="About Us"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="w-full">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Our Vision */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_1}
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="relative z-10 text-center text-white px-8">
                <h2 className="text-6xl font-bold mb-8">Our Vision</h2>
                <p className="text-2xl font-light">To connect Gujarat, India.</p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0">
                <img 
                  src={IMAGES.GALLERY.CONSTRUCTION_2}
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/70"></div>
              </div>
              <div className="relative z-10 text-center text-white px-8">
                <h2 className="text-6xl font-bold mb-8">Our Mission</h2>
                <div className="space-y-4">
                  <p className="text-2xl font-light">Serve customers skillfully.</p>
                  <p className="text-2xl font-light">Deliver results with discipline.</p>
                  <p className="text-2xl font-light">Accountable in all we do.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-full mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Values</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">People</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our people are at the heart of everything we do. They are our most important resource. Every day, we strive 
                    to create and maintain a healthy environment in which they can grow their skills, work collaboratively, and 
                    deliver high quality services to our customers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Safety</h3>
                  <p className="text-gray-700 leading-relaxed">
                    An instinctually safe culture is our goal, ensuring our teams, and everyone who comes in contact with our 
                    work, gets home safely each day.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Integrity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We hold ourselves accountable to one another and treat others with respect. We are honest, forthright, 
                    and ethical in the work we perform and deliver every day.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We continually challenge ourselves to improve our performance and solve problems, driving innovation, 
                    informed but unconstrained by our past experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Customer Focus</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Customers are at the forefront of everything we do. By understanding their needs and exceeding their 
                    expectations, we strive to be valued partners, delivering the high quality our customers require and 
                    building enduring relationships.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Sustainability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We manage all aspects of our operations with accountability, understanding the economic, environmental, 
                    and social impacts our operations create for our people, stakeholders and the communities in which we work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                <img 
                  src="/images/About Us/Image1.png"
                  alt="Our Values Diagram"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;