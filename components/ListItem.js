import { styled } from '../stitches.config'
import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import BlogDate from './BlogDate'
import { motion } from 'framer-motion'

const AnimationClient = ({ children, index }) => {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
    >
      {isHovered && (
        <AnimHovered
          layoutId="listItem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {children}
    </AnimContainer>
  )
}

const Animation = dynamic(() => Promise.resolve(AnimationClient), { ssr: false })

export default function ListItem(props) {
  // Articles
  if (props.href.charAt(0) === '/') {
    return (
      <ArticleItem>
        <Link href={props.href} passHref>
          <AnchorWrapper>
            <Animation index={props.index}>
              <Title>{props.title}</Title>
              <Date>
                <BlogDate dateString={props.date} />
              </Date>
            </Animation>
          </AnchorWrapper>
        </Link>
      </ArticleItem>
    )
  }

  // Podcasts
  return (
    <Item>
      <AnchorWrapper>
        <Anchor href={props.href} target="_blank">
          <Animation index={props.index}>
            <Title>{props.title}</Title>
            <IconContainer>
              <i className="ri-arrow-right-up-line"></i>
            </IconContainer>
          </Animation>
        </Anchor>
      </AnchorWrapper>
    </Item>
  )
}

const Item = styled('li', {
  borderBottom: '1px solid $hover',
  '&:last-child': { border: 0 },
})

const AnchorWrapper = styled('div', {
  textDecoration: 'none',
})

const Anchor = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
})

const Title = styled('span', {
  display: 'block',
  maxWidth: '500px',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '40px',
  textAlign: 'left',
})

const Date = styled('span', {
  color: '$secondary',
  display: 'block',
  fontWeight: 500,
  fontSize: '14px',
  minWidth: '100px',
  textAlign: 'left',
  '@bp2': { textAlign: 'right' },
})

const IconContainer = styled('span', {
  fontSize: '24px',
})

const AnimContainer = styled(motion.span, {
  border: '0',
  color: '$secondary',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
  width: '100%',
  opacity: 1,
  transition: 'all $duration ease-in-out',
  textDecoration: 'none',
  position: 'relative',
  '&:hover': { color: '$primary' },
})

const AnimHovered = styled(motion.span, {
  position: 'absolute',
  top: '-1px',
  left: '-20px',
  right: '-20px',
  bottom: '-1px',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})

const ArticleItem = styled(Item, {
  [`& ${AnimContainer}`]: {
    flexDirection: 'column',
    '@bp2': { flexDirection: 'row' },
  },
})
