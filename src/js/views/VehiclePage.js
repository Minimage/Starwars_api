import React from "react";
import { useParams } from "react-router-dom";

export const VehiclePage = () => {
  const params = useParams();

  //Use States
  const [url, setUrl] = React.useState(null);
  const [noww, setNow] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  const [] = React.useState(null);
  let test = []

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://swapi.dev/api/starships/" + params.id
      );
      const payload = await response.json();

      const myurl = await payload.url
      return (
        setUrl(payload.url),
        setNow(payload.url)

      );
      
    };

    fn();

  }, []);

  // test.push(url)
  // let part = test[0]
  // console.log(part.split(''))
  console.log(typeof(String(url)))
  

  return (
    <div>
    {/* <h1>hello {String(url).split('/')}</h1> */}
    <h1>hello {test.push(noww)}</h1>
    <h1>{String(test[0]) != 'null' ? (test[0]).split('/')[5] : ''}</h1>
    </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 top">
    //       <div className="row">
    //         <div className="col-6 left">
    //           <img
    //             className={planet != undefined ? "show" : "hide"}
    //             src="https://bitsofco.de/content/images/2018/12/broken-1.png"
    //           ></img>
    //         </div>
    //         <div className="col-6 right">
    //           <h1>{planet}</h1>
    //           <p className={planet != undefined ? "show" : "hide"}>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //             45 BC, making it over 2000 years old. Richard McClintock, a
    //             Latin professor at Hampden-Sydney College in Virginia, looked up
    //             one of the more obscure Latin words, consectetur, Sed ut
    //             perspiciatis unde omnis iste natus error sit voluptatem
    //             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    //             quae ab illo inventore veritatis et quasi architecto beatae
    //             vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
    //             voluptas sit aspernatur aut odit aut fugit, sed quia
    //             consequuntur magni dolores eos qui ratione voluptatem sequi
    //             nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
    //             sit amet, consectetur, adipisci velit, sed quia non numquam eius
    //             modi tempora incidunt ut labore et dolore magnam vel illum qui
    //             dolorem eum fugiat quo voluptas nulla pariatur.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-12 bottom">
    //       <div className="row">
    //         <div className="col-2">
    //           <h3 className="item"> Name</h3>
    //           <h3 className="item"> {planet !== null ? planet : ""}</h3>
    //         </div>
    //         <div className="col-2">
    //           <h3 className="item"> Rotation </h3>
    //           <h3 className="item"> {rotation !== "null" ? rotation : ""}</h3>
    //         </div>
    //         <div className="col-2">
    //           <h3 className="item"> Orbital</h3>
    //           <h3 className="item"> {orbital !== null ? orbital : ""}</h3>
    //         </div>
    //         <div className="col-2">
    //           <h3 className="item"> Diameter</h3>
    //           <h3 className="item">
    //             {" "}
    //             {planet_diameter !== null ? planet_diameter : ""}
    //           </h3>
    //         </div>
    //         <div className="col-2">
    //           <h3 className="item"> Climate</h3>
    //           <h3 className="item">
    //             {" "}
    //             {planet_climate !== null ? planet_climate : ""}
    //           </h3>
    //         </div>
    //         <div className="col-2">
    //           <h3 className="item"> Terrain</h3>
    //           <h3 className="item">
    //             {" "}
    //             {planet_terrain !== null ? planet_terrain : ""}
    //           </h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
