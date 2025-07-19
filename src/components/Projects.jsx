import React from 'react'
import { projects } from '../assets/assets'
import { ChevronsLeftRight, MonitorSmartphone } from 'lucide-react'

const Projects = () => {
  return (
    <div className=' px-2 sm:px-4 lg:px-24 xl:px-36 py-4 sm:py-4 lg:py-4 xl:py-4 relative flex flex-col gap-4 justify-start sm:justify-start items-start min-h-screen transition-all duration-300 bg-gray-50 backdrop-blur'>

      <div className='px-1 sm:px-24 flex justify-center items-start gap-2'>
        <ChevronsLeftRight className='pt-2 w-8 h-8 text-primary'/>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </div>

      <div className=' px-1 sm:px-24 flex flex-wrap mt-2 justify-between'>
        {projects.map((tool, index) => (
          <div key={index} className='w-full sm:w-1/2 p-6 m-6 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 '>

            <h3 className='flex gap-2 mt-3 mb-3 text-lg font-semibold'> {tool.title} </h3>

            <div className='w-60 h-30 overflow-hidden border-2 border-primary rounded-lg mb-4'>
              <img src={tool.img} alt="project-image" className='w-full h-full object-cover' />
            </div>

            <p className='text-gray-400 text-sm max-w-[95%] '> {tool.description} </p>
            <div className='flex justify-end mt-2 gap-2'>
              <button className='flex gap-2 font-semibold border-2 border-gray-300 rounded-lg px-2 py-1 text-xs cursor-pointer'  onClick={() => window.open(tool.deployLink, '_blank')}> View Project <tool.Icon className='w-4 h-4 text-primary  ' /> </button>
              <button className='flex gap-2 font-semibold border-2 border-gray-300 rounded-lg px-2 py-1 text-xs cursor-pointer' onClick={() => window.open(tool.githubLink, '_blank')} > GitHub Link <tool.Icon className='w-4 h-4 text-primary '  /> </button>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects
