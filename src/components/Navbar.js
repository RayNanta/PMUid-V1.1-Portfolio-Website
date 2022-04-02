import React from 'react'
import { Link } from 'react-scroll'
import LogoPMU from '../images/PMULogo.svg'
import BurgerMenu from '../images/burgerMenu.svg'

const Navbar = ({toggle}) => {
  return (
    <div>
      <nav className="flex justify-between items-center my-6 mx-4 font-roboto text-lg font-medium sm:mx-8 lg:mx-20">
          <Link to="/">
              <img className='w-12 lg:w-16' src={LogoPMU} alt="logo" />
          </Link>
          <div className='pr-8 hidden lg:flex lg:order-last'>
              <Link to="about" spy={true} smooth={true} offset={1} duration={500} className='cursor-pointer p-4 hover:text-yellow duration-300'>About</Link>
              <Link to="interest" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer p-4 hover:text-yellow duration-300'>Interest</Link>
              <Link to="projects" spy={true} smooth={true} offset={-30} duration={500} className='cursor-pointer p-4 hover:text-yellow duration-300'>Project</Link>
          </div>
          <div>
            <img onClick={toggle} className='w-8 cursor-pointer lg:hidden' src={BurgerMenu} alt="" />
          </div>
      </nav>
    </div>
  )
}

export default Navbar;