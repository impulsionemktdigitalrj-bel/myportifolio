﻿﻿import jobLight from '@/assets/images/personal/job-light.png'
import job from '@/assets/images/personal/job.png'
import schoolLight from '@/assets/images/personal/school-light.png'
import school from '@/assets/images/personal/school.png'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const LifeTime = () => {
  return (
    <section className="section" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Carreira</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Formação &amp; Experiência</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              Combinando formação acadêmica sólida com experiência prática no mercado de tecnologia.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={school} alt='school' className="vector-dark" height={150} />
                      <img src={schoolLight} alt='schoolLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Formação</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Education_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader as={'h2'} id="prime">
                          Análise e Desenvolvimento de Sistemas
                          <span className="fw-medium text-primary ms-auto fs-14">2024 - 2026</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Tecnólogo com foco em desenvolvimento de software, engenharia de requisitos, banco de dados e arquitetura de sistemas.
                          </p>
                          <p className="fw-medium">Uniasselvi — Centro Universitário, Rio de Janeiro</p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader as={'h2'} id="second">
                          Desenvolvimento BackEnd JavaScript
                          <span className="fw-medium text-primary ms-auto fs-14">2023 - 2024</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Curso técnico intensivo em Node.js, Express, bancos de dados, autenticação, testes e deploy de aplicações back-end.
                          </p>
                          <p className="fw-medium">Cubos Academy — Brasil</p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='3'>
                        <AccordionHeader as={'h2'} id="higher">
                          Cursos Complementares
                          <span className="fw-medium text-primary ms-auto fs-14">2023 - 2026</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Node.js (Rocketseat 60h), JavaScript (DIO 39h), Scrum Master (DIO 22h), Testes Unitários com Jest (Udemy 15h), Git/GitHub (DIO 2h).
                          </p>
                          <p className="fw-medium">Rocketseat · DIO · Udemy</p>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr className="hr-dashed" />
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={job} alt='job' className="vector-dark" height={150} />
                      <img src={jobLight} alt='jobLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Experiência</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Experience_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader id="first-co">
                          Desenvolvedor Full Stack — Grupag
                          <span className="fw-medium text-primary ms-auto fs-14">07/2026 - Atual</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Desenvolvimento full stack com Next.js/React e NestJS/Node.js</p>
                          <p className="text-muted mb-1">- APIs RESTful com TypeScript, PostgreSQL/Prisma e MongoDB/Mongoose</p>
                          <p className="text-muted mb-1">- Containerização Docker, pipelines CI/CD no GitHub e deploy AWS</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Next.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">NestJS</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">TypeScript</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">AWS</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader id="second-co">
                          Desenvolvedor Full Stack — Nativa OnStreaming
                          <span className="fw-medium text-primary ms-auto fs-14">02/2025 - 07/2026</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Desenvolvimento de apps mobile Android e iOS com streaming ao vivo</p>
                          <p className="text-muted mb-1">- Publicação nas lojas Google Play e Apple App Store</p>
                          <p className="text-muted mb-1">- Integração de streaming de áudio e design responsivo</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">React Native</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">TypeScript</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Streaming</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='3'>
                        <AccordionHeader id="third-co">
                          Analista de Sistemas — Phiz App
                          <span className="fw-medium text-primary ms-auto fs-14">03/2024 - 07/2024</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Desenvolvi e mantive APIs RESTful com NestJS e MongoDB/Mongoose</p>
                          <p className="text-muted mb-1">- Migração de sistema legado para microsserviços com Docker, Redis e AWS SQS</p>
                          <p className="text-muted mb-1">- Implementei testes automatizados com Jest, cobertura de 85%</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">NestJS</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">MongoDB</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Redis</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Docker</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='4'>
                        <AccordionHeader id="fourth-co">
                          Desenvolvedor Web — Agência F3X
                          <span className="fw-medium text-primary ms-auto fs-14">06/2023 - 03/2024</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Desenvolvimento front-end com Next.js, React e TypeScript</p>
                          <p className="text-muted mb-1">- Interfaces responsivas, SSR/SSG e integração com APIs REST</p>
                          <p className="text-muted mb-1">- Metodologias ágeis (Scrum/Kanban), code review e Git Flow</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Next.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">React</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">TypeScript</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Git</span>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LifeTime
