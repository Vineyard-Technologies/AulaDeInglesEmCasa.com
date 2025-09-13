import { useEffect } from "react"
import { updateMetaTags, addStructuredData } from "@/utils/seo"

const privacyPolicyMetaData = {
  title: "Política de Privacidade | Aula de Inglês em Casa",
  description: "Política de privacidade da aula de inglês com Andrew Rogers em Campo Grande, MS. Saiba como protegemos seus dados pessoais.",
  canonical: "https://auladeinglesemcasa.com/privacidade"
}

export function PrivacyPolicyPage() {
  useEffect(() => {
    updateMetaTags(privacyPolicyMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Última atualização:</strong> 13 de setembro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Número de telefone/WhatsApp</li>
              <li>Informações sobre seu nível de inglês</li>
              <li>Preferências de horário para a aula</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Agendar e conduzir sua aula de inglês</li>
              <li>Entrar em contato sobre horários e materiais</li>
              <li>Personalizar o conteúdo da aula conforme seu nível</li>
              <li>Enviar lembretes sobre a aula agendada</li>
              <li>Processar pagamentos (quando aplicável)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Quando exigido por lei</li>
              <li>Para processar pagamentos através de plataformas seguras</li>
              <li>Com seu consentimento explícito</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies e Tecnologias Similares</h2>
            <p className="mb-4">
              Utilizamos cookies para melhorar sua experiência em nosso site e para análises através do Google Analytics. Você pode desabilitar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-none pl-0 mb-4">
              <li><strong>Email:</strong> <a href="mailto:Contato@AulaDeInglesEmCasa.com" className="text-primary hover:underline">Contato@AulaDeInglesEmCasa.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
            <p className="mb-4">
              Podemos atualizar esta Política de Privacidade ocasionalmente. Notificaremos sobre mudanças significativas através de nosso site ou por email.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}