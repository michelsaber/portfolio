import React from "react";
import sparsam from "../icons/Sparsam.PNG";
import festiva from "../icons/Festiva.PNG";
import weatherApp from "../icons/WeatherApp.png"

function ProjectsPage() {
  return (
    <div className="aboutPageParent">
      <div className="projectsPageParent">
        <div className="sparsamDiv">
        <a href="https://sparsam.netlify.app" className="projectLink"><h2>Sparsam</h2>
        <img  src={sparsam} style={{ width: "20vw", height: "18vw" }} alt="" /></a>
         <p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}>Monthly and weekly budget tracking resonsive app. React, JS, CSS, Express, Nodejs, MongoDB</p>
        </div>

        <div className="festivaDiv">
        <a href="https://festiva.adaptable.app" className="projectLink">
          <h2>Festiva</h2>
          <img src={festiva} style={{ width: "20vw" , height: "18vw" }} alt="" />
          </a>
          <p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}>Festival and events website. HTML, HBS, JS, CSS, Express, Nodejs, MongoDB</p>
        </div>

        <div className="weatherAppDiv">
        <a href="https://theeasyweather.netlify.app" className="projectLink">
          <h2>Easy Weather</h2>
          <img src={weatherApp} style={{ width: "20vw" , height: "18vw" }} alt="" />
          </a>
          <p style={{paddingTop:"20px", width: "20vw", fontSize:"15px"}}> Weather app for tablets. React, JS, CSS</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
