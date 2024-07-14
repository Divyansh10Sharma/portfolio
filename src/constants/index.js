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
  figma,
  docker,
  analysed,
  ibm,
  codsoft,
  threads,
  carrent,
  jobit,
  resume_builder,
  threejs,
  chatz,
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI ML Trainee",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#383E56",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Explored and understood the concept of Artificial Intelligence and Machine Learning in the real world.",
      "Discovered how AI can be implemented in the currently available technologies and can be improved.",
      "Did a hands on project which included the concepts of AI ML, Python and Web Development.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Used ReactJS, ThreeJS and TailWindCSS to develop modern Portfolio website.",
      "Used ThreeJS, React Three Fiber and Framer Motion library to implement 3D models, 3D graphics and animations to the website.",
      "Explored the way to host a website and  hosted the website on Render.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Analyzed.in",
    icon: analysed,
    iconBg: "#383E56",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Worked as a full stack developer and led the team of more than 14 interns in the development of the web application and learnt from them as well.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Decreased the workload by 20% by suggesting and implementing an optimized approach to a time consuming problem.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Divyansh proved me wrong.",
    name: "Disha Goel",
    designation: "Data Analyst",
    company: "",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Divyansh does.",
    name: "Nishita Jagdale",
    designation: "Web Developer",
    company: "",
    image: "",
  },
  {
    testimonial:
      "After Divyansh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aditya Sharma",
    designation: "Web Developer",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Thread",
    description:
      "A Social Media platform for users where users can like and comment on the posts of other users and follow/unfollow all the other users with dynamic suggestions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Divyansh10Sharma/Threads_Clone.git",
  },
  {
    name: "Chatz",
    description:
      "A basic web application that allows users to have a real-time conversation through texts with a beautiful modern design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "dasyUI",
        color: "pink-text-gradient",
      },
    ],
    image: chatz,
    source_code_link: "https://github.com/Divyansh10Sharma/Chat_App.git",
  },
  {
    name: "Resume Builder",
    description:
      "Developed a full-stack AI-powered resume builder that helps users create ATS-friendly resumes increasing their application success rate.",
    tags: [
      {
        name: "strapi",
        color: "blue-text-gradient",
      },
      {
        name: "verceldb",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: resume_builder,
    source_code_link: "https://github.com/Divyansh10Sharma/Resume-Builder.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
