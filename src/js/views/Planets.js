import React from "react";
let links = [];

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
      <div className='myText'>
            <h1>Planets</h1>
          </div>
      <ul className="scroll">
        {planets.map((item, index) => {
          item.name == "Tatooine" ? links.push("https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536") : "";
          item.name == "Alderaan" ? links.push("https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=1200") : "";
          item.name == "Yavin IV" ? links.push("https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=1200") : "";
          item.name == "Hoth" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675") : "";
          item.name == "Dagobah" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=1200") : "";
          item.name == "Bespin" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768") : "";
          item.name == "Endor" ? links.push("https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=768") : "";
          item.name == "Naboo" ? links.push("https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768") : "";
          item.name == "Coruscant" ? links.push("https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=768") : "";
          item.name == "Kamino" ? links.push("https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=768") : "";
          


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
                <p className="card-text">Population: {item.population}</p>
                <p className="card-text">Gravity: {item.gravity}</p>
                <p className="card-text">Climate: {item.climate}</p>
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
