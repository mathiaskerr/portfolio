import React from 'react';
import ReactPlayer from 'react-player';

const Projects = () => {

    const PythonSrc = "https://streamable.com/e/gvrmpm?loop=0"
    const ReactSrc ="https://streamable.com/e/y2wohj?loop=0"

  return (
    <div>
    Projects
    <div className='python'>
        <h2>Python Solo Project</h2>
        <p>project info/brief</p>
        <p>learning points</p>

        <div>
        <iframe src={PythonSrc} frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay">
        </iframe>
        </div>

   

        <p>view project here</p>


        <a href="https://github.com/mathiaskerr/PROJECT"><button> GitHub</button></a>
    </div>

    <div className='react'>
        <h2>React Group Project</h2>
        <p>project info/brief</p>
        <p>learning points</p>

        <iframe src={ReactSrc} frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay"/>

        
        <p>view project here</p>
        <a href="https://github.com/ElizaPeterson/Portals"><button> GitHub</button></a>
    </div>
    
    </div>
  )
}

export default Projects