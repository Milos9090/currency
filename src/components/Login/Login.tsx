import React, { FormEvent, useRef } from 'react'
import { Card, Form, Row, Col, Stack, Button } from 'react-bootstrap';
import style from "./Login.module.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios({
      url: "https://dummyjson.com/auth/login",
      method: "POST", 
      data: {
        username: userNameRef?.current?.value ?? '',
        password: passwordRef?.current?.value ?? '',
        // expiresInMins: 60, // optional
      }
    }).then(res => {
      console.log(res);
      navigate("/index");
    })
    .catch(error => console.log(error));
  }

  return <div className={style.container}>
    <Card className={style.card}>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4" >
            <Col>
              <Stack gap={2}>
                <Form.Group controlId='username'>
                  <Form.Label >Please enter your email and password</Form.Label>
                  <Form.Control placeholder='Your email address' ref={userNameRef} />
                </Form.Group>
                <Form.Group  controlId='password'>
                  <Form.Control className="focus-ring focus-ring-danger" placeholder='Password' ref={passwordRef} />
                </Form.Group>
                <Button type="submit" variant='danger'>Login</Button>
              </Stack>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  </div >
}

export default Login