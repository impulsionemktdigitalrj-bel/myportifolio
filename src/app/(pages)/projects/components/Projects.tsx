import IconifyIcon from '@/components/wrappers/IconifyIcon'
import clsx from 'clsx'
import { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProjectData, ProjectType } from '../data'

const ProjectCard = ({ icon, title, description, tags, variant, link, buttonLabel, slug }: ProjectType) => {
  const label = buttonLabel || 'Ver no GitHub'
  const btnIcon = buttonLabel ? 'feather:external-link' : 'feather:github'
  return (
    <Card className="rounded shadow border-0 m-2 h-100">
      <Link to={`/projects/${slug}`} className="text-decoration-none">
        <div className={`text-center ${variant} py-5 rounded`}>
          <IconifyIcon icon={icon} className="icon-lg" />
        </div>
      </Link>
      <CardBody className="p-4 m-2">
        <Link to={`/projects/${slug}`} className="text-decoration-none">
          <h5 className="text-dark fs-18 fw-medium m-0">{title}</h5>
        </Link>
        <p className="text-muted mb-3 fs-14 mt-2">{description}</p>
        <div className="mb-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge bg-primary bg-opacity-10 text-primary fw-normal fs-12 me-1">{tag}</span>
          ))}
        </div>
        <div className="d-flex gap-2">
          <Link to={`/projects/${slug}`} className="btn btn-sm btn-outline-primary">
            <IconifyIcon icon="feather:book-open" className="me-1" />
            Ver README
          </Link>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
            <IconifyIcon icon={btnIcon} className="me-1" />
            {label}
          </a>
        </div>
      </CardBody>
    </Card>
  )
}

const Projects = () => {
  const [gallery, setGallery] = useState(ProjectData)
  const [category, setCategory] = useState('all')

  const filterImages = (cat: string) => {
    setCategory(cat)
    if (cat === 'all') {
      setGallery(ProjectData)
    } else {
      setGallery(ProjectData.filter(item =>
        item.tags?.some(tag => tag.toLowerCase().includes(cat.toLowerCase()))
      ))
    }
  }

  return (
    <section className="section">
      <Container>
        <Row>
          <Col xs={12} className="filters-group-wrap">
            <div className="filters-group mb-5">
              <ul className="mb-0 list-unstyled filter-options filter-tab">
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'all' })} onClick={() => filterImages('all')}>Todos</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'react' })} onClick={() => filterImages('react')}>React</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'next' })} onClick={() => filterImages('next')}>Next.js</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'typescript' })} onClick={() => filterImages('typescript')}>TypeScript</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'node' })} onClick={() => filterImages('node')}>Node.js</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'shopify' })} onClick={() => filterImages('shopify')}>Shopify</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="d-flex g-1 justify-content-center" id="grid">
          {gallery.map((item, idx) => (
            <Col lg={4} md={6} key={idx} className="picture-item">
              <ProjectCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
