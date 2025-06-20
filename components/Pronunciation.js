import { useState, useRef, useEffect } from 'react'
import { styled } from '../stitches.config'
import dynamic from 'next/dynamic'

const PronunciationClient = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pronunciationAudio = useRef()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const togglePronunciation = () => {
    if (!isClient || !pronunciationAudio.current) return

    if (
      pronunciationAudio.current.duration > 0 &&
      !pronunciationAudio.current.paused
    ) {
      setIsPlaying(false)
      pronunciationAudio.current.pause()
    } else {
      setIsPlaying(true)
      pronunciationAudio.current.play().catch(() => {
        // Handle play promise rejection
        setIsPlaying(false)
      })
    }
  }

  if (!isClient) {
    return (
      <Button
        role="button"
        aria-label="How to pronounce my name"
        disabled
      >
        <Icon className="ri-play-circle-fill" />
      </Button>
    )
  }

  return (
    <Button
      role="button"
      aria-label="How to pronounce my name"
      onClick={togglePronunciation}
    >
      <Icon
        className={`ri-${isPlaying ? 'pause' : 'play'}-circle-fill`}
      />
      <audio
        src="/static/audio/pronunciation.mp3"
        ref={pronunciationAudio}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />
    </Button>
  )
}

const DynamicPronunciation = dynamic(() => Promise.resolve(PronunciationClient), { ssr: false })

export default function Pronunciation() {
  return <DynamicPronunciation />
}

const Button = styled('button', {
  background: 'transparent',
  border: 'none',
  color: '$primary',
  cursor: 'pointer',
  margin: '0 4px',
  padding: '0',
  position: 'relative',
  top: '5px',
  transform: 'none',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': { transform: 'scale(1.1) translateZ(0)' },
  '&:disabled': { 
    cursor: 'default',
    transform: 'none',
    '&:hover': { transform: 'none' }
  },
})

const Icon = styled('i', {
  fontSize: '24px',
  lineHeight: '32px'
})