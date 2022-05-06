import React from 'react'

export const Planets = () => {
    const [planets, setPlanets] = React.useState([]);

    React.useEffect(() => {
        const fn = async () => {
          const response = await fetch("https://swapi.dev/api/planets");
          const payload = await response.json();
          setPlanets(payload.results);
        };
        fn();
      }, []);
    return (
        <div>
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

        </div>
    )
}