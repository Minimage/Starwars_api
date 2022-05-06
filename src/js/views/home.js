import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import { Vehicles } from "./Vehicles";


export const Home = () => {

  return (
    <div>
      <h1>Characters</h1>
      <div className="scrolling-wrapper">
        {" "}
        <Characters />
      </div>
      

      <h1>Planets</h1>
      <div className="scrolling-wrapper">
        {" "}
        <Planets />
      </div>
     

      <h1>Vehicles</h1>
      <div className="scrolling-wrapper">
        {" "}
      <Vehicles />
      </div>
    </div>
  );
};
