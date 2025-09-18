import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';
import { apiService } from '../services/api';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleServiceClick = (serviceName: string) => {
    const serviceRoutes: { [key: string]: string } = {
      'wireline': '/wireline-construction',
      'wireless': '/wireless-construction',
      'locating': '/locating-and-sue',
      'engineering': '/engineering',
      'fulfillment': '/fulfillment',
      'maintenance': '/maintenance-and-amc',
      'project-management': '/project-management'
    };
    
    const route = serviceRoutes[serviceName] || '/what-we-do';
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isRobotChecked) {
      setSubmitError('Please complete the CAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const data = await apiService.submitContactForm({
        ...formData,
        captchaVerified: isRobotChecked
      });

      if (data.success) {
        setSubmitMessage(data.message);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
        setIsRobotChecked(false);
      } else {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitError('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_3}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">How can we help you?</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">(Required)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">(Required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type <span className="text-red-500">(Required)</span>
                  </label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    required
                  >
                    <option value="">General Inquiry</option>
                    <option value="project">Project Consultation</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">(Required)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-4">CAPTCHA</div>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className={`w-6 h-6 border-2 rounded flex items-center justify-center bg-white cursor-pointer transition-colors ${
                            isRobotChecked ? 'border-green-500 bg-green-50' : 'border-gray-400 hover:border-blue-500'
                          }`}
                          onClick={() => setIsRobotChecked(!isRobotChecked)}
                        >
                          <svg 
                            className={`w-4 h-4 text-green-500 transition-opacity ${
                              isRobotChecked ? 'opacity-100' : 'opacity-0'
                            }`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-base font-medium text-gray-700">I'm not a robot</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img 
                          src="/images/Captcha/recaptcha.png"
                          alt="reCAPTCHA"
                          className="w-16 h-16 object-contain mb-1"
                        />
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                          <span>Privacy</span>
                          <span>-</span>
                          <span>Terms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{submitMessage}</p>
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{submitError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
            
            {/* Right Column - Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jay Krishna Construction</h3>
                  <p className="text-gray-700">
                    716, Millenium Business Hub<br />
                    Sarthana Jakatnaka Varachha Main Road<br />
                    Surat, Gujarat - 395006
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700">+91 9374701899</p>
                </div>
                
                <div>
                  <a href="mailto:jaykrishna.surat@gmail.com" className="text-blue-600 hover:underline">
                    jaykrishna.surat@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 text-left leading-tight">Services</h2>
          
          {/* First Row - 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 mb-2">
            {/* Wireline Construction */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireline')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Wireline Construction"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Wireline Construction</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireline Construction</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Across the nation, we complete construction projects with our workers' talents augmented by our enterprise technology tools.</p>
                </div>
              </div>
            </div>

            {/* Wireless Construction */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('wireless')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Wireless Construction"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Wireless Construction</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireless Construction</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC is an expert in wireless communications construction. We complete projects of any size, from macro cells to small cells, for 4G and 5G networks.</p>
                </div>
              </div>
            </div>

            {/* Locating */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('locating')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Locating"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Locating</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Locating</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our locating services provide the skilled workforce necessary to ensure all underground utilities are identified before work begins.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 4 Services */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
            {/* Engineering */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('engineering')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Engineering"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Engineering</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Engineering</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our engineering teams survey and design facilities for copper, coaxial and fiber networks.</p>
                </div>
              </div>
            </div>

            {/* Fulfillment */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('fulfillment')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Fulfillment"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Fulfillment</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Fulfillment</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides fulfillment services including complete in-home and drop installations, as well as repair and maintenance of broadband networks.</p>
                </div>
              </div>
            </div>

            {/* Maintenance & Restoration */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('maintenance')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_3}
                alt="Maintenance & Restoration"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Maintenance & Restoration</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Maintenance & Restoration</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides ongoing maintenance and service for telecommunication networks across the country, as well as emergency restoration services when required.</p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => handleServiceClick('project-management')}>
              <img 
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Project Management"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Project Management</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-500/40 via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Project Management</h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Expert project management services ensuring successful delivery of complex telecommunications and infrastructure projects on time and within budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;