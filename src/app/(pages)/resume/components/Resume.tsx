import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ResumePage = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Carreira</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Formação &amp; Experiência</h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">Currículo</h1>
            </div>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              Combinando formação acadêmica sólida com experiência prática no mercado de tecnologia.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <div className="main-timeline">
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:trophy' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Desenvolvedor Full Stack — Grupag</h3>
                        <p className="description">
                          Desenvolvimento full stack com Next.js/React e NestJS/Node.js. APIs RESTful com PostgreSQL/Prisma e MongoDB/Mongoose. Docker e AWS.
                        </p>
                      </div>
                      <div className="timeline-year"><span>07/2026 - Atual</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:device-mobile' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Desenvolvedor Full Stack — Nativa OnStreaming</h3>
                        <p className="description">
                          Apps Android e iOS com streaming ao vivo. Publicação Google Play e Apple Store. React Native, TypeScript e integração de áudio.
                        </p>
                      </div>
                      <div className="timeline-year"><span>02/2025 - 07/2026</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:users' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Analista de Sistemas — Phiz App</h3>
                        <p className="description">
                          APIs RESTful com NestJS e MongoDB/Mongoose. Migração para microsserviços com Docker, Redis e AWS SQS. Testes com Jest, cobertura de 85%.
                        </p>
                      </div>
                      <div className="timeline-year"><span>03/2024 - 07/2024</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:code' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Desenvolvedor Web — Agência F3X</h3>
                        <p className="description">
                          Front-end com Next.js, React e TypeScript. Interfaces responsivas, SSR/SSG e integração com APIs REST.
                        </p>
                      </div>
                      <div className="timeline-year"><span>06/2023 - 03/2024</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:school' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Análise e Desenvolvimento de Sistemas</h3>
                        <p className="description">
                          Tecnólogo com foco em desenvolvimento de software, engenharia de requisitos, banco de dados e arquitetura de sistemas.
                        </p>
                      </div>
                      <div className="timeline-year"><span>2024 - 2026</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:building' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">Desenvolvimento BackEnd JavaScript</h3>
                        <p className="description">
                          Curso técnico intensivo em Node.js, Express, bancos de dados, autenticação, testes e deploy. Cubos Academy.
                        </p>
                      </div>
                      <div className="timeline-year"><span>2023 - 2024</span></div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ResumePage
