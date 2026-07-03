import personalImg1 from "@/assets/images/personal/1.jpg"
import felipeUser from "@/assets/images/users/felipe-user.jpg"
import personalImg3 from "@/assets/images/personal/3.jpg"
import personalImg2 from "@/assets/images/personal/2.jpg"


export type PersonalTechType = {
  icon: string
  name: string
  experience: string
  imgSrc?: string
}

export type ServicesType = {
  icon: string
  title: string
  variant: string
  description: string
}

export type WorkDataType = {
  icon: string
  variant: string
  title: string
  description: string
  link: string
  tags: string[]
}

export type BlogsType = {
  image: string
  title: string
  name: string
  date: string
  userImg: string
  slug: string
}


export const personalTech: PersonalTechType[] = [
  { icon: 'devicon:javascript', name: 'JavaScript', experience: '4 Anos' },
  { icon: 'devicon:typescript', name: 'TypeScript', experience: '3 Anos' },
  { icon: 'devicon:nextjs', name: 'Next.js', experience: '2 Anos' },
  { icon: 'devicon:react', name: 'React', experience: '3 Anos' },
  { icon: 'devicon:nestjs', name: 'NestJS', experience: '1 Ano' },
  { icon: 'devicon:nodejs', name: 'Node.js', experience: '4 Anos' },
  { icon: 'devicon:postgresql', name: 'PostgreSQL', experience: '3 Anos' },
  { icon: 'devicon:mongodb', name: 'MongoDB', experience: '3 Anos' },
  { icon: 'devicon:prisma', name: 'Prisma', experience: '2 Anos' },
  { icon: 'devicon:redis', name: 'Redis', experience: '2 Anos' },
  { icon: 'devicon:docker', name: 'Docker', experience: '2 Anos' },
  { icon: 'devicon:amazonwebservices', name: 'AWS', experience: '1 Ano' },
  { icon: 'devicon:git', name: 'Git', experience: '4 Anos' },
  { icon: 'devicon:github', name: 'GitHub', experience: '4 Anos' },
  { icon: 'devicon:gitlab', name: 'GitLab', experience: '2 Anos' },
  { icon: 'devicon:jest', name: 'Jest', experience: '3 Anos', imgSrc: 'jest' },
  { icon: 'feather:users', name: 'Scrum', experience: '3 Anos', imgSrc: 'scrum' },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'feather:code',
    variant: 'soft-alt-orange',
    title: 'Desenvolvimento Full Stack',
    description: "Aplicações web completas com Next.js, React no front-end e NestJS, Node.js no back-end. TypeScript em toda a stack."
  },
  {
    icon: 'feather:server',
    variant: 'soft-alt-info',
    title: 'APIs RESTful & Microsserviços',
    description: 'Design de APIs escaláveis com NestJS e Node.js. Mensageria com AWS SQS, cache com Redis e documentação Swagger.'
  },
  {
    icon: 'feather:database',
    variant: 'soft-alt-success',
    title: 'Modelagem & Banco de Dados',
    description: 'PostgreSQL com Prisma ORM, MongoDB com Mongoose. Modelagem relacional e não-relacional, otimização de queries.'
  },
]

export const workData: WorkDataType[] = [
  {
    icon: 'devicon:nestjs',
    variant: 'soft-alt-orange',
    title: 'Phiz App — Sistema de Gestão',
    description: 'APIs RESTful com NestJS e MongoDB. Migração para microsserviços com Docker, Redis e AWS SQS.',
    link: '#',
    tags: ['NestJS', 'Node.js', 'MongoDB', 'Docker', 'Redis', 'AWS'],
  },
  {
    icon: 'devicon:nextjs',
    variant: 'soft-alt-info',
    title: 'Agência F3X — Plataforma Web',
    description: 'Front-end Next.js + React com TypeScript. SSR, SSG, interfaces responsivas e integração com APIs back-end.',
    link: '#',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    icon: 'devicon:postgresql',
    variant: 'soft-alt-success',
    title: 'API de Automação Financeira',
    description: 'API REST em Node.js/NestJS com PostgreSQL + Prisma. Cache Redis, filas SQS e cobertura de testes.',
    link: '#',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'AWS SQS'],
  },
]

export const blogsData: BlogsType[] = [
  {
    image: personalImg1,
    title: 'Desenvolvimento Assistido por IA — SpecDrive e TDD',
    name: 'Felipe Belmont',
    date: '02 Jul 2026',
    userImg: felipeUser,
    slug: 'ia-specdrive-tdd',
  },
  {
    image: personalImg3,
    title: 'Clean Code na Prática — Lições de 3 Anos como Dev',
    name: 'Felipe Belmont',
    date: '15 Jun 2026',
    userImg: felipeUser,
    slug: 'clean-code-na-pratica',
  },
  {
    image: personalImg2,
    title: 'Do Estágio ao Full Stack — Minha Trajetória',
    name: 'Felipe Belmont',
    date: '02 Mai 2026',
    userImg: felipeUser,
    slug: 'estagio-ao-fullstack',
  },
]
