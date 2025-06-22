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
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    setIsClient(true)
    
    // Dynamically import lottie-web only on client side with better error handling
    import('lottie-web').then((lottieModule) => {
      // Handle both default and named exports
      const LottieLib = lottieModule.default || lottieModule
      setLottie(LottieLib)
    }).catch((error) => {
      // Handle import error gracefully
      console.warn('Failed to load lottie-web:', error)
      // Set a fallback to prevent infinite loading
      setLottie(null)
    })
  }, [])

  // Set visible immediately when client-side for command bar context
  useEffect(() => {
    if (isClient) {
      // Use a small delay to ensure DOM is ready
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isClient])

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
    if (!Lottie || !isClient || !containerRef.current || !animationData || !isVisible) {
      // Debug logging for production issues
      if (process.env.NODE_ENV === 'development') {
        console.log('LottieIcon not ready:', { 
          hasLottie: !!Lottie, 
          isClient, 
          hasContainer: !!containerRef.current, 
          hasAnimationData: !!animationData, 
          isVisible 
        })
      }
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
        // Performance optimizations
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
  }, [Lottie, isClient, animationData, loop, autoplay, lottieRef, isVisible, renderer, destroyAnimation])

  // Cleanup on unmount
  useEffect(() => {
    return destroyAnimation
  }, [destroyAnimation])

  if (!isClient) {
    // Return a placeholder during SSR
    return <div style={style} {...props} />
  }

  if (!isVisible) {
    // Return a placeholder until visible
    return (
      <div 
        ref={containerRef} 
        style={{
          ...style,
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px'
        }} 
        {...props} 
      />
    )
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