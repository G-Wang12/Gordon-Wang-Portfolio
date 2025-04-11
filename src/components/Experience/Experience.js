import React from "react";
import styled from "styled-components";
import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .purple {
    color: #6e45e2;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 50px;
  margin-top: 3rem;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #6e45e2, #88d3ce);
    border-radius: 2px;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    left: -38px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6e45e2;
    border: 4px solid #fff;
    box-shadow: 0 0 0 2px #6e45e2;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <SectionHeader>
        <h1>
          My Professional <span className="purple">Journey</span>
        </h1>
        <p>Here's a timeline of my work experience and education</p>
      </SectionHeader>
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <ExperienceCard {...exp} />
          </ExperienceItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;