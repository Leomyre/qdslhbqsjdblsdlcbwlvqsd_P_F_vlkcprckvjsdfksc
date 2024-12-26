'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.pageYOffset
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      ref={backgroundRef}
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 -z-10"
      style={{ transform: 'translateY(0)' }}
    />
  )
}

