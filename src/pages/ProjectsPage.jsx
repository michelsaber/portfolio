import React from "react";
import sparsam from "../icons/Sparsam.PNG";
import festiva from "../icons/Festiva.PNG";
import pokemonApp from "../icons/pokemonApp.png"

function ProjectsPage() {
  return (
    <div className="aboutPageParent">
      <div className="projectsPageParent">
        <div className="sparsamDiv">
        <a href="https://sparsam.netlify.app" className="projectLink"><h2>Sparsam</h2>
        <img  src={sparsam} style={{ width: "20vw", height: "18vw" }} alt="" /></a>
         <div><p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}>Monthly and weekly budget tracking resonsive app. React, JS, CSS, Express, Nodejs, MongoDB</p>
         <a href="https://github.com/michelsaber/Pokemon-Canvas-Game" className="projectSourceCode"><h3>Source Code</h3></a></div>
        </div>

        <div className="festivaDiv">
        <a href="https://festiva.adaptable.app" className="projectLink">
          <h2>Festiva</h2>
          <img src={festiva} style={{ width: "20vw" , height: "18vw" }} alt="" />
          </a>
          <div><p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}>Festival and events website. HTML, HBS, JS, CSS, Express, Nodejs, MongoDB</p>
          <div style={{display:"flex"}}><a href="https://github.com/fraulueneburg-ironhack/p3-frontend" className="projectSourceCode"><h3>Frontend</h3></a>
          <a href="https://github.com/fraulueneburg-ironhack/p3-backend" className="projectSourceCode"><h3>Backend</h3></a></div></div>
        </div>

        <div className="weatherAppDiv">
        <a href="https://michelsaber.github.io/Pokemon-Canvas-Game/" className="projectLink">
          <h2>Easy Weather</h2>
          <img src={pokemonApp} style={{ width: "20vw" , height: "18vw" }} alt="" />
          </a>
          <div><p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}> Weather app for tablets. React, JS, CSS</p>
          <a href="https://github.com/michelsaber/Pokemon-Canvas-Game" className="projectSourceCode"><h3>Source Code</h3></a></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
