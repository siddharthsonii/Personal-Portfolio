import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <h2 className="textColor">Windows 11</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2 className="textColor">VS Code</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h2 className="textColor">Postman</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h2 className="textColor">Slack</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h2 className="textColor">Vercel</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
