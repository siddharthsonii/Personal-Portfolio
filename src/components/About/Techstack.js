import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJqueryLogo,
  DiJavascript1,
  DiPhp,
  DiCodeigniter,
  DiNpm,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiDocker,
} from "react-icons/di";
import {
  SiExpress,
  SiRedis,
  SiVite,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaReact, 
  FaAws,
  FaGithub,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <h1 className="textColor">HTML5</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <h1 className="textColor">CSS3</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <h1 className="textColor">JQuery</h1>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <h1 className="textColor">React</h1>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h1 className="textColor">Tailwind</h1>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h1 className="textColor">Vite</h1>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h1 className="textColor">JavaScript</h1>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h1 className="textColor">TypeScript</h1>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <h1 className="textColor">Npm</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h1 className="textColor">NodeJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h1 className="textColor">ExpressJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h1 className="textColor">MongoDb</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h1 className="textColor">MySQL</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h1 className="textColor">php</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
        <h1 className="textColor">Codeigniter</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h1 className="textColor">Docker</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h1 className="textColor">Redis</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h1 className="textColor">AWS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <h1 className="textColor">Github</h1>
      </Col>
    </Row>
  );
}

export default Techstack;
