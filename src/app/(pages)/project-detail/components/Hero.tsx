import mainBg from '@/assets/images/personal/main-bg.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { projectDetails } from '../content'

const Hero = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projectDetails.find(p => p.slug === slug)

  return (
    <section className="hero-one position-relative bg-black" style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="align-items-center justify-content-center py-100">
          <Col lg={9} className="text-center py-5 text-center">
            <h5 className="head-title py-4" aria-label={project?.title || 'Projeto'} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
