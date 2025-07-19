import { Bug, User } from 'lucide-react'
import React from 'react'

const Skills = () => {

    const skillData = {
        "Programming Languages": ["C/C++", "Java", "HTML", "CSS", "JavaScript", "SQL"],
        "Frameworks & Technologies": ["React", "Node.js", "Next.js", "Express", "MongoDB", "PostgreSQL", "NeonDB", "Tailwind CSS", "STL" ],
        "Tools & Platforms": ["Git", "GitHub", "Postman", "VS Code", "Linux", "TexStudio"],
        "Core Competencies": ["Problem Solving", "System Design", "API Development", "OOPs", "DSA"],
    };

    return (
        <div className='pt-10 px-2 sm:px-4 lg:px-24 xl:px-36 py-4 sm:py-16 lg:py-16 xl:py-16 relative flex flex-col gap-4 justify-start sm:justify-start items-start min-h-screen transition-all duration-300 bg-gray-50 backdrop-blur'>

        {/* Header */}
        <div className='px-1 sm:px-24 flex items-center gap-3 mb-10'>
            <Bug className='w-8 h-8 text-red-800' />
            <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>Skills</h1>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full sm:w-4/5 xl:w-3/4 mx-auto '>
            {Object.entries(skillData).map(([category, skills]) => (
            <div key={category} className='flex flex-col'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>{category}</h3>
                <div className='flex flex-wrap gap-3'>
                {skills.map((skill, index) => (
                    <span
                    key={index}
                    className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium text-sm px-4 py-2 rounded-2xl shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200'
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default Skills
