import { Notebook, User, Workflow } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AboutMe = () => {

  const [activeTab, setActiveTab] = useState("Education")
  const [activeAchievementTab, setActiveAchievementTab] = useState("LeetCode");

  const tabs = ['Education', 'Experience', 'Achievements']

  return (
    <div className='px-2 sm:px-4 lg:px-24 xl:px-36 py-4 sm:py-4 lg:py-4 xl:py-4 relative flex flex-col gap-4 justify-start sm:justify-start items-start min-h-screen transition-all duration-300 bg-gray-50 backdrop-blur'>
      
      <div className='px-1 sm:px-24 flex justify-center items-start gap-2'>
        <User className='pt-2 w-8 h-8 text-primary'/>
        <h1 className='text-4xl font-bold'>About Me</h1>
      </div>

      <div className='flex flex-col sm:flex-row lg:flex-row w-full sm:w-4/5 xl:w-3/4 mx-auto justify-start items-start gap-2'>

        {/* Left Section - About */}
        <div className="flex-1 dark:bg-gray-900 p-2">
          <p className="text-medium font-light text-gray-700 ">
            A Full Stack Developer with experience in building web applications using React, Next.js, Node.js, and JavaScript. 
            Recently graduated from Bharati Vidyapeeth Deemed University College of Engineering Pune.
            <br /><br />
            I've developed and successfully deployed various Web Application using MERN stack and GenAI, and gained practical knowledge by integrating IoT projects.
          </p>

          <div className="pt-2 flex gap-2">
            <h3 className="border-1 rounded-lg px-2 text-sm  font-medium text-gray-800 bg-slate-300">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">rudraraj62000@gmail.com</p>
          </div>
        </div>

        {/* Right Section - Education */}
        <div className="w-full sm:w-1/2 lg:w-1/2 max-w-xl mx-2 p-4">
          <div className='flex'>
            <ul className="flex flex-wrap gap-2 justify-start mb-6 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` cursor-pointer px-4 py-1 rounded-full transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-red-800 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white/90 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 space-y-4">
            
            <div className=" border-gray-200">
              {
                activeTab === 'Education' && (
                  <div className='space-y-2' >
                    <h3 className="flex gap-2 text-lg font-medium text-red-800">  <Notebook className='w-4 h-7'/> Bharati Vidyapeeth University</h3>
                    <p className="text-sm text-gray-700 ">B.Tech in Electronics and Communication Engineering</p>
                    <p className="text-sm text-gray-700 ">2021 - 2025</p>
                    <p className="text-sm text-gray-700 ">CGPA: <span className='font-semibold'>8.4</span> </p>
                  </div>
                )
              }
      
              {
                activeTab === 'Experience' && (
                  <div className='space-y-2' >
                    <h3 className="flex gap-2 text-lg font-medium text-red-800"> IoT Intern</h3>
                    <p className="text-sm text-gray-700 ">Bharat ACT - 2024</p>
                    <h3 className="flex gap-2 text-lg font-medium text-red-800"> Subject Matter Expert</h3>
                    <p className="text-sm text-gray-700 ">Chegg India - 2023</p>
                    
                  </div>
                )
              }

              {
                activeTab === 'Achievements' && (
                  <div className='space-y-4'>
                    
                    {/* Buttons for LeetCode / GitHub */}
                    <div className="flex gap-2 mb-2">
                      {['LeetCode', 'GitHub'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveAchievementTab(tab)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeAchievementTab === tab
                              ? 'bg-red-800 text-white shadow'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Conditionally Show Stats */}
                    <div className="border-gray-200">
                      {activeAchievementTab === 'LeetCode' && (
                        <img
                          src="https://leetcard.jacoblin.cool/heel_r3?ext=contest&theme=dark"
                          alt="LeetCode Stats"
                          className="rounded-lg shadow"
                        />
                      )}

                      {activeAchievementTab === 'GitHub' && (
                        <img
                          src={`https://github-readme-stats.vercel.app/api?username=heelR3&show_icons=true&theme=dark`}
                          alt="GitHub Stats"
                          className="rounded-lg shadow"
                        />
                      )}
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe
