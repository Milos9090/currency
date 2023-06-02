import React from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap';
import style from "./Login.module.css"

const Login = () => {
  return <div className={style.container}>
    <Card className={style.card}>
      <Card.Img></Card.Img>
        <Card.Title>Card Title</Card.Title>
      <Card.Body>
       <Form>
       <Row className="mb-4" >
          <Col></Col>
        </Row>
       </Form>
      </Card.Body>
    </Card>
  </div>
}

export default Login