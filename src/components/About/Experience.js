import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
import ExperienceCarousel from "./ExperienceCarousel";

const ExpContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: flex-start; // Align items to the left
  padding: 20px;
  box-sizing: border-box;
`;
const Exp = styled.div`
  padding-top: 10px; // Adjust padding as needed
`;

const JobTitle = styled.div`
  display: flex;
  align-items: center; // Align items vertically centered
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: flex-start; // Align items to the left
`;

const Experience = () => {
  return (
    <ExpContainer>
        <ExperienceCarousel />
    </ExpContainer>
  );
};

export default Experience;
