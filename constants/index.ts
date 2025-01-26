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

export const PROJECTS = [
  {
    title: "MathMania Android App",
    description:
      'Math Mania is a fun and educational math game designed to enhance your math skills through engaging and challenging puzzles. The app, built with Flutter using Dart, features three main categories: Math Puzzle, Memory Puzzle, and Train Your Brain. Each category includes unique games such as solving basic arithmetic equations, memorizing and calculating numbers, and enhancing logical thinking with puzzles like Magic Triangle and Number Pyramid. Developed by Pabitra Banerjee, a Full-Stack AI Engineer and tech enthusiast, Math Mania caters to all ages, offering a variety of math challenges that improve calculation speed, memory, and problem-solving skills while racing against time. Note: This app is intended for learning purposes only and is not for commercial use.',
    image: "/projects/project-1.png",
    link: "https://www.amazon.in/dp/B0D7B2PR46",
  },
  {
    title: "EchoPlay Music Player",
    description:
      'EchoPlay is a comprehensive open-source music player app built with Flutter, designed to cater to all your music needs. It offers high-quality streaming at 320kbps aac, extensive search capabilities for songs, albums, artists, and playlists, and supports over 15 music languages. Users can enjoy trending songs, artist and genre radios, and local and global top Spotify tracks. Key features include playlist support with import/export options, sleep timer, lyrics, queue management, offline playback with download options, and an inbuilt equalizer. EchoPlay boasts customization with dark mode, accent colors, and custom gradients, all without subscriptions or ads. Additionally, it provides YouTube integration, auto song recommendations, and backup and restore functionality.',
    image: "/projects/project-2.png",
    link: "https://files.fm/u/x78ay3x5cw",
  },
  {
    title: "Interstellar Armada Game",
    description:
      'Interstellar Armada : Galactic Ace is a free, open-source 3D space combat simulator developed by Pabitra Banerjee using JavaScript-WebGL. Inspired by classic games like the FreeSpace series, it features mission-based gameplay with Newtonian mechanics for realistic movement. Designed for desktop but playable on mobile with touchscreen support, it includes a mission editor and an online mission sharing service. Currently in "early access," it can be played directly in a web browser, with best performance on Chrome/Chromium. Linux users can download an AppImage for offline play, while future Flatpak builds are planned. Developed using HTML, CSS, and JS, it supports mouse, keyboard, joystick, and gamepad inputs, with adjustable graphics settings for optimized performance.',
    image: "/projects/project-3.png",
    link: "https://pabitrabanerjee.me/Interstellar-Armada/",
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
