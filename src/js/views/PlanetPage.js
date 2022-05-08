import React from "react";
import { useParams } from "react-router-dom";

export const PlanetPage = () => {
  const params = useParams();
  const [planet, setPlanet] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/people" + params.id);
      const payload = await response.json();
      setPlanet(payload.result.properties);
    };
    fn();
  }, []);

  return (
    <div>
      <h1>Planet Page {planet !== null ? planet.name : ""}</h1>
    </div>
  );
};
