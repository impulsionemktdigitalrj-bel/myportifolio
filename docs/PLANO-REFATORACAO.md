# Plano de Refatoração — Portfólio Felipe Belmont

> Base: template Selfown React (David Williamson)  
> Objetivo: Adaptar 100% para o currículo de Felipe Belmont da Costa  
> Início: 2026-07-02 | Última atualização: 2026-07-02

---

## Progresso

### ✅ Fase 1 — Identidade e Dados Pessoais
- [x] `USER.md` → Felipe Belmont da Costa
- [x] `IDENTITY.md` → dados do Felipe
- [x] `context/constants.ts` → título "Felipe Belmont | Desenvolvedor Full Stack"

### ✅ Fase 2 — Hero, PersonalDetails, Services, Work
- [x] `Hero.tsx` → "Olá, eu sou Felipe Belmont" + typing: Java, Python, React, Node.js, TypeScript
- [x] `PersonalDetails.tsx` → dados reais + tech icons (devicon via IconifyIcon)
- [x] `Services.tsx` → Desenvolvimento Full Stack, APIs RESTful, Cloud & DevOps
- [x] `Work.tsx` → 3 projetos: Phiz App, Agência F3X, API Automação Financeira

### ✅ Fase 3 — Experiência, Formação e Cursos
- [x] `LifeTime.tsx` → timeline com 3 experiências + 3 formações
- [x] `Courses.tsx` → NOVO: 5 cursos (Node.js, JavaScript, Scrum, Jest, Git/GitHub)
- [x] Cursos adicionados na home page

### ✅ Fase 4 — Remoções
- [x] Slider de depoimentos removido
- [x] Switcher de cores removido

### ✅ Fase 5 — Contato, Footer e Blog
- [x] `Contact.tsx` → português, telefone e email reais
- [x] `AppLayout.tsx` → footer em português, copyright Felipe Belmont
- [x] `blogs/data.ts` → 4 posts do Felipe
- [x] `blog-detail/BlogDetails.tsx` → conteúdo real do post

### 🟡 Fase 6 — Páginas Secundárias (conteúdo mínimo, funcional)
- [ ] `about/page.tsx` → herda componentes da home, OK por enquanto
- [ ] `resume/components/Resume.tsx` → curriculo detalhado
- [ ] `services/page.tsx` + `data.ts` → serviços detalhados
- [ ] `projects/page.tsx` + `data.ts` → projetos detalhados

---

## Resumo do que foi alterado (18 arquivos)

| Arquivo | Status |
|---|---|
| `USER.md` | ✅ Felipe Belmont |
| `IDENTITY.md` | ✅ Felipe Belmont |
| `context/constants.ts` | ✅ Título + developedBy |
| `home/data.ts` | ✅ Todos os dados refeitos |
| `home/page.tsx` | ✅ -Slider, +Courses |
| `home/components/Hero.tsx` | ✅ Nome + typing words |
| `home/components/PersonalDetails.tsx` | ✅ Dados + devicon icons |
| `home/components/Services.tsx` | ✅ Textos PT |
| `home/components/Work.tsx` | ✅ Projetos reais |
| `home/components/LifeTime.tsx` | ✅ Experiência + Formação |
| `home/components/Courses.tsx` | ✅ NOVO - 5 cursos |
| `home/components/Contact.tsx` | ✅ Contato real |
| `components/AppLayout.tsx` | ✅ Footer PT |
| `blogs/data.ts` | ✅ 4 posts |
| `blog-detail/BlogDetails.tsx` | ✅ Post real |
| `docs/PLANO-REFATORACAO.md` | ✅ Plano completo |

---

## O que falta (backlog)

- Páginas de About, Resume, Services, Projects com conteúdo mais detalhado
- Foto pessoal real do Felipe (substituir as imagens placeholder)
- Links de redes sociais reais (GitHub, LinkedIn)
- Formulário de contato funcional (backend)
- SEO / metatags
