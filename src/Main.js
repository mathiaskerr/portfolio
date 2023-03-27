import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Projects from './Projects';
import Home from './Home';
import Cv from './Cv';

const Main = () => {
  return (
    <div>
   <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/cv" element={<Cv/>}/>    
      </Routes>
   </Router>
    <div></div>
    </div>
  )
}

export default Main