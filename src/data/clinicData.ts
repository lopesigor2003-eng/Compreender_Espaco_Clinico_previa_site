export interface ServiceItem {
  id: string;
  title: string;
  category: 'avaliacoes' | 'individuais' | 'desenvolvimento' | 'integrada';
  categoryLabel: string;
  isPrivateOnly?: boolean;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  council: string;
  quote: string;
  image: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string;
  rating: number;
  date: string;
  text: string;
}

export interface Insurance {
  name: string;
  tagline: string;
  description: string;
  status: string;
}

export const CLINIC_INFO = {
  name: "Compreender - Espaço Clínico Transdisciplinar",
  shortName: "Compreender",
  tagline: "Acolhimento, Evolução e Respeito à Singularidade",
  phoneFormatted: "+55 (55) 99131-2991",
  phoneRaw: "5555991312991",
  whatsappUrl: "https://wa.me/5555991312991?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimentos%20na%20Compreender.",
  address: "R. Gen. Neto, 551 - Centro, Santa Maria - RS, 97050-241",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.756358356165!2d-53.80911872365289!3d-29.68652497510411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb682498db25%3A0xe5a36b33a59a9307!2sR.%20Gen.%20Neto%2C%20551%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-241!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
  hours: "Segunda a Sexta, 08:00 – 19:00",
  instagramUrl: "https://www.instagram.com/espacocompreender/",
  instagramHandle: "@espacocompreender",
  heroImage: "https://i.postimg.cc/nrmwCn1X/Save-Clip-App-489549957-18071627620867450-5789285259178413628-n.webp",
  footerBgImage: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TIkqXMEgFq0SmHot8YZNzukc_mNAXKnYSbRz0aOlTWCDIKAK2J0jxCe1Oiz43-OHagfvalkYy-Lq_DRqTABDebbEySeaZz-e1EHzarRViwEZHPOH64x-dzUSirWcRydLMQvGYAhL99cE%3Dw277-h100-k-no"
};

