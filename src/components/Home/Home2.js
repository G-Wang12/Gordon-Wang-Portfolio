import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import headShot from "../../Assets/gordon-wang-headshot.jpg";
import selfie from "../../Assets/selfie.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Quick Intro on Myself</h1>
            <p className="home-about-body">
              I'm a student at the University of Waterloo for a double major in 
              {" "}<b className="purple">Computer Science</b>{" "} & {" "}
              <b className="purple">Finance</b>.
              <br />
              <br />I'm fluent in popular languages like
              <i>
                <b className="purple"> Python, Java, JavaScript, C, C++, and SQL </b>
              </i>
              .
              <br />
              <br />I am particularly passionate about{" "}
              <i>
                <b className="purple">Financial Technologies</b>,{" "}
                <b className="purple">Quantitative Finance</b>,{" "}
                <b className="purple">Backend Development</b>,{" "} and {" "}
                <b className="purple">Machine Learning</b>
              </i>
              .
              <br />
              <br />I have experiences in <b className="purple">Full-stack Development</b>,{" "} 
              <b className="purple">Data Engineering</b>,{" "} and <b className="purple">AI/ML Applications</b>
              {/* <br />I have practical experience working with{" "}
              <b className="purple">React.js</b> for frontend applications,{" "}
              <b className="purple">Java Spring Boot</b> for backend
              applications, and <b className="purple">PostgreSQL</b> for
              databases. */}
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={selfie}
                width={300}
                height={300}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/G-Wang12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gordon-wang-ab785b237/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
