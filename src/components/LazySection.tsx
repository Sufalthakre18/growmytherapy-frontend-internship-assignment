'use client'

import { useEffect, useRef, useState } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function LazySection({ children, className = '', delay = 0 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible 
          ? 'opacity-100 ' 
          : 'opacity-0 '
      } ${className}`}
    >
      {children}
    </div>
  )
}