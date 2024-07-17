import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stockImg from "../../Assets/Projects/stock-market.jpg";
import summerCamp from "../../Assets/Projects/summer-camp-site.png";
import g12uni from "../../Assets/Projects/g12-uni.png";
import mainSite from "../../Assets/Projects/main-site.png";
import cmsSite from "../../Assets/Projects/waterloop-cms.png";
import executiveDashboard from "../../Assets/Projects/executive-dashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summerCamp}
              // isBlog={false}
              title="Cali Camp"
              description="A website developed with React.js to help promote a friend’s summer camp. Google Analytics was integrated to view user statistics."
              ghLink="https://github.com/G-Wang12/Summer-Camp-Site"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockImg}
              // isBlog={false}
              title="Robo Stock Portfolio Advisor"
              description="Python program that consumes a list of stocks and generates the safest possible portfolio from the given stocks. Designed and programmed an algorithm to compare the correlation between different stocks’ historical data. The least uncorrelated group of stock is picked in order to diversify the portfolio."
              ghLink="https://github.com/G-Wang12/Safe-Portfolio-Robo-Advising"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={g12uni}
              isBlog={false}
              title="G12 Uni Website"
              description="Platform to simplify the university selection process for high school students by connecting them with their university community and guiding them to find the right university and major."
              // ghLink="https://github.com/G-Wang12/Editor.io"
              demoLink="https://g12uni.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mainSite}
              isBlog={false}
              title="Waterloop Main Site"
              description="Site to represent Waterloop professionally so we can help establish and sustain our network of supporters and sponsors, as well as showcase all the cool stuff the team is working on. Also includes a recruitment section."
              ghLink="https://github.com/waterloop/waterloop-website"
              demoLink="https://teamwaterloop.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmsSite}
              isBlog={false}
              title="Waterloop CMS"
              description="Content Management System for Waterloop sites. Allows executives to directly update the content on main site without needing to change the codebase themselves."
              ghLink="https://github.com/waterloop/waterloop-cms"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={executiveDashboard}
              isBlog={false}
              title="Waterloop Executive Dashboard"
              description="An all-in-one ATS and member analytics tool used by anyone in a lead position."
              ghLink="https://github.com/waterloop/executive-dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
