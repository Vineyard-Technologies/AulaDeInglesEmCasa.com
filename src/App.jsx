import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation, Footer } from '@/components'
import { 
  HomePage, 
  AboutPage, 
  ContactPage, 
  BlogPage,
  OnlineClassesPage,
  IndividualClassesPage,
  GroupClassesPage,
  ConversationClassesPage
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/servicos/aulas-online" element={<OnlineClassesPage />} />
          <Route path="/servicos/aulas-individuais" element={<IndividualClassesPage />} />
          <Route path="/servicos/aulas-em-grupo" element={<GroupClassesPage />} />
          <Route path="/servicos/aulas-conversacao" element={<ConversationClassesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
