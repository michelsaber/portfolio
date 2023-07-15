import React from "react";
import "../App.css";
import { FaPython, FaCss3Alt, FaCode, FaReact, FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript, TbBrowser } from "react-icons/tb";
import { DiNodejs, DiMongodb } from "react-icons/di";

function HomePage() {
  return (
    <div className="homePage">
      <div className="titleParent">
        <div className="titleSubParent">
          <div style={{ display: "flex" }}>
            <TbBrowser size="2em" color="gray" />
            <h1 className="homePageTitle1"> Web </h1>
          </div>
          <h1 className="homePageTitle2"> Developer </h1>
        </div>
        <div className="homePageParagraph">
          <p>
            I am a web developer with civil engineering and project management
            background.
          </p>
          <p>My favorite tools for programming are JS and React. </p>
        </div>
      </div>
      <div className="logosParent">
        <div className="logosChildren">
          <FaHtml5 size="3em" color="gray" />
          <FaCode size="3em" color="gray" />
        </div>
        <div className="logosChildren">
          <TbBrandJavascript size="3em" color="gray" />
          <FaPython size="3em" color="gray" />
        </div>
        <div className="logosChildren">
          <FaCss3Alt size="3em" color="gray" />
          <DiNodejs size="3em" color="gray" />
        </div>
        <div className="logosChildren">
          <DiMongodb size="3em" color="gray" />
          <FaReact size="3em" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
