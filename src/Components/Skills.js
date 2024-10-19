// src/Components/Skills.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  const skills = ["JavaScript", "React", "CSS", "HTML", "Node.js"];
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">My Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Text className="text-center">{skill}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
