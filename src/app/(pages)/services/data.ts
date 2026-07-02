
export type ServicesType = {
  icon: string
  title: string
  variant: string
  description: string
}

export const servicesData: ServicesType[] = [
  {
    icon: 'feather:code',
    variant: 'bg-soft-alt-orange',
    title: 'Desenvolvimento Full Stack',
    description: "Aplicações completas com Next.js/React no front-end e NestJS/Node.js no back-end. TypeScript em toda a stack."
  },
  {
    icon: 'feather:server',
    variant: 'bg-soft-alt-info',
    title: 'APIs RESTful & Microsserviços',
    description: 'APIs escaláveis com NestJS, mensageria com AWS SQS, cache Redis, autenticação JWT e documentação Swagger.'
  },
  {
    icon: 'feather:cloud',
    variant: 'bg-soft-alt-success',
    title: 'Cloud & DevOps',
    description: 'Containerização com Docker, pipelines CI/CD no GitHub/GitLab, deploy em AWS e monitoramento de aplicações.'
  },
  {
    icon: 'feather:database',
    variant: 'bg-soft-alt-warning',
    title: 'Modelagem de Dados',
    description: "PostgreSQL com Prisma ORM e MongoDB com Mongoose. Modelagem relacional e não-relacional, otimização de queries."
  },
  {
    icon: 'feather:shield',
    variant: 'bg-soft-alt-pink',
    title: 'Testes Automatizados',
    description: "Testes unitários, integração e E2E com Jest. Cobertura de código, TDD e quality gates em pipelines CI/CD."
  },
  {
    icon: 'feather:users',
    variant: 'bg-soft-alt-dark',
    title: 'Consultoria Técnica',
    description: "Análise de requisitos, arquitetura de software, revisão de código e mentoria para equipes de desenvolvimento."
  },
]
