import rateLimit from 'express-rate-limit'
import validator from 'validator'

// Create rate limiter for email API
export const emailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many email requests from this IP, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Custom key generator to handle different IP header sources
  keyGenerator: (req) => {
    return req.ip || 
           req.connection?.remoteAddress || 
           req.socket?.remoteAddress ||
           req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
           req.headers['x-real-ip'] ||
           'unknown'
  }
})

// Input validation functions
export function validateEmailInput(data) {
  const errors = []
  
  // Validate name
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required and must be a string')
  } else if (data.name.trim().length === 0) {
    errors.push('Name cannot be empty')
  } else if (data.name.length > 100) {
    errors.push('Name must be less than 100 characters')
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.name)) {
    errors.push('Name contains invalid characters')
  }
  
  // Validate email
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required and must be a string')
  } else if (!validator.isEmail(data.email)) {
    errors.push('Please provide a valid email address')
  } else if (data.email.length > 254) {
    errors.push('Email address is too long')
  }
  
  // Validate message
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required and must be a string')
  } else if (data.message.trim().length === 0) {
    errors.push('Message cannot be empty')
  } else if (data.message.length > 5000) {
    errors.push('Message must be less than 5000 characters')
  }
  
  // Check for potential spam patterns
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
    /\b(click here|free money|make money fast)\b/i,
    /(http[s]?:\/\/[^\s]+){3,}/i, // Multiple URLs
    /(.)\1{10,}/, // Repeated characters
  ]
  
  const content = `${data.name} ${data.email} ${data.message}`.toLowerCase()
  for (const pattern of spamPatterns) {
    if (pattern.test(content)) {
      errors.push('Message appears to be spam')
      break
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? {
      name: validator.escape(data.name.trim()),
      email: validator.normalizeEmail(data.email),
      message: validator.escape(data.message.trim())
    } : null
  }
}



// Security headers middleware
export function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
} 