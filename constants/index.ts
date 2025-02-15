import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tensorflow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    image: "opencv.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Scikit Learn",
    image: "scikitlearn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "keras.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Matplotlib",
    image: "matplotlib.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Selinium",
    image: "selinium.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/azharthegeek",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/azharthegeek",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/azharthegeek",
  },
] as const;

export const FRONTEND_SKILL = [
    {
    skill_name: "Airbyte",
    image: "airbyte.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pinecone",
    image: "pinecone.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Choramadb",
    image: "chromadb.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Milvus",
    image: "milvus.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Deepseek",
    image: "deepseek.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Openai",
    image: "openai.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Anthropic",
    image: "anthropiclogo.png",
    width: 70,
    height: 70,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Flawiseai",
    image: "flawiseai.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Langfuse",
    image: "langfuse.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Langchain",
    image: "langchain.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Langgraph",
    image: "langgraph.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Llamaindex",
    image: "llamaindex.png",
    width: 65,
    height: 65,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "LINUX",
    image: "linux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  }
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Kubernatees",
    image: "kubernatees.png",
    width: 60,
    height: 60,
  },
] as const;

export const certifications = {
  certifications: [
    {
      title: "AWS Machine Learning Foundations",
      subtitle: "- Udacity Nanodegree Program Graduate",
      logo_path: "Amazon_Web.png",
      certificate_link: "https://graduation.udacity.com/confirm/XGD4VVRC",
      alt_name: "Amazon Web Services",
      color_code: "#8C151599",
    },
    // ... rest of your certificates array
  ],
} as const;

export const PROJECTS = [
  {
    title: "TechShoor Agri",
    description: [
      "Transforming data into profit, TechShoor Agri is an innovative platform aimed at optimizing agricultural techniques.",
      "Key Features:",
      "- Utilizes satellite imagery and deep learning models to provide AI-driven insights.",
      "- Detects crop diseases and generates detailed land condition reports for farmers.",
      "- Aims to increase agricultural yield, improve output quality, and enhance predictability using data-driven approaches.",
      "Impact:",
      "- Targets the agriculture sector, promoting local raw material utilization, employment, and skill development.",
      "- Supports local manufacturing and service clusters while addressing current agricultural challenges.",
      "- Offers potential for global market expansion, focusing on revenue generation and import substitution."
    ],
    image: "/projects/project-1.png",
    link: "https://agri.techshoor.com/",
  },
  {
    title: "Python Course (PEPC)",
    description: [
      "A comprehensive 30+ hour Python course designed for beginners to intermediate learners.",
      "Course Highlights:",
      "- Live interactive Zoom classes led by experienced instructors.",
      "- Access to recorded videos for flexible learning.",
      "- Regular quizzes and assignments to reinforce understanding and apply knowledge.",
      "- Comprehensive resources including slides, documentation, and a user-friendly portal.",
      "Curriculum Overview:",
      "- Covers Python fundamentals and modern programming concepts, including object-oriented programming.",
      "- Divided into six modules with hands-on practice materials and real-world programming tasks.",
      "- Prepares learners for high-paying job opportunities in the tech industry."
    ],
    image: "/projects/project-2.png",
    link: "https://techshoor.com/courses/programming-essentials-in-python-course/",
  },
  {
    title: "Abnormality Detection",
    description: [
      "A cutting-edge solution for detecting abnormalities in musculoskeletal radiographs (MURA).",
      "Key Insights:",
      "- MURA is a large dataset of bone X-rays used to determine whether an X-ray study is normal or abnormal.",
      "- Musculoskeletal conditions affect over 1.7 billion people globally, causing severe pain and disability.",
      "Impact and Vision:",
      "- Aims to revolutionize medical imaging technologies by enabling expert-level diagnostics.",
      "- Addresses the shortage of skilled radiologists in underserved regions, improving healthcare access worldwide.",
      "- Contributes to significant advancements in early detection and treatment of musculoskeletal disorders."
    ],
    image: "/projects/project-3.png",
    link: "https://mediscan.techshoor.com/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@techshoor",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/azharthegeek",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.gg",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/azharthegeek",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/azharthegeek",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/azharthegeek",
      },
    ],
  },
  {
    title: "About",
    data: [
            {
        name: "Learning About Me",
        icon: null,
        link: "https://www.linkedin.com/in/azharthegeek/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "https://wa.me/923120001547",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/azharthegeek",
};
