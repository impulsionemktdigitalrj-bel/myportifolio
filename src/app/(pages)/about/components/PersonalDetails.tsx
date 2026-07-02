import felipePhoto from '@/assets/images/felipe-photo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { personalTech } from '../data'

const PersonalDetails = () => {
  return (
    <section className="section">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <img src={felipePhoto} alt="Felipe Belmont" className="img-fluid rounded" />
          </Col>
          <Col lg={8} className="align-self-center mt-5 mt-lg-0">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Sobre</span>
            <h4 className="fw-semibold text-dark mt-2">Desenvolvedor <mark>Full Stack</mark> com 4+ anos de experiência</h4>
            <p className="text-muted fs-18 mt-3 mb-4">Profissional em Análise e Desenvolvimento de Software com foco em desenvolvimento full stack. Experiência em ciclos completos (SDLC) utilizando JavaScript, TypeScript, Next.js, NestJS e React, além de bancos PostgreSQL, MongoDB, Redis e mensageria AWS SQS. Proativo em boas práticas como versionamento (Git/GitHub/GitLab), testes automatizados (Jest) e metodologias ágeis (Scrum/Kanban).</p>
            <div className="social">
              <Link to="https://github.com/belmontprogramador" target="_blank" className='icon github me-1'>
                <IconifyIcon icon='la:github' />
              </Link>
              <Link to="https://www.linkedin.com/in/belmontprogramador/" target="_blank" className='icon linkedin me-1'>
                <IconifyIcon icon='la:linkedin-in' />
              </Link>
            </div>
            <hr className="hr-dashed my-4" />
            <div className="d-flex flex-wrap">
              {
                personalTech.map((item, idx) => {
                  return (
                    <div key={idx} className="me-3 mb-3 card-bg rounded p-2 pe-4 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <IconifyIcon icon={item.icon} width={28} height={28} />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-medium text-gray-700">{item.name}</h6>
                          <p className="text-muted mb-0 fs-12">{item.experience}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PersonalDetails
