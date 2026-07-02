import logoFelipe from '@/assets/images/logo-felipe.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currentYear } from '@/context/constants'
import { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {

  return (
    <>
      {children}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={5} className="border-e-dashed">
              <Link to="/">
                <img src={logoFelipe} alt='Felipe Belmont' height={32} />
              </Link>
              <p className="my-4">Desenvolvedor Full Stack apaixonado por criar soluções escaláveis e código limpo. Sempre em busca do próximo desafio.
              </p>
              <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
                <li className="list-inline-item">
                  <Link to="https://github.com/belmontprogramador" target="_blank"> <IconifyIcon icon='feather:github' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.linkedin.com/in/belmontprogramador/" target="_blank"> <IconifyIcon icon='feather:linkedin' className="icon-xs" /> </Link>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Row>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-5">Navegação</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/services">Serviços</Link></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">Links</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/resume">Currículo</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">Contato</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/contact">Fale Comigo</Link></li>
                    <li><Link to="/">belmontprogramador@gmail.com</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col sm={6}>
              <p> © {currentYear} Felipe Belmont. Todos os direitos reservados.</p>
            </Col>
            <Col sm={6} className="text-sm-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/contact">Fale Comigo</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default AppLayout