import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: any) => {
    console.log("event.target: ", event.target.name);
    if (event.target.name == "email") setEmail(event.target.value);
    if (event.target.name == "password") setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    alert(`A state was submitted: email: ${email}; password: ${password}`);
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <Form onSubmit={handleSubmit} className="login">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
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
                value={password}
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
};

export default Login;