export const CLINIC_SERVICES: ServiceItem[] = [
  // Avaliações Especializadas
  {
    id: "avaliacao-tea",
    title: "Avaliação Global Investigativa para TEA",
    category: "avaliacoes",
    categoryLabel: "Avaliações Especializadas",
    shortDescription: "Investigação diagnóstica transdisciplinar aprofundada para Transtorno do Espectro Autista em crianças, jovens e adultos.",
    fullDescription: "Protocolo clínico rigoroso e humanizado com múltiplas áreas (psicologia, fonoaudiologia, terapia ocupacional e psicomotricidade) para mapeamento detalhado do perfil de desenvolvimento neurodivergente.",
    targetAudience: "Crianças, adolescentes e adultos com suspeita de TEA ou necessidade de laudo diferencial.",
    iconName: "SearchCheck"
  },
  {
    id: "avaliacao-neuropsicologica",
    title: "Avaliação Neuropsicológica",
    category: "avaliacoes",
    categoryLabel: "Avaliações Especializadas",
    shortDescription: "Mapeamento minucioso das funções cognitivas, atenção, memória, funções executivas e linguagem.",
    fullDescription: "Instrumentação padronizada e escuta clínica refinada para identificar potencialidades e demandas de suporte cognitivo em transtornos de aprendizagem, TDAH e funções executivas.",
    targetAudience: "Todas as faixas etárias sob orientação médica, pedagógica ou demanda própria.",
    iconName: "Brain"
  },

  // Atendimentos Individuais
  {
    id: "psicologia",
    title: "Psicologia",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Acolhimento psicoterapêutico para desenvolvimento emocional, manejo de ansiedade e autoconhecimento.",
    fullDescription: "Espaço seguro de escuta ativa e vínculo terapêutico pautado no respeito à singularidade, promovendo autonomia e saúde mental integral.",
    targetAudience: "Crianças, adolescentes e adultos.",
    iconName: "HeartHandshake"
  },
  {
    id: "fonoaudiologia",
    title: "Fonoaudiologia",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Intervenção especializada em fala, linguagem compreensiva e expressiva, voz e motricidade orofacial.",
    fullDescription: "Abordagem clínica personalizada para estimular a comunicação funcional, deglutição segura e interação social.",
    targetAudience: "Bebês, crianças em fase de aquisição de fala, jovens e adultos.",
    iconName: "MessageSquareHeart"
  },
  {
    id: "terapia-ocupacional",
    title: "Terapia Ocupacional",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Autonomia nas Atividades da Vida Diária (AVDs), estimulação e integração sensorial personalizada.",
    fullDescription: "Apoio clínico para o desenvolvimento de competências motoras finas, autorregulação sensorial e participação ativa na rotina diária.",
    targetAudience: "Crianças e indivíduos com desafios de coordenação motora ou processamento sensorial.",
    iconName: "Sparkles"
  },
  {
    id: "psicopedagogia",
    title: "Psicopedagogia",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Diagnóstico e intervenção nas dificuldades de aprendizagem, leitura, escrita e raciocínio lógico.",
    fullDescription: "Construção de estratégias pedagógicas e cognitivas adaptadas ao ritmo individual, resgatando a autoestima e o prazer em aprender.",
    targetAudience: "Estudantes em idade escolar e jovens com dificuldades acadêmicas.",
    iconName: "GraduationCap"
  },
  {
    id: "psicomotricidade",
    title: "Psicomotricidade",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Integração harmônica entre movimento corporal, afetividade, cognição e esquema corporal.",
    fullDescription: "Sessões dinâmicas que trabalham equilíbrio, lateralidade, tônus e organização espaço-temporal através do brincar estruturado.",
    targetAudience: "Crianças em fase de desenvolvimento e desenvolvimento psicomotor atípico.",
    iconName: "Activity"
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    shortDescription: "Reabilitação motora, alinhamento postural, fortalecimento e prevenção de disfunções biomecânicas.",
    fullDescription: "Planos terapêuticos baseados em evidências para restabelecimento da mobilidade e alívio de queixas osteomusculares.",
    targetAudience: "Pacientes pediátricos e adultos em reabilitação.",
    iconName: "ShieldCheck"
  },
  {
    id: "educacao-especial",
    title: "Educação Especial*",
    category: "individuais",
    categoryLabel: "Atendimentos Individuais",
    isPrivateOnly: true,
    shortDescription: "Mediação pedagógica especializada e adaptação curricular personalizada.",
    fullDescription: "Atendimento especializado voltado a estudantes com deficiências, altas habilidades ou transtornos do neurodesenvolvimento com foco em inclusão efetiva.",
    targetAudience: "Crianças e jovens com necessidades educacionais especiais.",
    iconName: "BookOpen"
  },

  // Desenvolvimento e Aprendizagem
  {
    id: "reforco-escolar",
    title: "Reforço escolar individual ou em grupo*",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento e Aprendizagem",
    isPrivateOnly: true,
    shortDescription: "Suporte pedagógico direcionado para consolidação de conteúdos curriculares e rotina de estudos.",
    fullDescription: "Apoio didático humanizado para superar defasagens acadêmicas, fortalecer a segurança nos estudos e preparar para avaliações.",
    targetAudience: "Alunos do Ensino Fundamental e Médio.",
    iconName: "CheckSquare"
  },
  {
    id: "atendimentos-grupo",
    title: "Atendimentos em grupo*",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento e Aprendizagem",
    isPrivateOnly: true,
    shortDescription: "Grupos terapêuticos focados em interação interpessoal, comunicação e habilidades socioemocionais.",
    fullDescription: "Dinâmicas colaborativas mediadas por especialistas para favorecer convivência, empatia, escuta e vínculo social.",
    targetAudience: "Faixas etárias agrupadas por perfil e objetivo terapêutico.",
    iconName: "Users"
  },
  {
    id: "grupo-jovens-adolescentes",
    title: "Grupo para jovens e adolescentes*",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento e Aprendizagem",
    isPrivateOnly: true,
    shortDescription: "Espaço acolhedor de diálogo sobre identidade, transição para vida adulta e convívio social.",
    fullDescription: "Encontros estruturados abordando desafios emocionais, relacionamentos, autonomia, projeto de vida e convivência neurodiversa.",
    targetAudience: "Adolescentes e jovens de 12 a 22 anos.",
    iconName: "Compass"
  },
  {
    id: "oficinas-tematicas",
    title: "Oficinas temáticas para público geral*",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento e Aprendizagem",
    isPrivateOnly: true,
    shortDescription: "Workshops e vivências práticas sobre parentalidade, desenvolvimento infantil e bem-estar.",
    fullDescription: "Eventos práticos conduzidos pela equipe clínica compartilhando saberes, estratégias de manejo e práticas enriquecedoras.",
    targetAudience: "Famílias, educadores e comunidade geral.",
    iconName: "Palette"
  },
  {
    id: "oficinas-ferias",
    title: "Oficinas de verão e inverno*",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento e Aprendizagem",
    isPrivateOnly: true,
    shortDescription: "Programação especial no período de férias com atividades lúdicas, motoras e sensoriais.",
    fullDescription: "Proposta estimulante nas férias escolares que une brincadeiras integrativas, desenvolvimento psicomotor e socialização.",
    targetAudience: "Crianças em período de recesso escolar.",
    iconName: "SunMedium"
  },

  // Saúde Integrada
  {
    id: "odontologia",
    title: "Odontologia infantil e adulto*",
    category: "integrada",
    categoryLabel: "Saúde Integrada",
    isPrivateOnly: true,
    shortDescription: "Cuidado odontológico acolhedor com adaptação sensorial e prevenção da saúde bucal.",
    fullDescription: "Atendimento clínico preventivo e curativo com técnicas de desensibilização e acolhimento para pacientes com hipersensibilidade ou receio odontológico.",
    targetAudience: "Crianças, pacientes com necessidades especiais e adultos.",
    iconName: "Smile"
  }
];

