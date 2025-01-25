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
  SiElasticsearch,
  SiPostgresql,
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
        <h3 className="textColor">HTML5</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <h3 className="textColor">CSS3</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <h3 className="textColor">JQuery</h3>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <h3 className="textColor">React</h3>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h3 className="textColor">Tailwind</h3>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h3 className="textColor">Vite</h3>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3 className="textColor">JavaScript</h3>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3 className="textColor">TypeScript</h3>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <h3 className="textColor">Npm</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3 className="textColor">NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h3 className="textColor">ExpressJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3 className="textColor">MongoDb</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h3 className="textColor">MySQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h3 className="textColor">PostgreSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h3 className="textColor">php</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
        <h3 className="textColor">Codeigniter</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h3 className="textColor">Docker</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h3 className="textColor">Redis</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h3 className="textColor">AWS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <h3 className="textColor">Github</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <h3 className="textColor">Elasticsearch</h3>
      </Col>
    </Row>
  );
}

export default Techstack;
