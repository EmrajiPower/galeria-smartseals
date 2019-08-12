import React from 'react'
import Encabezado from './encabezado'
import Amplify,{ Storage } from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-2:469489ef-67fc-4c81-b6da-93a270b5d065',
    region: 'us-east-2'
  },
  Storage: {
    AWSS3: {
      bucket: 'galeriatest-prueba',
      region: 'us-east-2',
    }
  }
});

class Personas extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      img6: "",
      img7: "",
      img8: "",
      img9: "",
      img10: ""
    }
  }

  componentDidMount(){
    //Imagen 1
    Storage.get('personas/ronaldinho.jpg')
      .then(data => {
        this.setState({
          img1: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      })

    //Imagen 2
    Storage.get('personas/persona1.jpg')
      .then(data => {
        this.setState({
          img2: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      });

    //Imagen 3
    Storage.get('personas/persona2.jpg')
      .then(data => {
        this.setState({
          img3: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      })

    //Imagen 4
    Storage.get('personas/persona3.jpg')
      .then(data => {
        this.setState({
          img4: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      })

    //Imagen 5
    Storage.get('personas/persona4.jpg')
      .then(data => {
        this.setState({
          img5: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      })

    //Imagen 6
    Storage.get('personas/persona5.jpg')
      .then(data => {
        this.setState({
          img6: data
        })
      })
      .catch(err => {
        console.log("Error al obtener al imagen");
      })

      //Imagen 7
      Storage.get('personas/persona7.jpg')
        .then(data => {
          this.setState({
            img7: data
          })
        })
        .catch(err => {
          console.log("Error al obtener al imagen");
        })

      //Imagen 8
      Storage.get('personas/persona8.jpg')
        .then(data => {
          this.setState({
            img8: data
          })
        })
        .catch(err => {
          console.log("Error al obtener al imagen");
        })

      //Imagen 9
      Storage.get('personas/persona9.jpg')
       .then(data => {
          this.setState({
            img9: data
          })
        })
        .catch(err => {
          console.log("Error al obtener al imagen");
        })

      //Imagen 10
      Storage.get('personas/persona8.jpg')
       .then(data => {
          this.setState({
            img10: data
          })
        })
        .catch(err => {
          console.log("Error al obtener al imagen");
        })
  }

  render(){
    return(
      <React.Fragment>
      <div id="wrapper">
        <Encabezado/>
        <div className="lista-botones">
          <div id="main">
            <article className="thumb">
              <img src={this.state.img1} alt="Imagen 1"/>
              <h2>Ronaldiho</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img2} alt="Imagen 2"/>
              <h2>Luisa</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img3} alt="Imagen 3"/>
              <h2>Camila</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img4} alt="Imagen 4"/>
              <h2>Yeni</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img5} alt="Imagen 5"/>
              <h2>María</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img6} alt="Imagen 6"/>
              <h2>Juan</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img7} alt="Imagen 7"/>
              <h2>Jimena</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img8} alt="Imagen 8"/>
              <h2>Luisa</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img9} alt="Imagen 9"/>
              <h2>Henry</h2>
            </article>
            <article className="thumb">
              <img src={this.state.img10} alt="Imagen 10"/>
              <h2>Daniela</h2>
            </article>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Personas
