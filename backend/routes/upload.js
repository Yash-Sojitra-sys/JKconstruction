import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for file uploads
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 uploads per hour
  message: {
    success: false,
    message: 'Too many file uploads. Please try again later.'
  }
});

// Ensure uploads directory exists
const uploadsDir = process.env.UPLOAD_PATH || './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only specific file types
  const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 // 5MB default
  },
  fileFilter: fileFilter
});

// Validation for resume upload
const resumeValidation = [
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
  
  body('position')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Position must be between 2 and 100 characters')
];

// POST /api/upload/resume - Upload resume
router.post('/resume', uploadLimiter, upload.single('resume'), resumeValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Clean up uploaded file if validation fails
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a resume file'
      });
    }

    const { firstName, lastName, email, phone, position } = req.body;
    
    // Log the resume submission
    console.log('📄 Resume uploaded:');
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Position: ${position}`);
    console.log(`File: ${req.file.filename}`);
    console.log('---');

    res.json({
      success: true,
      message: 'Resume uploaded successfully! We will review your application and contact you soon.',
      data: {
        fileName: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        uploadDate: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Resume upload error:', error);
    
    // Clean up uploaded file on error
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error('Error cleaning up file:', unlinkError);
      }
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload resume. Please try again later.'
    });
  }
});

// GET /api/upload/files/:filename - Download uploaded file (admin only)
router.get('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadsDir, filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'File not found'
    });
  }

  // In production, add authentication/authorization here
  res.download(filePath);
});

// Error handling middleware for multer
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(400).json({
    success: false,
    message: error.message || 'File upload error'
  });
});

export default router;
