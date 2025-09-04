import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for career applications
const careerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // limit each IP to 3 applications per hour
  message: {
    success: false,
    message: 'Too many job applications. Please try again later.'
  }
});

// Email transporter setup
const createTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }

  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validation rules for talent network
const talentNetworkValidation = [
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  body('location')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Location must be between 2 and 100 characters'),
  
  body('jobCategory')
    .isIn(['construction', 'engineering', 'management', 'safety', 'operations', 'other'])
    .withMessage('Please select a valid job category'),
  
  body('experience')
    .isIn(['entry', '1-3', '3-5', '5-10', '10+'])
    .withMessage('Please select a valid experience level'),
  
  body('availability')
    .isIn(['immediate', '2-weeks', '1-month', '3-months'])
    .withMessage('Please select a valid availability timeframe')
];

// POST /api/careers/talent-network - Join talent network
router.post('/talent-network', careerLimiter, talentNetworkValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      location, 
      jobCategory, 
      experience, 
      availability 
    } = req.body;

    const emailContent = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'jaykrishna.surat@gmail.com',
      subject: `New Talent Network Registration - ${jobCategory.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
            <h1>New Talent Network Registration</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f0fdf4;">
            <h2 style="color: #047857; margin-bottom: 20px;">Candidate Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Location:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Job Category:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${jobCategory.charAt(0).toUpperCase() + jobCategory.slice(1)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Experience:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${experience} years</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5; font-weight: bold;">Availability:</td>
                <td style="padding: 10px; border-bottom: 1px solid #d1fae5;">${availability}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 5px;">
              <p style="margin: 0; color: #047857; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </p>
            </div>
          </div>
        </div>
      `
    };

    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail(emailContent);
      console.log('✅ Talent network registration email sent successfully');
    } else {
      console.log('📧 Talent network registration (Email not configured):');
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Category: ${jobCategory}`);
      console.log('---');
    }

    res.json({
      success: true,
      message: 'Thank you for joining our talent network! We will contact you when suitable opportunities arise.'
    });

  } catch (error) {
    console.error('Talent network registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to register. Please try again later.'
    });
  }
});

// GET /api/careers/jobs - Get available job listings
router.get('/jobs', (req, res) => {
  // Mock job data - replace with database query in production
  const jobs = [
    {
      id: 1,
      title: 'Construction Project Manager',
      department: 'Construction',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead construction projects from planning to completion.',
      requirements: ['Bachelor\'s degree in Construction Management', '5+ years experience', 'PMP certification preferred'],
      posted: '2025-01-01'
    },
    {
      id: 2,
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Oversee on-site construction activities and ensure quality standards.',
      requirements: ['Civil Engineering degree', '2+ years site experience', 'Knowledge of construction codes'],
      posted: '2025-01-02'
    },
    {
      id: 3,
      title: 'Safety Coordinator',
      department: 'Safety',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and monitor safety protocols on construction sites.',
      requirements: ['Safety certification', '3+ years safety experience', 'OSHA training'],
      posted: '2025-01-03'
    }
  ];

  res.json({
    success: true,
    jobs: jobs
  });
});

// GET /api/careers/jobs/:id - Get specific job details
router.get('/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  
  // Mock job lookup - replace with database query
  const jobs = [
    {
      id: 1,
      title: 'Construction Project Manager',
      department: 'Construction',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹8,00,000 - ₹12,00,000 per annum',
      description: 'Lead construction projects from planning to completion. Manage teams, budgets, and timelines while ensuring quality and safety standards.',
      requirements: [
        'Bachelor\'s degree in Construction Management or related field',
        '5+ years of project management experience',
        'PMP certification preferred',
        'Strong leadership and communication skills',
        'Knowledge of construction codes and regulations'
      ],
      responsibilities: [
        'Plan and coordinate construction projects',
        'Manage project budgets and timelines',
        'Lead project teams and subcontractors',
        'Ensure compliance with safety regulations',
        'Communicate with clients and stakeholders'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Performance bonuses'
      ],
      posted: '2025-01-01'
    }
  ];

  const job = jobs.find(j => j.id === jobId);
  
  if (!job) {
    return res.status(404).json({
      success: false,
      message: 'Job not found'
    });
  }

  res.json({
    success: true,
    job: job
  });
});

export default router;
