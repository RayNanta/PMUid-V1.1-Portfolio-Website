import React from 'react'
import html from '../images/html.svg'
import css from '../images/css.svg'
import react  from '../images/react.svg'
import blender  from '../images/blender.svg'
import figma  from '../images/figma.svg'
import ai  from '../images/Ai.svg'
import {Link} from 'react-scroll'
import Slide from 'react-reveal/Slide';

const Interest = () => {
  return (
    <div className='bg-silver mt-20 pb-2 lg:flex lg:items-center' id='interest'>
      <Slide right>
        <div className="font-sourceSans tracking-wide mx-4 pt-2 sm:mx-6 lg:hidden">
          <p className="text-yellow font-semibold text-2xl text-center mt-14 lg:text-left">Interests</p>
          <h1 className="text-black font-bold text-4xl mt-3 text-center lg:text-left">What I’m Interested With?</h1>
          <p className="text-black font-normal mt-2 mb-6 max-w-2xl text-center md:mx-auto lg:text-left">Currently, i’m interested in a multiple form of design and front end web development. Click the button below for more info about my works!</p>
          <Link to="projects" spy={true} smooth={true} offset={-30} duration={500}>
            <p className="cursor-pointer text-center p-3 px-8 text-white bg-yellow rounded hover:bg-darkYellow duration-300 mx-16 md:mx-52">Projects</p>
          </Link>
        </div>
      </Slide>
      <Slide left>
        <div className='flex flex-wrap gap-7 mb-20 mt-16 justify-center sm:mx-6 lg:ml-20'>
          <img className='w-18  hover:scale-125 hover:drop-shadow-2xl duration-300' src={html} alt="" />
          <img className='w-18 ml-10 hover:scale-125 hover:drop-shadow-2xl duration-300 ' src={css} alt="" />
          <img className='w-32 hover:scale-125 hover:drop-shadow-2xl duration-300' src={react} alt="" />
          <img className='w-32  hover:scale-125 hover:drop-shadow-2xl duration-300' src={blender} alt="" />
          <img className='w-20 hover:scale-125 hover:drop-shadow-2xl duration-300' src={figma} alt="" />
          <img className='w-28  hover:scale-125 hover:drop-shadow-2xl duration-300' src={ai} alt="" />
        </div>
      </Slide>
      <Slide right>
        <div className="font-sourceSans tracking-wide mr-20 hidden lg:mr-20 lg:inline lg:max-w-lg">
          <p className="text-yellow font-semibold text-2xl text-center lg:text-left">Interests</p>
          <h1 className="text-black font-bold text-4xl mt-3 text-center lg:text-left">What I’m Interested With?</h1>
          <p className="text-black font-normal mt-2 mb-6 max-w-2xl text-center lg:text-left">Currently, i’m interested in a multiple form of design and front end web development. Click the button below for more info about my works!</p>
          <Link to="projects" spy={true} smooth={true} offset={-30} duration={500}>
              <p className="cursor-pointer text-center p-3 px-8 text-white bg-yellow rounded hover:bg-darkYellow duration-300 mx-16 md:mx-52 lg:mr-96 lg:mx-0 ">Projects</p>
          </Link>
        </div>
      </Slide>
    </div>
  )
}

export default Interest