import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/cv">Cv</Link>
            </li>
        </ul>    
    </div>
  )
}

export default NavBar