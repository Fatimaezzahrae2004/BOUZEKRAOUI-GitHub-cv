import React from "react";
import "./Skills.css";

import Interests from "./Interests";

const Skills = () => {
  return (
    <>
      <div className="skills">
        
        <h2 className="h2">Compétences</h2>
        <fieldset>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>PYTHON</li>
        <li>C/C++</li>
        <li>REACT</li>
        </ul>
        </fieldset>
      </div>
      <div className="skills">
      
        <h2 className="h2">Langues</h2>
        <fieldset>
        <ul>
        <li>Arabe</li>
        <li>Francais</li>
        <li>Anglais</li>
        </ul>
        </fieldset>
      </div>
      <Interests />
    </>
  );
};

export default Skills;