
import contactImg from '@/assets/images/personal/contact.svg'
import testipetImg from '@/assets/images/personal/testi-pet.png'

import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Contact = () => {
  const messageSchema = yup.object({
    name: yup.string().required('Please enter name'),
    email: yup.string().email().required('Please enter email'),
    subject: yup.string().required('Please enter subject'),
    contact: yup.string().required('Please enter contact'),
    message: yup.string().required('Please enter message'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  })
  return (
    <section className="section bg-light" id="contact">
      <Container>
        <Row>
          <Col xs={12}>
            <Card className="bg-white" style={{ background: `url(${testipetImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '15%', backgroundPosition: 'right bottom' }}>
              <CardBody>
                <Row>
                  <Col md={8}>
                    <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">Entre em contato!</h2>
                    <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">Disponível para projetos freelance e oportunidades. <br />Fique à vontade para me enviar uma mensagem.</p>
                    <form method="post" name="myForm" onSubmit={handleSubmit(() => { })}>
                      <span id="error-msg" />
                      <Row>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="name" placeholder="Seu nome" label="Nome" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="email" placeholder="Seu email" label="Email" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="subject" placeholder="Assunto" label="Assunto" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="contact" placeholder="Seu telefone" label="Telefone" />
                        </Col>
                        <Col xs={12} className="mb-3">
                          <TextAreaFormInput control={control} name="message" placeholder="Sua mensagem" label="Mensagem" />
                        </Col>
                        <Col xs={12}>
                          <Button type="submit" id="submit" className="btn btn-primary mt-2">
                            Enviar mensagem
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                  <Col md={4}>
                    <img src={contactImg} alt='contactImg' height={200} className=" mx-auto d-block mb-5" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon='tabler:phone' className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block lh-1">22 99105-9167</span>
                        <span className="text-muted fs-14 mt-n2">Seg a Sex, 9h às 18h</span>
                      </div>
                    </div>
                    <hr className="hr-dashed my-3" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon='tabler:mail' className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block lh-1">belmontprogramador@gmail.com</span>
                        <span className="text-muted fs-14 mt-n2">Araruama, Rio de Janeiro</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact