import { useEffect, useRef, useState, useCallback } from 'react'

export default function LottieIcon({ 
  lottieRef, 
  style, 
  animationData, 
  loop = true, 
  autoplay = true, 
  renderer = 'svg',
  ...props 
}) {
  const [isClient, setIsClient] = useState(false)
  const [Lottie, setLottie] = useState(null)
  const containerRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    setIsClient(true)
    
    // Dynamically import lottie-web only on client side
    import('lottie-web').then((lottieModule) => {
      const LottieLib = lottieModule.default || lottieModule
      setLottie(LottieLib)
    }).catch((error) => {
      console.warn('Failed to load lottie-web:', error)
      setLottie(null)
    })
  }, [])

  const destroyAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.destroy()
      animationRef.current = null
    }
    if (lottieRef) {
      lottieRef.current = null
    }
  }, [lottieRef])

  useEffect(() => {
    if (!Lottie || !isClient || !containerRef.current || !animationData) {
      return
    }

    // Clean up previous animation
    destroyAnimation()

    try {
      const animation = Lottie.loadAnimation({
        container: containerRef.current,
        renderer,
        loop,
        autoplay,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: true,
          progressiveLoad: true,
          hideOnTransparent: true,
        }
      })

      animationRef.current = animation

      // Expose animation controls to parent via ref
      if (lottieRef) {
        lottieRef.current = {
          play: () => animation.play(),
          pause: () => animation.pause(),
          stop: () => animation.stop(),
          setSpeed: (speed) => animation.setSpeed(speed),
          goToAndStop: (frame) => animation.goToAndStop(frame, true),
          goToAndPlay: (frame) => animation.goToAndPlay(frame, true),
          destroy: () => destroyAnimation(),
        }
      }
    } catch (error) {
      console.error('Failed to create Lottie animation:', error)
    }

    return destroyAnimation
  }, [Lottie, isClient, animationData, loop, autoplay, lottieRef, renderer, destroyAnimation])

  // Cleanup on unmount
  useEffect(() => {
    return destroyAnimation
  }, [destroyAnimation])

  if (!isClient) {
    // Return a placeholder during SSR
    return <div style={style} {...props} />
  }

  // If lottie failed to load, show a fallback icon
  if (Lottie === null) {
    return (
      <div 
        ref={containerRef} 
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          fontSize: '16px',
          color: '#fff'
        }} 
        {...props}
      >
        ⚡
      </div>
    )
  }

  return <div ref={containerRef} style={style} {...props} />
} 