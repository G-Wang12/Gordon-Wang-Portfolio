import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
import uwaterlooLogo from "../../Assets/UWaterloo_logo.png";
import shopifyLogo from "../../Assets/shopify-logo.png";
import stealthStartupLogo from "../../Assets/stealth_startup_tlv_logo.jpeg";
import msftLogo from "../../Assets/msft-logo.png";


export const experiences = [
  {
    title: "Incoming Software Engineering Intern",
    company: "Microsoft",
    link: "https://www.microsoft.com/",
    duration: "May 2025 – Aug 2025",
    logo: msftLogo, // Add if available
    details: [
      "Joining Microsoft Azure Core in Redmond, WA for summer 2025 internship program."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Shopify",
    link: "https://www.shopify.com/",
    logo: shopifyLogo,
    duration: "Jan 2025 - Present",
    details: [
      "Hackathon Winner → Production Project (React Native, fal.ai): Won Shopify's internal hackathon by developing an AI-powered podcast app prototype that generated personalized merchant advice. The concept was so well-received that I was moved to the mobile team to develop it into a full production feature.",
      "Merchant Analytics (React, React Native): Enhanced the merchant experience by implementing new data visualization components and fixing critical UI bugs in the analytics dashboard used by over 2 million Shopify store owners.",
      "Back-end Optimization (Ruby on Rails, GraphQL): Improved analytics query performance by 20% through strategic migration to frozen records, reducing page load times significantly for merchants.",
      "Agile Development: Participated in frequent standups, sprint planning, and code reviews as part of Shopify's fast-paced engineering culture."
    ]
  },
  {
    title: "Software Developer",
    company: "Stealth Startup",
    link: "https://www.linkedin.com/company/stealth-startup-careers/",
    duration: "Jan 2025 - Present",
    logo: stealthStartupLogo, // Add if available
    details: [
      "Back-end (Java Spring Boot, Redis): Developed REST APIs to process real-time data streams from IoT devices, implementing Redis caching for low-latency data retrieval.",
      "Database Design (MySQL): Created normalized database schemas to efficiently store and retrieve time-series data from connected hardware devices.",
      "Startup Environment: Gained experience in rapid prototyping and iterative development, shipping new features weekly based new requirements."
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Waterloo - School of Accounting and Finance",
    link: "https://uwaterloo.ca/school-of-accounting-and-finance/",
    logo: uwaterlooLogo,
    duration: "Sep 2024 - Dec 2024",
    details: [
      "Python Instruction: Taught students how to use Pandas and NumPy for financial data analysis through weekly tutorials.",
      "Assignment Grading: Provided detailed feedback on Python scripts analyzing stock market data, helping students improve their coding and analytical skills.",
      "Top Performer: Selected as one of only two TAs for the course based on academic excellence in the program."
    ]
  },
  {
    title: "Software Developer Co-op",
    company: "Advantage Group International",
    link: "https://www.advantagegroup.com/",
    duration: "May 2024 - Aug 2024",
    logo: agi,
    details: [
      "Back-end Development (Java Spring Boot): Built robust REST APIs handling user geographic data, implementing proper error handling and logging for production reliability.",
      "Database Optimization (PostgreSQL): Designed efficient SQL schemas and wrote complex queries to support 50+ concurrent market research surveys with large datasets.",
      "ETL Processes: Created automated data pipelines that transformed and loaded survey results into the data warehouse on a daily schedule.",
      "Tableau Dashboards: Developed interactive visualizations including geographic maps to help clients understand survey response patterns."
    ]
  },
  {
    title: "Web Team Lead/Full-stack Developer",
    company: "Waterloop",
    link: "https://teamwaterloop.ca/",
    logo: waterloop,
    duration: "Apr 2022 - Aug 2024",
    details: [
      "Front-end Development (React/TypeScript): Led the redesign of the team website, implementing modern UI components that improved user engagement metrics.",
      "E-commerce Features: Built product listing and detail pages with search functionality for the team's merchandise store.",
      "Back-end Systems (Node.js/Express.js/PostgreSQL): Implemented Google OAuth authentication and developed API endpoints for content management.",
      "Team Leadership: Led the team to implement 50% of a project’s features within 4 months."
    ]
  },
//   {
//     title: "Full-stack Developer",
//     company: "G12 Uni",
//     link: "https://g12uni.com/",
//     logo: g12,
//     duration: "Nov 2023 - Apr 2024",
//     details: [
//       "Front-end Development (React/NextUI): Implemented responsive UI components with proper accessibility standards and mobile-first design principles.",
//       "Back-end Integration (Firebase): Set up Firestore database rules and security policies while optimizing queries for better performance.",
//       "State Management: Implemented efficient data fetching patterns to handle the platform's growth from 100 to over 10,000 monthly visitors.",
//     ]
//   }
];