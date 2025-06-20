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
    
    // Dynamically import lottie-web only on client side
    import('lottie-web').then((lottieModule) => {
      setLottie(lottieModule.default)
    }).catch(() => {
      // Handle import error gracefully
      console.warn('Failed to load lottie-web')
    })
  }, [])

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
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
    if (!Lottie || !isClient || !containerRef.current || !animationData || !isVisible) return

    // Clean up previous animation
    destroyAnimation()

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

  return <div ref={containerRef} style={style} {...props} />
} 