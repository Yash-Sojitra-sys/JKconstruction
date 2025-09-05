import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();

  const jobData: { [key: string]: any } = {
    '1': {
      title: "Supervisor Telecom Construction Underground",
      location: "New Braunfels, Texas",
      category: "Construction",
      workLocation: "Field",
      positionType: "Regular Full-Time",
      reqId: "86733",
      description: "What you'll do:",
      responsibilities: [
        "Manage in house and subcontracted resources performing underground outside plant (OSP) construction by coordinating construction efforts with drill crews, project scheduling, and cost tracking.",
        "Participate in the recruiting, hiring, and training of in-house employees and subcontractor underground crews.",
        "To be the primary point of contact related to state-wide underground construction.",
        "Track the required deliverables from data collection to review and distribution.",
        "Monitor quality of work product and compliance with contract terms.",
        "Oversee the general maintenance and care of company underground equipment and assets.",
        "Ensure the use of proper construction techniques/standards and adherence to safety standards."
      ]
    },
    '2': {
      title: "Senior Analyst, Risk and Sustainability",
      location: "West Palm Beach, Florida",
      category: "Business",
      workLocation: "Office",
      positionType: "Regular Full-Time",
      reqId: "86734",
      description: "What you'll do:",
      responsibilities: [
        "Develop and implement risk management strategies across the organization.",
        "Conduct comprehensive risk assessments and analysis.",
        "Create sustainability initiatives and programs.",
        "Monitor regulatory compliance and industry standards.",
        "Prepare detailed reports and presentations for senior management.",
        "Collaborate with cross-functional teams on risk mitigation strategies."
      ]
    },
    '3': {
      title: "Lead Financial Auditor",
      location: "West Palm Beach, Florida",
      category: "Finance",
      workLocation: "Office",
      positionType: "Regular Full-Time",
      reqId: "86735",
      description: "What you'll do:",
      responsibilities: [
        "Lead comprehensive financial audits across multiple business units.",
        "Develop audit plans and testing procedures.",
        "Review financial statements and internal controls.",
        "Identify areas for process improvement and cost optimization.",
        "Ensure compliance with accounting standards and regulations.",
        "Mentor junior audit staff and provide training."
      ]
    },
    '4': {
      title: "Warehouse Supervisor",
      location: "Aurora, Oregon",
      category: "Operations",
      workLocation: "Warehouse",
      positionType: "Regular Full-Time",
      reqId: "86736",
      description: "What you'll do:",
      responsibilities: [
        "Supervise daily warehouse operations and staff.",
        "Manage inventory control and stock management systems.",
        "Ensure safety protocols and procedures are followed.",
        "Coordinate shipping and receiving activities.",
        "Optimize warehouse layout and workflow processes.",
        "Maintain accurate records and reporting."
      ]
    },
    '5': {
      title: "Manager Human Resources",
      location: "West Palm Beach, Florida",
      category: "HR",
      workLocation: "Office",
      positionType: "Regular Full-Time",
      reqId: "86737",
      description: "What you'll do:",
      responsibilities: [
        "Develop and implement HR policies and procedures.",
        "Manage recruitment and talent acquisition processes.",
        "Handle employee relations and conflict resolution.",
        "Oversee performance management and development programs.",
        "Ensure compliance with employment laws and regulations.",
        "Lead organizational development initiatives."
      ]
    }
  };

  const job = jobData[jobId || '1'];

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Job Not Found</h1>
          <p className="text-gray-600">The job you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* Job Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-600 mb-4">{job.title}</h1>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Locations:</span> {job.location}</p>
                <p><span className="font-semibold">Categories:</span> {job.category}</p>
                <p><span className="font-semibold">Work Location:</span> {job.workLocation}</p>
                <p><span className="font-semibold">Position Type:</span> {job.positionType}</p>
                <p><span className="font-semibold">Req ID:</span> {job.reqId}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Refer
              </button>
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">X</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">in</span>
            </div>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">@</span>
            </div>
          </div>
        </div>

        {/* Job Alert Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">✉</span>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-gray-700">Get future jobs matching this search</span>
            </div>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">Login</button>
              <span className="text-gray-400">or</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Register</button>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{job.description}</h2>
          <ul className="space-y-4">
            {job.responsibilities.map((responsibility: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
