# Planning Guide

Website profissional para Andrew Rogers oferecendo aula particular de inglês em domicílio em Campo Grande, MS, conectando estudantes locais com ensino personalizado de qualidade.

**Experience Qualities**: 
1. Confiável - O site deve transmitir profissionalismo e credibilidade para pais e estudantes que contratam um professor particular
2. Acolhedor - Criar uma atmosfera calorosa que reflita o ensino personalizado e a conveniência de aula em casa
3. Acessível - Interface clara e direta que facilite o contato e agendamento de aulas

**Complexity Level**: Content Showcase (information-focused)
- O foco principal é apresentar os serviços, qualificações e facilitar o contato, sem necessidade de funcionalidades complexas de aplicação

## Essential Features

**Hero Section**
- Functionality: Apresentação principal com nome, serviço e localização
- Purpose: Estabelecer imediatamente credibilidade e relevância local
- Trigger: Carregamento da página
- Progression: Visualização do nome → descrição do serviço → localização Campo Grande → call-to-action para contato
- Success criteria: Visitantes compreendem o serviço e localização em 3 segundos

**Sobre o Professor**
- Functionality: Seção detalhando qualificações, experiência e metodologia
- Purpose: Construir confiança através de credenciais e abordagem pessoal
- Trigger: Scroll ou navegação
- Progression: Foto profissional → qualificações → experiência → metodologia → benefícios das aula em casa
- Success criteria: Pais/estudantes sentem confiança para contratar

**Serviços Oferecidos**
- Functionality: Lista clara dos tipos de aula e níveis atendidos
- Purpose: Ajudar visitantes a identificar se o serviço atende suas necessidades
- Trigger: Navegação ou scroll
- Progression: Visualização dos níveis → tipos de curso → faixas etárias → metodologia
- Success criteria: Visitantes identificam o serviço adequado para seu nível

**Contato e Agendamento**
- Functionality: Múltiplas formas de contato (WhatsApp, telefone, email)
- Purpose: Facilitar o primeiro contato e agendamento de aula experimental
- Trigger: Click em botões de contato
- Progression: Seleção do método de contato → redirecionamento para WhatsApp/telefone → início da conversa
- Success criteria: Taxa alta de conversão de visitante para contato inicial

## Edge Case Handling
- **Dispositivos móveis**: Layout responsivo priorizando WhatsApp como método principal de contato
- **Carregamento lento**: Skeleton loading para imagens e conteúdo crítico
- **Sem JavaScript**: Informações essenciais e links de contato funcionam sem JS
- **Visitantes de outras cidades**: Indicação clara de que atende apenas Campo Grande

## Design Direction
O design deve transmitir profissionalismo educacional com toque pessoal e acolhedor, evocando confiança parental e seriedade acadêmica, com interface limpa e direta que facilite a conversão para contato.

## Color Selection
Triadic (três cores igualmente espaçadas) - Usando azul educacional, verde confiança e laranja caloroso para criar equilíbrio entre profissionalismo e acessibilidade pessoal.

- **Primary Color**: Azul profundo (oklch(0.45 0.15 250)) - Transmite confiança, profissionalismo e educação
- **Secondary Colors**: Verde suave (oklch(0.55 0.12 140)) para crescimento e sucesso acadêmico
- **Accent Color**: Laranja caloroso (oklch(0.65 0.18 50)) para calls-to-action e elementos de destaque, transmitindo energia e acessibilidade
- **Foreground/Background Pairings**: 
  - Background branco (oklch(1 0 0)): Texto azul escuro (oklch(0.25 0.05 250)) - Ratio 12.5:1 ✓
  - Primary azul (oklch(0.45 0.15 250)): Texto branco (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent laranja (oklch(0.65 0.18 50)): Texto branco (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Card cinza claro (oklch(0.98 0 0)): Texto azul escuro (oklch(0.25 0.05 250)) - Ratio 11.8:1 ✓

## Font Selection
Tipografia que combine seriedade educacional com acessibilidade, usando Google Fonts que transmitam profissionalismo sem ser intimidador.

- **Typographic Hierarchy**: 
  - H1 (Nome do Professor): Inter Bold/36px/tight letter spacing para impacto e credibilidade
  - H2 (Seções): Inter SemiBold/28px/normal spacing para estrutura clara
  - H3 (Subseções): Inter Medium/22px/normal spacing para hierarquia
  - Body (Conteúdo): Inter Regular/16px/relaxed line height para legibilidade
  - CTA Buttons: Inter SemiBold/16px/normal spacing para destaque

## Animations
Animações sutis e profissionais que reforçam a credibilidade educacional, evitando excessos que possam parecer não-sérios para o contexto de educação.

- **Purposeful Meaning**: Micro-animações que comunicam profissionalismo e atenção aos detalhes, reforçando a qualidade do ensino
- **Hierarchy of Movement**: Cards de serviços com hover sutil, botões de CTA com feedback tátil, scroll suave entre seções

## Component Selection
- **Components**: Card para seções de serviços, Button para CTAs de contato, Avatar para foto do professor, Badge para qualificações
- **Customizations**: Hero section customizada, seção de contato com integração WhatsApp, layout responsivo brasileiro
- **States**: Botões com hover em verde suave, cards com elevação sutil, links de contato com feedback visual
- **Icon Selection**: Phone, MessageCircle (WhatsApp), Mail, MapPin, GraduationCap, Home, Clock
- **Spacing**: Seções com padding generoso (py-16), cards com gap-6, elementos internos com space-y-4
- **Mobile**: Layout stack vertical, botão WhatsApp fixo inferior, navegação simplificada, texto otimizado para leitura móvel