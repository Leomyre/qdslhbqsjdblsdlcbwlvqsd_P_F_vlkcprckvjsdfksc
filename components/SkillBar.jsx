'use client'

import { useEffect, useRef, useState } from 'react'

export default function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0)
  const skillRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level)
        }
      },
      { threshold: 0.5 }
    )

    if (skillRef.current) {
      observer.observe(skillRef.current)
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current)
      }
    }
  }, [level])

  return (
    <div ref={skillRef}>
      <h3 className="text-2xl font-semibold mb-3 text-blue-300">{name}</h3>
      <div className="w-full bg-gray-800/50 rounded-full h-2.5 mb-4">
        <div
          className="bg-gradient-to-r from-blue-400 to-gray-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
          aria-label={`Niveau de compétence pour ${name} à ${level}%`}
        ></div>
      </div>
      <p className="text-gray-300">Niveau: {level}%</p>
    </div>
  )
}

