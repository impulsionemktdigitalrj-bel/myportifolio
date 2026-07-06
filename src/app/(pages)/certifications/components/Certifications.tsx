import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const certificationsData = [
  { title: 'Claude 101 — Anthropic', provider: 'Anthropic', hours: 'Curso Oficial', date: 'Jul 2026', file: 'certificate-claude101.pdf', highlight: true },
  { title: 'Claude Code in Action', provider: 'Anthropic', hours: 'Curso Oficial', date: 'Jul 2026', file: 'certificado-claude-code.pdf', highlight: true },
  { title: 'Anthropic — Influência em AI', provider: 'Anthropic', hours: 'Certificação', date: 'Jun 2026', file: 'certificado-anthropic.pdf', highlight: true },
  { title: 'Imersão Start Hacker — Ethical Hacking', provider: 'TI Academy', hours: '12 horas', date: 'Jul 2026', file: 'certificado-hacker.pdf', highlight: true },
  { title: 'Formação JavaScript Developer', provider: 'DIO', hours: '39 horas', date: 'Mai 2023', file: 'certificado-08.pdf' },
  { title: 'Formação HTML Web', provider: 'DIO', hours: '21 horas', date: 'Jun 2023', file: 'certificado-07.pdf' },
  { title: 'Scrum Foundation (SFPC)', provider: 'CertiProf', hours: '22 horas', date: 'Mai 2023', file: 'certificado-06.pdf' },
  { title: 'CI/CD com GitLab', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-04.pdf' },
  { title: 'Git & GitHub', provider: 'DIO', hours: '2 horas', date: 'Mai 2023', file: 'certificado-03.pdf' },
  { title: 'Desenvolvimento Moderno de Software', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-05.pdf' },
  { title: 'Lógica de Programação', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-01.pdf' },
  { title: 'Introdução a Lógica de Programação', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-11.pdf' },
  { title: 'Introdução a HTML e CSS', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-10.pdf' },
  { title: 'Pensamento Computacional', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-09.pdf' },
  { title: 'Minicurso TypeScript', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-13.pdf' },
  { title: 'Minicurso Desenv. de Software', provider: 'DIO', hours: 'Curso', date: 'Abr 2023', file: 'certificado-12.pdf' },
]

const Certifications = () => {
  return (
    <section className="section bg-gradient-light-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Certificações</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Certificados &amp; Cursos</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              Ao todo são <mark>16 certificados</mark> em desenvolvimento web, lógica, metodologias ágeis e DevOps. Clique para baixar cada um em PDF.
            </p>
          </Col>
        </Row>
        <Row>
          {certificationsData.map((cert, idx) => (
            <Col lg={4} md={6} key={idx} className="mt-4 pt-2">
              <Card className={`rounded shadow border-0 h-100 ${cert.highlight ? 'border-primary border-2' : ''}`}>
                <CardBody className="p-4 m-2 text-center">
                  <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl rounded-circle mx-auto mb-3">
                    <IconifyIcon icon={cert.highlight ? 'feather:star' : 'feather:award'} className="icon-md text-orange" />
                  </div>
                  <h5 className="text-dark fs-18 fw-medium mt-3">{cert.title}</h5>
                  {cert.highlight && <span className="badge bg-warning text-dark mb-2">⭐ Destaque</span>}
                  <p className="text-primary fs-14 mb-1">{cert.provider}</p>
                  <p className="text-muted fs-13 mb-3">{cert.hours} · {cert.date}</p>
                  <a
                    href={`/certificados/${cert.file}`}
                    download
                    className="btn btn-sm btn-outline-primary px-3"
                  >
                    <IconifyIcon icon="feather:download" className="me-1" />
                    Baixar PDF
                  </a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certifications
