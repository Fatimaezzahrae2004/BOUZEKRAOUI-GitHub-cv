import React from "react";

import "./User.css";

const User = () => {
  return (
    <div className="user">
      <img src="./public/media/fatima.png" alt="ma image" className="user__avatar" />
      <fieldset>
      <h1 className="user__name">BOUZEKRAOUI FATIMA-EZZAHRAE</h1>
      <p className="user__profession">Eleve ingénieur en génie informatique et digitalisation</p>
      </fieldset>
      <div className="user__infos">
      <fieldset>
        <p className="user__info">
        
          RUE 09 N 20 Cite Essahb ERRACHIDIA
        </p>
        <p className="user__info">
        <a href="te:+212660469119">06 20 50 84 79</a>
        </p>
        <p className="user__info">

        <p><i className="fas fa-envelope"></i>Email:<a href="bouzekraouifatimaezzahrae@gmail.com">bouzekraouifatimaezzahrae@gmail.com</a></p>
        </p>
        <p className="user__info">
          Date de naissance : 26 février 2004
        </p>
        <p className="user__info">
          Lieu de naissance : ERRACHIDIA
        </p>
        </fieldset>
      </div>
    </div>
  );
};

export default User;