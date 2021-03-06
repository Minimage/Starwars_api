import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import { Vehicles } from "./Vehicles";
import { userContext } from "./Likes";



export const Home = () => {
  const {value, setValue} = useContext(userContext)

  return (
    <div>

      <div className="myBox">
      <div className="scrolling-wrapper">
        {value}
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
