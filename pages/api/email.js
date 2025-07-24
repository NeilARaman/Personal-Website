import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
import EmailTemplate from '../../components/EmailTemplate'
import { emailRateLimit, validateEmailInput, setSecurityHeaders } from '../../lib/api-middleware'

// Apply rate limiting using middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function sendEmail(req, res) {
  // Set security headers
  setSecurityHeaders(res)
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    })
  }

  try {
    // Apply rate limiting
    await runMiddleware(req, res, emailRateLimit)

    // Validate and sanitize input
    const validation = validateEmailInput(req.body)
    
    if (!validation.isValid) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: validation.errors,
        code: 'VALIDATION_ERROR'
      })
    }

    const { name, email, message } = validation.sanitizedData

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Neil Raman <website@neilraman.com>',
      to: [process.env.RESEND_DESTINATION_EMAIL],
      replyTo: email,
      subject: `${name} - via neilraman.com`,
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(400).json({ 
        message: 'Failed to send email',
        code: 'EMAIL_SEND_FAILED'
      })
    }

    console.log('Email sent successfully') // eslint-disable-line no-console
    res.status(200).json({ 
      message: 'Email sent successfully',
      code: 'SUCCESS'
    })
  } catch (e) {
    // Check if it's a rate limit error
    if (e.statusCode === 429) {
      return res.status(429).json(e.message)
    }
    
    console.error('API error:', e.message)
    res.status(500).json({ 
      message: 'Internal server error',
      code: 'INTERNAL_ERROR'
    })
  }
}
