import React from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.css";
let links = '';
export const CharacterPage = () => {
  const params = useParams();

  //useStates
  const [name, setName] = React.useState(null);
  const [birthYear, setBirthYear] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [skinColor, setSkinColor] = React.useState(null);
  const [eyeColor, setEyeColor] = React.useState(null);

  React.useEffect(() => {
    
    const fn = async () => {
      const response = await fetch("https://swapi.dev/api/people/" + params.id);
      const payload = await response.json();

      console.log(payload);

      switch (payload.name) {
          case 'Luke Skywalker':
            links = 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536';
            break;
          case 'C-3PO':
            links = 'https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536';
            break;
          case 'R2-D2':
            links = 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536';
            break;
          case 'Darth Vader':
            links = 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=1200';
            break;
          case 'Leia Organa':
            links = 'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=1200';
            break;
          case 'Owen Lars':
            links = 'https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=1200';
            break;
          case 'Beru Whitesun lars':
            links = 'https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=1200';
            break;
          case 'R5-D4':
            links = 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666';
            break;
          case 'Biggs Darklighter':
            links = 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=1200';
            break;
          case 'Obi-Wan Kenobi':
            links = 'https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=1200';
            break;
          default:
            links = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
            break;
      }

      return (
        setName(payload.name),
        setBirthYear(payload.birth_year),
        setGender(payload.gender),
        setHeight(payload.height),
        setSkinColor(payload.skin_color),
        setEyeColor(payload.eye_color,
          
          )

        
      );
    };
    fn();
  }, []);
  console.log(name);

  return (
    <div className="container">
      <div className="row">
      <div className="top">
        <div className="row">
          <div className="col-6 left">
            <img src={links}></img>
          </div>
          <div className="col-6 right">
            
            <h1>{name}</h1>
            
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
      <div className="bottom">
        <div className="row">
          <div className="col-2">
            <h3 className="item"> Name</h3>
            <h3 className="item"> {name !== null ? name : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Birth Year</h3>
            <h3 className="item"> {birthYear !== "null" ? birthYear : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Gender</h3>
            <h3 className="item"> {gender !== null ? gender : ""}</h3>
            {console.log("The link is"+links)}
          </div>
          <div className="col-2">
            <h3 className="item"> Height</h3>
            <h3 className="item"> {height !== null ? height : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Skin Color</h3>
            <h3 className="item"> {skinColor !== null ? skinColor : ""}</h3>
          </div>
          <div className="col-2">
            <h3 className="item"> Eye Color</h3>
            <h3 className="item"> {eyeColor !== null ? eyeColor : ""}</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
