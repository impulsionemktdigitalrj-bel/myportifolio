import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { projectDetails } from '../content'

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projectDetails.find(p => p.slug === slug)

  if (!project) {
    return (
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9} className="text-center py-5">
              <h3 className="text-dark">Projeto não encontrado</h3>
              <Link to="/projects" className="btn btn-primary mt-3">Ver todos os projetos</Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-none">
              <CardBody>
                <div className="mb-5">
                  <Link to="/projects" className="text-primary fs-14 mb-3 d-inline-block">
                    <IconifyIcon icon="tabler:arrow-left" className="me-1" />
                    Voltar para Projetos
                  </Link>
                  <h2 className="fs-2 fw-semibold text-dark mt-2">{project.title}</h2>
                  <div className="mt-3 mb-4">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="badge bg-primary bg-opacity-10 text-primary fw-normal fs-13 me-2 mb-2">{tech}</span>
                    ))}
                  </div>
                  <p className="text-muted fs-18 lh-lg">{project.longDescription}</p>
                </div>

                <hr className="hr-dashed" />

                <Row className="mt-4">
                  <Col lg={7}>
                    <h4 className="fs-20 fw-semibold text-dark mb-3">Funcionalidades</h4>
                    <ul className="list-unstyled">
                      {project.features.map((feat, i) => (
                        <li key={i} className="mb-2 fs-16 text-muted">
                          <IconifyIcon icon="tabler:check" className="text-success me-2" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col lg={5}>
                    <div className="bg-light rounded p-4">
                      <h4 className="fs-20 fw-semibold text-dark mb-3">Stack</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="badge bg-white text-dark border py-2 px-3 fs-14">{tech}</span>
                        ))}
                      </div>
                      <hr className="my-3" />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100"
                      >
                        <IconifyIcon icon="feather:external-link" className="me-2" />
                        {project.linkLabel}
                      </a>
                      {project.github && (
                        <>
                          <a
                            href={project.github + '#readme'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark w-100 mt-2"
                          >
                            <IconifyIcon icon="feather:book-open" className="me-2" />
                            Ver README
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark w-100 mt-2"
                          >
                            <IconifyIcon icon="feather:github" className="me-2" />
                            Ver no GitHub
                          </a>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProjectDetails
