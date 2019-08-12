import React from 'react';
import Animales from './components/animales'
import Paisajes from './components/paisajes'
import Personas from './components/personas'
import Planetas from './components/planetas'
import Vehiculos from './components/vehiculos'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(){
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Animales} />
            <Route exact path="/paisajes" component={Paisajes} />
            <Route exact path="/personas" component={Personas} />
            <Route exact path="/planetas" component={Planetas} />
            <Route exact path="/vehiculos" component={Vehiculos} />
          </Switch>
      </BrowserRouter>
    );
}


export default App;
