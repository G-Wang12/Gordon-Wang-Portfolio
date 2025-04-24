import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #6e45e2;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Company = styled.a`
  display: inline-flex; /* Changed from flex to inline-flex */
  align-items: center;
  color: #6e45e2;
  font-size: 1.1rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 600;
  width: fit-content; /* Added to ensure the link only takes up necessary space */

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

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.9rem;

  svg {
    margin-right: 6px;
    color: #6e45e2;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
`;

const TechPill = styled.span`
  background: rgba(110, 69, 226, 0.1);
  color: #6e45e2;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const DetailList = styled.ul`
  list-style-position: outside;
  padding-left: 1rem;
  margin-left: 0;
`;

const DetailItem = styled.li`
  margin-bottom: 8px;
  color: #444;
  line-height: 1.6;
  padding-left: 0;
  text-indent: 0;
  margin-left: 1rem;
`;

const ExperienceCard = ({ 
  title, 
  company, 
  link, 
  logo, 
  duration, 
  details,
  location,
  techStack = []
}) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Company href={link} target="_blank" rel="noopener noreferrer">
        {company}
        {logo && <img src={logo} alt={`${company} logo`} />}
      </Company>
      
      <MetaContainer>
        <MetaItem>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {duration}
        </MetaItem>
        {location && (
          <MetaItem>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {location}
          </MetaItem>
        )}
      </MetaContainer>
      
      {techStack.length > 0 && (
        <TechStack>
          {techStack.map((tech, i) => (
            <TechPill key={i}>{tech}</TechPill>
          ))}
        </TechStack>
      )}
      
      <DetailList>
        {details.map((point, i) => (
          <DetailItem key={i}>{point}</DetailItem>
        ))}
      </DetailList>
    </CardContainer>
  );
};

export default ExperienceCard;