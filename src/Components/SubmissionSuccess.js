// src/Components/SubmissionSuccess.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SubmissionSuccess() {
  const { state } = useLocation();
  const { name, email, message } = state || {};

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="text-center">
              <h1 className="mb-4">Thank you, {name}!</h1>
              <p className="lead">Your message has been sent.</p>
              <hr />
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Message:</strong> {message}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmissionSuccess;
