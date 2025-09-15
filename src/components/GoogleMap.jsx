import { memo } from 'react'

/**
 * Reusable Google Maps component for displaying the business location
 * @param {string} className - Additional CSS classes
 * @param {string} title - Title for accessibility (optional)
 * @param {string} src - Custom Google Maps embed URL (optional, uses default if not provided)
 */
export const GoogleMap = memo(({ 
  className = "", 
  title = "Aula de Inglês em Casa - Campo Grande, MS Location",
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119603.60236497651!2d-54.63553405!3d-20.481099800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x444d80abce0fb79b%3A0x396cea11aa65ef09!2sAula%20de%20Ingl%C3%AAs%20em%20Casa!5e0!3m2!1sen!2sbr!4v1757595739185!5m2!1sen!2sbr"
}) => {
  return (
    <div className={`bg-background rounded-lg p-4 shadow-lg ${className}`}>
      <iframe 
        src={src}
        width="100%" 
        height="400"
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title={title}
      />
    </div>
  )
})

GoogleMap.displayName = 'GoogleMap'