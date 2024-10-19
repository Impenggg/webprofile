// src/Components/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  return (
    <Container fluid className="p-0">
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to My Profile!</h1>
        <p className="lead">
                I am passionate about web development and always looking to learn more.
                My goal is to become a full-stack developer and contribute to exciting
                projects.        </p>
      </header>
      <About />
      <Skills />
      <Contact />
    </Container>
  );
}

export default Home;
