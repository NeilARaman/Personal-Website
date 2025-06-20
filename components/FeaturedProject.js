import { styled } from '../stitches.config'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const LottieIcon = dynamic(() => import('./LottieIcon'), { ssr: false })

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
          layoutId="featuredProjects"
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

export default function FeaturedProject(props) {
  const { project } = props

  const icon = require(`../public/static/icons/${project.icon}.json`)
  const iconRef = useRef()

  return (
    <Project
      href={project.url}
      target="_blank"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Animation index={props.index}>
        <LottieIcon
          lottieRef={iconRef}
          style={{ width: 24, height: 24, marginBottom: 10 }}
          animationData={icon}
          loop={false}
          autoplay={false}
        />
        <Body>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
          {project.stats && <Stats>{project.stats}</Stats>}
        </Body>
      </Animation>
    </Project>
  )
}

const Project = styled('a', {
  display: 'flex',
  transition: 'opacity $duration ease-in-out',
  border: '0',
  borderRadius: '$borderRadius',
  textDecoration: 'none',
  width: 'auto',
  '&:hover': { opacity: 1 },
  '@bp2': { width: 180 },
})

const Body = styled('div', {
  flex: '1 1 auto',
})

const Title = styled('p', {
  color: '$primary',
  margin: '0',
  fontSize: '18px',
})

const Description = styled('p', {
  margin: '0',
  color: '$secondary',
  lineHeight: '24px',
})

const Stats = styled('p', {
  margin: '5px 0 0',
  color: '$primary',
  textTransform: 'uppercase',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '1.2px',
  fontSize: '12px',
})

const AnimContainer = styled(motion.span, {
  position: 'relative',
  width: '100%',
  padding: '20px',
})

const AnimHovered = styled(motion.span, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})
