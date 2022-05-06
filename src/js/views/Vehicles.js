import React from "react";

export const Vehicles = () => {
  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/starships");
      const payload = await response.json();
      setVehicles(payload.results);
    };
    fn();
  }, []);

  const [vehicles, setVehicles] = React.useState([]);
  return (
    <div>
      <ul>
        {vehicles.map((item, index) => {
          return (
            // <li key={index}>
            //   <a href={"/character/" + item.uid}>{item.name}</a>
            // </li>

            

            <div className="card" style={{ width: "18rem;" }}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <p className="card-text">Gender: {}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
