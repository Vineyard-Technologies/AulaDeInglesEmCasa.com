import { useState, useRef, useEffect } from 'react'

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '',
  threshold = 0.1,
  rootMargin = '50px'
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsInView(true)
          setHasLoaded(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentElement = imgRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, hasLoaded])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`overflow-hidden ${className}`}>
      {placeholder && !isInView && (
        <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Loading...</div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
        />
      )}
    </div>
  )
}
