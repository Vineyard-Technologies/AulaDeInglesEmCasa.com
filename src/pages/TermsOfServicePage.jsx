import { useEffect } from "react"
import { updateMetaTags, addStructuredData } from "@/utils/seo"

const termsOfServiceMetaData = {
  title: "Termos de Serviço | Aula de Inglês em Casa",
  description: "Termos de serviço das aulas de inglês com Andrew Rogers em Campo Grande, MS. Conheça as condições para as aulas particulares.",
  canonical: "https://auladeinglesemcasa.com/termos"
}

export function TermsOfServicePage() {
  useEffect(() => {
    updateMetaTags(termsOfServiceMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Termos de Serviço</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Última atualização:</strong> 13 de setembro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao contratar os serviços de aula de inglês com Andrew Rogers, você concorda com estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="mb-4">
              Oferecemos serviços de ensino de inglês, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Aulas particulares individuais</li>
              <li>Aulas em grupo (pequenos grupos)</li>
              <li>Aulas online via plataformas digitais</li>
              <li>Aulas de conversação</li>
              <li>Material didático personalizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Agendamento e Cancelamento</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Agendamento</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>As aulas devem ser agendadas com pelo menos 24 horas de antecedência</li>
              <li>Horários estão sujeitos à disponibilidade do professor</li>
              <li>Confirmação será enviada por WhatsApp ou email</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">3.2 Cancelamento</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cancelamentos devem ser feitos com pelo menos 4 horas de antecedência</li>
              <li>Cancelamentos com menos de 4 horas podem resultar em cobrança integral</li>
              <li>Em caso de emergência, entre em contato imediatamente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Pagamento e Preços</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Os preços são definidos conforme o tipo de aula e duração</li>
              <li>Pagamento pode ser feito via PIX, transferência bancária ou dinheiro</li>
              <li>Pacotes de aulas devem ser pagos antecipadamente</li>
              <li>Não há reembolso para aulas não comparecidas sem cancelamento prévio</li>
              <li>Preços podem ser alterados com 30 dias de antecedência</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades do Aluno</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Comparecer pontualmente às aulas agendadas</li>
              <li>Ter os materiais necessários (caderno, caneta, acesso à internet para aulas online)</li>
              <li>Manter um ambiente adequado para o aprendizado</li>
              <li>Comunicar dificuldades ou necessidades especiais</li>
              <li>Respeitar o professor e outros alunos (em aulas em grupo)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Responsabilidades do Professor</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer ensino de qualidade e personalizado</li>
              <li>Ser pontual e preparado para as aulas</li>
              <li>Adaptar o conteúdo conforme o nível e necessidades do aluno</li>
              <li>Manter a confidencialidade das informações do aluno</li>
              <li>Comunicar qualquer mudança de horário com antecedência</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Aulas Online</h2>
            <p className="mb-4">
              Para aulas online:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>É responsabilidade do aluno ter conexão estável com a internet</li>
              <li>Problemas técnicos do aluno não constituem motivo para reembolso</li>
              <li>Recomendamos testar a conexão antes da aula</li>
              <li>Plataforma padrão: Google Meet ou Zoom</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Propriedade Intelectual</h2>
            <p className="mb-4">
              Todo material didático fornecido pelo professor permanece de sua propriedade e não pode ser reproduzido ou distribuído sem autorização.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O professor não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Resultados específicos em exames ou testes</li>
              <li>Problemas técnicos durante aulas online</li>
              <li>Interrupções causadas por fatores externos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Rescisão</h2>
            <p className="mb-4">
              Qualquer uma das partes pode encerrar os serviços com 7 dias de antecedência. Aulas pagas antecipadamente serão reembolsadas proporcionalmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
            <p className="mb-4">
              Para questões sobre estes Termos de Serviço:
            </p>
            <ul className="list-none pl-0 mb-4">
              <li><strong>Email:</strong> <a href="mailto:Contato@AulaDeInglesEmCasa.com" className="text-primary hover:underline">Contato@AulaDeInglesEmCasa.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Alterações nos Termos</h2>
            <p className="mb-4">
              Estes termos podem ser alterados a qualquer momento. Mudanças significativas serão comunicadas com pelo menos 30 dias de antecedência.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}