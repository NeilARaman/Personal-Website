import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      yellow: '#ffff80',
      pink: '#ff80bf',
      purple: '#9580ff',
      red: '#ff9580',
      orange: '#ffca80',
      green: '#8aff80',
      cyan: '#80ffea',
      primary: '#f2f2f2',
      secondary: '#8f9ba8',
      background: '#08070b',
      hover: '#212024',
      command: 'rgba(255, 255, 255, 0.05)',
    },
      fonts: {
    body: 'Biotif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    code: 'Fira Code, ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Liberation Mono", Menlo, monospace',
    heading: 'Neuzeit Grotesk Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '110px',
    },
    transitions: {
      duration: '0.2s',
    },
    radii: {
      borderRadius: '8px',
    },
  },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 760px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)',
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
    boxSizing: 'border-box',
  },
  '*::before, *::after': {
    boxSizing: 'border-box',
  },
  'html': {
    lineHeight: 1.15,
    textSizeAdjust: '100%',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    background: '$background',
    fontFeatureSettings: '"kern"',
  },
  'body': {
    fontOpticalSizing: 'auto',
    fontVariationSettings: 'normal',
  },
  kbd: {
    color: '$background',
    background: '$secondary',
    padding: '1px 5px',
    borderRadius: '4px',
    transition: 'background $duration ease-in-out',
    fontFamily: '$code',
    fontSize: '14px',
  },
  svg: {
    width: '32px',
    height: '32px',
    fill: 'white',
  },
  figure: {
    margin: 0,
  },
  twitterwidget: {
    margin: '0 auto',
  },
  code: {
    background: '#151417',
    borderRadius: '$borderRadius',
    color: '$primary',
    fontFamily: '$code',
    fontSize: '15px',
  },
  ':not(pre) > code': {
    padding: '4px',
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '48px',
    lineHeight: '50px',
    margin: '0 0 20px',
    color: '$primary',
    fontWeight: 700,
  },
  h2: {
    color: '$primary',
    margin: '60px 0 0',
    fontSize: '24px',
    fontWeight: 600,
  },
  'h3, h3 a': {
    color: '$primary',
    fontSize: '18px',
    margin: '20px 0 0',
    fontWeight: 600,
  },
  ul: {
    margin: 0,
  },
  img: {
    borderRadius: '8px',
    minWidth: '100%',
    maxWidth: '100%',
    height: 'auto',
  },
  p: {
    margin: '20px 0',
    color: '$secondary',
    lineHeight: 1.6,
  },
  strong: {
    color: '$primary',
    fontWeight: 500,
  },
  blockquote: {
    borderLeft: '4px solid $hover',
    color: '$secondary',
    fontStyle: 'italic',
    margin: '0',
    paddingLeft: '20px',
  },
  a: {
    color: '$primary',
    textDecoration: 'underline',
    textDecorationColor: '$secondary',
    textUnderlineOffset: '3px',
    transition: 'opacity $duration ease-in-out',
  },
  'footer a': {
    borderBottom: 'none',
    textDecoration: 'none',
  },
  'nav a, button a, .no-underline': {
    textDecoration: 'none',
  },
  'a:hover, a:focus': {
    opacity: '0.8',
    textDecorationColor: '$primary',
  },
  '@font-face': [
    {
      fontFamily: 'Neuzeit Grotesk Bold',
      src: `url("/static/font/NeuzeitGrotesk-Bold.woff2") format("woff2"),
        url("/static/font/NeuzeitGrotesk-Bold.woff") format("woff")`,
      fontWeight: '700',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Fira Code',
      src: `url("/static/font/FiraCode-Regular.woff2") format("woff2"),
        url("/static/font/FiraCode-Regular.woff") format("woff")`,
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Bold.woff2") format("woff2"),
        url("/static/font/Biotif-Bold.woff") format("woff")`,
      fontWeight: '700',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Book.woff2") format("woff2"),
        url("/static/font/Biotif-Book.woff") format("woff")`,
      fontWeight: '500',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Regular.woff2") format("woff2"),
        url("/static/font/Biotif-Regular.woff") format("woff")`,
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-RegularItalic.woff2") format("woff2"),
        url("/static/font/Biotif-RegularItalic.woff") format("woff")`,
      fontWeight: '400',
      fontStyle: 'italic',
      fontDisplay: 'swap',
    },
  ],
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
})

let stylesApplied = false

export const applyGlobalStyles = () => {
  if (!stylesApplied) {
    globalStyles()
    stylesApplied = true
  }
}

try {
  applyGlobalStyles()
} catch (e) {
  if (typeof window !== 'undefined') {
    console.warn('Stitches SSR issue handled gracefully')
  }
}
