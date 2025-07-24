import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param {string} dirty - The HTML content to sanitize
 * @param {object} options - DOMPurify configuration options
 * @returns {string} - Sanitized HTML content
 */
export function sanitizeHTML(dirty, options = {}) {
  if (typeof dirty !== 'string') {
    return ''
  }

  // Default configuration for safe HTML sanitization
  const defaultConfig = {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'i', 'b', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'img', 'figure', 'figcaption', 'div', 'span'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class', 'id'],
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
    ADD_ATTR: ['target'],
    ...options
  }

  return DOMPurify.sanitize(dirty, defaultConfig)
}

/**
 * Sanitizes markdown-generated HTML content
 * More permissive for blog posts and articles
 * @param {string} dirty - The HTML content to sanitize
 * @returns {string} - Sanitized HTML content
 */
export function sanitizeMarkdownHTML(dirty) {
  if (typeof dirty !== 'string') {
    return ''
  }

  const markdownConfig = {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'i', 'b', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'img', 'figure', 'figcaption', 'div', 'span', 'iframe', 'video', 'source'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class', 'id', 'width', 'height', 'style', 'type', 'controls', 'loop', 'autoplay', 'muted'],
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|data):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
    ADD_ATTR: ['target']
  }

  return DOMPurify.sanitize(dirty, markdownConfig)
}

/**
 * Sanitizes user input for email templates
 * Very restrictive for security
 * @param {string} dirty - The content to sanitize
 * @returns {string} - Sanitized content
 */
export function sanitizeUserInput(dirty) {
  if (typeof dirty !== 'string') {
    return ''
  }

  const restrictiveConfig = {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    ALLOW_DATA_ATTR: false
  }

  return DOMPurify.sanitize(dirty, restrictiveConfig)
} 