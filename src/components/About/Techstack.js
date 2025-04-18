import React from "react";
import { Col, Row, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiTypescript, SiSpringboot, SiPostgresql, SiMysql, SiRuby,
  SiRubyonrails, SiGraphql, SiRedis, SiExpress, SiPandas,
  SiNumpy, SiHtml5, SiCss3, SiFlask,
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

function Techstack() {
  return (
    <Container>
      <Section title="Languages">
        <Icon title="Java"><DiJava /></Icon>
        <Icon title="Python"><DiPython /></Icon>
        <Icon title="JavaScript"><DiJavascript1 /></Icon>
        <Icon title="TypeScript"><SiTypescript /></Icon>
        <Icon title="C++"><CgCPlusPlus /></Icon>
        <Icon title="Ruby"><SiRuby /></Icon>
        <Icon title="GraphQL"><SiGraphql /></Icon>
        <Icon title="HTML"><SiHtml5 /></Icon>
        <Icon title="CSS"><SiCss3 /></Icon>
      </Section>

      <Section title="Frameworks & Libraries">
        <Icon title="React"><DiReact /></Icon>
        <Icon title="Node.js"><DiNodejs /></Icon>
        <Icon title="Spring Boot"><SiSpringboot /></Icon>
        <Icon title="Ruby on Rails"><SiRubyonrails /></Icon>
        <Icon title="Express.js"><SiExpress /></Icon>
        <Icon title="Flask"><SiFlask /></Icon>
      </Section>

      <Section title="Databases">
        <Icon title="PostgreSQL"><SiPostgresql /></Icon>
        <Icon title="MySQL"><SiMysql /></Icon>
        <Icon title="Redis"><SiRedis /></Icon>
      </Section>

      <Section title="Data Science">
        <Icon title="Pandas"><SiPandas /></Icon>
        <Icon title="NumPy"><SiNumpy /></Icon>
      </Section>
    </Container>
  );
}

export default Techstack;
