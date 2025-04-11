import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #6e45e2;
  text-align: left; // Ensure all text is left-aligned
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: left;
`;

const Company = styled.a`
  display: flex;
  align-items: center;
  color: #6e45e2;
  font-size: 1.1rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

const Period = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const DetailList = styled.ul`
  list-style-position: outside;
  padding-left: 1rem; // Standard bullet indentation
  margin-left: 0;
  text-align: left;
`;

const DetailItem = styled.li`
  margin-bottom: 8px;
  color: #444;
  line-height: 1.6;
  padding-left: 0;
  text-indent: 0;
  margin-left: 1rem; // Proper bullet alignment
  text-align: left;
`;

const ExperienceCard = ({ title, company, link, logo, duration, details }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Company href={link} target="_blank" rel="noopener noreferrer">
        {company}
        {logo && <img src={logo} alt={`${company} logo`} />}
      </Company>
      <Period>{duration}</Period>
      <DetailList>
        {details.map((point, i) => (
          <DetailItem key={i}>{point}</DetailItem>
        ))}
      </DetailList>
    </CardContainer>
  );
};

export default ExperienceCard;