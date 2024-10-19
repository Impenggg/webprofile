// src/Components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
                I have a background in Computer Science, and I love building websites
                and applications. In my free time, I enjoy coding, reading, and
                exploring new technologies.            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
