import { useState, useEffect, useRef } from 'react'

export function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = '',
  delay = 0,
  animationClass = 'fade-in'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, delay, hasAnimated])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? `opacity-100 translate-y-0 ${animationClass}` : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}
