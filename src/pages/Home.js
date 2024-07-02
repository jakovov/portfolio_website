import React from 'react';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import headerphoto from '../assets/profile3.jpg';

function downloadFile() {
  const pdfUrl = process.env.PUBLIC_URL + '/pdf/cv.pdf';
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'AtanaseJakovov-Cv.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up after the download
      URL.revokeObjectURL(url); // Release the object URL
    })
    .catch(error => console.error('Error downloading the file:', error));
}

function Home({ colorScheme, colorSchemetext }) {
  return (
    <div className={`header ${colorScheme}`}>
      <div className='headline'>
        <p className={`${colorSchemetext}`}>Hello I'm </p>
        <h1 id='test' className={`${colorSchemetext}`}>Atanas Jakovov</h1>
        <p className={`${colorSchemetext}`}>A passionate Front-end React Developer based in Skopje, Macedonia.</p>
        <div className='btn-container1'>
          <button className='btn1 dabe' id='zeleno' onClick={downloadFile}>Download CV</button>
          <Link to="/contact">
            <button className='btn1 dabe'>Contact Me</button>
          </Link>
        </div>
      </div>
      <div className='hphoto'>
        <img src={headerphoto} alt="My profile" id='profilepic'></img>
      </div>
    </div>
  );
}

export default Home;
