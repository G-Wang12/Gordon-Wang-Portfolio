import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
import ExperienceCarousel from "./ExperienceCarousel";

// const ExpContainer = styled.div`
//   display: flex;
//   justify-content: flex-start; // Align items horizontally to the left
//   align-items: left; // Align items vertically to the top (left)
//   height: 100vh; // Full height for demonstration
//   width: 100vw; // Full width for demonstration
//   background-color: #f0f0f0;
//   padding: 20px;
//   box-sizing: border-box;
// `;
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
      {/* <ExperienceCard
        title="Software Develper Co-op"
        company="Advantage Group International"
        link="https://www.advantagegroup.com/"
        duration="May 2024 - Present"
        logo={agi}
        details={[
          "Database (PostgreSQL): Developed SQL update scripts to generate tables and views for data collection.",
          "Back-end (Java Spring Boot): Developed DAOs, JPA Repositories, Rest API queries, Quartz jobs, and Junit tests for data collection in the backend of company survey software. Created an entire backend process to convert user IP addresses into Geographic location details and storing the data into database views.",
          "Front-end (Angular): Feature and performance enhancements for the Angular application that provides a user-friendly interface for data management.",
          "Data Migration: Orchestrated a data migration by developing SQL scripts to migrate data between PostgreSQL tables. Ensured data accuracy and integrity throughout the migration process.",
          "Tableau: Engineered data visualizations and reports using historical user geographic data in Tableau.",
          "Agile Development Cycle: Daily scrums, code reviews, and continuous iteration.",
        ]}
      />
      <ExperienceCard
        title="Web Team Lead/Full-stack Developer"
        company="Waterloop"
        link="https://teamwaterloop.ca/"
        logo={waterloop}
        duration="Apr 2022 - present"
        details={[
          "Front-end Development (React/Typescript/React Hooks/Route/Redux/Styled-components/CSS/Figma): Worked closely with UX/UI designers and other developers to ensure that the features meet both aesthetic and functional requirements. Notable tasks include developing an Amazon-like eCommerce web page featuring product listing and product details pages.",
          "Back-end Development (Node.js/Express/Knex): Worked with queries and APIs to connect Content Management Site with Main Website. Notable tasks include implementing an entire Google Authentication feature and a popup dialogue for users to send Gmails using Gmail API.",
          "Leadership Role: Organized all the meetings, planned the term goals and delegate different task.",
        ]}
      />
      <ExperienceCard
        title="Full-stack Developer"
        company="G12 Uni"
        link="https://g12uni.com/"
        logo={g12}
        duration="Nov 2023 - Apr 2024"
        details={[
          "Front-end Web Development (React/Route/CSS/NextUI): Developed dynamic web pages with responsive design while optimizing existing components.",
          "Back-end Web Development (Firebase): Integrated RESTful APIs and managed database updates.",
        ]}
      /> */}
      {/* <Exp>
        <JobTitle>
          <TitleText>
            <h1>Software Developer Co-op</h1>
          </TitleText>
          <h2>AGI</h2>
        </JobTitle>
      </Exp> */}
      {/* Add additional experience items here if needed */}
    </ExpContainer>
  );
};

// Define a styled item for demonstration
// const Item = styled.div`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   margin: 5px;
//   border-radius: 5px;
// `;

// const Experience = () => (
//   <ExpContainer>
//     <Item>Experience Item 1</Item>
//     <Item>Experience Item 2</Item>
//     <Item>Experience Item 3</Item>
//   </ExpContainer>
// );

export default Experience;
