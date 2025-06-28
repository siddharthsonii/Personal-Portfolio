import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud from "../../Assets/Projects/cloud.png";
import news from "../../Assets/Projects/news.png";
import chat from "../../Assets/Projects/chat.png";
import task from "../../Assets/Projects/task.png";
import Persona_BOT from "../../Assets/Projects/Persona-BOT.png";
import AI_Code from "../../Assets/Projects/AI_Code.png";

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
              imgPath={Persona_BOT}
              isBlog={false}
              title="Persona Bot with UI"
              description="AI Chatbot project—a fun web app where you can chat with virtual versions of your favourite tech gurus, Hitesh Choudhary and Piyush Garg! Built with Python, Flask, and OpenAI's API, this chatbot lets you ask tech questions (or anything, really) and get responses in their signature style."
              ghLink="https://github.com/siddharthsonii/Persona-Bot-UI.git"
              demoLink="https://persona-bot-ui.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI_Code}
              isBlog={false}
              title="AI Agent Code Generator: Your Coding Ka Jadoo"
              description="AI Agent Code Generator, a Python-powered jugaadu tool that creates entire projects faster than your mom makes aloo paratha 🥟! Whether you want a React to-do list, a Flask calculator, or a Java Spring Boot app, this AI dost uses OpenAI’s magic to generate code files, install dependencies, and launch your app in a browser—all with a few clicks."
              ghLink="https://github.com/siddharthsonii/AI-Code-Generator---AI-Agents.git"
              // demoLink=""
            />
          </Col>

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
