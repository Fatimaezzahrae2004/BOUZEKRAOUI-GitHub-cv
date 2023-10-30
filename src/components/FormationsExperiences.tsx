import React from "react";
import "./FormationsExperiences.css";
import formationsData from "../datas/Formations";
import experiencesData from "../datas/Experiences";
import Formations from "./Formations";
import Experiences from "./Experiences";

const FormationsExperiences = () => {
  return (
    <>
    <fieldset>
      <Formations datas={formationsData} />
    </fieldset>
    <fieldset>
      <Experiences datas={experiencesData} />
    </fieldset>
    </>
  );
};

export default FormationsExperiences;
