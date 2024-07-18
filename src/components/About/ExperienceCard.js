import React from "react";
import styled from "styled-components";

// Styled components for the experience card
const CardContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: rgba(240, 240, 240, 0.5);
  //   height: 300px;
  width: 500px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Company = styled.a`
  display: flex;
  color: #666;
  font-size: 1.2em;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-left: 20px;

  &:hover {
    color: #333;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-top: 5px;
  }
  period {
    margin-right: 10px;
    color: #666;
    font-size: 1.2em;
    text-decoration: none;
  }
`;

const DetailList = styled.ul`
  margin-top: 10px;
  //   padding-left: 10px;
`;

const DetailItem = styled.li`
  margin-bottom: 5px;
  text-align: left;
`;

// Experience card component
const ExperienceCard = ({ title, company, link, logo, duration, details }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Company href={link} target="_blank">
      {company} <img src={logo}></img> <period>{duration}</period>
    </Company>
    <DetailList>
      {details.map((point) => (
        <DetailItem>{point}</DetailItem>
      ))}
    </DetailList>
  </CardContainer>
);

export default ExperienceCard;
