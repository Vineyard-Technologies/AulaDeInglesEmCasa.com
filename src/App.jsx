import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { Navigation, Footer, ScrollToTop } from '@/components'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage.jsx').then(module => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('@/pages/AboutPage.jsx').then(module => ({ default: module.AboutPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage.jsx').then(module => ({ default: module.ContactPage })))
const BlogPage = lazy(() => import('@/pages/BlogPage.jsx').then(module => ({ default: module.BlogPage })))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage.jsx').then(module => ({ default: module.BlogPostPage })))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage.jsx').then(module => ({ default: module.PrivacyPolicyPage })))
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage.jsx').then(module => ({ default: module.TermsOfServicePage })))
const SitemapPage = lazy(() => import('@/pages/SitemapPage.jsx').then(module => ({ default: module.SitemapPage })))

// Lazy load service pages
const AulaOnlinePage = lazy(() => import('@/pages/services/AulaOnlinePage.jsx').then(module => ({ default: module.AulaOnlinePage })))
const AulaIndividualPage = lazy(() => import('@/pages/services/AulaIndividualPage.jsx').then(module => ({ default: module.AulaIndividualPage })))
const AulaEmGrupoPage = lazy(() => import('@/pages/services/AulaEmGrupoPage.jsx').then(module => ({ default: module.AulaEmGrupoPage })))
const AulaDeConversacaoPage = lazy(() => import('@/pages/services/AulaDeConversacaoPage.jsx').then(module => ({ default: module.AulaDeConversacaoPage })))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
)

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
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <RedirectHandler />
          <ScrollToTop />
          <div className="min-h-screen bg-background">
            <Navigation />
            <Suspense fallback={<LoadingSpinner />}>
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
            </Suspense>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}
