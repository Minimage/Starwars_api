import React from 'react'

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
          {console.log(characters)}
            <ul>
        {characters.map((item, index) => {
          let link;
          let links = []
            // switch (item.name) {
            //   case 'Luke Skywalker':
            //     link = 'https://media.vanityfair.com/photos/56dafc6130c1a42b3fbdafb8/1:1/w_719,h_719,c_limit/skywalker-luke.0.0.jpg';
            //     default:
            //       link = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
            //       break;

            item.name == 'Luke Skywalker' ? links.push('https://media.vanityfair.com/photos/56dafc6130c1a42b3fbdafb8/1:1/w_719,h_719,c_limit/skywalker-luke.0.0.jpg') : links.push('https://bitsofco.de/content/images/2018/12/broken-1.png');
            item.name == 'C-3PO' ? links.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16WXnMgCQgy47gxUukZwvL3vubz8EczbD1w&usqp=CAU') : links.push('https://bitsofco.de/content/images/2018/12/broken-1.png');
            console.log(characters.includes(links[index]))

            
            

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