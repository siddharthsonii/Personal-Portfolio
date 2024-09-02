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
        <h2 className="textColor">HTML5</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <h2 className="textColor">CSS3</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <h2 className="textColor">JQuery</h2>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <h2 className="textColor">React</h2>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h2 className="textColor">Tailwind</h2>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h2 className="textColor">Vite</h2>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h2 className="textColor">JavaScript</h2>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h2 className="textColor">TypeScript</h2>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <h2 className="textColor">Npm</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h2 className="textColor">NodeJS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h2 className="textColor">ExpressJS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h2 className="textColor">MongoDb</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h2 className="textColor">MySQL</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h2 className="textColor">php</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
        <h2 className="textColor">Codeigniter</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h2 className="textColor">Docker</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h2 className="textColor">Redis</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h2 className="textColor">AWS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <h2 className="textColor">Github</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
