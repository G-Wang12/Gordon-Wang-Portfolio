import React from "react";
import { Col, Row, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode, SiPostman, SiSlack, SiIntellijidea,
  SiClickup, SiMicrosoftteams, SiGithub, SiDocker, SiFigma,
  SiAmazonaws, SiJupyter, SiTableau, SiLinux,
} from "react-icons/si";

const Section = ({ title, children }) => (
  <>
    <h4 style={{
      textAlign: "center",
      margin: "40px 0 20px",
      fontWeight: 600,
    }}>
      {title}
    </h4>
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {children}
    </Row>
  </>
);

const Icon = ({ title, children }) => (
  <Col xs={4} md={2} className="tech-icons">
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${title}`}>{title}</Tooltip>}
    >
      <div style={{ display: "inline-block" }}>{children}</div>
    </OverlayTrigger>
  </Col>
);

function Toolstack() {
  return (
    <Container>
      <Section title="IDEs & Code Editors">
        <Icon title="IntelliJ IDEA"><SiIntellijidea /></Icon>
        <Icon title="VS Code"><SiVisualstudiocode /></Icon>
        <Icon title="Jupyter Notebook"><SiJupyter /></Icon>
      </Section>

      <Section title="Version Control & DevOps">
        <Icon title="Git"><DiGit /></Icon>
        <Icon title="GitHub"><SiGithub /></Icon>
        <Icon title="Docker"><SiDocker /></Icon>
        <Icon title="AWS"><SiAmazonaws /></Icon>
        <Icon title="Linux"><SiLinux /></Icon>
      </Section>

      <Section title="Design & Visualization">
        <Icon title="Figma"><SiFigma /></Icon>
        <Icon title="Tableau"><SiTableau /></Icon>
      </Section>

      <Section title="Testing & Collaboration Tools">
        <Icon title="Postman"><SiPostman /></Icon>
        <Icon title="Slack"><SiSlack /></Icon>
        <Icon title="Microsoft Teams"><SiMicrosoftteams /></Icon>
        <Icon title="ClickUp"><SiClickup /></Icon>
      </Section>
    </Container>
  );
}

export default Toolstack;
