import { useEffect } from "react"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { useTranslations } from "@/data/translations"

export function PrivacyPolicyPage() {
  const t = useTranslations()
  
  useEffect(() => {
    const privacyPolicyMetaData = {
      title: t.privacy.meta.title,
      description: t.privacy.meta.description,
      canonical: "https://auladeinglesemcasa.com/privacidade"
    }
    updateMetaTags(privacyPolicyMetaData)
  }, [t])

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.privacy.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>{t.privacy.lastUpdated}</strong> {t.privacy.lastUpdatedDate}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.informationCollected.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.informationCollected.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.privacy.sections.informationCollected.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.howWeUse.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.howWeUse.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.privacy.sections.howWeUse.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.informationSharing.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.informationSharing.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.privacy.sections.informationSharing.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.dataSecurity.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.dataSecurity.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.yourRights.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.yourRights.intro}
            </p>
            <ul className="list-disc pl-6 mb-4">
              {t.privacy.sections.yourRights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.cookies.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.cookies.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.contact.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.contact.intro}
            </p>
            <ul className="list-none pl-0 mb-4">
              <li><strong>{t.privacy.sections.contact.email}</strong> <a href="mailto:Contato@AulaDeInglesEmCasa.com" className="text-primary hover:underline">Contato@AulaDeInglesEmCasa.com</a></li>
              <li><strong>{t.privacy.sections.contact.whatsapp}</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.privacy.sections.changes.title}</h2>
            <p className="mb-4">
              {t.privacy.sections.changes.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}