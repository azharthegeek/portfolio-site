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
  {
    skill_name: "Kubernetes",
    image: "kubernatees.png",
    width: 60,
    height: 60,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Azure",
    image: "azure.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const CERTIFICATIONS = [
      {
    title: "MLOps Specialization",
    subtitle: "ML Engineering for Production",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "MLOps",
    color_code: "#1a1a2e",
    year: "2023",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Amazon Web Services",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "AWS",
    color_code: "#1a1a2e",
    year: "2022",
  },
  {
    title: "Azure AI Fundamentals",
    subtitle: "Microsoft Certified",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "Microsoft Azure AI",
    color_code: "#1a1a2e",
    year: "2021",
  },
  {
    title: "Azure Data Fundamentals",
    subtitle: "Microsoft Certified",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "Microsoft Azure Data",
    color_code: "#1a1a2e",
    year: "2021",
  },
  {
    title: "MTA: Programming Using Python",
    subtitle: "Microsoft Technology Associate",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "Microsoft Python",
    color_code: "#1a1a2e",
    year: "2020",
  },
  {
    title: "MTA: Programming Using HTML & CSS",
    subtitle: "Microsoft Technology Associate",
    logo_path: "Amazon_Web.png",
    certificate_link: "#",
    alt_name: "Microsoft HTML CSS",
    color_code: "#1a1a2e",
    year: "2020",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "Al Nafi",
    period: "July 2024 – Present",
    description:
      "Developing and deploying AI models and APIs, boosting Alnafi's workflow by 10x with custom AI solutions. Building generative AI systems, RAG pipelines, and production-grade AI APIs.",
    technologies: ["Python", "LangChain", "FastAPI", "OpenAI", "Docker", "Pinecone"],
    current: true,
  },
  {
    role: "Junior Lecturer",
    company: "Institute of Business Management (IoBM)",
    period: "Sep 2023 – Jan 2024",
    description:
      "Conducted courses in OOP, Data Structures & Algorithms, Computer Networks, and Programming Fundamentals. Developed lab manuals, supervised sessions, and led FYP groups introducing cutting-edge AI technologies.",
    technologies: ["Python", "Java", "C++", "Data Structures", "Networking"],
    current: false,
  },
  {
    role: "Founder & AI Lead",
    company: "TechShoor",
    period: "Nov 2020 – Present",
    description:
      "Managed, created, and deployed AI models converted into production APIs. Served as Python Course Instructor for PEPC. Designed curriculum covering Python fundamentals and OOP concepts.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "Azure", "Firebase"],
    current: true,
  },
  {
    role: "Data Analyst",
    company: "Unique Traders",
    period: "Feb 2021 – Jun 2023",
    description:
      "Scraped customer data from Google Maps, developed and implemented databases. Built automated marketing message systems for client outreach.",
    technologies: ["Python", "Selenium", "PostgreSQL", "Automation"],
    current: false,
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of Science in Artificial Intelligence",
    shortDegree: "MS(AI)",
    institution: "FAST NUCES, Karachi",
    period: "Aug 2024 – Aug 2026",
    current: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    shortDegree: "BSCS",
    institution: "Sindh Madressatul Islam University, Karachi",
    period: "Aug 2019 – Aug 2023",
    gpa: "CGPA 3.17",
    current: false,
    highlight: "Best Final Year Project (FYP) Award",
  },
  {
    degree: "Diploma in Artificial Intelligence",
    shortDegree: "AI Developer",
    institution: "PIAIC – Presidential Initiative for AI & Computing",
    period: "Apr 2019 – Aug 2021",
    gpa: "Percentile 90.23",
    current: false,
  },
] as const;

export const PUBLICATIONS = [
  {
    title:
      "Study on Reinforcement Learning and Deep Reinforcement Learning Schemes: A Review",
    venue:
      "Sir Syed University Research Journal of Engineering & Technology (SSURJET)",
    authors:
      "Muhammad Azhar, Mansoor Ahmed, Kamlesh Kumar, Mehar Khan Niazi, Muhammad Waqas",
    status: "Published",
    type: "journal",
  },
  {
    title:
      "Usage of Deep Learning Models in Agricultural Satellite Imagery, A Review",
    venue: "Global Research Congress 2023 at SMIU Karachi",
    authors: "Muhammad Azhar, Mansoor Ahmed Khuhro, Mehar Khan Niazi",
    status: "Presented",
    type: "conference",
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
      "- Scales insights across regions to improve food security.",
    ],
    image: "/projects/project-1.png",
    link: "https://agri.techshoor.com/",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "Azure", "Rasterio"],
  },
  {
    title: "Fracture Detection (MURA)",
    description: [
      "Deep learning pipeline for detecting abnormalities in musculoskeletal X-rays.",
      "Key Insights:",
      "- Trained 7 categories using TensorFlow and PyTorch.",
      "- Superior accuracy compared to existing models.",
      "- Deployed on Azure VM with nginx for clinical use.",
      "Impact:",
      "- Helps reduce diagnostic backlog and improve early detection.",
      "- Scales expert-level insights to underserved regions.",
    ],
    image: "/projects/project-3.png",
    link: "https://mediscan.techshoor.com/",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker", "Azure"],
  },
  {
    title: "Semantic Analysis",
    description: [
      "Semantic analysis on Roman Urdu product reviews for enhanced understanding.",
      "Key Features:",
      "- NLP pipeline for Roman Urdu sentiment classification.",
      "- Training with NLTK and Scikit-learn on custom datasets.",
      "- Deployed using Django web framework.",
      "Impact:",
      "- Bridges the gap in Urdu-language NLP tools.",
      "- Enables businesses to understand regional feedback.",
    ],
    image: "/projects/project-2.png",
    link: "https://github.com/azharthegeek/sentiment-analysis-roman-urdu",
    technologies: ["Python", "NLTK", "Scikit-learn", "Django"],
  },
] as const;

export const STATS = [
  { label: "AI Models Deployed", value: "150+" },
  { label: "Years of Experience", value: "4+" },
  { label: "Certifications", value: "25+" },
  { label: "Research Papers", value: "2" },
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
        name: "Medium",
        icon: null,
        link: "https://azharthegeek.medium.com",
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
        name: "YouTube",
        icon: null,
        link: "https://youtube.com/@TechShoor",
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
        name: "Experience",
        icon: null,
        link: "#experience",
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
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Publications",
    link: "#publications",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/azharthegeek",
};
