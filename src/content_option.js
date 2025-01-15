import photographyImage from './assets/images/PhotographyWebsite.png';
import BlogPost from "./assets/images/BlogPost.png";
import NotesApp from "./assets/images/NotesApp.png";
import Hostellite from "./assets/images/Hostellite.png";
import ChatApp from "./assets/images/ChatApp.png";
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
    description: "Computer Science Student with expertise in creating innovative, scalable, and user-friendly web applications. Motivated to solve challenging problems with cutting-edge technologies.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am a passionate Computer Science student specializing in full-stack development with expertise in React, Node.js, Express.js, and MongoDB. Skilled in crafting robust user interfaces, optimizing backend operations, and seamlessly integrating APIs. I am committed to creating efficient, scalable, and user-friendly applications. Motivated by the opportunity to tackle complex challenges and contribute innovative solutions in dynamic, collaborative environments. Continuously learning cutting-edge technologies to stay at the forefront of the rapidly evolving tech industry.",
};


const worktimeline = [
    {
        jobtitle: "AI Intern",
        where: "Funavry Technologies",
        date: "Jun 2024 - Aug 2024",
        description: "Boosted LLM training efficiency by 20% and enhanced AI-driven blockchain solutions.",
    },
    {
        jobtitle: "Web Developer Intern",
        where: "Grayhat",
        date: "Jun 2023 - Sept 2023",
        description: "Led development of responsive UIs and engineered a mobile project controller, increasing engagement by 30%.",
    },
];

const skills = [
    { name: "React", value: 93 },
    { name: "TypeScript", value: 70 },
    { name: "JavaScript", value: 92 },
    { name: "Node.js", value: 85 },
    { name: "Express.js", value: 80 },
    { name: "MongoDB", value: 85 },
    { name: "Bootstrap", value: 85 },
    { name: "HTML", value: 95 },
    { name: "CSS", value: 85 },
    { name: "Responsive Design", value: 80 },
    { name: "UI/UX Design", value: 75 },
    { name: "API Integration", value: 80 },
    { name: "Server-Side Rendering (SSR)", value: 70 },
    { name: "RESTful APIs", value: 80 },
    { name: "Full-Stack Development", value: 85 },
    { name: "Python", value: 80 },
    { name: "C++", value: 85 },
    { name: "Java", value: 75 },
    { name: "AWS", value: 80 },
    { name: "Railway", value: 90 },
    { name: "Docker", value: 65 },
    { name: "Git", value: 90 },
    { name: "Figma", value: 80 },
    { name: "Postman", value: 100 },
    { name: "Firebase", value: 80 },
    { name: "PostgreSQL", value: 100 },
    { name: "MySQL", value: 100 },
];


const services = [
    {
        title: "Full-Stack Development",
        description: "Developing scalable, responsive, and user-friendly applications with efficient backend solutions using technologies like React, Node.js, and MongoDB.",
    },
    {
        title: "UI/UX Design",
        description: "Designing visually appealing and intuitive user interfaces, ensuring optimal user experiences with a focus on responsive design and adaptive content rendering.",
    },
    {
        title: "API Integration",
        description: "Integrating applications with third-party services through well-structured RESTful APIs, enhancing functionality and providing seamless connectivity.",
    },
    {
        title: "Cloud & Deployment",
        description: "Deploying applications on cloud platforms like AWS and Railway, utilizing Docker for containerization to ensure efficient scaling and deployment.",
    },
    {
        title: "Server-Side Rendering (SSR)",
        description: "Optimizing web applications with server-side rendering (SSR) for improved SEO, faster load times, and better user experience.",
    },
];

const dataportfolio = [
    {
        img: Hostellite,
        description: "Hostel management platform built using MERN stack with AWS for image storage.",
        link: "https://main.drkglq94iphm4.amplifyapp.com/",
    },
    {
        img: NotesApp,
        description: "A React-based Notes application built for learning, with no persistent storage, deployed on Netlify.",
        link: "https://notesbynouman.netlify.app/",
    },
    {
        img: ChatApp,
        description: "Real-time chat app built with Firebase and AWS S3 for image storage.",
        link: "https://main.d27p25j8hu2akw.amplifyapp.com/",
    },
    {
        img: BlogPost,
        description: "Scalable blogging platform with server-side rendering using EJS.",
        link: "#",
    },
    {
        img: photographyImage,
        description: "Responsive photography portfolio built with HTML, CSS, and Bootstrap.",
        link: "https://noumanawaz.github.io/FinalDraft/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "noumannawaz2004@gmail.com",
    YOUR_FONE: "+92315-1710-347",
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
