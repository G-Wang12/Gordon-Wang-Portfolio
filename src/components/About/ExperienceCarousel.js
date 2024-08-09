// import React from "react";
// import Experience from "./Experience";
// import ExperienceCard from "./ExperienceCard";
// import agi from "../../Assets/agi.jpeg";
// import waterloop from "../../Assets/Waterloop.png";
// import g12 from "../../Assets/g12.png";
// import DemoCarousel from "./DemoCarousel.js";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// const ExperienceCarousel = () => {
//   return (
//     <CarouselProvider
//     naturalSlideWidth={16}
//     naturalSlideHeight={9}
//     totalSlides={3}
//     >
//       <Slider>
//       <Slide index={0}>
//         <ExperienceCard

//           title="Software Develper Co-op"
//           company="Advantage Group International"
//           link="https://www.advantagegroup.com/"
//           duration="May 2024 - Present"
//           logo={agi}
//           details={[
//             "Database (PostgreSQL): Developed SQL update scripts to generate tables and views for data collection.",
//             "Back-end (Java Spring Boot): Developed DAOs, JPA Repositories, Rest API queries, Quartz jobs, and Junit tests for data collection in the backend of company survey software. Created an entire backend process to convert user IP addresses into Geographic location details and storing the data into database views.",
//             "Front-end (Angular): Feature and performance enhancements for the Angular application that provides a user-friendly interface for data management.",
//             "Data Migration: Orchestrated a data migration by developing SQL scripts to migrate data between PostgreSQL tables. Ensured data accuracy and integrity throughout the migration process.",
//             "Tableau: Engineered data visualizations and reports using historical user geographic data in Tableau.",
//             "Agile Development Cycle: Daily scrums, code reviews, and continuous iteration.",
//           ]}
//         />
//         </Slide>
//         <Slide index={1}>
//         <ExperienceCard

//           title="Web Team Lead/Full-stack Developer"
//           company="Waterloop"
//           link="https://teamwaterloop.ca/"
//           logo={waterloop}
//           duration="Apr 2022 - present"
//           details={[
//             "Front-end Development (React/Typescript/React Hooks/Route/Redux/Styled-components/CSS/Figma): Worked closely with UX/UI designers and other developers to ensure that the features meet both aesthetic and functional requirements. Notable tasks include developing an Amazon-like eCommerce web page featuring product listing and product details pages.",
//             "Back-end Development (Node.js/Express/Knex): Worked with queries and APIs to connect Content Management Site with Main Website. Notable tasks include implementing an entire Google Authentication feature and a popup dialogue for users to send Gmails using Gmail API.",
//             "Leadership Role: Organized all the meetings, planned the term goals and delegate different task.",
//           ]}
//         />
//         </Slide>
//         <Slide index={2}>
//         <ExperienceCard
//           title="Full-stack Developer"
//           company="G12 Uni"
//           link="https://g12uni.com/"
//           logo={g12}
//           duration="Nov 2023 - Apr 2024"
//           details={[
//             "Front-end Web Development (React/Route/CSS/NextUI): Developed dynamic web pages with responsive design while optimizing existing components.",
//             "Back-end Web Development (Firebase): Integrated RESTful APIs and managed database updates.",
//           ]}
//         />
//         </Slide>
//       </Slider>

//       <ButtonBack>Back</ButtonBack>
//       <ButtonNext>Next</ButtonNext>
//     </CarouselProvider>
//   );
// };

// export default ExperienceCarousel;

import React from "react";
import ExperienceCard from "./ExperienceCard";
import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
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
        totalSlides={3}
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
                "Data Migration: Orchestrated a data migration by developing SQL scripts to migrate data between PostgreSQL tables. Ensured data accuracy and integrity throughout the migration process.",
                "Tableau: Engineered data visualizations and reports using historical user geographic data in Tableau.",
                "Agile Development Cycle: Daily scrums, code reviews, Git version control, and CI/CD.",
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
                "Back-end Development (Node.js/Express/Knex): Worked with queries and APIs to connect Content Management Site with Main Website. Notable tasks include implementing an entire Google Authentication feature and a popup dialogue for users to send Gmails using Gmail API.",
                "Leadership Role: Organized all the meetings, planned the term goals and delegated different tasks.",
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
                "Resource Management for a Startup: Engaged in diverse roles beyond coding, including project management, brainstorming sessions, and user testing.",
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
