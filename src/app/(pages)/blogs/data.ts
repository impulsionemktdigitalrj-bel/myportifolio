import personalImg1 from "@/assets/images/personal/1.jpg"
import personalImg2 from "@/assets/images/personal/2.jpg"
import personalImg3 from "@/assets/images/personal/3.jpg"
import felipeUser from "@/assets/images/users/felipe-user.jpg"

export type BlogsType = {
  image: string
  title: string
  name: string
  date: string
  userImg: string
  slug: string
}

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
  {
    image: personalImg1,
    title: 'Por que Testes Unitários Salvam Projetos',
    name: 'Felipe Belmont',
    date: '20 Abr 2026',
    userImg: felipeUser,
    slug: 'testes-unitarios-salvam',
  },
]
