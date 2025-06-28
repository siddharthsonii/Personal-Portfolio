import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows11,
  SiRender,
  SiDiscord,
  SiLinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <h3 className="textColor">Windows 11</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h3 className="textColor">Linux</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3 className="textColor">VS Code</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3 className="textColor">Postman</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h3 className="textColor">Slack</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
        <h3 className="textColor">Discord</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h3 className="textColor">Vercel</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
        <h3 className="textColor">Render</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
