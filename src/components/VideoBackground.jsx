import { useState, useRef, useEffect } from 'react'

// "Page Shield" or "Bot Fight Mode" in Cloudflare may have broken video loading (with no console error)
// Toggling those settings off then back on seems to fix the issue

export function VideoBackground({ 
  videoSources, 
  className = '',
  children 
}) {
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadStart = () => {
      setIsLoading(true)
      setVideoReady(false)
    }
    const handleCanPlay = () => {
      setIsLoading(false)
    }
    const handleCanPlayThrough = () => {
      setVideoReady(true)
    }
    const handleError = () => {
      setVideoError(true)
      setIsLoading(false)
      setVideoReady(false)
    }
    const handleEnded = () => {
      // Keep the last frame visible by setting currentTime to duration
      video.currentTime = video.duration
    }

    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
        >
          {videoSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </video>
      )}
      
      {/* Content */}
      {children}
    </div>
  )
}
