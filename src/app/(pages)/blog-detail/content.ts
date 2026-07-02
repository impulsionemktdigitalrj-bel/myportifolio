export type BlogPost = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
  quote: string
  quoteAuthor: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ia-specdrive-tdd',
    title: 'Desenvolvimento Assistido por IA — SpecDrive e TDD',
    date: '02 Jul 2026',
    summary: 'Como a inteligência artificial está transformando minha forma de codar com especificações dirigidas e testes.',
    tags: ['IA', 'SpecDrive', 'TDD', 'TypeScript'],
    quote: 'Primeiro escreva o teste, depois o código. A IA acelera os dois — mas a disciplina continua sendo humana.',
    quoteAuthor: 'Reflexão após 6 meses de SpecDrive + TDD com IA',
    content: `Nos últimos meses, venho experimentando uma abordagem que combina SpecDrive (desenvolvimento guiado por especificações) com TDD (Test-Driven Development) assistido por inteligência artificial. O resultado tem sido transformador: mais qualidade, menos retrabalho e um fluxo de desenvolvimento muito mais fluido.

O SpecDrive propõe que antes de escrever qualquer linha de código, você defina claramente a especificação do que será construído — comportamentos esperados, cenários de borda, contratos de API. Com a IA atuando como par de programação, consigo gerar essas especificações em linguagem natural e transformá-las em testes automatizados que guiam toda a implementação.

O ganho mais significativo não está na velocidade de digitar código, mas na qualidade do design que emerge quando você é forçado a pensar nas especificações primeiro. A IA ajuda a cobrir cenários que você não tinha pensado, sugere casos de borda e mantém a cobertura de testes alta sem esforço adicional.`,
  },
  {
    slug: 'clean-code-na-pratica',
    title: 'Clean Code na Prática — Lições de 3 Anos como Dev',
    date: '15 Jun 2026',
    summary: 'O que aprendi sobre código limpo trabalhando em projetos reais.',
    tags: ['Clean Code', 'Boas Práticas', 'JavaScript', 'TypeScript'],
    quote: 'Qualquer tolo consegue escrever código que um computador entenda. Bons programadores escrevem código que humanos entendam.',
    quoteAuthor: 'Martin Fowler em Refactoring',
    content: `Depois de três anos escrevendo código profissionalmente, aprendi que clean code não é sobre seguir regras cegamente — é sobre tornar o código compreensível para o próximo desenvolvedor (que muitas vezes sou eu mesmo, seis meses depois).

Neste artigo, compartilho as práticas que mais impactaram minha produtividade: nomes significativos, funções com responsabilidade única, e a importância de testes automatizados como documentação viva do sistema.

A principal lição? Código limpo é um hábito, não um destino. Cada pull request é uma oportunidade de deixar o código melhor do que você encontrou.`,
  },
  {
    slug: 'estagio-ao-fullstack',
    title: 'Do Estágio ao Full Stack — Minha Trajetória',
    date: '02 Mai 2026',
    summary: 'Da Agência F3X ao Grupag: como construí minha carreira no desenvolvimento de software.',
    tags: ['Carreira', 'Full Stack', 'JavaScript', 'TypeScript'],
    quote: 'Cada projeto era uma oportunidade de aprender algo novo. O segredo foi nunca dizer não para um desafio.',
    quoteAuthor: 'Felipe Belmont',
    content: `Minha jornada começou na Agência F3X, onde tive meu primeiro contato com desenvolvimento web profissional. React, TypeScript e metodologias ágeis foram a base que construí naquele ano.

Depois veio a Phiz App, onde mergulhei fundo em back-end com Node.js, MongoDB e arquitetura de microsserviços. Foi ali que entendi a importância de testes automatizados e CI/CD.

Na Nativa OnStreaming, expandi para o mundo mobile com React Native e publiquei meus primeiros apps nas lojas. E agora no Grupag, aplico tudo isso em projetos full stack com Next.js, NestJS, PostgreSQL e AWS.

Se eu pudesse dar um conselho para quem está começando: seja curioso, abrace projetos desafiadores e nunca pare de aprender.`,
  },
  {
    slug: 'testes-unitarios-salvam',
    title: 'Por que Testes Unitários Salvam Projetos',
    date: '20 Abr 2026',
    summary: 'Como testes automatizados me salvaram de deploy desastrosos e melhoraram a qualidade do meu código.',
    tags: ['Testes', 'Jest', 'TDD', 'Qualidade'],
    quote: 'Testes não são sobre provar que o código funciona. São sobre provar que ele continua funcionando.',
    quoteAuthor: 'Felipe Belmont',
    content: `Já perdi as contas de quantas vezes um teste unitário me salvou de um deploy desastroso. Um simples expect().toBe() que quebra no CI e te avisa que aquela refatoração inocente quebrou um fluxo crítico.

Implementar testes com Jest se tornou parte natural do meu fluxo de desenvolvimento. Começo pelo teste, vejo ele falhar, implemento o código mínimo e vejo passar. O ciclo Red-Green-Refactor virou segunda natureza.

O mais importante: testes bem escritos servem como documentação viva do sistema. Quando alguém novo entra no projeto, os testes contam exatamente como cada parte do sistema deve se comportar.`,
  },
]
