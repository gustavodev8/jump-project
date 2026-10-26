export const INSTAGRAM_URL = "https://www.instagram.com/jumprodutora/";

export const NAV_ITEMS = [
  { label: "Início", to: "/" },
  { label: "A JUMP", to: "/a-jump" },
  { label: "Serviços", to: "/servicos" },
  { label: "Comunidade", to: "/comunidade" },
  { label: "Contato", to: "/contato" },
] as const;

export const SERVICES = [
  {
    number: "01",
    slug: "estrategia",
    title: "Estratégia e comunicação",
    summary: "Direção e posicionamento para marcas que querem se comunicar com propósito.",
    full: "Marcas precisam de mais do que presença. Precisam de direção, posicionamento e uma comunicação que faça sentido para quem são e para onde querem chegar.",
    items: [
      "Gestão de redes sociais.",
      "Planejamento e posicionamento digital.",
      "Branding e estratégia de marca.",
      "Copywriting.",
    ],
    cta: "Vamos pensar sua marca",
  },
  {
    number: "02",
    slug: "audiovisual",
    title: "Audiovisual e produção",
    summary: "Imagens, histórias e experiências que aproximam marcas de pessoas.",
    full: "Transformamos ideias em imagens, histórias e experiências. Desenvolvemos produções que aproximam marcas de pessoas e dão forma àquilo que precisa ser visto, ouvido e sentido.",
    items: [
      "Captação e edição de vídeos.",
      "Fotografia e produção de imagem.",
      "Storymaker e conteúdo em tempo real.",
      "Cobertura de eventos.",
      "Drone.",
      "Campanhas publicitárias.",
    ],
    cta: "Vamos produzir sua ideia",
  },
  {
    number: "03",
    slug: "direcao",
    title: "Direção criativa, moda e design",
    summary: "Conceito, estética e execução para projetos com identidade própria.",
    full: "Exploramos ideias por diferentes linguagens visuais e artísticas, conectando conceito, estética e execução para criar projetos com identidade própria.",
    items: [
      "Direção criativa.",
      "Moda e produção de imagem.",
      "Design e identidade visual.",
      "Produção artística e musical.",
    ],
    cta: "Vamos criar uma direção",
  },
  {
    number: "04",
    slug: "conexoes",
    title: "Projetos e conexões criativas",
    summary: "Os talentos certos para ideias que pedem caminhos próprios.",
    full: "Nem toda ideia cabe em uma solução pronta. Por isso, conectamos especialidades e reunimos os talentos certos para desenvolver projetos personalizados, de acordo com cada objetivo.",
    items: [
      "Produção de conteúdo para marcas.",
      "Desenvolvimento de projetos personalizados.",
      "Casting e conexão com modelos e artistas.",
      "Conexão entre talentos e projetos.",
    ],
    cta: "Vamos conectar esse projeto",
  },
] as const;

export const STEPS = [
  ["01", "Entendemos o desafio", "Conhecemos o contexto, a necessidade e o objetivo do projeto."],
  [
    "02",
    "Conectamos os talentos",
    "Reunimos as especialidades necessárias e construímos a direção criativa.",
  ],
  ["03", "Fazemos acontecer", "Conectamos estratégia, criação e produção para dar forma à ideia."],
] as const;

export const BENEFITS = [
  ["Conecte-se", "Conheça pessoas com interesses, habilidades e visões diferentes das suas."],
  ["Colabore", "Troque referências, compartilhe ideias e encontre oportunidades para criar junto."],
  [
    "Construa",
    "Faça parte de projetos que conectam talentos e transformam ideias em experiências.",
  ],
] as const;
