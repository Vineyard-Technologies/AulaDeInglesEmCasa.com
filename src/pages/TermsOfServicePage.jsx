import { useEffect } from "react"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { useTranslations } from "@/data/translations"

export function TermsOfServicePage() {
  const t = useTranslations()
  
  useEffect(() => {
    const termsOfServiceMetaData = {
      title: t.terms.meta.title,
      description: t.terms.meta.description,
      canonical: "https://auladeinglesemcasa.com/termos"
    }
    updateMetaTags(termsOfServiceMetaData)
  }, [t])

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.terms.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>{t.terms.lastUpdated}</strong> {t.terms.lastUpdatedDate}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.acceptance.title}</h2>
            <p className="mb-4">
              {t.terms.sections.acceptance.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.serviceDescription.title}</h2>
            <p className="mb-4">
              {t.terms.sections.serviceDescription.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.serviceDescription.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.scheduling.title}</h2>
            <h3 className="text-xl font-semibold mb-3">{t.terms.sections.scheduling.booking.title}</h3>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.scheduling.booking.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">{t.terms.sections.scheduling.cancellation.title}</h3>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.scheduling.cancellation.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.payment.title}</h2>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.payment.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.studentResponsibilities.title}</h2>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.studentResponsibilities.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.teacherResponsibilities.title}</h2>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.teacherResponsibilities.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.onlineClasses.title}</h2>
            <p className="mb-4">
              {t.terms.sections.onlineClasses.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.onlineClasses.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.intellectualProperty.title}</h2>
            <p className="mb-4">
              {t.terms.sections.intellectualProperty.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.limitationOfLiability.title}</h2>
            <p className="mb-4">
              {t.terms.sections.limitationOfLiability.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.terms.sections.limitationOfLiability.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.termination.title}</h2>
            <p className="mb-4">
              {t.terms.sections.termination.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.contact.title}</h2>
            <p className="mb-4">
              {t.terms.sections.contact.intro}
            </p>
            <ul className="list-none pl-0 mb-4">
              <li><strong>{t.terms.sections.contact.email}</strong> <a href="mailto:Contato@AulaDeInglesEmCasa.com" className="text-primary hover:underline">Contato@AulaDeInglesEmCasa.com</a></li>
              <li><strong>{t.terms.sections.contact.whatsapp}</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.terms.sections.changes.title}</h2>
            <p className="mb-4">
              {t.terms.sections.changes.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}