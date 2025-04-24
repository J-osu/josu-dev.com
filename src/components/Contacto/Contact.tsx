import { Card, Form, Button } from 'react-bootstrap'
import '../../css/contact.css'

const Contact = () => {
  return (
    <Card className="p-4">
      <h2 className="mb-4">Contacto</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="tu@email.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Tu mensaje" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>

      <div className="mt-5">
        <h5>Otras formas de contacto</h5>
        <p>Email: tu@email.com</p>
        <p>Teléfono: +1234567890</p>
        <div className="social-links">
          <a href="#" className="me-3">LinkedIn</a>
          <a href="#" className="me-3">GitHub</a>
          <a href="#" className="me-3">Twitter</a>
        </div>
      </div>
    </Card>
  )
}

export default Contact