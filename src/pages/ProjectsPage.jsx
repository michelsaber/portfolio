import React from "react";
import sparsam from "../icons/Sparsam.PNG";
import festiva from "../icons/Festiva.PNG";

function ProjectsPage() {
  return (
    <div className="aboutPageParent">
      <div className="projectsPageParent">
        <div className="sparsamDiv">
          <h2>Sparsam</h2>
          <img src={sparsam} style={{ width: "30vw" }} alt="" />
        </div>

        <div className="festivaDiv">
          <h2>Festiva</h2>
          <img src={festiva} style={{ width: "30vw" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
