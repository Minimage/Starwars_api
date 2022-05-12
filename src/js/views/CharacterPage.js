import React from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const params = useParams();
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://swapi.dev/api/people/" + params.id
        
      );
      const payload = await response.json();
      setCharacter(payload.result.properties);
      

    };
    fn();
  }, []);
  

  return (
    <div>
      {/* <h1>Character Page {character !== null ? character.name : ""}</h1> */}
      <h1>Hello {params.id}</h1>
      {JSON.stringify(params)}
      console.log(character)
      

      
    </div>
  );
};
