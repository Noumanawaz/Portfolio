import photographyImage from './assets/images/PhotographyWebsite.png';
import BlogPost from "./assets/images/BlogPost.png";
import NotesApp from "./assets/images/NotesApp.png";
import Hostellite from "./assets/images/Hostellite.png";
import ChatApp from "./assets/images/ChatApp.png";
import Portfolio from "./assets/images/Mypic.png";
import InvestWise from "./assets/images/Investwiseway.png";
import KnowWhy from "./assets/images/KnowWhy.png";
import SkillMapAI from "./assets/images/SkillMapAI.png";

const logotext = "NOUMAN";
const meta = {
    title: "Nouman Nawaz",
    description: "I’m Nouman Nawaz, a full-stack developer specializing in React, Node.js, and MongoDB.",
};

const introdata = {
    title: "I’m Nouman Nawaz",
    animated: {
        first: "I specialize in full-stack development",
        second: "I craft responsive user interfaces",
        third: "I develop scalable backend solutions",
    },
    description: "Computer Scientist specializing in full-stack development with expertise in React, Node.js, PostgreSQL, and MongoDB. Experienced in delivering scalable UIs, optimizing backend systems, and integrating APIs. Proficient in AI/agentic integrations, LangChain, and cloud deployment. Committed to delivering high-impact solutions in challenging environments.",
    your_img_url: Portfolio,
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am a passionate Computer Science student specializing in full-stack development with expertise in React, Node.js, Express.js, and MongoDB. Skilled in crafting robust user interfaces, optimizing backend operations, and seamlessly integrating APIs. I am committed to creating efficient, scalable, and user-friendly applications. Motivated by the opportunity to tackle complex challenges and contribute innovative solutions in dynamic, collaborative environments. Continuously learning cutting-edge technologies to stay at the forefront of the rapidly evolving tech industry.",
};


const worktimeline = [
    {
        jobtitle: "Frontend Engineer",
        where: "Rippleberry Tech",
        date: "Sep 2025 – Present",
        description: "Delivered production-grade dashboards and admin UIs using React and TypeScript; optimized asset pipelines reducing load latency by 30%.",
    },
    {
        jobtitle: "AI Intern",
        where: "Exitech",
        date: "Oct 2025 – Jan 2026",
        description: "Engineered agentic LLM pipelines for workflow automation and knowledge retrieval; increased contextual retrieval accuracy by 25%.",
    },
    {
        jobtitle: "Frontend Developer (Freelance)",
        where: "Nifty Books, Germany",
        date: "May 2025 – Jul 2025",
        description: "Produced 20+ interactive educational games; AWS assets reduced content delivery latency by 40% with zero downtime. Elevated session completion rates by 20% and daily active users by 25% through responsive UI and real-time progress tracking.",
    },
    {
        jobtitle: "AI Intern",
        where: "Funavry Technologies",
        date: "Apr 2025 – May 2025",
        description: "Curated 100K+ Solidity contracts; enhanced LLM training efficiency by 20% and blockchain analytical precision by 15%.",
    },
    {
        jobtitle: "Web Developer Intern",
        where: "Grayhat",
        date: "Jun 2023 – Sep 2023",
        description: "Crafted responsive UIs using React and TypeScript; boosted UX by 25%. Led mobile game controller development used by 500+ users, increasing engagement by 30%.",
    },
];

