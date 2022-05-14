import React from "react";
import { useParams } from "react-router-dom";

export const PlanetPage = () => {
  const params = useParams();

  //Use States
  const [planet, setPlanet] = React.useState(null);
  const [rotation_period, setRotation_period] = React.useState(null);
  const [orbital_period, setOrbital_period] = React.useState(null);
  const [diameter, setDiameter] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://swapi.dev/api/planets/" + params.id
      );
      const payload = await response.json();

      console.log(payload);

      return setPlanet(payload.name);
    };
    fn();
  }, []);

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 top">
    //       <div className="row">
    //         <div className="col-6 left">
    //           <h1>Planet Page {planet !== null ? planet : ""}</h1>
    //           <h1>
    //             Planet Page {planet !== null ? planet.rotation_period : ""}
    //           </h1>
    //         </div>
    //         <div className="col-6 right">
    //           <h1>{planet}</h1>
    //           {console.log("This is:"+planet)}
    //           <h1>hello</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="row">
      <div className="col-12 top">
        <div className="row">
          <div className="col-6 left">
            <img className={planet != undefined ? 'show' : "hide"} src='https://bitsofco.de/content/images/2018/12/broken-1.png' ></img>
           
          </div>
          <div className="col-6 right">
            
            <h1>{planet}</h1>
            {console.log('Name is: '+planet)}
            <p className={planet != undefined ? 'show' : "hide"}> 
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
      <div className="col-12 bottom">
        <div className="row">
          <div className="col-2">
            <h3 className="item"> Name</h3>
            <h3 className="item"> {planet !== null ? planet : ""}</h3>
          </div>
          {/* <div className="col-2">
            <h3 className="item"> Birth Year</h3>
            <h3 className="item"> {birthYear !== "null" ? birthYear : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Gender</h3>
            <h3 className="item"> {gender !== null ? gender : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Height</h3>
            <h3 className="item"> {height !== null ? height : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Skin Color</h3>
            <h3 className="item"> {skinColor !== null ? skinColor : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Eye Color</h3>
            <h3 className="item"> {eyeColor !== null ? eyeColor : ""}</h3>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
