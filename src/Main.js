import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Projects from './Projects';
import Home from './Home';

const Main = () => {
  return (
    <div>
   <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>    
      </Routes>
   </Router>
    <div></div>
    </div>
  )
}

export default Main