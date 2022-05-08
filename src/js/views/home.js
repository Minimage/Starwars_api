import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import { Vehicles } from "./Vehicles";


export const Home = () => {

  return (
    <div>
      <div className="myBox">
      <div className="scrolling-wrapper">
        {" "}
        <Characters />
      </div>
      </div>
      
      <div className="myBox">
      <div className="scrolling-wrapper">
        {" "}
        <Planets />
      </div>
      </div>
      
     

      <div className="myBox">
      <div className="scrolling-wrapper">
        {" "}
      <Vehicles />
      </div>
      </div>
    </div>
    
  );
};
