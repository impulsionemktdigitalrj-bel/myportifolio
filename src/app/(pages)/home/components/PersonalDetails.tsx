import { personalTech } from '../data'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonalDetails = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="align-self-center">
            <h5 className="fs-24 text-dark fw-medium"><mark>Dados Pessoais</mark></h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">Desenvolvedor Full Stack com experiência em JavaScript, TypeScript, Next.js, NestJS, React e Node.js. Bancos PostgreSQL/Prisma e MongoDB/Mongoose, cache Redis, mensageria AWS SQS e deploy com Docker.
            </h4>
            <div className="social">
              <Link to="https://github.com/belmontprogramador" target="_blank" className='icon github me-1'>
                <IconifyIcon icon='la:github' />
              </Link>
              <Link to="https://www.linkedin.com/in/belmontprogramador/" target="_blank" className='icon linkedin me-1'>
                <IconifyIcon icon='la:linkedin-in' />
              </Link>
            </div>
          </Col>
          <Col lg={5} className="ms-auto align-self-center">
            <div className="mb-5 mb-lg-0">
              <p className="mb-2">
                <span className="personal-detail-title">Data de Nascimento</span>
                <span className="personal-detail-info">16 Janeiro 1986</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Idiomas</span>
                <span className="personal-detail-info">Português (Nativo) - Inglês (Técnico)</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Nacionalidade</span>
                <span className="personal-detail-info">Brasileiro</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Interesses</span>
                <span className="personal-detail-info">Tecnologia, Música, Leitura</span>
              </p>
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
              {
                personalTech.map((item, idx) => {
                  return (
                    <div key={idx} className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                          <IconifyIcon icon={item.icon} width={34} height={34} />
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