import React from 'react'
import carpetica from '../imagenes/carpetica.svg'
import { Link } from "react-router-dom";

function Encabezado(props){
    return(
      <React.Fragment>
      <div className="App">
        <header id="header">
          <h1>Gestor de Imágenes</h1>
          <div className="formato-botones">
            <Link to="/" id="Ba"><img src={carpetica} alt="x" width="10" height="10"/>Animales</Link>
            <Link to="/paisajes" id="Bb"><img src={carpetica} alt="x" width="20" height="20"/>Paisajes</Link>
            <Link to="/personas" id="Bc"><img src={carpetica} alt="x" width="20" height="20"/>Personas</Link>
            <Link to="/planetas" id="Bd"><img src={carpetica} alt="x" width="20" height="20"/>Planetas</Link>
            <Link to="/vehiculos" id="Be"><img src={carpetica} alt="x" width="20" height="20"/>Vehiculos</Link>
          </div>
        </header>
       </div>
      </React.Fragment>
    )
}

export default Encabezado