const skills = [
    {
        category: "Frontend",
        list: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap", "EJS", "UI/UX", "Figma"],
    },
    {
        category: "Backend",
        list: ["Node.js", "Express.js", "REST APIs", "SSR", "JWT/OAuth", "Microservices", "SpringBoot", "Flask"],
    },
    {
        category: "AI & ML",
        list: ["LangChain", "OpenAI APIs", "LLM Integration", "Agentic Chatbots", "Audiobots", "Predictive Analytics", "Forecasting Models", "Solidity Contract Curation"],
    },
    {
        category: "Databases",
        list: ["PostgreSQL", "MongoDB", "MySQL", "Query Optimization", "Migrations"],
    },
    {
        category: "Cloud & DevOps",
        list: ["AWS (EC2, S3, RDS, CloudFront)", "Docker", "CI/CD", "Railway", "Vercel", "Netlify"],
    },
    {
        category: "Languages",
        list: ["Python", "JavaScript", "C++", "Java", "R"],
    },
    {
        category: "Tools",
        list: ["Git/GitHub", "Postman", "Firebase", "Jira", "Trello", "Agile Workflows"],
    },
];

const services = [
    {
        title: "Full-Stack Development",
        description: "Developing scalable, responsive, and user-friendly applications with efficient backend solutions using technologies like React, Node.js, and MongoDB.",
    },
    {
        title: "AI & ML Solutions",
        description: "Integrating AI models, building agentic chatbots, and implementing RAG-based knowledge systems using LangChain and OpenAI APIs.",
    },
    {
        title: "UI/UX Design",
        description: "Designing visually appealing and intuitive user interfaces, ensuring optimal user experiences with a focus on responsive design and adaptive content rendering.",
    },
    {
        title: "Cloud & Deployment",
        description: "Deploying applications on cloud platforms like AWS and Railway, utilizing Docker for containerization to ensure efficient scaling and deployment. Proficient in CI/CD pipelines.",
    },
];

const dataportfolio = [
    {
        img: InvestWise,
        description: "AI-Powered Financial Platform: Integrating AI models for financial planning and personalized recommendations. Deployed on Vercel, AWS, and Railway.",
        link: "https://investwiseway-landing-dfsn3.ondigitalocean.app/",
    },
    {
        img: KnowWhy,
        description: "KnowWhy — AI Knowledge Platform: RAG-based platform integrating Slack, GitHub, and Notion for semantic AI queries. Decreased search friction by 50%.",
        link: "http://qok0g4k0cg888s0gcwck40o4.gwocssgkcwgoswsgcwcws0wg.93.127.216.60.sslip.io/login",
    },
    {
        img: SkillMapAI,
        description: "SkillMap AI — Cognitive Workforce Platform: Adaptive assessments and IRT modeling for workforce readiness. Increased readiness by 45%.",
        link: "http://yc48k04s0o0wc8og0c488osk.gwocssgkcwgoswsgcwcws0wg.93.127.216.60.sslip.io/",
    },
    {
        img: Hostellite,
        description: "Hostel management platform built using MERN stack with AWS for image storage. Elevated user satisfaction by 30%.",
        link: "https://main.drkglq94iphm4.amplifyapp.com/",
    },
    {
        img: ChatApp,
        description: "Real-time chat app built with Firebase and AWS S3. Live synchronization and image load speed improved by 35%.",
        link: "https://main.d27p25j8hu2akw.amplifyapp.com/",
    },
    {
        img: BlogPost, // Assuming this is the 'News App' or similar EJS project
        description: "Real-time news aggregation platform (News App) built with Express.js and EJS. Reduced retrieval latency by 40%.",
        link: "#",
    },
    {
        img: NotesApp,
        description: "A React-based Notes application built for learning, with no persistent storage, deployed on Netlify.",
        link: "https://notesbynouman.netlify.app/",
    },
    {
        img: photographyImage,
        description: "Responsive photography portfolio built with HTML, CSS, and Bootstrap.",
        link: "https://noumanawaz.github.io/FinalDraft/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "noumannawaz2004@gmail.com",
    YOUR_FONE: "+92 315 1710347",
    description: "Feel free to reach out to discuss exciting projects, collaborations, or just to connect!",
};

const socialprofils = {
    github: "https://github.com/Noumanawaz",
    linkedin: "https://www.linkedin.com/in/nouman-nawaz-14120022b/",
    facebook: "https://www.facebook.com/nouman.nawaz.12139",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
