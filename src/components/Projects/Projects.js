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
import neuroGuard from "../../Assets/Projects/NeuroGuardPic.png";
import taxSmart from "../../Assets/Projects/taxSmart.png";

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
              imgPath={taxSmart}
              // isBlog={false}
              title="Tax Smart"
              description="Website that simplifies financial literacy for young adults by combining tax analytics, AI-powered virtual assistance, secure data storage, tax reminders, and a content creation studio—all in one web app."
              demoLink="https://t.bananotes.com/"
              ghLink="https://github.com/orgs/Geesehacks-2025/repositories"
              devPost="https://devpost.com/software/tax-smart?"
              techStack="Ruby on Rails, SQLite, Next.js, AWS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuroGuard}
              // isBlog={false}
              title="NeuroGuard"
              description="Full-stack application that uses AI/ML video recognition to detect falls and provide real-time support to aid caregivers, ensuring Alzheimer's patients stay safe even when memories slip away."
              ghLink="https://github.com/G-Wang12/htn24-alzhimerdetection"
              devPost="https://devpost.com/software/neuroguard-1cbg2d?"
              techStack="Python, Flask, React, OpenCV, MediaPipe, Axios, TensorFlow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockImg}
              // isBlog={false}
              title="Robo Stock Portfolio Advisor"
              description="Python program that consumes a list of stocks and generates the safest possible portfolio from the given stocks. Designed and programmed an algorithm to compare the correlation between different stocks’ historical data. The least uncorrelated group of stock is picked in order to diversify the portfolio."
              ghLink="https://github.com/G-Wang12/Safe-Portfolio-Robo-Advising"
              techStack="Python, Panda, NumPy, Jupyter Notebook, yfinance, Bash"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summerCamp}
              // isBlog={false}
              title="Cali Camp"
              description="React website for the promotion of a student-ran summer camp."
              ghLink="https://github.com/G-Wang12/Summer-Camp-Site"
              demoLink="https://cali-camp-toronto.vercel.app/"
              techStack="React, Typescript, Javascript, HTML, CSS, Bash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={g12uni}
              isBlog={false}
              title="G12 Uni Website"
              description="Platform to simplify the university selection process for high school students by connecting them with their university community and guiding them to find the right university and major."
              demoLink="https://g12uni.com/"
              techStack="React, Firebase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mainSite}
              isBlog={false}
              title="Waterloop Main Site"
              description="Website to represent Waterloop professionally so we can help establish and sustain our network of supporters and sponsors, as well as showcase all the cool stuff the team is working on. Also includes a recruitment section."
              ghLink="https://github.com/waterloop/waterloop-website"
              demoLink="https://teamwaterloop.ca/"
              techStack="React, Typescript, Redux, Styled-components, HTML, CSS, REST API, Bash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmsSite}
              isBlog={false}
              title="Waterloop CMS"
              description="Content Management System for Waterloop sites. Allows executives to directly update the content on main site without needing to change the codebase themselves."
              ghLink="https://github.com/waterloop/waterloop-cms"
              techStack="React, Typescript, Javascript, Redux, Node.js, Express.js, HTML, CSS, Docker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={executiveDashboard}
              isBlog={false}
              title="Waterloop Executive Dashboard"
              description="An all-in-one ATS and member analytics tool used by anyone in a lead position."
              ghLink="https://github.com/waterloop/executive-dashboard"
              techStack="React, Typescript, Redux, Styled-components, HTML, CSS, Docker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
