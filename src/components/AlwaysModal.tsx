import React from 'react';
import { X } from 'lucide-react';

interface AlwaysModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlwaysModal: React.FC<AlwaysModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/images/JKCLogo.PNG"
                  alt="JKC Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-green-500 text-white px-8 py-3 rounded-r-lg font-bold text-2xl tracking-wider">
              A.L.W.A.Y.S.
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Safeguards Text */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">SAFEGUARDS</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe that to create a best-in-class safety program, all employees must commit to a core list of safeguards. The safeguards are designed to protect against the most common causes of severe injury. They are foundational to our safety culture. All employees should know and consistently commit to these standards.
              </p>
            </div>

            {/* Right Side - A.L.W.A.Y.S. Flow */}
            <div className="relative">
              {/* Assessment */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  A
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Assessment</h3>
                  <p className="text-gray-700">Complete a job task safety assessment prior to each task.</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👷</span>
                  </div>
                </div>
              </div>

              {/* Lifting */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  L
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Lifting</h3>
                  <p className="text-gray-700">Use proper lifting technique and ask for help when needed.</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                </div>
              </div>

              {/* Work zone protection */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  W
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Work zone protection</h3>
                  <p className="text-gray-700">Set up proper work zone protection before beginning work.</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚧</span>
                  </div>
                </div>
              </div>

              {/* Appropriate PPE */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  A
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Appropriate PPE</h3>
                  <p className="text-gray-700">Wear appropriate PPE for the task.</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦺</span>
                  </div>
                </div>
              </div>

              {/* You have stop work authority */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  Y
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">You have stop work authority</h3>
                  <p className="text-gray-700">Stop the job when there are unaddressed hazards present. You have "stop work authority."</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✋</span>
                  </div>
                </div>
              </div>

              {/* Special care for high-risk tasks */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  S
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Special care for high-risk tasks</h3>
                  <p className="text-gray-700">Use special care when performing "high-risk" tasks (working aloft, excavation, enclosed/confined space, energized hazards).</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🪜</span>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                  </marker>
                </defs>
                <path
                  d="M 80 80 Q 200 100 80 160 Q 200 180 80 240 Q 200 260 80 320 Q 200 340 80 400 Q 200 420 80 480"
                  stroke="#22c55e"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  markerEnd="url(#arrowhead)"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysModal;