import React from 'react'
let links = []


export const Characters = () => {
    const [characters, setCharacters] = React.useState([]);

    //Characters
    React.useEffect(() => {
    const fn = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const payload = await response.json();
    setCharacters(payload.results);
    
    };
    fn();
  }, []);

    return(


        <div>
          <div className='myText'>
            <h1>Characters</h1>
          </div>
            <ul className='scroll'>
        {characters.map((item, index) => {
          let link;
          
            // switch (item.name) {
            //   case 'Luke Skywalker':
            //     link = 'https://media.vanityfair.com/photos/56dafc6130c1a42b3fbdafb8/1:1/w_719,h_719,c_limit/skywalker-luke.0.0.jpg';
            //     default:
            //       link = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
            //       break;

            item.name == 'Luke Skywalker' ? links.push('https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536') : ""
            item.name == 'C-3PO' ? links.push('https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536') : ""
            item.name == 'R2-D2' ? links.push('https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536') : ""
            item.name == 'Darth Vader' ? links.push('https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=1200') : ""
            item.name == 'Leia Organa' ? links.push('https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=1200') : ""
            item.name == 'Owen Lars' ? links.push('https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=1200') : ""
            item.name == 'Beru Whitesun lars' ? links.push('https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=1200') : ""
            item.name == 'R5-D4' ? links.push('https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666') : ""
            item.name == 'Biggs Darklighter' ? links.push('https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=1200'): ""
            item.name == 'Obi-Wan Kenobi' ? links.push('https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=1200') : ""
            
            
            if (links[index]){
              ""
            }
            else{
              links.push('https://bitsofco.de/content/images/2018/12/broken-1.png')
            }

        return (

           
<div className="card" style={{width: "18rem;"}}>
<img class="card-img-top" src={links[index]} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title"> {item.name}</h5>
  <p className="card-text">Gender: {item.gender}</p>
  <p className="card-text">Hair-Color: {item.hair_color}</p>
  <p className="card-text">Eye-Color: {item.eye_color}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
            )
        })}
      </ul>

        </div>

    )
}