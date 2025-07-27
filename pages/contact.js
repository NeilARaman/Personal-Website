import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import Toast from '../components/Toast'
import { Box } from '../components/Box'
import { styled } from '../stitches.config'
import { sanitizeHTML } from '../lib/sanitize'

export async function getStaticProps() {
  const meta = {
    title: 'Contact // Neil Raman',
    tagline: 'Emails. Emails. Emails.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Contact(props) {
  const { title, image } = props
  const description = `I'm always looking forward to talking to new people, and am more than
  happy to chat about anything. The easiest way to contact me is by sending an email below,
  or by sending me a message on LinkedIn or Twitter.`
  const [isEmailSent, setIsEmailSent] = React.useState(undefined)
  const [showToast, setShowToast] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [fieldErrors, setFieldErrors] = React.useState({})
  const [messageLength, setMessageLength] = React.useState(0)

  const validateField = (name, value) => {
    const errors = { ...fieldErrors }
    
    switch (name) {
      case 'name':
        if (!value || value.trim().length === 0) {
          errors.name = 'Name is required'
        } else if (value.length > 100) {
          errors.name = 'Must be less than 100 characters'
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          errors.name = 'Only letters, spaces, and hyphens allowed'
        } else {
          delete errors.name
        }
        break
      case 'email':
        if (!value || value.trim().length === 0) {
          errors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address'
        } else if (value.length > 254) {
          errors.email = 'Email address is too long'
        } else {
          delete errors.email
        }
        break
      case 'message':
        setMessageLength(value.length)
        if (!value || value.trim().length === 0) {
          errors.message = 'Message is required'
        } else if (value.length < 10) {
          errors.message = 'Message must be at least 10 characters'
        } else if (value.length > 5000) {
          errors.message = 'Message must be less than 5000 characters'
        } else {
          delete errors.message
        }
        break
    }
    
    setFieldErrors(errors)
  }

  const validateForm = (formData) => {
    const errors = []
    
    // Validate name
    if (!formData.name || formData.name.trim().length === 0) {
      errors.push('Name is required')
    } else if (formData.name.length > 100) {
      errors.push('Name must be less than 100 characters')
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      errors.push('Name contains invalid characters')
    }
    
    // Validate email
    if (!formData.email || formData.email.trim().length === 0) {
      errors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address')
    } else if (formData.email.length > 254) {
      errors.push('Email address is too long')
    }
    
    // Validate message
    if (!formData.message || formData.message.trim().length === 0) {
      errors.push('Message is required')
    } else if (formData.message.length > 5000) {
      errors.push('Message must be less than 5000 characters')
    }
    
    return errors
  }

  const onSendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Honeypot check - if filled, it's a bot
    const honeypot = e.target.website.value
    if (honeypot) {
      // Bot detected, silently reject without revealing the honeypot
      setIsEmailSent(false)
      setShowToast(true)
      setIsLoading(false)
      return
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    // Client-side validation
    const validationErrors = validateForm(formData)
    if (validationErrors.length > 0) {
      console.error('Validation errors:', validationErrors)
      setIsEmailSent(false)
      setShowToast(true)
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsEmailSent(true)
        setShowToast(true)
        // Reset form and clear any validation errors
        e.target.reset()
        setFieldErrors({})
        setMessageLength(0)
      } else {
        console.error('Email send failed:', result)
        setIsEmailSent(false)
        setShowToast(true)
      }
    } catch (error) {
      console.error('Network error:', error)
      setIsEmailSent(false)
      setShowToast(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/contact" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <Box>
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />
        <h2>Send Me an Email</h2>
        <Form onSubmit={onSendEmail}>
          {/* Honeypot field - invisible to humans, catches bots */}
          <input 
            type="text" 
            name="website" 
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
            tabIndex="-1" 
            autoComplete="off"
            aria-hidden="true"
          />
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="James Bond" 
              autoComplete="name" 
              required 
              disabled={isLoading}
              maxLength={100}
              minLength={2}
              onChange={(e) => validateField('name', e.target.value)}
              css={{ borderColor: fieldErrors.name ? '#ff6b6b' : undefined }}
            />
            {fieldErrors.name && <ErrorText>{fieldErrors.name}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="james@bond.com" 
              autoComplete="email" 
              required 
              disabled={isLoading}
              maxLength={254}
              onChange={(e) => validateField('email', e.target.value)}
              css={{ borderColor: fieldErrors.email ? '#ff6b6b' : undefined }}
            />
            {fieldErrors.email && <ErrorText>{fieldErrors.email}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <LabelContainer>
              <Label htmlFor="message">Message</Label>
              <CharCounter css={{ color: messageLength > 4500 ? '#ff6b6b' : '$secondary' }}>
                {messageLength}/5000
              </CharCounter>
            </LabelContainer>
            <Textarea 
              id="message" 
              placeholder="How can I help you?" 
              rows="4" 
              required 
              disabled={isLoading}
              maxLength={5000}
              minLength={10}
              onChange={(e) => validateField('message', e.target.value)}
              css={{ borderColor: fieldErrors.message ? '#ff6b6b' : undefined }}
            />
            {fieldErrors.message && <ErrorText>{fieldErrors.message}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </FormGroup>
        </Form>

        <Toast
          title={isEmailSent ? 'Email sent :D' : 'Error :('}
          description={isEmailSent ? 'Thanks for taking the time to write it.' : 'Something wrong happened. Try again later.'}
          isSuccess={isEmailSent}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </Box>
    </>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px'
})

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
})

const LabelContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '4px',
})

const Label = styled('label', {
  color: '$secondary',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '500'
})

const CharCounter = styled('span', {
  fontSize: '11px',
  fontWeight: '500',
})

const Input = styled('input', {
  color: '$primary',
  background: 'none',
  border: '1px solid $secondary',
  borderRadius: '$borderRadius',
  padding: '10px',
  '&:focus': { outline: 'none', borderColor: '$cyan' },
  '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
})

const Textarea = styled('textarea', {
  color: '$primary',
  background: 'none',
  border: '1px solid $secondary',
  borderRadius: '$borderRadius',
  padding: '10px',
  '&:focus': { outline: 'none', borderColor: '$cyan' },
  '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
})

const Button = styled('button', {
  color: '$background',
  background: '#fff',
  border: '1px solid #fff',
  borderRadius: '$borderRadius',
  cursor: 'pointer',
  padding: '10px',
  marginTop: '5px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': { background: 'transparent', borderColor: '$cyan', color: '$cyan' },
  '&:focus': { background: 'transparent', borderColor: '$cyan', color: '$cyan', outline: 'none' },
  '&:disabled': { opacity: 0.6, cursor: 'not-allowed', '&:hover': { background: '#fff', borderColor: '#fff', color: '$background' } },
})

const ErrorText = styled('span', {
  color: '#ff6b6b',
  fontSize: '12px',
  marginTop: '4px',
  display: 'block',
  fontWeight: 500,
})

Contact.Layout = Base

export default Contact
