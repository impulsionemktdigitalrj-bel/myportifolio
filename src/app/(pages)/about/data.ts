export type PersonalTechType = {
  icon: string
  name: string
  experience: string
  imgSrc?: string
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
