import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { Shield, Heart, DollarSign, PiggyBank, Baby, BookOpen, CreditCard, Zap, Phone, Monitor, Users, Calendar, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Benefits: React.FC = () => {
  const navigate = useNavigate();
  const [currentHealthSlide, setCurrentHealthSlide] = useState(0);
  const [currentFinancialSlide, setCurrentFinancialSlide] = useState(0);
  const [currentLifestyleSlide, setCurrentLifestyleSlide] = useState(0);

  const healthCards = [
    {
      title: "Health Savings Account",
      description: "You can use your HSA to pay for medical needs such as doctor visits, eyeglasses, hearing aids, and over-the-counter drugs. And because your balance carries over every year, you can also use your account to build a nest egg for health care expenses when you retire.",
      icon: <Shield className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Medical, Dental, Vision",
      description: "Your health is important, and we're committed to provide you with a variety of comprehensive plans and programs to meet your health needs.",
      icon: <Heart className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Surgery Plus",
      description: "An optional service that provides a dedicated care advocate, who will refer you to a network of Surgeons of Excellence, that may save you money on non-emergency surgical procedures.",
      icon: <Zap className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Teledoc",
      description: "You deserve to access the care you need whenever and wherever you need it. Connect with board-certified doctors by phone or video 24/7/365.",
      icon: <Phone className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Flexible Spending",
      description: "Contribute pre-tax money to cover eligible medical expenses.",
      icon: <DollarSign className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Wellness Programs", 
      description: "We offer a variety of wellness programs to help you maintain a healthy lifestyle and work-life balance.",
      icon: <Heart className="w-12 h-12 text-gray-600" />
    }
  ];

  const nextHealthSlide = () => {
    setCurrentHealthSlide((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= healthCards.length ? 0 : nextIndex;
    });
  };

  const prevHealthSlide = () => {
    setCurrentHealthSlide((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? healthCards.length - 1 : prevIndex;
    });
  };

  const financialCards = [
    {
      title: "401K",
      description: "Your money works harder for you. Save money for your retirement – all your before-tax contributions and any money your contributions earn grow tax-deferred until you withdraw them.",
      icon: <PiggyBank className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Dependent Care",
      description: "Contribute pre-tax money to cover eligible dependent care services that are required while you (and your spouse) work.",
      icon: <Baby className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Parental Leave",
      description: "At JKC we understand the importance of a parents' time with their newly born or adopted child and offer paid leave for parents.",
      icon: <Heart className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Education Assistance",
      description: "We support your efforts to further you education by providing tuition reimbursement assistance when you pursue higher education in the form of an associates, bachelors, or masters-level degree.",
      icon: <BookOpen className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Insurance",
      description: "Life Insurance, Critical Illness/Accident Insurance, Short- and Long-Term Disability Coverage. Enjoy extra peace of mind knowing that you can support your family in the case of unexpected life event.",
      icon: <Shield className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Employee Stock Purchase",
      description: "Employees may enroll in our Employee Stock Purchase plan to purchase common stock of JKC Industries, Inc.",
      icon: <CreditCard className="w-12 h-12 text-gray-600" />
    }
  ];

  const nextFinancialSlide = () => {
    setCurrentFinancialSlide((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= financialCards.length ? 0 : nextIndex;
    });
  };

  const prevFinancialSlide = () => {
    setCurrentFinancialSlide((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? financialCards.length - 1 : prevIndex;
    });
  };

  const lifestyleCards = [
    {
      title: "Remote Work",
      description: "JKC has adopted a hybrid work model for many positions. We expect that our physical office space footprint will be reduced, and many of our remaining facilities will be transformed into centers of collaboration.",
      icon: <Monitor className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Employee Assistance Program",
      description: "Sometimes we know what a day brings, and sometimes we're challenged by the unexpected. The Employee Assistance Program provides access to a range of support and therapeutic services.",
      icon: <Users className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Paid Time Off and Holidays",
      description: "Enjoy accrued time off that increases with tenure and paid company holidays.",
      icon: <Calendar className="w-12 h-12 text-gray-600" />
    },
    {
      title: "Retailer Discounts!",
      description: "Enjoy several different retailer discounts!",
      icon: <ShoppingBag className="w-12 h-12 text-gray-600" />
    }
  ];

  const nextLifestyleSlide = () => {
    setCurrentLifestyleSlide((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= lifestyleCards.length ? 0 : nextIndex;
    });
  };

  const prevLifestyleSlide = () => {
    setCurrentLifestyleSlide((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? lifestyleCards.length - 1 : prevIndex;
    });
  };


  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <ServicesSection />
      <section className="relative h-[70vh] flex items-center justify-center px-0">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_3}
            alt="Employee benefits"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full text-center text-white px-1 mt-4">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight whitespace-nowrap">Connect to a Full Suite of Exceptional Benefits</h1>
        </div>
      </section>

      {/* Connect to Your Next Opportunity Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Connect to Your Next Opportunity</h2>
        </div>
      </section>

      {/* Benefits Description */}
      <section className="py-12 px-2 bg-white">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 leading-tight">
            Enjoy a full suite of exceptional first-class benefits as a member of the JKC family.
          </h2>
          <p className="text-gray-700 text-base leading-tight">
            Serving Gujarat, India from more than 500 field offices with a talented workforce of over 5,000 employees, we remain unparalleled in scope and scale.
          </p>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-40" style={{ backgroundColor: '#dce5f3' }}>
        <div className="max-w-full mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Image with Health Text */}
            <div className="relative lg:col-span-1 ml-12">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Health Benefits"
                className="w-[110%] h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center">Health</h3>
              </div>
            </div>

            {/* Right Cards Carousel */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentHealthSlide * 36}%)` }}
                >
                  {healthCards.map((card, index) => (
                    <div key={index} className="w-[36%] flex-shrink-0 px-2 mr-4">
                      <div className="bg-white p-6 rounded-lg shadow-sm h-auto min-h-[400px]">
                        <div className="pt-8 mb-8">
                          <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                            {React.cloneElement(card.icon, { className: "w-8 h-8 text-gray-600" })}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h4>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed pb-8">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          
          {/* Navigation Arrows - Centered Below */}
          <div className="flex justify-center mt-20 space-x-52">
            <button 
              onClick={prevHealthSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextHealthSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Financial Benefits Section */}
      <section className="py-40 bg-white">
        <div className="max-w-full mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Cards Carousel */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentFinancialSlide * 36}%)` }}
                >
                  {financialCards.map((card, index) => (
                    <div key={index} className="w-[36%] flex-shrink-0 px-2 mr-4">
                      <div className="bg-white p-6 rounded-lg shadow-sm h-auto min-h-[400px] border border-gray-200">
                        <div className="pt-8 mb-8">
                          <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                            {React.cloneElement(card.icon, { className: "w-8 h-8 text-gray-600" })}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h4>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed pb-8">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image with Financial Text */}
            <div className="relative lg:col-span-1 mr-12">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Financial Benefits"
                className="w-[110%] h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center">Financial</h3>
              </div>
            </div>

          </div>
          
          {/* Navigation Arrows - Centered Below */}
          <div className="flex justify-center mt-20 space-x-52">
            <button 
              onClick={prevFinancialSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextFinancialSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits Section */}
      <section className="py-40" style={{ backgroundColor: '#dce5f3' }}>
        <div className="max-w-full mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Image with Lifestyle Text */}
            <div className="relative lg:col-span-1 ml-12">
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Lifestyle Benefits"
                className="w-[110%] h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center">Lifestyle</h3>
              </div>
            </div>

            {/* Right Cards Carousel */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentLifestyleSlide * 36}%)` }}
                >
                  {lifestyleCards.map((card, index) => (
                    <div key={index} className="w-[36%] flex-shrink-0 px-2 mr-4">
                      <div className="bg-white p-6 rounded-lg shadow-sm h-auto min-h-[400px]">
                        <div className="pt-8 mb-8">
                          <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm flex-shrink-0">
                            {React.cloneElement(card.icon, { className: "w-8 h-8 text-gray-600" })}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h4>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed pb-8">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          
          {/* Navigation Arrows - Centered Below */}
          <div className="flex justify-center mt-20 space-x-52">
            <button 
              onClick={prevLifestyleSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextLifestyleSlide}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
                onClick={() => navigate('/talent-network')}
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

export default Benefits;