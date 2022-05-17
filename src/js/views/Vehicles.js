import React from "react";
import {Link} from 'react-router-dom'
let links = []
let myUrls = []



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
  const [url, setUrl] = React.useState([])

  return (
    <div>
      <div className='myText'>
            <h1>Starships</h1>
          </div>
      <ul className="scroll">
        {vehicles.map((item, index) => {
          item.name == "CR90 corvette" ? links.push("https://cdna.artstation.com/p/assets/images/images/025/920/646/large/fishy-tree-cr90-pl.jpg?1587342586") : "";
          item.name == "Star Destroyer" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900&width=768") : "";
          item.name == "Sentinel-class landing craft" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Imperial-Sentinel-Class-Shuttle_a2dc7d3b.jpeg?region=0%2C0%2C1596%2C898&width=768") : "";
          item.name == "Death Star" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=768") : "";
          item.name == "Millennium Falcon" ? links.push("https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720&width=768") : "";
          item.name == "Y-wing" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=768") : "";
          item.name == "X-wing" ? links.push("https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864&width=768") : "";
          item.name == "TIE Advanced x1" ? links.push("https://cdna.artstation.com/p/assets/images/images/007/727/540/large/ansel-hsiao-x1-8.jpg?1508121329") : "";
          item.name == "Executor" ? links.push("https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845&width=768") : "";
          item.name == "Rebel transport" ? links.push("https://cdna.artstation.com/p/assets/images/images/044/188/898/large/robert-bonchune-rebel-trnsprt-xwings-away-rb.jpg?1639339017") : "";
          {myUrls.push((item.url).split('/'))}
          {console.log(myUrls[index][5])}
          if (links[index]){
            ""
          }
          else{
            links.push('https://bitsofco.de/content/images/2018/12/broken-1.png')
          }
          return (
            
            

            <div className="card" style={{ width: "18rem;" }}>
              <img
                class="card-img-top"
                src={links[index]}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <p className="card-text">Model: {item.model}</p>
                <p className="card-text">Cargo Capacity: {item.cargo_capacity}</p>
                <p className="card-text">Cost in credits: {item.cost_in_credits}</p>
                <Link to={'/Vehicles/'+myUrls[index][5]} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
