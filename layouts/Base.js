import { styled } from '../stitches.config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export default function Base({ children }) {
  const { title, tagline, primaryColor, secondaryColor } = children.props || {}

  return (
    <Wrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <Navbar />
      <PostMain
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000',
          },
        }}
      >
        <PostContent>
          <PostContainer id="main-content" tabIndex="-1">
            <GradientTitle
              css={{
                backgroundImage: `linear-gradient(
                135deg,
                $${primaryColor} 0%,
                $${secondaryColor} 100%
              );`,
              }}
            >
              {tagline ? tagline : title}
            </GradientTitle>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  )
}

const SkipLink = styled('a', {
  position: 'absolute',
  top: '-40px',
  left: '6px',
  background: '$primary',
  color: '$background',
  padding: '8px',
  textDecoration: 'none',
  borderRadius: '4px',
  zIndex: 1000,
  '&:focus': {
    top: '6px',
  },
})

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
})
