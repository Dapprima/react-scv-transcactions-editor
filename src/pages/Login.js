import React from "react";
import { Row, Col } from "react-bootstrap";

import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <Row className="justify-content-md-center">
      <Col xs={6} className="border p-4">
        <LoginForm />
      </Col>
    </Row>
  );
}
