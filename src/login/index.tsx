import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";
import { observer } from "mobx-react";
import { SessionStore } from "../stores/sessionStore";

type LoginProps = {
  store: SessionStore;
};
@observer
class Login extends React.Component<LoginProps, any> {
  constructor(props: LoginProps) {
    super(props);
  }

  changeEmail = (event: any) => {
    this.props.store.setEmail(event.target.value);
  };

  changePassword = (event: any) => {
    this.props.store.setPassword(event.target.value);
  };

  handleSubmit(event: any) {
    alert("Submit data:" + this.props.store.info);
    event.preventDefault();
  }

  render() {
    const store = this.props.store
    return (
      <Container>
        <Row>Info: {store.email}/{store.password}</Row>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit.bind(this)} className="login">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                //   value={this.state.email}
                  onChange={this.changeEmail}
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
                //   value={this.state.password}
                  onChange={this.changePassword}
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
