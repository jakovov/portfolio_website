import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import '../styles/Footer.css';

function Footer() {
  return (
    
    <div className='footer'>
    <div className='padding50'>
    <div className='footerinside'>
    <div className='footerleft'><p>orenji copyright bitch</p></div>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
            <LibraryMusicIcon/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer