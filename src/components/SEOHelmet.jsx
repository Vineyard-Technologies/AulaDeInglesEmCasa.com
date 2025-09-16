import { useEffect } from 'react'

export const SEOHelmet = ({ 
  title, 
  description, 
  canonical, 
  image, 
  type = 'website',
  locale = 'pt_BR',
  schemaData 
}) => {
  useEffect(() => {
    // Dynamic meta tag updates
    document.title = title
    
    // Update existing meta tags or create new ones
    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || 
                 document.querySelector(`meta[name="${property}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          meta.setAttribute('property', property)
        } else {
          meta.setAttribute('name', property)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Core meta tags
    updateMetaTag('description', description)
    updateMetaTag('og:title', title)
    updateMetaTag('og:description', description)
    updateMetaTag('og:type', type)
    updateMetaTag('og:locale', locale)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)

    if (image) {
      updateMetaTag('og:image', image)
      updateMetaTag('twitter:image', image)
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      updateMetaTag('og:url', canonical)
    }

    // Structured data
    if (schemaData) {
      let script = document.querySelector('#structured-data')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('id', 'structured-data')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schemaData)
    }
  }, [title, description, canonical, image, type, locale, schemaData])

  return null
}