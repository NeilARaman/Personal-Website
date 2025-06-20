import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Neil Raman <website@neilraman.com>',
      to: [process.env.RESEND_DESTINATION_EMAIL],
      replyTo: email,
      subject: `${name} - via neilraman.com`,
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(400).json({ message: 'Failed to send email', error })
    }

    console.log('Email sent successfully:', data)
    res.status(200).json({ message: 'Email sent successfully', data })
  } catch (e) {
    console.error('API error:', e)
    res.status(500).json({ message: 'Internal server error', error: e.message })
  }
}
