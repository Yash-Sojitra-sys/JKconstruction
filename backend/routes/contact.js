import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form (more restrictive)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact form submissions per 15 minutes
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again later.'
  }
});

// Email transporter setup
const createTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Email configuration missing. Contact form will log to console only.');
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

// Validation rules
const contactValidation = [
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
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  body('inquiryType')
    .isIn(['general', 'careers', 'services', 'partnership', 'other'])
    .withMessage('Please select a valid inquiry type'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
  
  body('captchaVerified')
    .isBoolean()
    .custom(value => {
      if (!value) {
        throw new Error('Please verify that you are not a robot');
      }
      return true;
    })
];

// POST /api/contact - Submit contact form
router.post('/', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { firstName, lastName, email, phone, inquiryType, message } = req.body;
    
    // Create email content
    const emailContent = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'jaykrishna.surat@gmail.com',
      subject: `New Contact Form Submission - ${inquiryType.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1>New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f8fafc;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Inquiry Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)}</td>
              </tr>
            </table>
            
            <h3 style="color: #1e40af; margin-top: 30px; margin-bottom: 15px;">Message:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 5px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail(emailContent);
      console.log('✅ Contact form email sent successfully');
    } else {
      // Log to console if email is not configured
      console.log('📧 Contact form submission (Email not configured):');
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log(`Inquiry: ${inquiryType}`);
      console.log(`Message: ${message}`);
      console.log('---');
    }

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// GET /api/contact/test - Test email configuration
router.get('/test', async (req, res) => {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      return res.json({
        success: false,
        message: 'Email configuration missing'
      });
    }

    await transporter.verify();
    res.json({
      success: true,
      message: 'Email configuration is valid'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Email configuration test failed',
      error: error.message
    });
  }
});

export default router;
