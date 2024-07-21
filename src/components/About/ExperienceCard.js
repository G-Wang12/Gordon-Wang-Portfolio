import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-bottom: 20px;
  //   background-color: #ffffff; /* White background for better contrast */
  background-color: #d9edf7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  height: 400px;
  width: 100%;
  max-width: 900px; /* Max width for responsiveness */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #003366; /* Darker color for the title */
  font-weight: bold;
  //   font-family: 'Montserrat', sans-serif;
  font-family: "Playfair Display", serif;
`;

const Company = styled.a`
  display: flex;
  align-items: center;
  color: #007bff; /* Link color */
  font-size: 1.1em;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 15px;

  &:hover {
    color: #0056b3; /* Darker blue on hover */
  }

  img {
    width: 30px; /* Adjusted logo size */
    height: 30px;
    border-radius: 50%; /* Circular logo */
    margin-left: 10px;
  }
`;

const Period = styled.div`
  color: #666; /* Muted text color */
  font-size: 1em;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const DetailList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding-left: 20px; /* Padding for bullet points */
  text-align: left; /* Ensure text is aligned to the left */
`;

const DetailItem = styled.li`
  margin-bottom: 8px;
  color: #444; /* Slightly lighter text color for details */
  font-size: 0.95em;
  line-height: 1.4; /* Increased line-height for readability */
  text-align: left; /* Ensure text is aligned to the left */
  font-family: "Roboto", sans-serif;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const formatText = (text) => {
  const parts = text.split(":");
  return (
    <>
      {parts[0] && <BoldText>{parts[0]}:</BoldText>}
      {parts[1]}
    </>
  );
};

// Experience card component
const ExperienceCard = ({ title, company, link, logo, duration, details }) => (
  <CardContainer>
    <Title>{title}</Title>
    <FirstLine>
      <Company href={link} target="_blank">
        {company} <img src={logo}></img>
      </Company>
      <Period>{duration}</Period>
    </FirstLine>
    <DetailList>
      {details.map((point) => (
        <DetailItem>{formatText(point)}</DetailItem>
      ))}
    </DetailList>
  </CardContainer>
);

export default ExperienceCard;
