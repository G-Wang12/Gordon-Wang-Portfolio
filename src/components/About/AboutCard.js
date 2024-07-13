import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Gordon Wang. </span>
            <br />I am currently a student at{" "}
            <span className="purple">The University of Waterloo </span> for{" "}
            <span className="purple">
              Computer Science and Financial Management
            </span>
            .
            <br />
            I am currently doing my co-op as a Software Developer at Advantage
            Group International.
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
          {/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
