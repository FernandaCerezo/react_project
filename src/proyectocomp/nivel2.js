import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';///importacion para el modal

export default class Nivel2 extends React.Component{////////////clase principal para el nivel 2
  constructor(props){
    super(props);
    this.state={
      Title:'Nivel',
      nivell:1,
      subtitle:'Selecciona la opcion logica',
      operacion1:Math.floor(Math.random()*20)+10,////se crean 2 numeros aleatorios para las comparaciones logicas
      operacion2:Math.floor(Math.random()+1*20)+10,
      boton1:'>',
      boton2:'<',
      nivel:'siguiente nivel',
      puntaje:0,
    }

    var opera= new Array('>','<');///se crea un arreglo de 2 valores para decidir si se va usar mayor que o menor que aleatoriamente
    const randomop = Math.floor(Math.random() * opera.length)+1;

    this.handlemayor=this.handlemayor.bind(this);
    this.handlemenor=this.handlemenor.bind(this);
    this.handlenivel=this.handlenivel.bind(this);

  }
  handlemayor(){//////metodo para mayor que
         if (this.state.operacion1>=this.state.operacion2) ///si numero 1 es mayor que numero 2 entonces es opcion correcta
         {
           this.setState({
           subtitle:'Opcion correcta'})

         }
         if (this.state.operacion1<this.state.operacion2)///si numero 2 es mayor que numero 1 entonces es opcion incorrecta y restan 10 puntos
         {
           this.setState({
           subtitle:'Opcion incorrecta'})
           this.setState({puntaje: this.state.puntaje-10})

         }
   }

   handlemenor(){//////metodo para menor que
          if (this.state.operacion1<=this.state.operacion2) {///si numero 1 es mayor que numero 2 entonces es opcion correcta
            this.setState({
            subtitle:'Opcion correcta'})

          }
          if (this.state.operacion1>this.state.operacion2)///si numero 2 es mayor que numero 1 entonces es opcion incorrecta y restan 10 puntos
          {
            this.setState({
            subtitle:'Opcion incorrecta'})
            this.setState({puntaje: this.state.puntaje-10})

          }
    }

      handlenivel(){//////////metodo para cambiar de nivel
        if (this.state.subtitle=='Opcion correcta') {////si el subtitulo es opcion correcta sube un nivel
          this.setState({nivell: this.state.nivell+1})
          if (this.state.nivell==5) {//////////cuando el nivel sea 5 o mas se oculta el nivel 2 y se muestra el nivel 3
            document.getElementById("nivel2").style.display = "none";
            document.getElementById("nivel3").style.display = "inherit";
            document.getElementById("imagen1").style.display="inherit"

          }
          /////////////se crean nuevos valores aleatorios y se reinicia el subtitulo
          this.setState({
          operacion1:Math.floor(Math.random()*20)+10,
          operacion2:Math.floor(Math.random()*20)+10,})
          this.setState({
          subtitle:'Selecciona la opcion logica'})

          this.setState({puntaje: this.state.puntaje+10})
          localStorage.setItem("puntaje",this.state.puntaje);

        };

       }

render(){
  return(
    <div>
    <div id = "nivel2" className="container">
    <h1 className="header">{this.state.Title} {this.state.nivell}</h1>
    <p  className="header__subtitle">{this.state.subtitle}</p>
    <p id='op1'>{this.state.operacion1}</p>
    <p id='op2'>{this.state.operacion2}</p>
    <p>Puntaje: {localStorage.getItem('puntaje')}</p>
  <div className="containerbutton">
    <button className="button" onClick={this.handlemayor}> {this.state.boton1}</button>
    <button className="button" onClick={this.handlemenor}> {this.state.boton2}</button>

  </div>
    <button className="big-button" onClick={this.handlenivel} id='ocultar'> {this.state.nivel}</button>
    </div>

    </div>

  )
};
}
