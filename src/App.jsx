import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation, Footer, ScrollToTop } from '@/components'
import { 
  HomePage, 
  AboutPage, 
  ContactPage
} from '@/pages'

function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we were redirected from a 404
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath, { replace: true })
    }
  }, [navigate])

  return null
}

export default function App() {
  return (
    <Router>
      <RedirectHandler />
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
