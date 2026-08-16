// ============================================================
//  CONFIGURAÇÃO CENTRAL — LANDING PAGE DENTISTA
//  Substitua os valores abaixo pelos dados do seu cliente.
//  Todos os campos marcados com [PLACEHOLDER] devem ser
//  preenchidos antes de entregar o site ao cliente.
// ============================================================

const DENTIST_CONFIG = {

  // ─────────────────────────────────────────────
  //  1. DADOS DO PROFISSIONAL
  // ─────────────────────────────────────────────
  DENTIST_NAME:       "[NOME DO DENTISTA]",          // Ex: "Dr. Carlos Souza"
  DENTIST_CRO:        "[CRO]",                        // Ex: "CRO-SP 12345"
  CLINIC_NAME:        "[NOME DA CLÍNICA]",            // Ex: "Odonto Premium"
  SPECIALTY:          "[ESPECIALIDADE]",              // Ex: "Estética Dental"
  DESCRIPTION_SHORT:  "[DIFERENCIAL CURTO DA CLÍNICA]", // Frase do hero, ~15 palavras
  DESCRIPTION_LONG:   "[BIOGRAFIA PROFISSIONAL COMPLETA DO DENTISTA OU CLÍNICA]",

  // ─────────────────────────────────────────────
  //  2. CONTATO
  // ─────────────────────────────────────────────
  PHONE:       "[TELEFONE]",       // Ex: "(11) 99999-9999"
  WHATSAPP:    "[WHATSAPP]",       // Ex: "5511999999999" (somente números com DDI+DDD)
  EMAIL:       "[E-MAIL]",         // Ex: "contato@clinica.com.br"

  // ─────────────────────────────────────────────
  //  3. REDES SOCIAIS
  // ─────────────────────────────────────────────
  INSTAGRAM_URL:  "[URL_INSTAGRAM]",   // Ex: "https://instagram.com/suaclinica"
  FACEBOOK_URL:   "[URL_FACEBOOK]",    // Ex: "https://facebook.com/suaclinica"
  WEBSITE:        "[WEBSITE]",         // Ex: "https://www.suaclinica.com.br"

  // ─────────────────────────────────────────────
  //  4. ENDEREÇO
  // ─────────────────────────────────────────────
  ADDRESS:          "[ENDEREÇO]",   // Ex: "Rua das Flores, 123 — Sala 45"
  NEIGHBORHOOD:     "[BAIRRO]",     // Ex: "Jardins"
  CITY:             "[CIDADE]",     // Ex: "São Paulo"
  STATE:            "[ESTADO]",     // Ex: "SP"
  ZIP_CODE:         "[CEP]",        // Ex: "01310-100"
  GOOGLE_MAPS_URL:  "[LINK_GOOGLE_MAPS]",   // Link embed do Google Maps
  GOOGLE_MAPS_LINK: "[LINK_COMO_CHEGAR]",   // Link para abrir o Maps no celular

  // ─────────────────────────────────────────────
  //  5. AGENDAMENTO
  // ─────────────────────────────────────────────
  BOOKING_URL: "[LINK_AGENDAMENTO]", // Ex: link do Doctoralia, BoaConsulta, etc.
  GOOGLE_REVIEWS_URL: "[LINK_GOOGLE_REVIEWS]",

  // ─────────────────────────────────────────────
  //  6. MÉTRICAS DE CONFIANÇA
  // ─────────────────────────────────────────────
  GOOGLE_RATING:    "[AVALIAÇÃO GOOGLE]",   // Ex: "4.9 de 5 no Google"
  PATIENTS_COUNT:   "[X]",                   // Ex: "2.000"
  YEARS_EXPERIENCE: "[X]",                   // Ex: "15"
  SPECIALTIES_COUNT:"[X]",                   // Ex: "8"

  // ─────────────────────────────────────────────
  //  7. IDENTIDADE VISUAL
  // ─────────────────────────────────────────────
  PRIMARY_COLOR:   "#0a6fa8",   // Azul clínico premium
  SECONDARY_COLOR: "#e8f4fd",   // Azul muito claro (background)
  ACCENT_COLOR:    "#00b4d8",   // Azul vibrante de destaque
  TEXT_COLOR:      "#1a2e3b",   // Azul-escuro quase preto
  BG_COLOR:        "#ffffff",   // Branco puro
  LOGO_URL:        "",          // Deixe "" para exibir nome como texto

  // ─────────────────────────────────────────────
  //  8. IMAGENS
  // ─────────────────────────────────────────────
  DOCTOR_PHOTO:   "dentist_hero.jpg",       // Foto do dentista para o Hero
  DOCTOR_PHOTO2:  "dentist_hero.jpg",       // Foto do dentista para seção Sobre

  CLINIC_PHOTOS: [
    { src: "clinic_reception.jpg",  caption: "Recepção",          category: "clinica" },
    { src: "clinic_treatment.jpg",  caption: "Consultório",       category: "clinica" },
    // Adicione mais fotos aqui
  ],

  BEFORE_AFTER: [
    // {
    //   before: "antes1.jpg",
    //   after:  "depois1.jpg",
    //   treatment: "[NOME DO TRATAMENTO]",
    //   description: "[DESCRIÇÃO DO CASO — com autorização do paciente]"
    // }
    // Adicione casos reais aqui apenas com autorização expressa
  ],

  // ─────────────────────────────────────────────
  //  9. HORÁRIO DE FUNCIONAMENTO
  // ─────────────────────────────────────────────
  OPENING_HOURS: [
    { day: "Segunda-feira",  hours: "[HORÁRIO]",  open: true  },
    { day: "Terça-feira",    hours: "[HORÁRIO]",  open: true  },
    { day: "Quarta-feira",   hours: "[HORÁRIO]",  open: true  },
    { day: "Quinta-feira",   hours: "[HORÁRIO]",  open: true  },
    { day: "Sexta-feira",    hours: "[HORÁRIO]",  open: true  },
    { day: "Sábado",         hours: "[HORÁRIO]",  open: true  },
    { day: "Domingo",        hours: "Fechado",    open: false },
  ],

  // ─────────────────────────────────────────────
  //  10. TRATAMENTOS
  // ─────────────────────────────────────────────
  TREATMENTS: [
    {
      id: "implantes",
      icon: "🦷",
      name: "Implantes Dentários",
      description: "Solução definitiva para dentes perdidos, com aparência e função natural.",
      benefits: ["Resultado permanente", "Função mastigatória completa", "Estética natural"],
    },
    {
      id: "clareamento",
      icon: "😁",
      name: "Clareamento Dental",
      description: "Tratamento seguro e eficaz para um sorriso até vários tons mais branco.",
      benefits: ["Resultado imediato", "Procedimento seguro", "Autoestima elevada"],
    },
    {
      id: "lentes",
      icon: "✨",
      name: "Lentes de Contato Dental",
      description: "Facetas ultra-finas que transformam o sorriso de forma minimamente invasiva.",
      benefits: ["Mínimo desgaste", "Alta durabilidade", "Estética impecável"],
    },
    {
      id: "ortodontia",
      icon: "🦷",
      name: "Ortodontia",
      description: "Alinhamento dos dentes com aparelhos tradicionais ou alinhadores invisíveis.",
      benefits: ["Melhora função e estética", "Opções discretas", "Para todas as idades"],
    },
    {
      id: "limpeza",
      icon: "🪥",
      name: "Limpeza e Prevenção",
      description: "Profilaxia profissional para manter sua saúde bucal em dia.",
      benefits: ["Previne cáries", "Remove tártaro", "Hálito fresco"],
    },
    {
      id: "proteses",
      icon: "👑",
      name: "Próteses Dentárias",
      description: "Restaure sua capacidade mastigatória e o belo sorriso com próteses de alta qualidade.",
      benefits: ["Diversas modalidades", "Conforto e funcionalidade", "Estética natural"],
    },
    {
      id: "odontopediatria",
      icon: "❤️",
      name: "Odontopediatria",
      description: "Cuidado odontológico especializado e acolhedor para crianças de todas as idades.",
      benefits: ["Ambiente lúdico", "Prevenção desde cedo", "Equipe especializada"],
    },
    {
      id: "endodontia",
      icon: "🦷",
      name: "Endodontia (Canal)",
      description: "Tratamento de canal moderno e praticamente indolor com alta tecnologia.",
      benefits: ["Salva o dente natural", "Procedimento seguro", "Alívio da dor"],
    },
  ],

  // ─────────────────────────────────────────────
  //  11. EQUIPE
  // ─────────────────────────────────────────────
  TEAM: [
    {
      photo: "dentist_hero.jpg",
      name:  "[NOME DO DENTISTA]",
      role:  "Cirurgião-Dentista",
      specialty: "[ESPECIALIDADE]",
      cro:   "[CRO]",
    },
    // Adicione mais profissionais aqui
  ],

  // ─────────────────────────────────────────────
  //  12. DEPOIMENTOS
  // ─────────────────────────────────────────────
  TESTIMONIALS: [
    // Insira somente depoimentos reais de pacientes autorizados
    // {
    //   name: "[NOME OU INICIAL DO PACIENTE]",
    //   text: "[DEPOIMENTO REAL]",
    //   rating: 5,
    //   treatment: "[TRATAMENTO REALIZADO]"
    // }
  ],

  // ─────────────────────────────────────────────
  //  13. FORMAS DE PAGAMENTO / CONVÊNIOS
  // ─────────────────────────────────────────────
  PAYMENT_METHODS: [
    { icon: "💳", label: "Cartão de Crédito" },
    { icon: "💳", label: "Cartão de Débito" },
    { icon: "📱", label: "Pix" },
    { icon: "💵", label: "Dinheiro" },
    // { icon: "🏥", label: "[CONVÊNIO]" },  // Descomente e preencha se tiver convênios
  ],

  // ─────────────────────────────────────────────
  //  14. DIFERENCIAIS
  // ─────────────────────────────────────────────
  DIFFERENTIALS: [
    { icon: "🎯", title: "Atendimento Personalizado",    desc: "Cada paciente recebe atenção individualizada e um plano de tratamento exclusivo." },
    { icon: "🏆", title: "Profissionais Especializados", desc: "Equipe com formação contínua e especialização nas mais modernas técnicas odontológicas." },
    { icon: "🔬", title: "Tecnologia de Ponta",          desc: "Equipamentos modernos para diagnósticos precisos e tratamentos mais confortáveis." },
    { icon: "🛋️", title: "Ambiente Confortável",         desc: "Clínica projetada para seu bem-estar, com design acolhedor e estrutura completa." },
    { icon: "🛡️", title: "Segurança e Higiene",          desc: "Protocolos rigorosos de biossegurança e esterilização em todos os procedimentos." },
    { icon: "❤️", title: "Atendimento Humanizado",       desc: "Tratamos cada paciente com empatia, carinho e respeito." },
  ],

  // ─────────────────────────────────────────────
  //  15. PERGUNTAS FREQUENTES (FAQ)
  // ─────────────────────────────────────────────
  FAQ: [
    {
      question: "Como faço para agendar uma consulta?",
      answer: "Você pode agendar pelo nosso site, WhatsApp, telefone ou pelo link de agendamento online disponível nesta página."
    },
    {
      question: "Quais tratamentos vocês oferecem?",
      answer: "Oferecemos implantes, clareamento, lentes de contato dental, ortodontia, limpeza preventiva, próteses, odontopediatria, endodontia e muito mais. Consulte a seção de tratamentos para detalhes."
    },
    {
      question: "Vocês atendem crianças?",
      answer: "Sim! Temos atendimento especializado em odontopediatria, em ambiente preparado e acolhedor para os pequenos."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartão de crédito, débito, Pix e dinheiro. Trabalhamos com parcelamento. [Informe convênios, se houver]."
    },
    {
      question: "É necessário fazer avaliação antes de iniciar um tratamento?",
      answer: "Sim. A avaliação inicial é fundamental para que possamos entender suas necessidades e indicar o tratamento mais adequado."
    },
    {
      question: "Qual o horário de atendimento?",
      answer: "Atendemos de segunda a sexta das [HORÁRIO] e aos sábados das [HORÁRIO]. [Adapte conforme os horários do cliente]."
    },
    {
      question: "Como chegar à clínica?",
      answer: "[ENDEREÇO COMPLETO]. Temos [informar estacionamento / transporte público próximo]."
    },
    {
      question: "Vocês realizam emergências odontológicas?",
      answer: "Sim, temos horários reservados para atendimentos de urgência. Entre em contato pelo WhatsApp para verificar disponibilidade."
    },
  ],

  // ─────────────────────────────────────────────
  //  16. SEO LOCAL
  // ─────────────────────────────────────────────
  SEO: {
    title:       "Dentista em [CIDADE] | [NOME DA CLÍNICA] — [ESPECIALIDADE]",
    description: "Clínica odontológica premium em [BAIRRO], [CIDADE]. Especializada em [ESPECIALIDADE]. Agende sua avaliação gratuita pelo WhatsApp.",
    keywords:    "dentista [CIDADE], clínica odontológica [BAIRRO], [ESPECIALIDADE] [CIDADE], implante dental [CIDADE]",
  },

};
