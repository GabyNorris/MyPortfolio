import React from 'react'
import {useNavigate} from 'react-router-dom'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

function Home () {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/auth");
    }
  return (
    <div className="w-full flex flex-col items-center justify-center bg-base-100">
        <Hero/>
        {/* <Projects/>
        <About/>
        <Contact/> */}
        <footer className="border-t-[0.5px] border-primary/30 backdrop-blur-[18px] transition-all duration-500  p-1 bg-base-100 w-full flex items-center justify-center mx-11">
            
            <p>© {currentYear} <span className="cursor-pointer text-accent" onClick={handleClick}>Gaby Norris</span> · Open Window Institute · Designed &amp; built with care</p>
        </footer>
    </div>
  )
}

export default Home