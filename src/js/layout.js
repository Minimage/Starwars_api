import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import {userContext} from './views/Likes'

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { CharacterPage } from "./views/CharacterPage";
import { PlanetPage } from "./views/PlanetPage";
import injectContext from "./store/appContext";
import { Characters } from "./views/Characters";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehicles } from "./views/Vehicles";
import { Planets } from "./views/Planets";
import { VehiclePage } from "./views/VehiclePage";



//create your first component
const Layout = () => {
  const [value, setValue] = React.useState(()=>{[]})
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
        <userContext.Provider value={{value, setValue}}>
          <Navbar />
          <Switch>
           
            <Route exact path="/">



              <Home />

            </Route>

            <Route exact path="/characters/:id">
              <CharacterPage />
            </Route>

            <Route exact path="/Vehicles/:id">
              <VehiclePage />
            </Route>

            <Route exact path="/planets/:id">
              <PlanetPage />

            </Route>

            <Route path='/Characters' component={Characters} />
            <Route path='/Vehicles' component={Vehicles} />
            <Route path='/Planets' component={Planets} />



           
           
            <Route>
              <h1>Not found!</h1>
            </Route>
             
          </Switch>
          </userContext.Provider>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
