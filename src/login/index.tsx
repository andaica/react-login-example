import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log("event.target: ", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event: any) {
    alert("A state was submitted: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit} className="login">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  value={this.state.password}
                  onChange={this.handleChange}
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
  }
}

export default Login;
