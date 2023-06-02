import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import { styles } from "./style"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


const App = () => {
  const [theme,setTheme] = useState("dark")
  useEffect(() => {
    theme === "dark" ? (document.documentElement.classList.add("dark")) : (document.documentElement.classList.remove("dark"))
  },[theme])
  return (
    <>
      <div className={`w-full font-roboto dark:bg-[#0f0f0f] dark:text-white overflow-hidden ${styles.paddingX}`}>
      <div className="min-h-[100vh]">
        <Navbar 
          theme={theme}
          setTheme={setTheme}
        />
        <div className={`${styles.flexCenter} mt-32`}>
          <Hero/>
        </div>
      </div>
      <div className="">
        <About/>
      </div>
      <Projects/>
    </div>
    <div className="font-roboto bg-[#0f0f0f] dark:bg-[#1c1c1c] m-0 p-0 text-white">
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App

