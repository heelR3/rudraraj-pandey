import {  ArrowDown, ArrowDownToLine, ArrowRight, Copy, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { contactMe } from '../assets/assets'

const ContactMe = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('rudraraj62000@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className=' px-2 sm:px-4 lg:px-24 xl:px-36 py-16 sm:py-12 lg:py-8 xl:py-8 relative flex flex-col gap-4 justify-start sm:justify-start items-start min-h-screen transition-all duration-300 bg-gray-50 backdrop-blur'>

      <div className='px-1 sm:px-24 flex justify-center items-start gap-2'>
        <Mail className='pt-2 w-8 h-8 text-primary'/>
        <h1 className='text-4xl font-bold'>Get In Touch</h1>
      </div>

      <div className='flex flex-col sm:flex-row w-full justify-evenly gap-8 px-4 sm:px-24 py-6'>

        {/* left section */}
        <div className='w-full sm:w-1/2 lg:w-1/2'>
          <p className="text-gray-600">
            I'm currently exploring new opportunities where I can grow, contribute, and build impactful solutions.  
            <br /><br />
            If you have a role, project, or collaboration in mind — or simply want to connect — feel free to reach out. I'd be happy to chat!
          </p>

          <button className='mt-8 flex gap-2 w-full bg-primary/90 border-2 border-gray-500 justify-center p-2 rounded-lg text-black font-bold cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl' onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf'; 
            link.download = 'Rudraraj_Pandey_Resume.pdf';
            link.click();
          }} > <ArrowDownToLine className='w-4 h-6 text-black font-extrabold' /> Download Resume </button>

          <p className='mt-8 flex gap-2 w-full bg-primary/90 border-2 border-gray-500 justify-between p-2 px-6 rounded-lg text-black font-bold'>
            rudraraj62000@gmail.com   
            {copied ? (
              <span className='text-green-600 text-sm font-medium transition-opacity duration-300'>
                Copied!
              </span>
            ) : (
              <Copy className=' hover:bg-gray-400 px-1 mx-1  rounded-lg cursor-pointer' onClick={handleCopy} />
            )}
          </p>
          
        </div>
          
          {/* right section */}
        <div className='w-full sm:w-1/2 lg:w-1/2'>
          {contactMe.map((tool, index) => (
            <div key={index} className='flex justify-start items-center p-2 px-4 border-1 border-white rounded-2xl shadow-2xl mb-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl' >
              <div className='flex justify-center items-center mr-4 bg-red-300 p-2 rounded-full '>
                <tool.icon className='w-6 h-6'/>
              </div>

              <div>
                <h3 className='text-xs font-bold'>  {tool.title} </h3>
                <p className='text-[10px] text-gray-500'> {tool.description} </p>
                <p className='flex gap-1 text-xs text-primary font-semibold cursor-pointer' onClick={() => window.open(tool.link, '_blank')}> Visit {tool.title} <ArrowRight className='w-4 h-4'/> </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactMe
