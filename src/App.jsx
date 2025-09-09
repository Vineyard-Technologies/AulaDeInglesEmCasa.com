import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation, Footer } from '@/components'
import { 
  HomePage, 
  AboutPage, 
  ContactPage
} from '@/pages'

export default function App() {
  return (
    <Router>
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
