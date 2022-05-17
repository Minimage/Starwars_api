import React from "react";
import { useParams } from "react-router-dom";

export const VehiclePage = () => {
  const params = useParams();

  //Use States
  const [name, setName] = React.useState(null);
  const [model, setModel] = React.useState(null);
  const [crew, setCrew] = React.useState(null);
  const [length, setLength] = React.useState(null);
  const [passengers, setPassengers] = React.useState(null);
  const [starship_class, setStarship_class] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://swapi.dev/api/starships/" + params.id
      );
      const payload = await response.json();

      return (
        setName(payload.name),
        setModel(payload.model),
        setCrew(payload.crew),
        setLength(payload.length),
        setPassengers(payload.passengers),
        setStarship_class(payload.starship_class)

      );
    };
    fn();
  }, []);

  return (

    <div className="container">
      <div className="row">
        <div className="col-12 top">
          <div className="row">
            <div className="col-6 left">
              <img
                className={name != undefined ? "show" : "hide"}
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              ></img>
            </div>
            <div className="col-6 right">
              <h1>{name}</h1>
              <p className={name != undefined ? "show" : "hide"}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam vel illum qui
                dolorem eum fugiat quo voluptas nulla pariatur.
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
              <h3 className="item"> {name !== null ? name : ""}</h3>
            </div>
            <div className="col-2">
              <h3 className="item"> Model </h3>
              <h3 className="item"> {model !== "null" ? model : ""}</h3>
            </div>
            <div className="col-2">
              <h3 className="item"> Crew</h3>
              <h3 className="item"> {crew !== null ? crew : ""}</h3>
            </div>
            <div className="col-2">
              <h3 className="item"> Length</h3>
              <h3 className="item">
                {" "}
                {length !== null ? length : ""}
              </h3>
            </div>
            <div className="col-2">
              <h3 className="item"> Passengers</h3>
              <h3 className="item">
                {" "}
                {passengers !== null ? passengers : ""}
              </h3>
            </div>
            <div className="col-2">
              <h3 className="item"> Class</h3>
              <h3 className="item">
                {" "}
                {starship_class !== null ? starship_class : ""}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
