// Performance monitoring utilities
export const performanceMonitor = {
  // Core Web Vitals
  measureCLS() {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const cls = entries.reduce((sum, entry) => sum + entry.value, 0)
        resolve(cls)
      }).observe({ entryTypes: ['layout-shift'] })
    })
  },

  measureLCP() {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1]
        resolve(lcp.startTime)
      }).observe({ entryTypes: ['largest-contentful-paint'] })
    })
  },

  measureFID() {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fid = entries[0]
        resolve(fid.processingStart - fid.startTime)
      }).observe({ entryTypes: ['first-input'] })
    })
  },

  // Bundle analysis
  analyzeChunks() {
    const performanceEntries = performance.getEntriesByType('resource')
    const jsChunks = performanceEntries
      .filter(entry => entry.name.includes('.js'))
      .sort((a, b) => b.transferSize - a.transferSize)
    
    console.table(jsChunks.map(chunk => ({
      name: chunk.name.split('/').pop(),
      size: `${(chunk.transferSize / 1024).toFixed(2)} KB`,
      loadTime: `${chunk.duration.toFixed(2)}ms`
    })))
  },

  // Image optimization check
  checkImageSizes() {
    const images = document.querySelectorAll('img')
    const oversizedImages = []
    
    images.forEach(img => {
      if (img.naturalWidth > img.offsetWidth * 2) {
        oversizedImages.push({
          src: img.src,
          natural: `${img.naturalWidth}x${img.naturalHeight}`,
          display: `${img.offsetWidth}x${img.offsetHeight}`,
          wastedBytes: Math.round((img.naturalWidth - img.offsetWidth) * (img.naturalHeight - img.offsetHeight) * 3)
        })
      }
    })
    
    if (oversizedImages.length > 0) {
      console.warn('Oversized images detected:', oversizedImages)
    }
    return oversizedImages
  }
}

// Usage in development
if (import.meta.env.DEV) {
  window.performanceMonitor = performanceMonitor
  
  // Auto-check after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.checkImageSizes()
      performanceMonitor.analyzeChunks()
    }, 2000)
  })
}