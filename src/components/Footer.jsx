import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { contactMe } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' px-2 sm:px-4 lg:px-24 xl:px-36 py-4 sm:py-4 lg:py-4 xl:py-4 relative flex flex-col gap-4 justify-center sm:justify-center items-center  transition-all duration-300'>
      
      <div className='flex flex-col justify-center items-center text-gray-500'>
        <p>&copy; 2025 Rudraraj Pandey. All rights reserved.</p>
        <div className='flex gap-4 px-4 py-2'> 
          {contactMe.map((tool, index) => (
            <tool.icon className='text-gray-500 hover:text-primary cursor-pointer' onClick={() => window.open(tool.link, '_blank')} />
          ))}
          <Mail className='text-gray-500 hover:text-primary cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
