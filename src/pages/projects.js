import React from 'react'
import project1 from '../images/project1.svg'
import project2 from '../images/project2.svg'
import project3 from '../images/project3.svg'
import project4 from '../images/project4.svg'
import project5 from '../images/project5.svg'
import arrowRight from '../images/arrowRight.svg'
import Slide from 'react-reveal/Slide';

const Projects = () => {
  return (
    <div className='font-sourceSans mt-20 mx-4 tracking-wide sm:mx-6 lg:mx-14' id='projects'>
      <Slide bottom>
        <p className="text-yellow font-semibold text-2xl text-center">Projects</p>
        <h1 className="text-black font-bold text-4xl mt-3 text-center">My Projects So Far</h1>
        <p className="text-black font-normal mt-2 mb-6 text-center md:mx-auto md:max-w-2xl lg:text-center">Here are some projects and personal works i have done so far. You can see some of the highlighted preview below, or check it through my portoflio accounts.</p>
      </Slide>
      <Slide bottom>
        <div className='flex flex-wrap mt-12 mb-10 justify-center gap-2 lg:gap-4'>
          <img className='hover:drop-shadow-xl duration-300 hover:scale-105 lg:w-2/5' src={project1} alt="Mobile Food UI" />
          <img className='mt-5 hover:drop-shadow-xl duration-300 hover:scale-105 lg:w-2/5 lg:mt-0' src={project2} alt="Vaccination Web UI" />
          <img className='mt-5 w-72 hover:drop-shadow-xl duration-300 hover:scale-105 lg:w-72' src={project3} alt="Basic Illustration" />
          <img className='mt-5 w-72 hover:drop-shadow-xl duration-300 hover:scale-105 lg:w-72' src={project4} alt="Logo" />
          <img className='mt-5 w-72 hover:drop-shadow-xl duration-300 hover:scale-105 lg:w-72' src={project5} alt="3D Low Poly Model" />
        </div>
      </Slide>
      <div className="flex justify-center my-14">
        <a href="https://www.instagram.com/projectmuu.id/" className='font-sourceSans font-medium text-black hover:text-yellow duration-300'>See More</a>
        <img className='flex items-center mx-1 w-2' src={arrowRight} alt="" />
      </div>
    </div>
  )
}

export default Projects