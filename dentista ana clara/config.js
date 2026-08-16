// ============================================================
//  CONFIGURAÇÃO CENTRAL — DRA. ANA CLARA COSTA DA SILVA
//  Consultório Odontológico Sorrisos Bonitos
//  Amarante - PI
// ============================================================

const DENTIST_CONFIG = {

  // ─────────────────────────────────────────────
  //  1. DADOS DO PROFISSIONAL
  // ─────────────────────────────────────────────
  DENTIST_NAME:       "Dra. Ana Clara Costa da Silva",
  DENTIST_CRO:        "CRO-PI 10523",
  CLINIC_NAME:        "Sorrisos Bonitos",
  SPECIALTY:          "Cirurgia Oral e Odontologia Geral",
  DESCRIPTION_SHORT:  "Aqui ninguém sente dor — Cuidado humanizado, acolhimento e precisão para o seu sorriso.",
  DESCRIPTION_LONG:   "Graduada em Odontologia, a Dra. Ana Clara alia técnicas modernas a um atendimento empático e acolhedor. Especialista em tornar procedimentos cirúrgicos e preventivos tranquilos, confortáveis e sem medo para cada paciente.",

  // ─────────────────────────────────────────────
  //  2. CONTATO
  // ─────────────────────────────────────────────
  PHONE:       "(86) 99810-9874",
  WHATSAPP:    "5586998109874",
  EMAIL:       "anaclaracostt@gmail.com",

  // ─────────────────────────────────────────────
  //  3. REDES SOCIAIS
  // ─────────────────────────────────────────────
  INSTAGRAM_URL:  "https://instagram.com/anaclaractts",
  FACEBOOK_URL:   "https://facebook.com/anaclarinha",
  WEBSITE:        "",

  // ─────────────────────────────────────────────
  //  4. ENDEREÇO
  // ─────────────────────────────────────────────
  ADDRESS:          "Rua Santo Antônio, nº 145 — Sala 01 / Térreo",
  NEIGHBORHOOD:     "Alto Alegre",
  CITY:             "Amarante",
  STATE:            "PI",
  ZIP_CODE:         "64400-000",
  GOOGLE_MAPS_URL:  "",  // Adicione o iframe embed do Google Maps aqui
  GOOGLE_MAPS_LINK: "https://maps.google.com/?q=Rua+Santo+Ant%C3%B4nio+145+Amarante+PI",

  // ─────────────────────────────────────────────
  //  5. AGENDAMENTO
  // ─────────────────────────────────────────────
  BOOKING_URL: "https://wa.me/5586998109874?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21",
  GOOGLE_REVIEWS_URL: "",  // Adicione o link do Google Reviews quando disponível

  // ─────────────────────────────────────────────
  //  6. MÉTRICAS DE CONFIANÇA
  // ─────────────────────────────────────────────
  GOOGLE_RATING:    "5.0",
  PATIENTS_COUNT:   "500+",
  YEARS_EXPERIENCE: "5+",
  SPECIALTIES_COUNT:"7",

  // ─────────────────────────────────────────────
  //  7. IDENTIDADE VISUAL
  //  Paleta: Turquesa Petróleo + Dourado Champagne
  // ─────────────────────────────────────────────
  PRIMARY_COLOR:   "#0E8388",   // Turquesa Petróleo (confiança + saúde)
  SECONDARY_COLOR: "#E8F7F7",   // Turquesa muito claro (background)
  ACCENT_COLOR:    "#C5A880",   // Dourado Champagne (acolhimento + premium)
  TEXT_COLOR:      "#1C2B2B",   // Verde-escuro quase preto
  BG_COLOR:        "#F8F9FA",   // Branco Gelo / Off-White
  LOGO_URL:        "",          // Adicionar logo-sorrisos-bonitos.svg quando disponível

  // ─────────────────────────────────────────────
  //  8. IMAGENS
  // ─────────────────────────────────────────────
  DOCTOR_PHOTO:   "dentist_hero.jpg",    // Substituir por: hero-banner.jpg
  DOCTOR_PHOTO2:  "dentist_hero.jpg",    // Substituir por: foto da Dra. na seção Sobre

  CLINIC_PHOTOS: [
    { src: "clinic_reception.jpg",  caption: "Recepção",             category: "clinica" },
    { src: "clinic_treatment.jpg",  caption: "Consultório",          category: "clinica" },
    // Substituir por: recepcao.jpg, consultorio-1.jpg, equipamentos.jpg
  ],

  BEFORE_AFTER: [
    // Adicionar fotos reais com autorização dos pacientes
    // {
    //   before: "antes-clareamento.jpg",
    //   after:  "depois-clareamento.jpg",
    //   treatment: "Clareamento Dental",
    //   description: "Resultado natural em 2 sessões de clareamento a laser."
    // },
    // {
    //   before: "antes-resina.jpg",
    //   after:  "depois-resina.jpg",
    //   treatment: "Restauração com Resina Composta",
    //   description: "Recuperação estética e funcional de dente anterior."
    // },
  ],

  // ─────────────────────────────────────────────
  //  9. HORÁRIO DE FUNCIONAMENTO
  // ─────────────────────────────────────────────
  OPENING_HOURS: [
    { day: "Segunda-feira",  hours: "08h00 às 14h00",                    open: true  },
    { day: "Terça-feira",    hours: "08h00 às 14h00",                    open: true  },
    { day: "Quarta-feira",   hours: "08h00 às 14h00",                    open: true  },
    { day: "Quinta-feira",   hours: "08h00 às 14h00",                    open: true  },
    { day: "Sexta-feira",    hours: "08h00 às 14h00",                    open: true  },
    { day: "Sábado",         hours: "08h00 às 12h00 (com agendamento)",  open: true  },
    { day: "Domingo",        hours: "Fechado",                           open: false },
  ],

  // ─────────────────────────────────────────────
  //  10. TRATAMENTOS
  // ─────────────────────────────────────────────
  TREATMENTS: [
    {
      id: "siso",
      icon: "🦷",
      name: "Cirurgia de Siso e Extrações",
      description: "Remoção segura e sem dor de sisos inclusos e extrações simples com técnicas modernas de anestesia.",
      benefits: ["Procedimento 100% indolor", "Técnicas minimamente invasivas", "Recuperação rápida e tranquila"],
      forWhom: "Indicada para quem precisa remover sisos inclusos, semi-inclusos ou com qualquer grau de dificuldade, além de extrações simples.",
      howItWorks: "Utilizamos anestésicos modernos e técnicas de exodontia minimamente invasivas. A cirurgia é rápida e indolor. Prescrevemos todos os cuidados pós-operatórios para uma recuperação tranquila.",
    },
    {
      id: "limpeza",
      icon: "🪥",
      name: "Limpeza e Profilaxia Completa",
      description: "Remoção de tártaro e placa bacteriana com aplicação de flúor para uma saúde bucal impecável.",
      benefits: ["Remove tártaro e placa", "Aplicação protetora de flúor", "Hálito fresco e sorriso brilhante"],
      forWhom: "Indicado para todos os pacientes como rotina semestral de prevenção e manutenção da saúde bucal.",
      howItWorks: "Realizada com aparelho de ultrassom e instrumentos de precisão, seguida de polimento e aplicação de flúor para proteção extra.",
    },
    {
      id: "clareamento",
      icon: "😁",
      name: "Clareamento Dental",
      description: "Clareamento a laser em consultório e kits supervisionados para uso caseiro com resultado natural.",
      benefits: ["Resultado natural e duradouro", "Clareamento seguro e supervisionado", "Autoestima elevada"],
      forWhom: "Indicado para quem deseja um sorriso visivelmente mais claro, removendo manchas externas do esmalte dental.",
      howItWorks: "Realizado em 1 a 2 sessões em consultório com gel clareador ativado por luz, ou com moldeiras personalizadas para uso em casa sob supervisão.",
    },
    {
      id: "restauracao",
      icon: "✨",
      name: "Restaurações Estéticas (Resina)",
      description: "Recuperação estética e funcional com resinas de alta qualidade para um resultado natural e duradouro.",
      benefits: ["Estética impecável", "Resinas de alta qualidade", "Preserva estrutura natural do dente"],
      forWhom: "Indicado para quem tem cáries, fraturas, desgastes ou manchas nos dentes que comprometem estética ou função.",
      howItWorks: "O dente é preparado e a resina composta é aplicada em camadas, esculpida e polida para reproduzir perfeitamente a aparência natural.",
    },
    {
      id: "periodontia",
      icon: "🩺",
      name: "Tratamento de Gengiva",
      description: "Periodontia básica para prevenir e tratar gengivite, garantindo saúde gengival e bucal global.",
      benefits: ["Previne perda de dentes", "Elimina sangramento gengival", "Saúde bucal completa"],
      forWhom: "Indicado para pacientes com gengivite, sangramento gengival, retração ou sensibilidade nas gengivas.",
      howItWorks: "Realizado por meio de raspagem supra e subgengival, instrução de higiene oral e acompanhamento periódico para manutenção.",
    },
    {
      id: "bruxismo",
      icon: "😤",
      name: "Placa de Bruxismo",
      description: "Proteção personalizada contra desgaste dental e dores na mandíbula causadas pelo bruxismo.",
      benefits: ["Protege contra desgaste", "Alivia dores na mandíbula", "Confeccionada sob medida"],
      forWhom: "Indicado para pacientes que rangem ou apertam os dentes durante o sono (bruxismo) ou vigília.",
      howItWorks: "Moldagem dos dentes para confeccionar uma placa rígida personalizada, usada durante o sono para distribuir a pressão e proteger o esmalte.",
    },
    {
      id: "odontopediatria",
      icon: "❤️",
      name: "Odontopediatria e Prevenção",
      description: "Atendimento cuidadoso, paciente e acolhedor para crianças e jovens de todas as idades.",
      benefits: ["Ambiente acolhedor e lúdico", "Prevenção desde a infância", "Experiência positiva para crianças"],
      forWhom: "Indicado para crianças e adolescentes que precisam de acompanhamento odontológico preventivo e curativo.",
      howItWorks: "A consulta é conduzida de forma calma e lúdica, com foco na prevenção, educação em saúde bucal e tratamentos adaptados à faixa etária.",
    },
  ],

  // ─────────────────────────────────────────────
  //  11. EQUIPE
  // ─────────────────────────────────────────────
  TEAM: [
    {
      photo: "dentist_hero.jpg",
      name:  "Dra. Ana Clara Costa da Silva",
      role:  "Cirurgiã-Dentista Responsável",
      specialty: "Cirurgia Oral Menor e Odontologia Geral",
      cro:   "CRO-PI 10523",
    },
    {
      photo: "dentist_hero.jpg",
      name:  "Assistente de Consultório (ASB)",
      role:  "Auxiliar de Saúde Bucal",
      specialty: "Apoio clínico e esterilização",
      cro:   "",
    },
    {
      photo: "dentist_hero.jpg",
      name:  "Equipe de Recepção",
      role:  "Atendimento e Agendamentos",
      specialty: "Coordenação e pós-operatório",
      cro:   "",
    },
  ],

  // ─────────────────────────────────────────────
  //  12. DEPOIMENTOS
  // ─────────────────────────────────────────────
  TESTIMONIALS: [
    {
      name: "Mariana S.",
      text: "Tinha pavor de tirar o siso, mas a Dra. Ana Clara tem uma mão super leve! Não senti dor nenhuma durante o procedimento e a recuperação foi maravilhosa.",
      rating: 5,
      treatment: "Cirurgia de Siso",
    },
    {
      name: "Carlos E.",
      text: "Ambiente limpo, atendimento pontual e muito carinho com os pacientes. Recomendo demais a clínica em Amarante!",
      rating: 5,
      treatment: "Limpeza e Profilaxia",
    },
    {
      name: "Juliana M.",
      text: "Fiz meu clareamento e limpeza lá. Ficou perfeito! Excelente profissional.",
      rating: 5,
      treatment: "Clareamento Dental",
    },
  ],

  // ─────────────────────────────────────────────
  //  13. FORMAS DE PAGAMENTO / CONVÊNIOS
  // ─────────────────────────────────────────────
  PAYMENT_METHODS: [
    { icon: "📱", label: "Pix (desconto especial à vista)" },
    { icon: "💳", label: "Cartão de Crédito (até 10x sem juros)" },
    { icon: "💳", label: "Cartão de Débito" },
    { icon: "💵", label: "Dinheiro" },
    { icon: "🏥", label: "Particular c/ recibo para reembolso" },
  ],

  // ─────────────────────────────────────────────
  //  14. DIFERENCIAIS
  // ─────────────────────────────────────────────
  DIFFERENTIALS: [
    { icon: "❤️", title: "Atendimento Humanizado",      desc: "Foco total no bem-estar de pacientes com medo de dentista. Aqui você é acolhido desde o primeiro contato." },
    { icon: "💉", title: "Anestesia Confortável",        desc: "Protocolos modernos de anestesiologia para garantir um procedimento 100% indolor e tranquilo." },
    { icon: "🛡️", title: "Biossegurança Rigorosa",      desc: "Esterilização em autoclave e materiais descartáveis de primeira linha em todos os procedimentos." },
    { icon: "❄️", title: "Ambiente Climatizado",         desc: "Conforto garantido do momento em que você entra até a saída da clínica." },
    { icon: "🦷", title: "Especialista em Siso",         desc: "Cirurgia de extração de sisos com técnica minimamente invasiva e recuperação rápida." },
    { icon: "🎯", title: "Atendimento Personalizado",    desc: "Cada paciente recebe atenção individual e um plano de tratamento pensado exclusivamente para suas necessidades." },
  ],

  // ─────────────────────────────────────────────
  //  15. PERGUNTAS FREQUENTES (FAQ)
  // ─────────────────────────────────────────────
  FAQ: [
    {
      question: "A extração do siso realmente não dói?",
      answer: "Não! Utilizamos anestésicos modernos e técnicas minimamente invasivas para que você não sinta nenhuma dor durante a cirurgia. Além disso, prescrevemos todos os cuidados pós-operatórios para uma recuperação tranquila e sem complicações.",
    },
    {
      question: "Como faço para agendar uma avaliação?",
      answer: "Basta clicar no botão de WhatsApp do site ou preencher o formulário rápido de agendamento. Nossa equipe responderá rapidamente com os horários disponíveis.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix com desconto especial, dinheiro, cartões de débito e parcelamos em até 10x no cartão de crédito. Também emitimos recibo para reembolso odontológico.",
    },
    {
      question: "Com quantos anos é recomendado tirar o siso?",
      answer: "Geralmente entre os 16 e 21 anos, quando as raízes ainda não estão totalmente formadas, facilitando a cirurgia e a recuperação. Porém a avaliação pode ser feita em qualquer idade através de uma radiografia panorâmica.",
    },
    {
      question: "Vocês atendem crianças?",
      answer: "Sim! Temos atendimento de odontopediatria com ambiente acolhedor e abordagem lúdica especialmente pensada para deixar as crianças confortáveis e sem medo.",
    },
    {
      question: "Quais são os horários de atendimento?",
      answer: "Atendemos de segunda a sexta das 08h às 14h e aos sábados das 08h às 12h (com agendamento prévio). Domingos e feriados fechados.",
    },
    {
      question: "Como chegar à clínica?",
      answer: "Estamos na Rua Santo Antônio, nº 145, Sala 01 — Bairro Alto Alegre, Amarante - PI. Fácil acesso com estacionamento em frente à clínica.",
    },
    {
      question: "É necessário fazer avaliação antes de iniciar um tratamento?",
      answer: "Sim. A avaliação inicial é fundamental para que a Dra. Ana Clara entenda suas necessidades, realize o diagnóstico correto e indique o tratamento mais adequado para você.",
    },
  ],

  // ─────────────────────────────────────────────
  //  16. SEO LOCAL
  // ─────────────────────────────────────────────
  SEO: {
    title:       "Dentista em Amarante-PI | Sorrisos Bonitos — Dra. Ana Clara | Cirurgia de Siso",
    description: "Consultório odontológico no Alto Alegre, Amarante-PI. Especialista em cirurgia de siso, clareamento e odontologia geral. Atendimento humanizado — aqui ninguém sente dor. Agende pelo WhatsApp!",
    keywords:    "dentista Amarante PI, cirurgia de siso Amarante, extração siso Amarante PI, clareamento dental Amarante, Dra Ana Clara dentista, consultório odontológico Alto Alegre Amarante",
  },

};
