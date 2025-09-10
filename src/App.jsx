import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation, Footer, ScrollToTop } from '@/components'
import { 
  HomePage, 
  AboutPage, 
  ContactPage,
  NotFoundPage
} from '@/pages'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
