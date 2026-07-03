import { Fragment, useState } from 'react'
import { workData, WorkDataType } from '../data'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WorkCard = ({ icon, tags, description, title, variant }: WorkDataType) => {
  return (
    <Card className="rounded shadow border-0 m-2 h-100">
      <CardBody className="p-4 m-2">
        <div className="media mb-3">
          <div className={`bg-${variant} d-flex justify-content-center align-items-center thumb-xl rounded`}>
            <IconifyIcon icon={icon} className="icon-md" />
          </div>
          <div className="media-body ms-3 align-self-center">
            <h5 className="text-dark fs-18 fw-medium m-0">{title}</h5>
            <p className="text-muted mb-0 fs-13"><Link to=""><i className="ti ti-external-link fs-18 text-primary" /></Link></p>
          </div>
        </div>
        <p className="text-muted fs-14 mb-3">{description}</p>
        {
          tags.map((tag, idx) => (
            <Fragment key={idx}>
              <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">{tag}</span>&nbsp;
            </Fragment>
          ))
        }
      </CardBody>
    </Card>
  )
}

const Work = () => {

  const [gallery] = useState(workData);

  return (
    <section className="section" id="projects">
      <Container>
        <Row className=" justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Projetos</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Projetos Recentes</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              Alguns dos projetos em que atuei, combinando tecnologias modernas com boas práticas de desenvolvimento.
            </p>
          </Col>
        </Row>
        <Row className=" d-flex  g-1 justify-content-center" id="grid">
          {
            gallery.map((item, idx) => {
              return (
                <Col lg={4} md={6} key={idx} className="picture-item">
                  <WorkCard {...item} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Work
