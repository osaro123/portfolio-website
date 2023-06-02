import { heroImage } from "../assets"
import { styles } from "../style"
import { BsArrowUp ,BsArrowUpRight } from "react-icons/bs"
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={`flex-col  ${styles.flexCenter}`}>
        <div className={`{styles.flexCenter} flex-col`}>
            <img src={heroImage} alt="pic" className="object-contain w-[250px] h-[250px] rounded-full bg-gradient-to-t from-black to-white" />
            <p className="font-roboto-slab font-normal text-center text-[20px] mt-4">Hi, i'm Osaro </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[400px]">
            <h1 className="font-bold mt-4 text-[32px] text-center">A Web developer, software developer and a problem solver</h1>
            <Link to="contact" smooth={true} duration={500} href="#" className="mt-6 transition-all border-2 dark:border-white border-black px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex  gap-2 items-center">Get in touch <BsArrowUpRight/></Link>
        </div>
        <Link to="nav" smooth={true} duration={500} className="fixed p-4 dark:bg-white dark:text-black bg-black bottom-[12px] cursor-pointer text-white right-[12px] rounded-full shadow-2xl"><BsArrowUp /></Link>
    </div>
  )
}

export default Hero
