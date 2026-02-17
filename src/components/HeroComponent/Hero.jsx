import React from 'react'
import Navbar from '../navbar/navbar'
import heroBg from '../../assets/hero-bg.svg'
import heroImg from '../../assets/hero-new-1.png'
import { Download, Eye } from 'lucide-react'

export default function Hero() {
  return (
    <div className='relative h-full'>
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <img src={heroBg} alt="Hero Background" className="w-full h-[800px] object-cover" />
      </div>
      <Navbar />
      <div className='relative w-full flex flex-col justify-center items-center mt-10'> 
        <div className='w-full flex justify-between items-center p-4 max-w-7xl'>
          <div className="flex items-center justify-center px-6">
            <div className="text-start">
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-tight">
                This website has been conceptualised,
                <br />
                designed and developed by{' '}
                <span className="text-yellow-400 font-medium">me</span>, a
              </h1>
              
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4">
                  Technical Product
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                  Manager
                  <span className="text-yellow-400 ml-2">/</span>
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
  {/* Resume Button */}
  <div className="relative group">
    <button className="bg-white text-slate-800 px-12 py-4 rounded-xl text-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 cursor-default">
       <span className="block transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
      Resume
    </span>
    </button>

    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <a
        href="https://drive.google.com/file/d/1EeI71nTS75SNU0obt-a1wQBrUUaLRxrv/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
      >
        <Eye size={20} />
      </a>
      <a
        href="src/assets/Vishal Kumar Subramanian - TPM.pdf"
        target="_blank"
        download="Vishal_Kumar_Resume.pdf"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
      >
        <Download size={20} />
      </a>
    </div>
  </div>

  {/* Get in Touch Button */}
  <button className="border-2 border-white text-white px-12 py-4 rounded-xl text-xl font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 hover:scale-105">
   <a className='text-white hover:text-black' href='/contacts'> Get in touch</a>
  </button>
</div>

            </div>
          </div>
          <div className='w-[45%] hidden md:flex'>
            <img src={heroImg} alt='Hero Image' className='object-cover'  />
          </div>
        </div>
      </div>
    </div>
  )
}
