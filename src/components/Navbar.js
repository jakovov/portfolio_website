import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className='padding50'>
      <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='testirame'>
        <div className='logo'><h3>orenji</h3></div>
          <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
              <MenuIcon/>
            </button>
          </div>
          </div>
        <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/resume"> Resume</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/contact"> Contact </Link>
            <button><DarkModeIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar