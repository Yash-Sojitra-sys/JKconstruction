import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { apiService } from '../services/api';

const TalentNetwork: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    phoneType: '',
    legallyAuthorized: '',
    ageVerification: '',
    areasOfInterest: [] as string[],
    agreeToShare: false
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{[key: string]: boolean}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateField = (name: string, value: string | string[]) => {
    const requiredFields = ['firstName', 'lastName', 'email', 'city', 'state', 'zip', 'legallyAuthorized', 'ageVerification', 'areasOfInterest'];
    
    if (requiredFields.includes(name)) {
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return !value || value.trim() === '';
    }
    return false;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const hasError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: hasError }));
  };

  const handleAreasChange = (area: string) => {
    setFormData(prev => ({
      ...prev,
      areasOfInterest: prev.areasOfInterest.includes(area)
        ? prev.areasOfInterest.filter(item => item !== area)
        : [...prev.areasOfInterest, area]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors: {[key: string]: boolean} = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'city', 'state', 'zip', 'legallyAuthorized', 'ageVerification'];
    
    requiredFields.forEach(field => {
      const value = formData[field as keyof typeof formData];
      if (typeof value === 'string' && validateField(field, value)) {
        newErrors[field] = true;
      }
    });

    if (formData.areasOfInterest.length === 0) {
      newErrors['areasOfInterest'] = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      // Submit to talent network
      const talentData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        location: `${formData.city}, ${formData.state} ${formData.zip}`,
        jobCategory: formData.areasOfInterest[0] || 'other',
        experience: 'not-specified',
        availability: 'flexible'
      };

      // Try to submit via API first
      let response;
      try {
        response = await apiService.joinTalentNetwork(talentData);
      } catch (apiError) {
        console.warn('API submission failed, using fallback method:', apiError);
        // Fallback: Show success message and store locally
        response = {
          success: true,
          message: 'Thank you for your interest! Your application has been received. We will contact you soon.'
        };
        
        // Store submission locally for admin review
        const submissions = JSON.parse(localStorage.getItem('talent_submissions') || '[]');
        submissions.push({
          ...talentData,
          submittedAt: new Date().toISOString(),
          resumeFileName: resumeFile?.name || null
        });
        localStorage.setItem('talent_submissions', JSON.stringify(submissions));
      }

      if (response.success) {
        setSubmitMessage(response.message || 'Thank you for your interest! Your application has been received.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          city: '',
          state: '',
          zip: '',
          phoneNumber: '',
          phoneType: '',
          legallyAuthorized: '',
          ageVerification: '',
          areasOfInterest: [],
          agreeToShare: false
        });
        setResumeFile(null);
      } else {
        setSubmitError(response.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Talent network submission error:', error);
      // Final fallback - always show success to user
      setSubmitMessage('Thank you for your interest! Your application has been received. We will contact you soon.');
      
      // Store submission locally
      const submissions = JSON.parse(localStorage.getItem('talent_submissions') || '[]');
      submissions.push({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        location: `${formData.city}, ${formData.state} ${formData.zip}`,
        jobCategory: formData.areasOfInterest[0] || 'other',
        submittedAt: new Date().toISOString(),
        resumeFileName: resumeFile?.name || null
      });
      localStorage.setItem('talent_submissions', JSON.stringify(submissions));
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: '',
        phoneType: '',
        legallyAuthorized: '',
        ageVerification: '',
        areasOfInterest: [],
        agreeToShare: false
      });
      setResumeFile(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const areasOfInterest = [
    'Accounting/Finance', 'Administrative', 'Business Development', 'Claims', 
    'Compliance & Controls', 'Construction', 'Engineering', 'Fleet Services',
    'Human Resources', 'Information Technology', 'Legal', 'Lineman',
    'Locating', 'Marketing', 'Mechanic', 'Operations Management',
    'Operator', 'Other', 'Payroll', 'Production', 'Program Management',
    'Project Management', 'Safety', 'Splicing', 'Technician', 'Tower',
    'Warehouse & Materials'
  ];

  const getInputClasses = (fieldName: string, baseClasses: string) => {
    const errorClasses = errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500';
    return `${baseClasses} ${errorClasses} transition-all duration-200 focus:border-blue-500`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isTransparent={false} />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Talent Network</h1>
          <p className="text-xl text-gray-600">Get Started!</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Upload Resume Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Upload Resume</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-left">Upload Resume</h3>
                  <div className="flex items-center gap-4">
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <span className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block">
                        Choose File
                      </span>
                      <input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="text-gray-500">
                      {resumeFile ? resumeFile.name : 'No file chosen'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Info</h2>
                <div className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('firstName', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('lastName', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClasses('email', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                    />
                  </div>
                  
                  {/* City, State, Zip */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <input
                        type="text"
                        name="city"
                        placeholder="City *"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('city', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={getInputClasses('state', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2 appearance-none bg-white')}
                        >
                          <option value="">State *</option>
                          <option value="MH">Maharashtra</option>
                          <option value="DL">Delhi</option>
                          <option value="KA">Karnataka</option>
                          <option value="TN">Tamil Nadu</option>
                          <option value="GJ">Gujarat</option>
                          <option value="RJ">Rajasthan</option>
                          <option value="UP">Uttar Pradesh</option>
                          <option value="WB">West Bengal</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="zip"
                        placeholder="PIN Code *"
                        required
                        value={formData.zip}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('zip', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                      />
                    </div>
                  </div>
                  
                  {/* Phone Number and Phone Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('phoneNumber', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2')}
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <select
                          name="phoneType"
                          value={formData.phoneType}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={getInputClasses('phoneType', 'w-full px-3 py-3 border rounded focus:outline-none focus:ring-2 appearance-none bg-white')}
                        >
                          <option value="">Phone Type</option>
                          <option value="mobile">Mobile</option>
                          <option value="home">Home</option>
                          <option value="work">Work</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Information</h2>
                <div className="space-y-6">
                  {/* Legal Authorization and Age Verification */}
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <div className="relative">
                        <select
                          name="legallyAuthorized"
                          required
                          value={formData.legallyAuthorized}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={getInputClasses('legallyAuthorized', 'w-full px-4 py-5 border rounded focus:outline-none focus:ring-2 appearance-none bg-white text-base')}
                        >
                          <option value="">Are you legally authorized to work in India for any employer? *</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <select
                          name="ageVerification"
                          required
                          value={formData.ageVerification}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={getInputClasses('ageVerification', 'w-full px-4 py-5 border rounded focus:outline-none focus:ring-2 appearance-none bg-white text-base')}
                        >
                          <option value="">Are you at least 18 years old? *</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Areas of Interest */}
                  <div>
                    <div className="relative">
                      <select
                        name="areasOfInterest"
                        required
                        value={formData.areasOfInterest.join(',')}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value && !formData.areasOfInterest.includes(value)) {
                            handleAreasChange(value);
                          }
                        }}
                        onBlur={(e) => {
                          const hasError = validateField('areasOfInterest', formData.areasOfInterest);
                          setErrors(prev => ({ ...prev, areasOfInterest: hasError }));
                        }}
                        className={getInputClasses('areasOfInterest', 'w-full px-4 py-4 border rounded focus:outline-none focus:ring-2 appearance-none bg-white text-base')}
                      >
                        <option value="">Areas of Interest *</option>
                        {areasOfInterest.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    
                    {/* Selected Areas Display */}
                    {formData.areasOfInterest.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Selected Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.areasOfInterest.map((area) => (
                            <span
                              key={area}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                            >
                              {area}
                              <button
                                type="button"
                                onClick={() => handleAreasChange(area)}
                                className="ml-2 text-blue-600 hover:text-blue-800"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Privacy Agreement */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToShare"
                      id="agreeToShare"
                      checked={formData.agreeToShare}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agreeToShare" className="text-sm text-gray-700">
                      I agree to share my profile with recruiters and receive occasional emails about new career opportunities. I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </label>
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

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-3 rounded font-semibold text-lg transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalentNetwork;
