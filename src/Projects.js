import React from 'react';
import ReactPlayer from 'react-player';

const Projects = () => {

    const PythonSrc = "https://streamable.com/e/gvrmpm?loop=0"
    const ReactSrc ="https://streamable.com/e/y2wohj?loop=0"

  return (
    <>
    <div className='react'>
    <div className='react-text'>
        <h2>Black Hole</h2>
        <p>Group Project | 5 days | JavaScript // React // Json // Express // MongoDb // Css</p>
        <p>Brief: Build a web app based on a card or dice game.</p>
        <p>We built a Snakes and ladders type game for two players.</p>
        <p>The players and their scores are saved on mongoDb.</p>
        
        
        <a href="https://github.com/ElizaPeterson/Portals"><button> GitHub</button></a>
        </div>
        
        <iframe src={ReactSrc} frameborder="0" width="100%" height="315" allowfullscreen/>
        
    </div>

    <div className='python'>
   
        <iframe src={PythonSrc} frameborder="0" width="100%" height="315" allowfullscreen/>
        
        <div className='python-text'>
        <h2>ClanBank</h2>
        <p>Solo Project  | 5 Days | Python // Flask // SQL // Jinja // Html5 // Css	</p>
        <p>Brief: Build a CRUD web app allowing the user to track transactions.</p>


        <a href="https://github.com/mathiaskerr/PROJECT"><button> GitHub</button></a>
        </div>
    </div>

    
    
    </>
  )
}

export default Projects