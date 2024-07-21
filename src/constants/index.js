import {
  mobile,
  backend,
  creator,
  threeD,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  promptai,
  blogapp,
  mongodb,
  git,
  figma,
  todoform,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  ngl,
  cryck,
  framerMotion,
  zod,
  tanstack,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Framer Motion",
    icon: framerMotion,
  },
  {
    name: "Zod",
    icon: zod,
  },
  {
    name: "Tanstack",
    icon: tanstack,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Not Gonna Lie",
    description:
      "I've developed a full-stack website inspired by Instagram's NGL feature, allowing users to receive anonymous feedback. This platform helps you gain true insights and feedback about yourself from friends and followers",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Auth js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Express js ",
        color: "pink-text-gradient",
      },
    ],
    image: ngl,
    source_code_link: "https://github.com/jaskrrish/Not-Gonna-Lie",
  },
  {
    name: "3D T-Shirt Customizer",
    description:
      "Create your own style with our new 3D Swag Customization App. Pick colors, add logos, and try AI designs to make your virtual swag unique. Built using React.js, Three.js, and OpenAI to show the usage of a 3D world with AI",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: threeD,
    source_code_link: "https://github.com/jaskrrish/3D-Tshirt-Customizer",
  },
  {
    name: "Cryck",
    description:
      "Cryck is innovative Fantasy Cricket Blockchain Game, a cutting-edge project that integrates the excitement of fantasy cricket with the transformative power of decentralized finance (DeFi) and blockchain technology. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: cryck,
    source_code_link: "https://github.com/JeyasuryaUR/Cryck",
  },
  {
    name: "Prompt.AI",
    description:
      "An Open Source Full Stack Web-based platform built in Next-js 14 that allows users to store & search AI Prompts from various Users, providing a convenient and efficient solution for Prompt Engineering.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptai,
    source_code_link: "https://github.com/jaskrrish/Prompt.ai",
  },
  {
    name: "Blog App",
    description:
      "A React JS blog app lets users create, view, and interact with dynamic blog posts. It uses reusable components for a smooth, interactive experience and leverages React's features for efficiency and a large support ecosystem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/jaskrrish/BlogApp",
  },
];

export { services, technologies, experiences, projects };
