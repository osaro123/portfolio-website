import { capture,capture1,capture2 } from "../assets"
import { BsBrowserChrome } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import {SiCss3, SiDjango, SiGithub, SiHtml5, SiJavascript,SiTailwindcss} from "react-icons/si"
const Projects = () => {
  return (
    <section id="projects">
        <h1 className='py-6 font-bold text-[36px] text-center  '>Projects</h1>
        <div className="py-12 flex justify-between items-center sm:flex-row flex-col gap-16">
            <div>
                <img src={capture1} alt="bank-modern-app" className="w-[100%] h-[100%] object-contain"/>
            </div>
            <div className="w-[100%] flex flex-col">
                <h2 className="font-semibold text-[28px]">Modern Bank Website(HooBank)</h2>
                <p>Experience the future of banking with Hoobank. Our modern approach to finance combines cutting-edge technology, seamless user experience, and personalized service. Explore our project to see how we're redefining the banking industry.</p>
                <div className="flex items-center gap-4 my-6">
                    <FaReact className="text-[44px]"/>
                    <SiTailwindcss className="text-[44px]"/>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/osaro123/modern_bank_website" className="transition-all border-2 border-black dark:border-white px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white dark:hover:bg-white dark:hover:text-black">See Code <SiGithub/></a>
                    <a href="https://modern-bank-website-osaro123.vercel.app/" className="transition-all border-2 border-black  px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">View Live <BsBrowserChrome/></a>
                </div>
            </div>
        </div>

        <div className="py-12 flex justify-between items-center sm:flex-row-reverse flex-col  gap-16">
            <div>
                <img src={capture} alt="bank-modern-app" className="w-[100%] h-[100%] object-contain"/>
            </div>
            <div className="w-[100%] flex flex-col ">
                <h2 className="font-semibold text-[28px]">SmartHome Website</h2>
                <p>Welcome to SmartHome, where cutting-edge technology meets the comfort of your own home. Our innovative website offers a range of smart home solutions designed to transform your living space into an intelligent and connected environment.</p>
                <div className="flex items-center gap-4 my-6">
                    <SiHtml5 className="text-[44px]"/>
                    <SiCss3 className="text-[44px]"/>
                    <SiJavascript className="text-[44px]"/>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/osaro123/SmartHome-Website" className="transition-all border-2 border-black px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white">See Code <SiGithub/></a>
                    <a href="https://smart-home-bolaji-git-main-osaro123.vercel.app/" className="transition-all border-2 border-black px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white">View Live <BsBrowserChrome/></a>
                </div>
            </div>
        </div>

        <div className="py-12 flex justify-between items-center sm:flex-row flex-col gap-16 ">
            <div>
                <img src={capture2} alt="bank-modern-app" className="w-[100%] h-[100%] object-contain"/>
            </div>
            <div className="w-[100%] flex flex-col ">
                <h2 className="font-semibold text-[28px]">AppointMe</h2>
                <p>Welcome to appointMe, a revolutionary website that empowers patients to easily book appointments with doctors. We understand the importance of accessible healthcare and aim to streamline the appointment process for a seamless patient experience.</p>
                <div className="flex items-center flex-wrap gap-4 my-6">
                    <SiHtml5 className="text-[44px]"/>
                    <SiCss3 className="text-[44px]"/>
                    <SiJavascript className="text-[44px]"/>
                    <SiDjango className="text-[44px]"/>
                </div>
                <div className="flex gap-4">
                    <a href="" className="transition-all border-2 border-black px-4 py-2 hover:bg-black flex gap-2 items-center hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white">See Code <SiGithub/></a>
                    <a href="" className="transition-all border-2 border-black px-4 py-2 hover:bg-black dark:hover:bg-white dark:hover:text-black dark:border-white flex gap-2 items-center hover:text-white ">View Live<BsBrowserChrome/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
