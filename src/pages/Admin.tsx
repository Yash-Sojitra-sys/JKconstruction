import React, { useState, useEffect } from 'react';
import {
  Mail,
  Lock,
  Users,
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  X,
  Save,
  User,
} from 'lucide-react';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  project: string;
  status: 'Active' | 'Pending' | 'Completed';
  createdAt: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  startDate: string;
  endDate: string;
  budget: string;
  description: string;
}

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [activeTab, setActiveTab] = useState('clients');
  const [loginError, setLoginError] = useState('');
  const [showChangeCredentials, setShowChangeCredentials] = useState(false);
  const [showSettingsTab, setShowSettingsTab] = useState(false);
  const [credentialRevealCount, setCredentialRevealCount] = useState(0);
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [credentialError, setCredentialError] = useState('');

  const AUTHORIZED_USERS = ['sojitrayash2005@gmail.com', 'rutvivadi7@gmail.com'];

  const [adminCredentials, setAdminCredentials] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('adminCredentials') || 'null');
      return saved && saved.email && saved.password
        ? saved
        : { email: '', password: '', isDefault: true };
    } catch {
      return { email: '', password: '', isDefault: true };
    }
  });

  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      company: 'Kumar Industries',
      project: 'Office Complex',
      status: 'Active',
      createdAt: '2025-01-15',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 87654 32109',
      company: 'Sharma Enterprises',
      project: 'Residential Tower',
      status: 'Pending',
      createdAt: '2025-01-10',
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Metro Rail Extension',
      client: 'Government of Maharashtra',
      status: 'In Progress',
      startDate: '2025-01-01',
      endDate: '2025-12-31',
      budget: '₹500 Crores',
      description: 'Extension of metro rail line from Andheri to Virar',
    },
    {
      id: 2,
      title: 'Smart City Infrastructure',
      client: 'Pune Municipal Corporation',
      status: 'Planning',
      startDate: '2025-03-01',
      endDate: '2026-02-28',
      budget: '₹300 Crores',
      description: 'Complete smart city infrastructure development',
    },
  ]);

  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    status: 'Pending' as const,
  });

  const [newProject, setNewProject] = useState({
    title: '',
    client: '',
    status: 'Planning' as const,
    startDate: '',
    endDate: '',
    budget: '',
    description: '',
  });

  useEffect(() => {
    try {
      const savedUser = JSON.parse(sessionStorage.getItem('adminUser') || 'null');
      if (savedUser && AUTHORIZED_USERS.includes(savedUser.email)) {
        setUser(savedUser);
        setIsLoggedIn(true);
      }
    } catch {
      sessionStorage.removeItem('adminUser');
    }
  }, []);

  const handleHeaderClick = () => {
    setCredentialRevealCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowSettingsTab((prevShow) => !prevShow);
        return 0;
      }
      return newCount;
    });
  };

  const handleNextClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    
    if (!emailInput.trim()) {
      setLoginError('Please enter your email or phone number.');
      return;
    }
    
    setLoginError('');
    setIsTransitioning(true);
    
    // Add delay for loading animation
    setTimeout(() => {
      setShowPasswordPage(true);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleLoginSubmit = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();

    // Check if email is authorized
    if (!AUTHORIZED_USERS.includes(emailInput)) {
      setLoginError('Email not authorized. Only authorized users can access this admin panel.');
      return;
    }

    // Store credentials for settings if first time login
    if (adminCredentials.isDefault || !adminCredentials.email) {
      const newCredentials = {
        email: emailInput,
        password: passwordInput,
        isDefault: false,
      };
      setAdminCredentials(newCredentials);
      localStorage.setItem('adminCredentials', JSON.stringify(newCredentials));
    }

    const userData: GoogleUser = {
      email: emailInput,
      name: emailInput === 'sojitrayash2005@gmail.com' ? 'Sojitra Yash' : 'Rutvi Vadi',
      picture: 'https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=ffffff&size=40',
    };

    setUser(userData);
    setIsLoggedIn(true);
    setLoginError('');
    setEmailInput('');
    setPasswordInput('');
    setShowPasswordPage(false);

    sessionStorage.setItem('adminUser', JSON.stringify(userData));
  };

  const handleCredentialChangeSubmit = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();

    if (!newEmail || !newPassword || !confirmPassword) {
      setCredentialError('All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setCredentialError('Passwords do not match.');
      return;
    }

    if (!newEmail.includes('@') || newEmail.length < 5) {
      setCredentialError('Please enter a valid email address.');
      return;
    }

    if (newPassword.length < 6) {
      setCredentialError('Password must be at least 6 characters long.');
      return;
    }

    const newCredentials = {
      email: newEmail,
      password: newPassword,
      isDefault: false,
    };

    setAdminCredentials(newCredentials);
    localStorage.setItem('adminCredentials', JSON.stringify(newCredentials));

    setShowChangeCredentials(false);
    setCredentialError('');
    setNewEmail('');
    setNewPassword('');
    setConfirmPassword('');

    alert('Admin credentials updated successfully!');
  };

  const handleCredentialReset = () => {
    if (confirm('Are you sure you want to reset credentials? You will be logged out.')) {
      const defaultCredentials = {
        email: '',
        password: '',
        isDefault: true,
      };

      setAdminCredentials(defaultCredentials);
      localStorage.setItem('adminCredentials', JSON.stringify(defaultCredentials));

      setIsLoggedIn(false);
      setUser(null);
      setShowChangeCredentials(false);
      setShowSettingsTab(false);
      setCredentialRevealCount(0);
      setLoginError('');
      setEmailInput('');
      setPasswordInput('');
      setShowPasswordPage(false);

      sessionStorage.removeItem('adminUser');

      alert('Credentials reset. Please login again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setLoginError('');
    setShowChangeCredentials(false);
    setEmailInput('');
    setPasswordInput('');
    setShowPasswordPage(false);
    setShowSettingsTab(false);
    setCredentialRevealCount(0);
    sessionStorage.removeItem('adminUser');
  };

  const handleBackToEmail = () => {
    setShowPasswordPage(false);
    setPasswordInput('');
    setLoginError('');
    setShowPassword(false);
  };

  const handleJKCClick = () => {
    window.open('https://jk-construction.vercel.app/', '_blank');
  };

  const handlePrivacyClick = () => {
    window.open('https://policies.google.com/privacy', '_blank');
  };

  const handleTermsClick = () => {
    window.open('https://policies.google.com/terms', '_blank');
  };

  const handleCreateAccountClick = () => {
    window.open('mailto:admin@jkconstruction.com?subject=Request%20for%20Admin%20Access&body=Hello,%0A%0AI%20would%20like%20to%20request%20admin%20access%20to%20the%20JKC%20Admin%20Panel.%0A%0AThank%20you.', '_blank');
  };

  const handleForgotEmailClick = () => {
    window.open('mailto:admin@jkconstruction.com?subject=Forgot%20Admin%20Email&body=Hello,%0A%0AI%20have%20forgotten%20my%20admin%20email%20for%20the%20JKC%20Admin%20Panel.%0A%0APlease%20help%20me%20recover%20it.%0A%0AThank%20you.', '_blank');
  };

  const handleForgotPasswordClick = () => {
    window.open('mailto:admin@jkconstruction.com?subject=Forgot%20Admin%20Password&body=Hello,%0A%0AI%20have%20forgotten%20my%20admin%20password%20for%20the%20JKC%20Admin%20Panel.%0A%0APlease%20help%20me%20recover%20it.%0A%0AThank%20you.', '_blank');
  };

  const handleHelpClick = () => {
    window.open('mailto:support@jkconstruction.com?subject=JKC%20Admin%20Panel%20Help&body=Hello,%0A%0AI%20need%20help%20with%20the%20JKC%20Admin%20Panel.%0A%0APlease%20describe%20your%20issue%20here.%0A%0AThank%20you.', '_blank');
  };

  const handleAddClient = () => {
    if (!newClient.name || !newClient.email || !newClient.phone || !newClient.company || !newClient.project) {
      alert('Please fill in all required fields.');
      return;
    }

    const client: Client = {
      id: Math.max(...clients.map((c) => c.id), 0) + 1,
      ...newClient,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setClients([...clients, client]);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      status: 'Pending',
    });
    setShowAddClientModal(false);
    alert('Client added successfully!');
  };

  const handleAddProject = () => {
    if (
      !newProject.title ||
      !newProject.client ||
      !newProject.startDate ||
      !newProject.endDate ||
      !newProject.budget ||
      !newProject.description
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    const project: Project = {
      id: Math.max(...projects.map((p) => p.id), 0) + 1,
      ...newProject,
    };

    setProjects([...projects, project]);
    setNewProject({
      title: '',
      client: '',
      status: 'Planning',
      startDate: '',
      endDate: '',
      budget: '',
      description: '',
    });
    setShowAddProjectModal(false);
    alert('Project added successfully!');
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setNewClient({
      name: client.name,
      email: client.email,
      phone: client.phone,
      company: client.company,
      project: client.project,
      status: client.status,
    });
    setShowAddClientModal(true);
  };

  const handleSaveEditedClient = () => {
    if (!editingClient) return;

    const updatedClients = clients.map((client) =>
      client.id === editingClient.id ? { ...client, ...newClient } : client
    );

    setClients(updatedClients);
    setEditingClient(null);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      status: 'Pending',
    });
    setShowAddClientModal(false);
    alert('Client updated successfully!');
  };

  const handleDeleteClient = (id: number) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter((client) => client.id !== id));
      alert('Client deleted successfully!');
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setNewProject({
      title: project.title,
      client: project.client,
      status: project.status,
      startDate: project.startDate,
      endDate: project.endDate,
      budget: project.budget,
      description: project.description,
    });
    setShowAddProjectModal(true);
  };

  const handleSaveEditedProject = () => {
    if (!editingProject) return;

    const updatedProjects = projects.map((project) =>
      project.id === editingProject.id ? { ...project, ...newProject } : project
    );

    setProjects(updatedProjects);
    setEditingProject(null);
    setNewProject({
      title: '',
      client: '',
      status: 'Planning',
      startDate: '',
      endDate: '',
      budget: '',
      description: '',
    });
    setShowAddProjectModal(false);
    alert('Project updated successfully!');
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((project) => project.id !== id));
      alert('Project deleted successfully!');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'In Progress':
        return 'bg-green-100 text-green-800';
      case 'Pending':
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'On Hold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (showChangeCredentials) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-105">
          <div className="text-center mb-8">
            <img
              src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png"
              alt="JKC Logo"
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900">Update Admin Credentials</h1>
            <p className="text-gray-600">Jay Krishna Construction</p>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                Update your admin credentials. These will be stored for reference in the settings panel.
              </p>
            </div>
          </div>

          {credentialError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{credentialError}</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter admin email"
                  onKeyPress={(e) => e.key === 'Enter' && handleCredentialChangeSubmit(e)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Password * (min 6 characters)
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter password"
                  onKeyPress={(e) => e.key === 'Enter' && handleCredentialChangeSubmit(e)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Confirm password"
                  onKeyPress={(e) => e.key === 'Enter' && handleCredentialChangeSubmit(e)}
                />
              </div>
            </div>

            <button
              onClick={handleCredentialChangeSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium transform hover:scale-105"
            >
              Save Credentials
            </button>
            <button
              onClick={() => setShowChangeCredentials(false)}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    if (showPasswordPage) {
      return (
        <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
          <div className="w-full max-w-[900px]">
            <div className="bg-white border border-[#dadce0] rounded-[25px] shadow-[0_4px_20px_0_rgba(0,0,0,.1)] flex flex-col h-[500px] relative overflow-hidden">
              {/* Loading bar at the top of the white container */}
              {isTransitioning && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-100 z-10">
                  <div 
                    className="h-full bg-[#1a73e8]"
                    style={{
                      animation: 'googleLoading 1s ease-out forwards'
                    }}
                  ></div>
                </div>
              )}
              
              {/* Top row with grey line separator */}
              <div className="p-4 flex items-center">
                <img
                  src="https://i.ibb.co/fdnS7tfG/icons8-google-48.png"
                  alt="Google Logo"
                  className="h-[40px] mr-4"
                />
                <span className="text-[18px] text-[#202124]">Sign in with Google</span>
              </div>
              <div className="border-t border-gray-300"></div>
              {/* Main content row */}
              <div className="p-10 flex flex-col md:flex-row items-start justify-between flex-1">
                <div className="mb-8 md:mb-0 md:mr-16">
                  <img
                    src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png"
                    alt="JKC Logo"
                    className="h-[60px] mx-0 mb-6"
                  />
                  <h1 className="text-[36px] font-roboto text-[#202124] mb-4">Welcome</h1>
                  <div className="flex items-center mb-8">
                    <div className="w-[32px] h-[32px] bg-gray-400 rounded-full flex items-center justify-center mr-3">
                      <User className="w-[18px] h-[18px] text-white" />
                    </div>
                    <span className="text-[16px] text-[#202124] font-medium">{emailInput}</span>
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  {loginError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{loginError}</p>
                    </div>
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full max-w-[380px] px-8 py-[16px] border border-[#000000] rounded-[8px] focus:outline-none text-[18px] text-[#000000] mb-6 placeholder-[#000000] placeholder-opacity-80"
                    placeholder="Enter your password"
                    onKeyPress={(e) => e.key === 'Enter' && handleLoginSubmit(e)}
                  />
                  <div className="flex items-center mb-6">
                    <div 
                      className={`w-[18px] h-[18px] border-2 rounded-sm cursor-pointer mr-3 flex items-center justify-center transition-all duration-200 ${
                        showPassword 
                          ? 'bg-[#1a73e8] border-[#1a73e8]' 
                          : 'bg-gray-200 border-gray-400 hover:border-gray-600'
                      }`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword && (
                        <svg className="w-[12px] h-[12px] text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      )}
                    </div>
                    <span 
                      className={`text-[16px] cursor-pointer transition-colors duration-200 ${
                        showPassword ? 'text-[#1a73e8]' : 'text-gray-600 hover:text-gray-800'
                      }`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      Show password
                    </span>
                  </div>
                  <p className="text-[16px] text-[#5f6368] leading-6 mb-6">
                    Before using this app, you can review jkconstruction.com's<br />
                    <button onClick={handlePrivacyClick} className="text-[#0047ab] underline hover:text-[#003087] transition-colors">privacy policy</button> and{' '}
                    <button onClick={handleTermsClick} className="text-[#0047ab] underline hover:text-[#003087] transition-colors">terms of service</button>.
                  </p>
                  <div className="flex justify-end items-center space-x-4">
                    <button onClick={handleForgotPasswordClick} className="text-[16px] text-[#1565c0] font-medium hover:underline hover:text-[#0d47a1] transition-colors">
                      Forgot password?
                    </button>
                    <button
                      onClick={handleLoginSubmit}
                      className="bg-[#0047ab] text-white px-8 py-3 rounded-[20px] text-[16px] font-medium min-w-[100px] hover:bg-[#003087] hover:shadow-[0_1px_2px_0_rgba(60,64,67,.3),0_1px_3px_1px_rgba(60,64,67,.15)] transition-all transform hover:scale-105"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8 text-[16px] text-[#5f6368]">
              <select className="bg-transparent border-none text-[16px] text-[#5f6368] focus:outline-none">
                <option>English (United States)</option>
              </select>
              <div className="flex space-x-8">
                <button onClick={handleHelpClick} className="hover:underline transition-colors">
                  Help
                </button>
                <button onClick={handlePrivacyClick} className="hover:underline transition-colors">
                  Privacy
                </button>
                <button onClick={handleTermsClick} className="hover:underline transition-colors">
                  Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
        <div className="w-full max-w-[900px]">
          <div className="bg-white border border-[#dadce0] rounded-[25px] shadow-[0_4px_20px_0_rgba(0,0,0,.1)] flex flex-col h-[400px] relative overflow-hidden">
            {/* Loading bar at the top of the white container */}
            {isTransitioning && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-100 z-10">
                <div 
                  className="h-full bg-[#1a73e8]"
                  style={{
                    animation: 'googleLoading 1s ease-out forwards'
                  }}
                ></div>
              </div>
            )}
            
            {/* Top row with grey line separator */}
            <div className="p-4 flex items-center">
              <img
                src="https://i.ibb.co/fdnS7tfG/icons8-google-48.png"
                alt="Google Logo"
                className="h-[40px] mr-4"
              />
              <span className="text-[18px] text-[#202124]">Sign in with Google</span>
            </div>
            <div className="border-t border-gray-300"></div>
            {/* Main content row */}
            <div className="p-10 flex flex-col md:flex-row items-start justify-between">
              <div className="mb-8 md:mb-0 md:mr-16">
                <img
                  src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png"
                  alt="JKC Logo"
                  className="h-[60px] mx-0 mb-6"
                />
                <h1 className="text-[36px] font-roboto text-[#202124] mb-4">Sign in</h1>
                <p className="text-[18px] text-[#202124] mb-8">
                  to continue to <button onClick={handleJKCClick} className="text-[#0047ab] hover:underline hover:text-[#003087] transition-colors">jkconstruction.com</button>
                </p>
              </div>
              <div className="w-full md:w-auto">
                {loginError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{loginError}</p>
                  </div>
                )}
                <input
                  type="text"
                  id="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full max-w-[380px] px-8 py-[16px] border border-[#000000] rounded-[8px] focus:outline-none text-[18px] text-[#000000] mb-6 placeholder-[#000000] placeholder-opacity-80"
                  placeholder="Email or phone"
                  onKeyPress={(e) => e.key === 'Enter' && handleNextClick(e)}
                />
                <button onClick={handleForgotEmailClick} className="text-[18px] text-[#0047ab] hover:underline block mb-4 hover:text-[#003087] transition-colors">
                  Forgot email?
                </button>
                <p className="text-[16px] text-[#5f6368] leading-6 mb-6">
                  Before using this app, you can review jkconstruction.com's<br />
                  <button onClick={handlePrivacyClick} className="text-[#0047ab] underline hover:text-[#003087] transition-colors">privacy policy</button> and{' '}
                  <button onClick={handleTermsClick} className="text-[#0047ab] underline hover:text-[#003087] transition-colors">terms of service</button>.
                </p>
                <div className="flex justify-end items-center space-x-4">
                  <button onClick={handleCreateAccountClick} className="text-[16px] text-[#0047ab] font-medium hover:underline hover:text-[#003087] transition-colors">
                    Create account
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="bg-[#0047ab] text-white px-8 py-3 rounded-[20px] text-[16px] font-medium min-w-[100px] hover:bg-[#003087] hover:shadow-[0_1px_2px_0_rgba(60,64,67,.3),0_1px_3px_1px_rgba(60,64,67,.15)] transition-all transform hover:scale-105"
                    disabled={isTransitioning}
                  >
                    {isTransitioning ? 'Loading...' : 'Next'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8 text-[16px] text-[#5f6368]">
            <select className="bg-transparent border-none text-[16px] text-[#5f6368] focus:outline-none">
              <option>English (United States)</option>
            </select>
            <div className="flex space-x-8">
              <button onClick={handleHelpClick} className="hover:underline transition-colors">
                Help
              </button>
              <button onClick={handlePrivacyClick} className="hover:underline transition-colors">
                Privacy
              </button>
              <button onClick={handleTermsClick} className="hover:underline transition-colors">
                Terms
              </button>
            </div>
          </div>
        </div>
        
        <style>
          {`
            @keyframes googleLoading {
              0% { width: 0%; }
              25% { width: 30%; }
              50% { width: 65%; }
              75% { width: 85%; }
              100% { width: 100%; }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png"
              alt="JKC Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1
                className="text-xl font-bold text-gray-900 cursor-pointer"
                onClick={handleHeaderClick}
                title="Click 5 times to access settings"
              >
                JKC Admin Panel
              </h1>
              <p className="text-sm text-gray-600">Jay Krishna Construction</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3">
                <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-600">{user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('clients')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'clients'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Clients
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'projects'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Briefcase className="w-5 h-5 inline mr-2" />
              Projects
            </button>
            {showSettingsTab && (
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Eye className="w-5 h-5 inline mr-2" />
                Settings
              </button>
            )}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'clients' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
              <button
                onClick={() => setShowAddClientModal(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Client</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{client.name}</div>
                          <div className="text-sm text-gray-500">{client.company}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.email}</div>
                        <div className="text-sm text-gray-500">{client.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {client.project}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            client.status
                          )}`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditClient(client)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteClient(client.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
              <button
                onClick={() => setShowAddProjectModal(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">Client: {project.client}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <span className="font-medium text-gray-900">Start Date:</span>
                      <p className="text-gray-600">{project.startDate}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">End Date:</span>
                      <p className="text-gray-600">{project.endDate}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Budget:</span>
                      <p className="text-gray-600">{project.budget}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showSettingsTab && activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Settings</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Login Credentials</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logged in Email</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{adminCredentials.email || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Login Password</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{adminCredentials.password || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Authorized Users</label>
                  <div className="text-sm text-gray-900 bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-medium text-blue-800 mb-2">Only these emails can access the admin panel:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>sojitrayash2005@gmail.com</li>
                      <li>rutvivadi7@gmail.com</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => setShowChangeCredentials(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Update Credentials</span>
                  </button>

                  <button
                    onClick={handleCredentialReset}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Clear Stored Credentials</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {showAddClientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingClient ? 'Edit Client' : 'Add New Client'}
              </h3>
              <button
                onClick={() => {
                  setShowAddClientModal(false);
                  setEditingClient(null);
                  setNewClient({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    project: '',
                    status: 'Pending',
                  });
                }}
                className="text-gray-600 hover:text-gray-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Client name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={newClient.email}
                  onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  value={newClient.phone}
                  onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                <input
                  type="text"
                  value={newClient.company}
                  onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project *</label>
                <input
                  type="text"
                  value={newClient.project}
                  onChange={(e) => setNewClient({ ...newClient, project: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newClient.status}
                  onChange={(e) =>
                    setNewClient({ ...newClient, status: e.target.value as 'Active' | 'Pending' | 'Completed' })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddClientModal(false);
                  setEditingClient(null);
                  setNewClient({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    project: '',
                    status: 'Pending',
                  });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={editingClient ? handleSaveEditedClient : handleAddClient}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingClient ? 'Update' : 'Add'} Client</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button
                onClick={() => {
                  setShowAddProjectModal(false);
                  setEditingProject(null);
                  setNewProject({
                    title: '',
                    client: '',
                    status: 'Planning',
                    startDate: '',
                    endDate: '',
                    budget: '',
                    description: '',
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Project title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client *</label>
                <input
                  type="text"
                  value={newProject.client}
                  onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Client name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newProject.status}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      status: e.target.value as 'Planning' | 'In Progress' | 'Completed' | 'On Hold',
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Planning">Planning</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                <input
                  type="date"
                  value={newProject.startDate}
                  onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Start date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                <input
                  type="date"
                  value={newProject.endDate}
                  onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="End date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget *</label>
                <input
                  type="text"
                  value={newProject.budget}
                  onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Budget amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Project description"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddProjectModal(false);
                  setEditingProject(null);
                  setNewProject({
                    title: '',
                    client: '',
                    status: 'Planning',
                    startDate: '',
                    endDate: '',
                    budget: '',
                    description: '',
                  });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={editingProject ? handleSaveEditedProject : handleAddProject}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingProject ? 'Update' : 'Add'} Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;