import React from 'react';

const Projects = () => {

    const PythonSrc = "https://streamable.com/e/gvrmpm?loop=0"
    const ReactSrc ="https://streamable.com/e/y2wohj?loop=0"

  return (
    <>

<div className='python'>
   
   <iframe src={PythonSrc} frameBorder="0" width="100%" height="315" />
   
   <div className='python-text'>
   <h2>OOR 'N' ABOOT</h2>
  
        <p>Group Project | 2 weeks | JavaScript // React // Java // Spring // SQL // Css</p>
        <p>Brief: Build Tinder like events finder</p>
        <p>text</p>
        <p>text</p>



   <a href="https://github.com/mathiaskerr/PROJECT"><button> GitHub</button></a>
   </div>
</div>
    <div className='react'>
    
    <div className='react-text'>
        <h2>Black Hole</h2>
        <p>Group Project | 5 days | JavaScript // React // Json // Express // MongoDb // Css</p>
        <p>Brief: Build a web app based on a card or dice game</p>
        <p>We built a Snakes and ladders type game for two players</p>
        <p>The players and their scores are saved on mongoDb</p>
        
        
        <a href="https://github.com/ElizaPeterson/Portals"><button> GitHub</button></a>
        </div>
        
        <iframe src={ReactSrc} frameBorder="0" width="100%" height="315" />
        
    </div>

    <div className='python'>
   
        <iframe src={PythonSrc} frameBorder="0" width="100%" height="315" />
        
        <div className='python-text'>
        <h2>ClanBank</h2>
        <p>Solo Project  | 5 Days | Python // Flask // SQL // Jinja // Html5 // Css	</p>
        <p>Brief: Build a CRUD web app allowing the user to track transactions</p>
        <p>Built ClanBank so the user can add merchants and tags for each transaction</p>
        <p>The user can sort transactions by merchants and tags</p>
        <p>The user can create a budget and see how much money has been spent/ is left in the budget</p>



        <a href="https://github.com/mathiaskerr/PROJECT"><button> GitHub</button></a>
        </div>
    </div>

    
    
    </>
  )
}

export default Projects