import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud from "../../Assets/Projects/cloud.png";
import news from "../../Assets/Projects/news.png";
import chat from "../../Assets/Projects/chat.png";
import task from "../../Assets/Projects/task.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Amazon S3: Simple Cloud Storage"
              description="This project is a RESTful API for a cloud storage service that allows users to upload, manage, and share files and directories. It provides various endpoints for handling file and directory operations, user authentication, and permission management."
              ghLink="https://github.com/siddharthsonii/Amazon-S3-Simple-Cloud-Storage"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat Application"
              description="A real-time chat application using Node.js, Express.js, and Socket.IO. This project aims to create a dynamic chat experience, allowing multiple users to join chat rooms and communicate seamlessly in real-time."
              ghLink="https://github.com/siddharthsonii/Real-Time-Chat-Application"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Aggregator-API"
              description="A RESTful API using Node.js, Express.js, and NPM packages. This API will allow users to register, log in, and set their news preferences (e.g., categories, sources). This API will then fetch news articles from multiple sources using external news APIs (e.g., NewsAPI)."
              ghLink="https://github.com/siddharthsonii/News-Aggregator-API"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Manager API"
              description="A RESTful API using Node.js, Express.js, and NPM packages. The API will enable users to perform CRUD operations (Create, Read, Update, and Delete) on tasks."
              ghLink="https://github.com/siddharthsonii/TM-API-Original"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
