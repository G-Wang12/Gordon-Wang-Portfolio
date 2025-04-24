import agi from "../../Assets/agi.jpeg";
import waterloop from "../../Assets/Waterloop.png";
import g12 from "../../Assets/g12.png";
import uwaterlooLogo from "../../Assets/UWaterloo_logo.png";
import shopifyLogo from "../../Assets/shopify.svg"; // use this instead of shopify-logo.png
import stealthStartupLogo from "../../Assets/stealth_startup_tlv_logo.jpeg";
import msftLogo from "../../Assets/msft-logo.png";

export const experiences = [
  {
    title: "Incoming Software Engineering Intern",
    company: "Microsoft",
    link: "https://www.microsoft.com/",
    duration: "May 2025 – Aug 2025",
    logo: msftLogo,
    location: "Redmond, WA",
    techStack: ["C", "C++"],
    details: [
      "Microsoft Azure Files."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Shopify",
    link: "https://www.shopify.com/",
    logo: shopifyLogo,
    duration: "Jan 2025 - Present",
    location: "Toronto, ON (Remote)",
    techStack: ["Ruby on Rails", "GPT-4o", "React", "React Native", "TypeScript"],
    details: [
      "Hackathon Winner → Production Project: Won Shopify's internal hackathon by developing an AI-powered podcast app prototype that generated personalized merchant advice. The concept was so well-received that I was moved to the mobile team to develop it into a full production feature.",
      "Merchant Analytics: Enhanced the merchant experience by implementing new data visualization components and fixing critical UI bugs in the analytics dashboard used by over 2 million Shopify store owners.",
      "Back-end AI Optimizations: Boosted AI podcast generation speed by 50% with new implementations of asynchronous processing and optimized AI prompt design.",
      "Agile Development: Participated in frequent standups, sprint planning, and code reviews as part of Shopify's fast-paced engineering culture."
    ]
  },
  {
    title: "Software Developer",
    company: "Stealth Startup",
    link: "https://www.linkedin.com/company/stealth-startup-careers/",
    duration: "Jan 2025 - Present",
    logo: stealthStartupLogo,
    location: "Remote",
    techStack: ["Java Spring Boot", "Redis", "MySQL"],
    details: [
      "Back-end: Developed REST APIs to process real-time data streams from IoT devices, implementing Redis caching for low-latency data retrieval.",
      "Database Design: Created normalized database schemas to efficiently store and retrieve time-series data from connected hardware devices.",
      "Startup Environment: Gained experience in rapid prototyping and iterative development, shipping new features weekly based new requirements."
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Waterloo - School of Accounting and Finance",
    link: "https://uwaterloo.ca/school-of-accounting-and-finance/",
    logo: uwaterlooLogo,
    duration: "Sep 2024 - Dec 2024",
    location: "Waterloo, ON",
    techStack: ["Python", "Pandas", "NumPy"],
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
    location: "Toronto, ON",
    techStack: ["Java Spring Boot", "PostgreSQL", "Tableau"],
    details: [
      "Back-end Development: Built robust REST APIs handling user geographic data, implementing proper error handling and logging for production reliability.",
      "Database Optimization: Designed efficient SQL schemas and wrote complex queries to support 50+ concurrent market research surveys with large datasets.",
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
    location: "Waterloo, ON",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    details: [
      "Front-end Development: Led the redesign of the team website, implementing modern UI components that improved user engagement metrics.",
      // "Key enhencements: Implemented a new search algorithm for searching on the Analytics dashboard",
      "Back-end Systems: Implemented Google OAuth authentication and developed API endpoints for content management.",
      "Team Leadership: Led the team to implement 50% of a project's features within 4 months."
    ]
  },
  // {
  //   title: "Full-stack Developer",
  //   company: "G12 Uni",
  //   link: "https://g12uni.com/",
  //   logo: g12,
  //   duration: "Nov 2023 - Apr 2024",
  //   location: "Remote",
  //   techStack: ["React", "NextUI", "Firebase", "State Management"],
  //   details: [
  //     "Front-end Development (React/NextUI): Implemented responsive UI components with proper accessibility standards and mobile-first design principles.",
  //     "Back-end Integration (Firebase): Set up Firestore database rules and security policies while optimizing queries for better performance.",
  //     "State Management: Implemented efficient data fetching patterns to handle the platform's growth from 100 to over 10,000 monthly visitors.",
  //   ]
  // }
];