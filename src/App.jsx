import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation, Footer, ScrollToTop } from '@/components'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { 
  HomePage, 
  AboutPage, 
  ContactPage,
  BlogPage,
  BlogPostPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  SitemapPage,
  AulaOnlinePage,
  AulaIndividualPage,
  AulaEmGrupoPage,
  AulaDeConversacaoPage
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
    <LanguageProvider>
      <Router>
        <RedirectHandler />
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/servicos/aula-de-ingles-online" element={<AulaOnlinePage />} />
            <Route path="/servicos/aula-de-ingles-individual" element={<AulaIndividualPage />} />
            <Route path="/servicos/aula-de-ingles-em-grupo" element={<AulaEmGrupoPage />} />
            <Route path="/servicos/aula-de-conversacao-de-ingles" element={<AulaDeConversacaoPage />} />
            <Route path="/privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/termos" element={<TermsOfServicePage />} />
            <Route path="/mapa-do-site" element={<SitemapPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}
