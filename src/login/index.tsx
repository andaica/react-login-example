import { observer } from "mobx-react";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SessionStore } from "../stores/sessionStore";
import "./login.css";

type IProps = {
  store: SessionStore;
};

const Login = observer(({ store }: IProps) => {
  const handleChange = (event: any) => {
    console.log("event.target: ", event.target.name);
    if (event.target.name == "email") store.setEmail(event.target.value);
    console.log(store.email);
    if (event.target.name == "password") store.setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    alert(`A state was submitted: email: ` + store.info);
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <div>{store.info}</div>
          <Form onSubmit={handleSubmit} className="login">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={store.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={store.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
});

export default Login;
