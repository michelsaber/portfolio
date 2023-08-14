import React from "react";
import sparsam from "../icons/Sparsam.PNG";
import festiva from "../icons/Festiva.PNG";

function ProjectsPage() {
  return (
    <div className="aboutPageParent">
      <div className="projectsPageParent">
        <div className="sparsamDiv">
        <a href="https://sparsam.netlify.app" className="projectLink"><h2>Sparsam</h2>
        <img src={sparsam} style={{ width: "30vw", height: "20vw" }} alt="" /></a>
         
        </div>

        <div className="festivaDiv">
        <a href="https://festiva.adaptable.app" className="projectLink">
          <h2>Festiva</h2>
          <img src={festiva} style={{ width: "30vw" , height: "20vw" }} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
