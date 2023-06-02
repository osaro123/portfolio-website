import { SiTwitter,SiLinkedin,SiGithub} from "react-icons/si"
import { BsMoonFill, BsSunFill} from "react-icons/bs"

const Navbar = ({theme,setTheme}) => {

  return (
    <nav id='nav' className="py-6 w-full flex items-center justify-between border-b-2 dark:border-white border-black">
        <div className="">
            <p className="font-bold text-[20px] font-roboto-slab ">LAWANI OSARO</p>
        </div>
        <div className='flex sm:gap-4 gap-2 items-center'>
            <a href="https://github.com/osaro123"><SiGithub className='text-[24px]'/></a>
            <a href="https://www.linkedin.com/in/osaro-lawani-59958b251/"><SiLinkedin className='text-[24px]'/></a>
            <a href="https://twitter.com/osaro_lawani"><SiTwitter className='text-[24px]'/></a>
            {
              theme === "light" ? (
                <button onClick={() => setTheme("dark")} className="dark:bg-white dark:text-black bg-black text-white p-3 rounded-full cursor-pointer shadow-xl"><BsMoonFill /></button>
              ):(
                <button onClick={() => setTheme("light")} className="dark:bg-white dark:text-black bg-black text-white p-3 rounded-full cursor-pointer shadow-xl"><BsSunFill /></button>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar

