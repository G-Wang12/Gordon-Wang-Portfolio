import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            My name is <span className="purple">Gordon Wang. </span>
            <br />I'm a student at the{" "}
            <span className="purple">University of Waterloo </span> for{" "}
            <span className="purple">
              Computer Science & Finance
            </span>
            .
            <br />
            I'm currently working at <span className="purple">Microsoft </span> as a Software Engineering Intern.
            <br />
            <br />
            Apart from coding, here are my other hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and watching sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Investing in the stock market
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
