export type ProjectType = {
  icon: string
  variant: string
  title: string
  description: string
  tags: string[]
  link: string
  buttonLabel?: string
}

export const ProjectData: ProjectType[] = [
  {
    icon: 'feather:shield',
    variant: 'soft-alt-orange',
    title: 'Portal Proteger',
    description: 'Portal institucional com sistema de gestão de conteúdo. Design profissional focado em acessibilidade e usabilidade.',
    tags: ['React', 'TypeScript', 'Next.js', 'Portal'],
    link: 'https://portalproteger.online/',
    buttonLabel: 'Ver Site',
  },
  {
    icon: 'feather:book-open',
    variant: 'soft-alt-info',
    title: 'Portal ECA',
    description: 'Portal dedicado ao Estatuto da Criança e do Adolescente. Conteúdo educativo, navegação intuitiva e design responsivo.',
    tags: ['React', 'TypeScript', 'Next.js', 'Portal'],
    link: 'https://portaleca.online/',
    buttonLabel: 'Ver Site',
  },
  {
    icon: 'devicon:android',
    variant: 'soft-alt-success',
    title: 'Nativa OnStreaming — Android',
    description: 'App Android para a rádio Nativa com streaming ao vivo. Disponível na Google Play Store.',
    tags: ['Android', 'Streaming', 'Google Play'],
    link: 'https://play.google.com/store/apps/details?id=com.belmontprogramador.radionativaonstreaming&hl=pt',
    buttonLabel: 'Ver na Loja',
  },
  {
    icon: 'devicon:apple',
    variant: 'soft-alt-warning',
    title: 'Nativa OnStreaming — iOS',
    description: 'App iOS para a rádio Nativa com streaming ao vivo. Disponível na Apple App Store.',
    tags: ['iOS', 'Streaming', 'App Store'],
    link: 'https://apps.apple.com/br/app/nativa-onstreaming/id6741536881',
    buttonLabel: 'Ver na Loja',
  },
  {
    icon: 'devicon:nextjs',
    variant: 'soft-alt-pink',
    title: 'AromaAmbient',
    description: 'E-commerce de aromatizantes construído com Shopify Liquid. Loja completa com catálogo de produtos, carrinho e checkout.',
    tags: ['Liquid', 'Shopify', 'E-commerce'],
    link: 'https://github.com/belmontprogramador/aromaambient',
  },
  {
    icon: 'devicon:typescript',
    variant: 'soft-alt-dark',
    title: 'Site Nativa Radio',
    description: 'Website para rádio online com streaming ao vivo. Construído com TypeScript e design responsivo.',
    tags: ['TypeScript', 'React', 'Streaming'],
    link: 'https://github.com/belmontprogramador/sitenativaradio',
  },
  {
    icon: 'devicon:javascript',
    variant: 'soft-alt-orange',
    title: 'VertexAI',
    description: 'Projeto integrando APIs de inteligência artificial com JavaScript.',
    tags: ['JavaScript', 'AI', 'API'],
    link: 'https://github.com/belmontprogramador/vertexai',
  },
  {
    icon: 'devicon:react',
    variant: 'soft-alt-info',
    title: 'LummenSite',
    description: 'Site institucional moderno com React. Layout profissional, animações suaves e formulário de contato integrado.',
    tags: ['React', 'TypeScript', 'Front-end'],
    link: 'https://github.com/belmontprogramador/lummensite',
  },
  {
    icon: 'devicon:nodejs',
    variant: 'soft-alt-success',
    title: 'CRUD Simples Users',
    description: 'API de gerenciamento de usuários com Node.js, Express, Prisma ORM e autenticação JWT.',
    tags: ['Node.js', 'Express', 'Prisma', 'JWT'],
    link: 'https://github.com/belmontprogramador/crud-simples-users',
  },
]
