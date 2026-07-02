import personal1 from '@/assets/images/personal/1.jpg'
import felipeUser from '@/assets/images/users/felipe-user.jpg'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../content'

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <section className="section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={9} className="text-center py-5">
              <h3 className="text-dark">Post não encontrado</h3>
              <Link to="/blogs" className="btn btn-primary mt-3">Voltar ao Blog</Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 4)

  return (
    <section className="section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={9}>
            <Card className="border-0 shadow-none">
              <CardBody>
                <div className="mb-5 text-center">
                  <p className="text-muted fw-semibold fs-18">{post.date}</p>
                  <h3 className="my-3 fs-28 d-block fw-medium text-dark">{post.title}</h3>
                  <p className="text-muted fw-semibold fs-16">{post.summary}</p>
                  {post.tags.map((tag, i) => (
                    <span key={i} className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13 me-1">{tag}</span>
                  ))}
                </div>
                <img src={personal1} alt='blog' className="img-fluid rounded d-flex mx-auto" />
                <div className="my-5">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted fs-16 mb-4">{paragraph}</p>
                  ))}
                  <figure>
                    <blockquote className="blockquote">
                      <p><i>"{post.quote}"</i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      {post.quoteAuthor}
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-5">
                  <h3 className="mt-3 fs-24 d-block fw-medium text-dark">Posts Relacionados</h3>
                  <p className="text-muted fw-semibold fs-14">Leia também no Blog</p>
                  <Row>
                    <Col xs={12}>
                      <Row className="row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 justify-content-center">
                        {relatedPosts.map((rp, i) => (
                          <Col key={i}>
                            <Link to={`/blog/${rp.slug}`} className="d-block bg-card shadow p-2 rounded catagories-box">
                              <img src={personal1} alt='blog' className="img-fluid rounded mb-2" />
                              <h3 className="fs-15 m-0 fw-medium">{rp.title.length > 30 ? rp.title.substring(0, 30) + '...' : rp.title}</h3>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                  <hr className="hr-dashed my-3" />
                  <Row>
                    <div className="col-md">
                      <div className="media">
                        <img src={felipeUser} alt='Felipe' className="thumb-sm rounded-circle me-2" />
                        <div className="media-body align-self-center text-truncate">
                          <h6 className="m-0 text-dark fw-medium">Felipe Belmont</h6>
                          <p className="mb-0 fs-12 text-muted fw-medium">Desenvolvedor Full Stack</p>
                        </div>
                      </div>
                    </div>
                    <Col md={'auto'}>
                      <Link to="/blogs" className="btn btn-sm btn-outline-primary px-4">Blog</Link>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails
