import felipePhoto from '@/assets/images/users/felipe-about.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import jestLogo from '@/assets/images/logos/jest.svg'
import scrumLogo from '@/assets/images/logos/scrum.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { personalTech } from '../data'

const PersonalDetails = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={10} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Sobre</span>
            <h4 className="fw-semibold text-dark mt-2 fs-2">Desenvolvedor <mark>Full Stack</mark> com 4+ anos de experiência</h4>
            <p className="text-muted fs-18 mt-3 mb-4">Profissional em Análise e Desenvolvimento de Software com foco em desenvolvimento full stack. Experiência em ciclos completos (SDLC) utilizando JavaScript, TypeScript, Next.js, NestJS e React, além de bancos PostgreSQL, MongoDB, Redis e mensageria AWS SQS. Proativo em boas práticas como versionamento (Git/GitHub/GitLab), testes automatizados (Jest) e metodologias ágeis (Scrum/Kanban).</p>
            <div className="social d-flex justify-content-center">
              <Link to="https://github.com/belmontprogramador" target="_blank" className='icon github me-1'>
                <IconifyIcon icon='la:github' />
              </Link>
              <Link to="https://www.linkedin.com/in/belmontprogramador/" target="_blank" className='icon linkedin me-1'>
                <IconifyIcon icon='la:linkedin-in' />
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="d-flex justify-content-center">
              <img src={felipePhoto} alt="Felipe Belmont" className="img-fluid" style={{ borderRadius: '16px', objectFit: 'cover', aspectRatio: '4/5', maxHeight: '480px' }} />
            </div>
          </Col>
          <Col lg={7}>
            <div className="d-flex flex-wrap">
              {
                personalTech.map((item, idx) => {
                  return (
                    <div key={idx} className="me-3 mb-3 card-bg rounded p-2 pe-4 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          {item.imgSrc ? <img src={(item.imgSrc === 'jest' ? jestLogo : scrumLogo)} alt={item.name} width={28} height={28} /> : <IconifyIcon icon={item.icon} width={28} height={28} />}
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
