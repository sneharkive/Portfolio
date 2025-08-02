import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
const Info = {
  name: "Sneha Roy",
  stack: ["Software Engineer", "Full Stack Developer", "Problem Solver", "Competitive Programmer"],
  bio: "I'm a dedicated full stack web developer with a passion for building clean, efficient, and scalable web applications. I’ve developed several hands-on projects and actively sharpen my skills by solving data structures and algorithms (DSA) problems. I'm always exploring new technologies and enjoy turning ideas into functional, user-friendly solutions. Let’s connect and build something impactful together!",
};

const ProjectInfo = [
    {
    title: "Job Portal (Role-Based Access)",
    desc: "A full-stack job portal application featuring role-based authentication and authorization. Employers can post jobs, invite or reject applicants, schedule interviews, and offer jobs. They can also search and sort the applicant list based on skills, experience, and other filters. Applicants can create and update their profiles with personal details, years of experience, certifications, and skills. They can browse available job listings, apply for positions, and filter jobs based on relevance. Built with a modular backend, secure JWT-based login, and an intuitive, responsive frontend.",
    image: "JobPortal.png",
    live: true,
    technologies: [
      "React",
      "Spring Boot",
      "MongoDB",
      "JWT",
      "Role-based Auth",
      "REST API",
      "Tailwind",
      "Spring Security",
    ],
    link: "https://jobportalfrontend-4p43.onrender.com",
    github: "https://github.com/sneharkive/JobPortal-NextRole",
  },
  {
    title: "AI Fitness Tracker (Microservices)",
    desc: "A cloud-native AI-powered fitness tracking application built using Spring Cloud architecture. The app consists of four microservices managed by an Eureka Discovery Server and accessed via a centralized API Gateway. The AI engine tracks user activities, calculates calories burned, and provides personalized fitness and diet suggestions based on user history and progress. Designed for scalability, this app combines real-time analytics, intelligent recommendations, and modular service architecture for a seamless fitness experience.",
    image: "AIFitnessApp.png",
    live: true,
    technologies: [
      "Spring Boot",
      "Spring Cloud",
      "Eureka Server",
      "API Gateway",
      "Microservices",
      "AI",
      "MySQL",
      "JWT",
    ],
    link: "",
    github: "https://github.com/sneharkive/AI-FitnessAppMicro",
  },
  {
    title: "URL Shortener App",
    desc: "A full-stack URL shortener application built with React.js and Spring Boot, enabling users to create, manage, and track shortened URLs. It features secure authentication using JWT, allowing users to log in and manage their links privately. The backend stores data in a MySQL database, and the frontend displays real-time analytics using Chart.js—showing how many times each shortened URL has been accessed. The app includes form validation, responsive design, and intuitive user experience for seamless link management and tracking.",
    image: "Shortify.png",
    live: true,
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Chart.js",
      "Tailwind",
    ],
    link: "https://superb-rabanadas-2c2d83.netlify.app/",
    github: "https://github.com/sneharkive/Shortify",
  }
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS", "Redux"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
      "RabbitMQ",
      "Apache Kafka",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "Docker",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Swagger",
    ],
  },
];

const socialLinks = [
  { link: "https://github.com/sneharkive", icon: IconBrandGithub },
  { link: "https://www.leetcode.com/u/sneharkive", icon: IconBrandLeetcode },
  { link: "https://www.linkedin.com/in/sneharkive", icon: IconBrandLinkedin },
  { link: "https://x.com/sneharkive", icon: IconBrandX },
  { link: "https://www.instagram.com/sneha_rkive", icon: IconBrandInstagram },
];

const ExperienceInfo = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    date: "Oct 2023 - Present",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "Springboot",
      "React JS",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "System Engineer",
    company: "Infosys",
    date: "Nov 2022 - Sep 2023",
    desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    skills: [
      "Java",
      "MySQL",
      "Hibernate",
      "Selenium",
      "Jenkins",
      "JIRA",
      "Automation Testing",
    ],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
