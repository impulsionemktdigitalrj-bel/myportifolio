import felipePhoto from '@/assets/images/felipe-photo.png';
import mainBg from '@/assets/images/personal/main-bg.jpg';

import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-text-typist';

const Hero = () => {
  return (
    <section className="hero-one position-relative main-bg" id="home" style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={10} sm={8} md={5} lg={5} className="mx-auto mb-4 mb-lg-0">
            <img src={felipePhoto} alt='Felipe Belmont' className="img-fluid" />
          </Col>
          <Col xs={12} md={7} lg={6} className="text-center text-lg-start">
            <h5 className="d-inline-block py-2 px-4 rounded text-white-50 font-secondary fs-18">Olá, eu sou Felipe Belmont</h5>
            <h1 className="hero-title mb-4 font-secondary fo">Desenvolvedor <mark><Typist className="fw-medium typewrite" sentences={['React', 'Next.js', 'NestJS', 'Node.js', 'TypeScript']} typingSpeed={1500} deletingSpeed={700} showCursor={false} startDelay={100} cursorSmooth pauseTime={2500} /></mark> Full Stack</h1>
            <span className="wrap" />
            <div className="mb-4 mb-lg-0">
              <div className="d-inline-block">
                <a href="/curriculo-felipe-belmont.pdf" download className="btn btn-primary btn-lg">
                  Baixar CV
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
