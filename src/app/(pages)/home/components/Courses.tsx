import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import jestLogo from '@/assets/images/logos/jest.svg'
import scrumLogo from '@/assets/images/logos/scrum.svg'

const coursesData = [
  {
    icon: 'devicon:nodejs',
    title: 'Node.js',
    provider: 'Rocketseat',
    hours: '60 horas',
    description: 'Desenvolvimento back-end com Node.js, Express, bancos de dados e autenticação.',
  },
  {
    icon: 'devicon:javascript',
    title: 'JavaScript',
    provider: 'DIO',
    hours: '39 horas',
    description: 'Formação intermediária em JavaScript Vanilla — fundamentos, DOM, APIs e padrões.',
  },
  {
    imgSrc: scrumLogo,
    title: 'Scrum Master',
    provider: 'DIO',
    hours: '22 horas',
    description: 'Principais técnicas e conceitos do Framework Scrum para gestão ágil de projetos.',
  },
  {
    imgSrc: jestLogo,
    title: 'Testes Unitários com Jest',
    provider: 'Udemy',
    hours: '15 horas',
    description: 'Criação de testes unitários automatizados com Jest para aplicações JavaScript/TypeScript.',
  },
  {
    icon: 'devicon:git',
    title: 'Versionamento com Git e GitHub',
    provider: 'DIO',
    hours: '2 horas',
    description: 'Controle de versão com Git, criação e gerenciamento de repositórios no GitHub, branches, merges e pull requests.',
  },
]

const Courses = () => {
  return (
    <section className="section bg-gradient-light-white" id="courses">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Cursos</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Cursos &amp; Certificações</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              Investimento contínuo em aprendizado para entregar soluções cada vez melhores.
            </p>
          </Col>
        </Row>
        <Row>
          {coursesData.map((course, idx) => (
            <Col lg={4} md={6} key={idx} className="mt-4 pt-2">
              <Card className="rounded shadow border-0 h-100">
                <CardBody className="p-4 m-2">
                  <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl rounded mb-3">
                    {'imgSrc' in course ? <img src={course.imgSrc} alt={course.title} style={{width: 38, height: 38}} /> : <IconifyIcon icon={course.icon!} className="icon-md" />}
                  </div>
                  <h5 className="text-dark fs-18 fw-medium">{course.title}</h5>
                  <p className="text-primary fs-13 mb-2">{course.provider} · {course.hours}</p>
                  <p className="text-muted fs-14">{course.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Courses
