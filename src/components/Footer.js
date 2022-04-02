import React from 'react'
import LogoPMUWhite from '../images/PMULogoWhite.svg'
import gitHubFoot from '../images/githubFooter.svg'
import instagramFoot from '../images/instagramFooter.svg'
import twitterFoot from '../images/twitterFooter.svg'
import youtubeFoot from '../images/youtubeFooter.svg'
import Slide from 'react-reveal/Slide';

const Footer = () => {
  return (
    <div className='bg-black text-white font-sourceSans tracking-wide'>
        <Slide bottom>
            <h1 className='font-semibold text-2xl text-center pt-14 lg:text-4xl'>- My Best Regards -</h1>
        </Slide>
        <Slide left>
            {/* Container List Footer */}
            <div className='mt-20 mx-10 lg:flex lg:justify-center lg:mx-20'>
                <div className='text-white mb-10'>
                    <div className="text-center lg:flex lg:flex-col lg:text-left">
                        <h1 className='font-bold text-xl'>Dev Tools</h1>
                        <a href="https://code.visualstudio.com/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>VsCode</p></a>
                        <a href="https://www.figma.com/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Figma</p></a>
                        <a href="https://www.adobe.com/sea/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Adobe Illustrator</p></a>
                        <a href="https://www.blender.org/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Blender</p></a>
                    </div>
                </div>
                <div className='text-white lg:flex lg:ml-24'>
                    <div className="text-center mb-10 lg:text-left">
                        <h1 className='font-bold text-xl'>Social Media</h1>
                        <a href="https://www.instagram.com/projectmuu.id/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Instagram</p></a>
                        <a href="https://twitter.com/rayyntt"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Twitter</p></a>
                        <a href="https://www.youtube.com/channel/UCFT-qO4wUOg1LTJZiCaSkAg"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300'>Youtube</p></a>
                    </div>
                </div>
                <div className='text-white lg:flex lg:ml-24'>
                    <div className="text-center mb-10 lg:text-left">
                        <h1 className='font-bold text-xl'>Portfolio</h1>
                        <a href="https://github.com/RayNanta"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300' to='/'>GitHub</p></a>
                        <a href="https://www.instagram.com/projectmuu.id/"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300' to='/'>Instagram</p></a>
                    </div>
                </div>
                <div className='text-white lg:flex lg:ml-24'>
                    <div className="text-center mb-10 lg:text-left">
                        <h1 className='font-bold text-xl'>About Me</h1>
                        <a href="#"><p className='font-normal mt-4 text-lg hover:text-yellow duration-300' to='/'>Curriculum Vitae</p></a>
                    </div>
                </div>
            </div>

            {/* Container Sosmed Copytight */}
            <div className='flex justify-between items-center mx-4 pb-4 sm:mx-6 lg:mx-20 lg:mt-20 lg:pb-10'>
                <img className='w-14 lg:w-20' src={LogoPMUWhite} alt="" />
                <p className='text-center ml-16'>Projectmu.ID ©2022</p>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/RayNanta"><img className='w-6 mr-3' src={gitHubFoot} alt="gitHub" /></a>
                    <a href="https://www.instagram.com/projectmuu.id/"><img className='w-6 mr-3' src={instagramFoot} alt="Instagram" /></a>
                    <a href="https://twitter.com/rayyntt"><img className='w-6 mr-3' src={twitterFoot} alt="Twitter" /></a>
                    <a href="https://www.youtube.com/channel/UCFT-qO4wUOg1LTJZiCaSkAg"><img className='w-9'src={youtubeFoot} alt="YouTube" /></a>
                </div>
            </div>
        </Slide>
    </div>
  )
}

export default Footer