import React from 'react'
import { Link } from 'react-scroll'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-yellow drop-shadow-2xl' : 'hidden'} onClick={toggle}>
        <Link to="about" spy={true} smooth={true} offset={1} duration={500} className='cursor-pointer p-4 hover:text-white duration-300'>About</Link>
        <Link to="interest" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer p-4 hover:text-white duration-300'>Interest</Link>
        <Link to="projects" spy={true} smooth={true} offset={-30} duration={500} className='cursor-pointer p-4 hover:text-white duration-300'>Project</Link>
    </div>
  )
}

export default Dropdown