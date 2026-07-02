
import contact from '@/assets/images/personal/contact.svg'
import testiPet from '@/assets/images/personal/testi-pet.png'

import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'


const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const messageSchema = yup.object({
    name: yup.string().required('Por favor, informe o nome'),
    email: yup.string().email().required('Por favor, informe o email'),
    subject: yup.string().required('Por favor, informe o assunto'),
    contact: yup.string().required('Por favor, informe o telefone'),
    message: yup.string().required('Por favor, informe a mensagem'),
  })

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(messageSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          phone: data.contact,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  })

  return (
    <section className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <Card className="bg-white" style={{ background: `url(${testiPet})`, backgroundRepeat: 'no-repeat', backgroundSize: '15%', backgroundPosition: 'right bottom' }}>
              <CardBody>
                <Row>
                  <Col md={8} >
                    <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">Entre em contato!</h2>
                    <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">Disponível para projetos freelance e oportunidades. Fique à vontade para me enviar uma mensagem.</p>
                    <form onSubmit={onSubmit}>
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
                          <Button type="submit" id="submit" className="btn btn-primary mt-2" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Enviando...' : status === 'success' ? '✓ Enviado com sucesso!' : status === 'error' ? '✗ Erro ao enviar' : 'Enviar mensagem'}
                          </Button>
                          {status === 'success' && <p className="text-success mt-2 mb-0">Mensagem enviada! Entrarei em contato em breve.</p>}
                          {status === 'error' && <p className="text-danger mt-2 mb-0">Erro ao enviar. Tente novamente ou envie direto para belmontprogramador@gmail.com</p>}
                        </Col>
                      </Row>
                    </form>
                  </Col>
                  <Col md={4}>
                    <img src={contact} alt='contact' height={200} className=" mx-auto d-block mb-5" />
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
