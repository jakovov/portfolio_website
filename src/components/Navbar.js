import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar({ toggleColorScheme }) {
  
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className='padding50'>
      <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='media-fix'>
      
        <div className='logo'><Link to="/"> orenji</Link></div>
          
          
          
          <div><button className='hamburger-menu' onClick={toggleColorScheme}><DarkModeIcon/></button></div>
          <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
              <MenuIcon/>
            </button>
          </div>
          
</div>
        <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/resume"> Resume</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact </Link>
            
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar