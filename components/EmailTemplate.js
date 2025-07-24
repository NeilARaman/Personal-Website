import { Html } from '@react-email/html';
import { sanitizeUserInput } from '../lib/sanitize';

export default function EmailTemplate(props) {
  const { name, email, message } = props

  // Additional sanitization for email template (defense in depth)
  const safeName = sanitizeUserInput(name || '')
  const safeEmail = sanitizeUserInput(email || '')
  const safeMessage = sanitizeUserInput(message || '')

  return (
    <Html>
      <ul>
        <li><strong>Name:</strong>{' '}{safeName}</li>
        <li><strong>Email:</strong>{' '}{safeEmail}</li>
        <li><strong>Message:</strong>{' '}{safeMessage}</li>
      </ul>
    </Html>
  )
}