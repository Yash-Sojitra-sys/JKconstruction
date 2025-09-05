// API service utility for JKC Construction website
const API_BASE_URL = import.meta.env.VITE_SUPABASE_URL 
  ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`
  : 'https://hvkzmojaosvlyttquhpg.supabase.co/functions/v1';

// Debug logging for development only
if (import.meta.env.DEV) {
  console.log('API_BASE_URL:', API_BASE_URL);
  console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing');
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  captchaVerified: boolean;
}

export interface TalentNetworkData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  jobCategory: string;
  experience: string;
  availability: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

class ApiService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo';
      
      const url = `${API_BASE_URL}${endpoint}`;
      if (import.meta.env.DEV) {
        console.log('Making request to:', url);
        console.log('Request options:', { ...options, headers: { 'Authorization': 'Bearer [HIDDEN]', 'apikey': '[HIDDEN]' } });
      }
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
          'apikey': anonKey,
          ...options.headers,
        },
        ...options,
      });

      if (import.meta.env.DEV) {
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      }
      
      const data = await response.json();
      if (import.meta.env.DEV) {
        console.log('Response data:', data);
      }
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }

  // Contact form submission
  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    return this.makeRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Test email configuration
  async testEmailConfig(): Promise<ApiResponse> {
    return this.makeRequest('/contact/test');
  }

  // Join talent network
  async joinTalentNetwork(data: TalentNetworkData): Promise<ApiResponse<{ message: string }>> {
    return this.makeRequest('/talent-network', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Alias for backward compatibility
  async submitTalentNetwork(data: TalentNetworkData): Promise<ApiResponse<{ message: string }>> {
    return this.joinTalentNetwork(data);
  }

  // Admin authentication functions
  async adminLogin(email: string, password: string): Promise<ApiResponse<{ user: any }>> {
    return this.makeRequest('/admin-auth', {
      method: 'POST',
      body: JSON.stringify({ action: 'login', email, password }),
    });
  }

  async adminRegister(email: string, password: string, name: string): Promise<ApiResponse<{ message: string }>> {
    return this.makeRequest('/admin-auth', {
      method: 'POST',
      body: JSON.stringify({ action: 'register', email, password, name }),
    });
  }

  async adminUpdatePassword(email: string, currentPassword: string, newPassword: string): Promise<ApiResponse<{ message: string }>> {
    return this.makeRequest('/admin-auth', {
      method: 'POST',
      body: JSON.stringify({ action: 'update-password', email, currentPassword, newPassword }),
    });
  }

  // Admin data functions
  async getContactSubmissions(): Promise<ApiResponse<any[]>> {
    return this.makeRequest('/admin-data?type=contact-submissions', {
      method: 'GET',
    });
  }

  async getTalentNetworkSubmissions(): Promise<ApiResponse<any[]>> {
    return this.makeRequest('/admin-data?type=talent-network', {
      method: 'GET',
    });
  }

  async getAdminStats(): Promise<ApiResponse<any>> {
    return this.makeRequest('/admin-data?type=stats', {
      method: 'GET',
    });
  }

  // Get job listings
  async getJobs(): Promise<ApiResponse<any[]>> {
    return this.makeRequest('/careers/jobs');
  }

  // Get specific job details
  async getJobDetails(jobId: number): Promise<ApiResponse<any>> {
    return this.makeRequest(`/careers/jobs/${jobId}`);
  }

  // Upload resume
  async uploadResume(formData: FormData): Promise<ApiResponse> {
    return this.makeRequest('/upload/resume', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.makeRequest('/health');
  }
}

export const apiService = new ApiService();
export default apiService;