export const CLINIC_TEAM: TeamMember[] = [
  {
    id: "dra-helena-marques",
    name: "Dra. Helena Marques",
    role: "Neuropsicóloga & Psicóloga Clínica",
    specialty: "Avaliação Neuropsicológica e TEA",
    council: "CRP 07/34982",
    quote: "Acolher a singularidade de cada mente é o primeiro passo para descobrirmos caminhos de evolução real.",
    image: "https://images.unsplash.com/photo-1594824813567-33d32890f508?auto=format&fit=crop&q=80&w=600",
    initials: "HM"
  },
  {
    id: "dra-carolina-bittencourt",
    name: "Carolina Bittencourt",
    role: "Terapeuta Ocupacional",
    specialty: "Integração Sensorial & Desenvolvimento Infantil",
    council: "CREFITO-5 18742-TO",
    quote: "Construir autonomia na rotina diária transforma o futuro e fortalece o protagonismo da criança.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    initials: "CB"
  },
  {
    id: "dra-mariana-dias",
    name: "Mariana Dias",
    role: "Fonoaudióloga Clínica",
    specialty: "Linguagem, Comunicação Aumentativa e TEA",
    council: "CRFa 7-10492",
    quote: "Cada forma de comunicação é legítima. Nossa missão é dar voz, expressão e segurança a cada pessoa.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    initials: "MD"
  },
  {
    id: "dr-lucas-albuquerque",
    name: "Lucas Albuquerque",
    role: "Fisioterapeuta & Psicomotricista",
    specialty: "Reabilitação Biomecânica e Psicomotricidade",
    council: "CREFITO-5 24190-F",
    quote: "O corpo em movimento é a expressão viva do sentir, do pensar e do conectar-se com o mundo.",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600",
    initials: "LA"
  }
];

export const CLINIC_TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    author: "Patrícia Menezes Silveira",
    relation: "Mãe do Bernardo, 6 anos (Acompanhamento TEA)",
    rating: 5,
    date: "Avaliação recente no Google",
    text: "Encontrar a Compreender foi um divisor de águas na nossa família. A avaliação para TEA foi conduzida com um respeito e uma sensibilidade que nunca tínhamos presenciado. Não é apenas uma clínica, é um colo seguro para as mães e um impulso de evolução para nossos filhos."
  },
  {
    id: "dep-2",
    author: "Rodrigo F. Dorneles",
    relation: "Paciente de Terapia Ocupacional e Psicologia",
    rating: 5,
    date: "Avaliação recente no Google",
    text: "Espaço impecável no centro de Santa Maria, com profissionais que realmente conversam entre si. A transdisciplinaridade aqui não é só teoria: os profissionais alinham os objetivos semanais e os resultados aparecem na vida prática. Atendimento nota mil!"
  },
  {
    id: "dep-3",
    author: "Juliana Caetano Becker",
    relation: "Mãe da Alice, 8 anos (Fonoaudiologia e Psicopedagogia)",
    rating: 5,
    date: "Avaliação recente no Google",
    text: "Minha filha tinha muita resistência a terapias por experiências anteriores desgastantes. Na Compreender, o acolhimento começou desde a recepção. A evolução na fala e na segurança escolar dela nos últimos 7 meses tem sido emocionante."
  },
  {
    id: "dep-4",
    author: "Marcelo Schmidt",
    relation: "Acompanhamento Neuropsicológico Adulto",
    rating: 5,
    date: "Avaliação recente no Google",
    text: "Fiz minha avaliação neuropsicológica na clínica e o relatório foi de uma clareza ímpar. A equipe é pontual, humanizada e extremamente técnica. Recomendo de olhos fechados a todos que buscam cuidado de alto nível em Santa Maria."
  }
];

export const CLINIC_INSURANCES: Insurance[] = [
  {
    name: "Unimed",
    tagline: "Cobertura Médica Cooperativa",
    description: "Atendimento integrado em especialidades habilitadas pelo plano de saúde.",
    status: "Aceito"
  },
  {
    name: "Cassi",
    tagline: "Caixa de Assistência dos Funcionários do BB",
    description: "Ampla cobertura para terapias e acompanhamentos especializados.",
    status: "Aceito"
  },
  {
    name: "SYNS",
    tagline: "Rede Assistencial e Saúde",
    description: "Facilidade de acesso a consultas e avaliações multiprofissionais.",
    status: "Aceito"
  },
  {
    name: "Cauzzo Mais",
    tagline: "Plano de Saúde e Assistência Regional",
    description: "Cuidado humanizado e acessível para toda a região de Santa Maria.",
    status: "Aceito"
  }
];
