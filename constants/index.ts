import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
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
    skill_name: "Selenium",
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
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/azharthegeek",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/azharthegeek",
  },
  {
    name: "Twitter/X",
    icon: RxTwitterLogo,
    link: "https://twitter.com/azharthegeek",
  },
] as const;

export const AI_TOOLS = [
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
    skill_name: "ChromaDB",
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
    skill_name: "DeepSeek",
    image: "deepseek.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "OpenAI",
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

export const AI_FRAMEWORKS = [
  {
    skill_name: "FlowiseAI",
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
    skill_name: "LangChain",
    image: "langchain.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "LangGraph",
    image: "langgraph.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "LlamaIndex",
    image: "llamaindex.png",
    width: 65,
    height: 65,
  },
] as const;

export const DEVOPS_SKILL = [
  {
    skill_name: "Linux",
    image: "linux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Kubernetes",
    image: "kubernatees.png",
    width: 60,
    height: 60,
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "AWS Machine Learning Foundations",
    subtitle: "Udacity Nanodegree Program Graduate",
    logo_path: "Amazon_Web.png",
    certificate_link: "https://graduation.udacity.com/confirm/XGD4VVRC",
    alt_name: "Amazon Web Services",
    color_code: "#8C151599",
  },
] as const;

export const PROJECTS = [
  {
    title: "TechShoor Agri",
    description: [
      "AI-powered platform for precision agriculture and yield optimization.",
      "Key Features:",
      "- Satellite imagery + deep learning for crop health monitoring.",
      "- Disease detection and land condition insights for farmers.",
      "- Actionable recommendations to improve yield and reduce waste.",
      "Impact:",
      "- Data-driven decision making for large and small farms.",
      "- Scales insights across regions to improve food security."
    ],
    image: "/projects/project-1.png",
    link: "https://agri.techshoor.com/",
  },
  {
    title: "Python Course (PEPC)",
    description: [
      "A 30+ hour Python program focused on AI-ready fundamentals and real projects.",
      "Course Highlights:",
      "- Live sessions, recorded lessons, and applied assignments.",
      "- Practice-driven curriculum with real-world problem solving.",
      "- Guides learners toward ML-ready skills and career growth."
    ],
    image: "/projects/project-2.png",
    link: "https://techshoor.com/courses/programming-essentials-in-python-course/",
  },
  {
    title: "Abnormality Detection",
    description: [
      "Deep learning pipeline for detecting abnormalities in musculoskeletal X-rays.",
      "Key Insights:",
      "- Trained and evaluated on the MURA dataset for abnormality classification.",
      "- Optimized inference for fast clinical triage and decision support.",
      "Impact:",
      "- Helps reduce diagnostic backlog and improve early detection.",
      "- Scales expert-level insights to underserved regions."
    ],
    image: "/projects/project-3.png",
    link: "https://mediscan.techshoor.com/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Resources",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/azharthegeek",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/azharthegeek",
      },
      {
        name: "Resume",
        icon: null,
        link: "https://linkedin.com/in/azharthegeek",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "Twitter/X",
        icon: RxTwitterLogo,
        link: "https://twitter.com/azharthegeek",
      },
      {
        name: "Email",
        icon: null,
        link: "mailto:azharthegeek@gmail.com",
      },
      {
        name: "WhatsApp",
        icon: null,
        link: "https://wa.me/923120001547",
      },
    ],
  },
  {
    title: "Portfolio",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
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
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/azharthegeek",
};
