import React from "react";
import {Link} from 'react-scroll'
import maPict from '../images/Pict-About.svg'
import ornamentAbout from '../images/About-Ornament.svg'
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className="mt-20 sm:mx-8 lg:flex lg:items-center lg:mx-14" id="about">
      <Slide left>
        <div className="font-sourceSans tracking-wide mx-4 sm:mx-6 lg:max-w-lg">
            <p className="text-yellow font-semibold text-2xl text-center lg:text-left">About</p>
            <h1 className="text-black font-bold text-4xl mt-3 text-center lg:text-left">Getting Closer With Projectmu.id</h1>
            <p className="text-black font-normal mt-2 mb-6 max-w-2xl text-center md:mx-auto lg:text-left">This is an official portfolio account from Projectmu.id for showcasing my personal project. It is curently being handled by Ray Nanta.</p>
            <Link to="projects" spy={true} smooth={true} offset={-30} duration={500}>
              <p className="cursor-pointer text-center p-3 px-8 text-white bg-yellow rounded hover:bg-darkYellow duration-300 mx-16 md:mx-52 lg:mr-96 lg:mx-0 ">Projects</p>
            </Link>
        </div>
      </Slide>
      <Slide right>
        <div className="relative mt-14 md:w-1/2 md:mx-auto">
          <img src={maPict} alt="RayNanta" />
        </div>
      </Slide>
        <div className="hidden lg:inline">
          <img className="absolute left-0 top-full w-14" src={ornamentAbout} alt="" />
        </div>
    </div>
  );
};

export default About;
