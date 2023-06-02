import { photo1 } from '../assets'
import { BiCodeAlt } from "react-icons/bi"
import { Link, animateScroll as scroll } from 'react-scroll';


const About = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section id='about' className='min-h-[100vh]'>
        <h1 className='py-6 font-bold text-[36px] text-center '>About Me</h1>
        <div className='flex sm:items-center items-start justify-center sm:flex-row gap-8 flex-col p-16'>
            <div className=''>
                <img src={photo1} className='h-[300px] rounded-md w-full sm:w-[400px]' alt="photo" />
            </div>
            <div>
                <h2 className='font-bold text-[24px] mb-2'>Here is a little about me</h2>
                <p className='max-w-[470px]'>Hi, I'm Osaro, a passionate frontend web developer with expertise in HTML, CSS, JavaScript, Git, Github, React, and Firebase.
                I have a strong foundation in web development principles and a keen eye for design. My goal is to create visually appealing,
                user-friendly, and responsive websites that provide a seamless experience across devices.</p>
                <Link to="projects" smooth={true} duration={500} className='mt-4 border-2 dark:border-white border-black px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white transition-all dark:hover:bg-white dark:hover:text-black w-[160px]'>See Projects <BiCodeAlt/></Link>
            </div>
        </div>
    </section>
  )
}

export default About
