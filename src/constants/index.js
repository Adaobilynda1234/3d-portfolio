import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ReactQuiz,
  TrakmamaAppjpg,
  Aichatbot,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "frontend  Developer",
    icon: web,
  },
  {
    title: "Technical writer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Wellahealth ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Access Bank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - Jun 2024",
    points: [
      "Analyzed and visualized data for over 70,000 terminals in different states across Nigeria.",
      "Utilized Excel to clean, manipulate, and analyze terminal data to track business performance",
      "Communicated findings and recommendations to stakeholders, resulting in improved decision-making and increased revenue..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adaobi proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adaobi does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adaobi  optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quiz App",
    description:
      "Web-based platform that allows users to select answers and receive instant feedback, with a final score displayed upon completion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:ReactQuiz,
    source_code_link: "https://react-quiz-app-sigma-inky.vercel.app/",
  },
  {
    name: "Trakmama",
    description:
      "TrakMama is a smart health companion app designed to support pregnant women throughout their pregnancy journey. Built with AI integration, the app offers personalized guidance by answering pregnancy-related questions and providing reliable health tips",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: TrakmamaAppjpg,
    source_code_link: "https://trakmama-project.vercel.app/",
  },
  {
    name: "Ai chat bot",
    description:
      "Ai chatbot developed with React and integrates the Gemini API to provide intelligent responses to user questions. The chatbot features a clean, interactive UI where users can type queries and receive real-time answers powered by Gemini's natural language capabilities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Aichatbot,
    source_code_link: "https://react-ai-chatbot-azure.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
