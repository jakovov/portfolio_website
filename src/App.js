import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  const [colorScheme, setColorScheme] = useState('black'); // default to dark mode
  const [colorSchemetext, setColorSchemetext] = useState('black'); // default to dark mode
  const toggleColorScheme = () => {
    setColorScheme(prevScheme => prevScheme === 'black' ? 'white' : 'black');
    setColorSchemetext(prevScheme => prevScheme === 'black' ? 'whitetext' : 'black');
  };
  
  return (
    <div className={`App ${colorScheme}`}>
      <Router>
      <Navbar toggleColorScheme={toggleColorScheme} />
        <Routes>
        <Route path="/" element={<Home colorScheme={colorScheme} colorSchemetext={colorSchemetext}/>} />
          <Route path="/projects" element={<Projects colorScheme={colorScheme} colorSchemetext={colorSchemetext}/>}/>
          <Route path="/About" element={<About colorScheme={colorScheme} colorSchemetext={colorSchemetext}/>}/>
          <Route path="/Resume" element={<Resume colorScheme={colorScheme} colorSchemetext={colorSchemetext}/>}/>
          <Route path="/Contact" element={<Contact colorScheme={colorScheme} colorSchemetext={colorSchemetext}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
