import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import About from './pages'
import Interest from './pages/interest'
import Projects from './pages/projects'
import Socmed from './components/Socmed';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () =>  {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resized')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<About/>} />
        <Route path="/interest" exact element={<Interest/>} />
        <Route path="/projects" exact element={<Projects/>} />
      </Routes>
      <Socmed />
      <Interest />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
