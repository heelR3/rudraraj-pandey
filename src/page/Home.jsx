import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

const Home = () => {

    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutMe = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar 
            onContactClick={() => scrollToSection(contactRef)} 
            onProjectClick={() => scrollToSection(projectRef)} onSkillsClick = {() => scrollToSection(skillsRef)} onAboutMeClick = {() => scrollToSection(aboutMe)} />

            <Hero onContactClick={() => scrollToSection(contactRef)} onProjectClick={() => scrollToSection(projectRef)} />

            <div ref={aboutMe}>
                <AboutMe />
            </div>

            <div ref={projectRef}>
                <Projects />
            </div>

            <div ref={skillsRef}>
                <Skills />
            </div>

            <div ref={contactRef}>
                <ContactMe />
            </div>

            <Footer />
        </>
    )
}

export default Home
