import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';///importacion para el modal

var uno = 1; //valor que se utilizara como bandera

const customStyles = {///////////////Estilos del modal que se usara para el puntaje
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-10%',
    transform             : 'translate(-50%, -50%)'
  }
};
/////clase principal del nivel 3
export default class Nivel3 extends React.Component{

  constructor(props){
    super(props);
    this.state={
      Title:'Nivel',
      nivell:1,
      subtitle:'Selecciona la opcion logica',
      boton1:'3/5', //respuestas correctas de este nivel
      boton2:'4/8',
      boton3:'1/3',
      nivel:'siguiente nivel',
      puntaje:0,
      modalIsOpen:false,  //modal cerrado
    }

    this.handleop1=this.handleop1.bind(this);
    this.handleop2=this.handleop2.bind(this);
    this.handleop3=this.handleop3.bind(this);
    this.handlenivel=this.handlenivel.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  openModal() {
    this.setState({modalIsOpen: true}); ////funcion para abrir el modal
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00'; ///color del subtitulo del modal
  }

  closeModal() {
    this.setState({modalIsOpen: false}); ///funcion para cerrar el modal
  }

  handleop1(){  ///metodo para la opcion  correcta del primer subnivel
         if (uno==1) {
           this.setState({
           subtitle:'Opcion correcta'})
           var imagen1 = document.getElementById("imagen1").style.display="none"
           uno=2  //la bandera cambia a 2 para el siguiente subnivel

         }
   }

   handleop2(){///metodo para la opcion  correcta del segundo subnivel
          if (uno==2) {
            this.setState({
            subtitle:'Opcion correcta'})
            var imagen2 = document.getElementById("imagen2").style.display="none"
            uno=3   //la bandera cambia a 3 para el siguiente subnivel

          }

    }

    handleop3(){///metodo para la opcion  correcta del tercer subnivel
           if (uno==3) {
             this.setState({
             subtitle:'Opcion correcta'})
             var imagen3 = document.getElementById("imagen3").style.display="none"
             uno=4  ///la bandera para

           }
     }
     ///////////////metodo para cambiar de subnivel al siguiente
      handlenivel(){
        if (this.state.subtitle=='Opcion correcta') {
          if (uno==2) {
            var imagen2 = document.getElementById("imagen2").style.display="inherit"

          }
          if (uno==3) {
            var imagen3 = document.getElementById("imagen3").style.display="inherit"
          }
          this.setState({nivell: this.state.nivell+1}) ///sumar un nivel cada vez
          if (this.state.nivell==3) { ///////////////////cuando el nivel sea 3 y final se abrira el modal
            this.setState({modalIsOpen: true});
            /////con los puntajes finales
            var puntajefinal = document.getElementById("puntajeN4").style.display="none"
            var puntajefinal1 = document.getElementById("puntajeN3").style.display="inherit"
            ////////////////////////test
            this.setState({
            nivell:''})
            this.setState({
            subtitle:''})
            this.setState({
            nivel:'Juego terminado'})//////////termina el juego
          }

          ///////////se reinicia el subtitulo
          this.setState({
          subtitle:'Selecciona la opcion logica'})
          ////////se suman 10 puntos
          this.setState({puntaje: this.state.puntaje+10})
          ////se guarda el puntaje localmente
          localStorage.setItem("puntaje",this.state.puntaje);

        };

       }

render(){
  return(

    <div>
    <div id="modal">
    <button id="modal1" className="button" onClick={this.openModal}>PICALE PARA ALGO CHIDO</button>
    <Modal
    isOpen={this.state.modalIsOpen}
    onAfterOpen={this.afterOpenModal}
    onRequestClose={this.closeModal}
    style={customStyles}
    className="modalback" contentLabel="Puntaje"
    >

    <h2  className="modal__body" ref={subtitle => this.subtitle = subtitle}>PUNTAJE FINAL</h2>
    <div className="header__title" >{this.state.puntaje+this.state.puntaje+this.state.puntaje+this.state.puntaje}
    <div id = "imagen4f">
    <img width="200" height="100" src="https://images.emojiterra.com/mozilla/512px/1f3c6.png"></img>
    </div>
    </div>
    <button className="button" onClick={this.closeModal}>Cerrar</button>
    <form>

    </form>
    </Modal>
</div>

    <div id = "nivel3" className="container">
    <h1 className="header">{this.state.Title} {this.state.nivell}</h1>

    <div id = "imagen1">
    <img width="200" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/1280px-3_stars.svg.png"></img>
    </div>
    <div id = "imagen2">
    <img width="200" height="100" src="https://www.helpingwithmath.com/images/fractions/Eighth04.png"></img>
    </div>
    <div id = "imagen3">
    <img width="200" height="100" src="https://qph.fs.quoracdn.net/main-qimg-dc71b5368d1f0a6f5cc3877699f7c8c8"></img>
    </div>

    <p className="header__subtitle" >{this.state.subtitle}</p>
    <p id='op1'>{this.state.operacion1}</p>
    <p id='op2'>{this.state.operacion2}</p>
    <p id="puntajeN4">Puntaje: {this.state.puntaje}</p>
    <p id="puntajeN3">Puntaje Final {this.state.puntaje+this.state.puntaje+this.state.puntaje+this.state.puntaje}</p>
  <div className="containerbutton">
    <button id="boton1" className="button" onClick={this.handleop1}> {this.state.boton1}</button>


    <button className="button"> 5/4</button>
        <button id="boton2" className="button" onClick={this.handleop2}> {this.state.boton2}</button>
    <button className="button"> 6/6</button>
    <button className="button"> 1/6</button>
        <button id="boton3" className="button" onClick={this.handleop3}> {this.state.boton3}</button>
    <button className="button"> 9/3</button>

  </div>
    <button className="big-button" onClick={this.handlenivel} id='ocultar'> {this.state.nivel}</button>
    </div>

    </div>

  )
};
}
