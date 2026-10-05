import { Github, GithubIcon, Instagram, Link, Linkedin, SquareArrowOutUpRight, SquarePen, Twitter } from "lucide-react";
import project0 from './project0.png'
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.jpg'
import project5 from './project5.jpg'
import project6 from './project6.png'

export const projects = [
    {
        title: 'SauceDemo Automation Testing Framework',
        description: 'This project is an end-to-end web automation testing framework designed for the SauceDemo application using Selenium WebDriver, Java, Maven, TestNG, Cucumber BDD, and Page Object Model (POM). The framework supports automated execution of Login, Inventory, Cart, Checkout, Navigation, and Logout functionalities with Allure/Extent/Cucumber reportings and screenshot capture.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://github.com/heelR3/SauceDemo-Automation-Testing.git',
        githubLink: 'https://github.com/heelR3/SauceDemo-Automation-Testing.git',
        img: project6
    },
    {
        title: 'CinemaTime – ASP.NET Core MVC eCommerce Application',
        description: 'Full-stack eCommerce web application built using ASP.NET Core MVC and Entity Framework Core. The application allows users to browse movies, add items to a shopping cart, place orders, and make payments using PayPal.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://cinematime.azurewebsites.net/',
        githubLink: 'https://github.com/heelR3/CinemaTime.git',
        img: project5
    },
    {
        title: 'Real-Time Chat Application',
        description: 'Full-stack chat application built with ASP.NET Core Web API, Angular, SignalR, and SQL Server. Features include real-time messaging, private chats, user presence tracking, and secure JWT authentication. Deployed on Azure with CI/CD pipelines.',
        Icon: SquareArrowOutUpRight,
        deployLink: 'https://chat-app-ui.azurewebsites.net/',
        githubLink: 'https://github.com/heelR3/dotnet-chatapp.git',
        img: project0
    },
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
