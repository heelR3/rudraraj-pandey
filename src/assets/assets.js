import { Github, GithubIcon, Instagram, Link, Linkedin, SquareArrowOutUpRight, SquarePen, Twitter } from "lucide-react";
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.jpg'

export const projects = [
    {
        title: 'AI Saas App',
        description: 'AI-powered SaaS platform integrating multiple tools like article writer, blog title generator, resume reviewer, image generator, and object/background remover.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://all-in-one-ai-xi.vercel.app/',
        githubLink: 'https://github.com/heelR3/All-In-One-AI.git',
        img: project1
    },
    {
        title: 'AI Mock Interview',
        description: ' Developed a full-stack AI-powered interview platform using Next.js, Drizzle ORM and Clerk authentication. Integrated Gemini AI to generate real-time interview questions and analyze responses.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://ai-interview-mocker-phi-teal.vercel.app/',
        githubLink: 'https://github.com/heelR3/AI-Interview-mocker.git',
        img: project2
    },
    {
        title: 'Employee Management System',
        description: 'Developed a fully functional Employee Management System as a web-based CRUD(Create,Read,Update,Delete) application using React.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://heelr3.github.io/ems/',
        githubLink: 'https://github.com/heelR3/ems.git',
        img: project3
    },
    {
        title: 'Handwash Monitoring System',
        description: 'Developed an IoT-based automatic handwash monitoring system using Arduino UNO, IR Sensor, fingerprint sensor, OLED display, and relay-controlled water pump.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://github.com/heelR3/Handwash_Monitor_System.git',
        githubLink: 'https://github.com/heelR3/Handwash_Monitor_System.git',
        img: project4
    },
]

export const contactMe = [
    {
        title: 'Github',
        description: 'Explore my open-source projects and code',
        link: 'https://github.com/heelR3',
        icon: GithubIcon
    },
    {
        title: 'LinkedIn',
        description: 'Connect with me professionally',
        link: 'https://www.linkedin.com/in/rudraraj-pandey-b22704285',
        icon: Linkedin
    },
    {
        title: 'Twitter',
        description: 'Follow me for tech updates and insights',
        link: 'https://x.com/heel_r3',
        icon: Twitter
    },
    {
        title: 'Instagram',
        description: 'See moments from my life and projects.',
        link: 'https://www.instagram.com/heel_r3',
        icon: Instagram
    }
]