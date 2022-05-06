import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [characters, setCharacters] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [starships, setStarships] = React.useState([]);

  //Characters
  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/people");
      const payload = await response.json();
      setCharacters(payload.results);
    };
    fn();
  }, []);


  //Planets
  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/planets");
      const payload = await response.json();
      setPlanets(payload.results);
    };
    fn();
  }, []);

  //Starships
  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/starships");
      const payload = await response.json();
      setStarships(payload.results);
    };
    fn();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((item, index) => {
          return (
            // <li key={index}>
            //   <a href={"/character/" + item.uid}>{item.name}</a>
            // </li>

<div className="card" style={{width: "18rem;"}}>
<div className="card-body">
  <h5 className="card-title"> {item.name}</h5>
  <p className="card-text">Gender: {item.gender}</p>
  <p className="card-text">Hair-Color: {item.hair_color}</p>
  <p className="card-text">Eye-Color: {item.eye_color}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
          );
        })}
      </ul>


       <ul>
        {planets.map((item, index) => {
          return (
            <div className="card" style={{width: "18rem;"}}>
<div className="card-body">
  <h5 className="card-title"> {item.name}</h5>
  <p className="card-text">Population: {item.population}</p>
  <p className="card-text">Gravity: {item.gravity}</p>
  <p className="card-text">Climate: {item.climate}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
          );
        })}
      </ul>



       <ul>
        {starships.map((item, index) => {
          return (
            <li key={index}>
              <a href={"/starships/" + item.uid}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
