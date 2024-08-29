import React from "react";
import ExperienceCard from "./ExperienceCard";
import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
import uwaterlooLogo from "../../Assets/UWaterloo_logo.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./experience.css"; // Import the CSS

const ExperienceCarousel = () => {
  return (
    <div className="carousel-container">
      <CarouselProvider
        totalSlides={4}
      >
        <Slider>
          <Slide index={0} className="carousel-slide">
            <ExperienceCard
              title="Software Developer Co-op"
              company="Advantage Group International"
              link="https://www.advantagegroup.com/"
              duration="May 2024 - Present"
              logo={agi}
              details={[
                "Database (PostgreSQL): Developed SQL update scripts to generate tables and views for data collection.",
                "Back-end (Java Spring Boot): Developed DAOs, JPA Repositories, Rest API queries, Quartz jobs, and Junit tests for data collection in the backend of company survey software. Created an entire backend process to convert user IP addresses into Geographic location details and storing the data into database views.",
                "Front-end (Angular): Feature and performance enhancements for the Angular application that provides a user-friendly interface for data management.",
                "ETL Processing: Orchestrated comprehensive ETL processes to efficiently transfer data to the data warehouse, ensuring data integrity and readiness for analysis.",
                "Tableau: Engineered data visualizations and reports using historical user geographic data in Tableau.",
                "Agile Development Cycle: Daily scrums, code reviews, Git version control, CI/CD, and Jenkins deployment.",
              ]}
            />
          </Slide>
          <Slide index={1} className="carousel-slide">
            <ExperienceCard
              title="Web Team Lead/Full-stack Developer"
              company="Waterloop"
              link="https://teamwaterloop.ca/"
              logo={waterloop}
              duration="Apr 2022 - present"
              details={[
                "Front-end Development (React/Typescript/React Hooks/Route/Redux/Styled-components/CSS/Figma): Worked closely with UX/UI designers and other developers to ensure that the features meet both aesthetic and functional requirements. Notable tasks include developing an Amazon-like eCommerce web page featuring product listing and product details pages.",
                "Back-end Development (Node.js/Express/Knex/Axios/Docker/Google Cloud): Worked with queries and APIs to connect Content Management Site with Main Website. Notable tasks include implementing an entire Google Authentication feature and a popup dialogue for users to send Gmails using Gmail API.",
                "Leadership Role: Organized all the meetings, planned the term goals and delegated different tasks.",
                "Timely Agile Practices: Led the team to implement 50% of a project’s features within 4 months."
              ]}
            />
          </Slide>
          <Slide index={2} className="carousel-slide">
            <ExperienceCard
              title="Full-stack Developer"
              company="G12 Uni"
              link="https://g12uni.com/"
              logo={g12}
              duration="Nov 2023 - Apr 2024"
              details={[
                "Front-end Web Development (React/Route/CSS/NextUI): Developed dynamic and interactive web pages using React and NextUI, focusing on creating responsive designs that ensure a seamless user experience across various devices and screen sizes. Optimized existing components for better performance and maintainability, including code refactoring and reducing load times through efficient state management and lazy loading.",
                "Back-end Web Development (Firebase): Integrated and managed RESTful APIs to connect the front-end with the backend services, enabling smooth data exchange and user interaction. Designed and maintained Firestore database schemas to support efficient data storage and retrieval.",
                "Resource Management and Software Design: Led project planning, brainstorming sessions, and utilized UML diagrams to design and communicate software architecture.",
                "Startup Growth: Scaled monthly website visits from 100 to over 10,000."
              ]}
            />
          </Slide>
          <Slide index={3} className="carousel-slide">
            <ExperienceCard
              title="Teaching Assistant"
              company="University of Waterloo - School of Accounting and Finance"
              link="https://uwaterloo.ca/school-of-accounting-and-finance/"
              logo={uwaterlooLogo} 
              duration="Sep 2024 - Present"
              details={[
                "Tutorials & Instruction (Python/Pandas/NumPy): Lead tutorials, teaching students how to analyze stock data and manage financial data using Python, Pandas, and NumPy. Focused on real-world applications to enhance student understanding.",
                "Assignment Grading: Evaluated assignments to ensure accurate application of data analysis techniques, providing feedback to improve student performance.",
                "Student Support: Provided one-on-one assistance, clarifying complex topics related to stock data analysis and financial concepts, ensuring students grasp the material.",
                "Recognition: Selected as one of only two TAs for the course, recognized for outstanding academic achievements."
              ]}
            />
          </Slide>
        </Slider>

        <ButtonBack className="round-button">Back</ButtonBack>
        <ButtonNext className="round-button">Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default ExperienceCarousel;
