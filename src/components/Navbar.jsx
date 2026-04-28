import React, { useEffect, useState } from 'react'
import themeIcon from "../assets/theme-icon.png"


const Navbar = () => {
  const [theme,SetTheme]=useState("light")
  const saved=localStorage.getItem("theme")

  useEffect(()=>{
    if(saved=== "dark"){
      document.body.classList.add("dark")
      SetTheme("dark")
    }
  },[])
  const toggleTheme=()=>{
    if(theme=== "light"){
      document.body.classList.add("dark")
      SetTheme("dark")
    }else{
      document.body.classList.remove("dark")
      SetTheme("light")
    }
  }
  return (
    <div className='nav-container'>
      <h2 className='nav-name'>HARI PRASATH</h2>
      <nav>
        <div className='nav-list'>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          {/* <span className='theme-btn' onClick={toggleTheme}>
            
            <img className='themeicon' src={themeIcon} alt="" width="20" height="20" />
          </span> */}
        </div>
      </nav>  
    </div>
  )
}

export default Navbar